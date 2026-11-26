import type {ArbitraryTypedObject, PortableTextBlock} from '@portabletext/types'
import {fireEvent, render, screen} from '@testing-library/react-native'
import {Linking, Text} from 'react-native'

import {
  PortableText,
  PortableTextBlockComponent,
  PortableTextMarkComponent,
  PortableTextMarkComponentProps,
  PortableTextTypeComponent,
  PortableTextTypeComponentProps,
} from '../src'
import linkMarkDef from './fixtures/007-link-mark-def'
import hardBreaks from './fixtures/023-hard-breaks'

afterEach(() => {
  jest.restoreAllMocks()
})

test('pressing a link mark calls Linking.openURL with the mark href', () => {
  // `react-native`'s jest preset mocks `Linking.openURL` as a persistent `jest.fn`, so `restoreAllMocks`
  // has no real implementation to fall back to and the previous test's call history survives.
  const openURL = jest.spyOn(Linking, 'openURL').mockClear().mockResolvedValue(true)

  render(<PortableText value={linkMarkDef.input} />)
  fireEvent.press(screen.getByText('Sanity'))

  expect(openURL).toHaveBeenCalledTimes(1)
  expect(openURL).toHaveBeenCalledWith('https://sanity.io/')
})

test('pressing a link mark without an href does not call Linking.openURL', () => {
  const openURL = jest.spyOn(Linking, 'openURL').mockClear().mockResolvedValue(true)
  const block: PortableTextBlock = {
    _key: 'a',
    _type: 'block',
    style: 'normal',
    markDefs: [{_key: 'b', _type: 'link'}],
    children: [{_key: 'c', _type: 'span', marks: ['b'], text: 'Sanity'}],
  }

  render(<PortableText value={block} />)
  fireEvent.press(screen.getByText('Sanity'))

  expect(openURL).not.toHaveBeenCalled()
})

test('a custom mark merges with the default marks by key', () => {
  const CustomStrong: PortableTextMarkComponent = ({children}) => (
    <Text testID="custom-strong">{children}</Text>
  )
  const block: PortableTextBlock = {
    _key: 'a',
    _type: 'block',
    style: 'normal',
    markDefs: [],
    children: [
      {_key: 'b', _type: 'span', marks: ['strong'], text: 'Sanity'},
      {_key: 'c', _type: 'span', marks: ['em'], text: 'is addictive'},
    ],
  }

  render(<PortableText value={block} components={{marks: {strong: CustomStrong}}} />)

  expect(screen.getByTestId('custom-strong')).toBeTruthy()
  expect(screen.getByText('is addictive')).toHaveStyle({fontStyle: 'italic'})
})

test('a mark component receives markType, text, markKey, value, and children', () => {
  const capturedProps: PortableTextMarkComponentProps[] = []
  const CaptureMark: PortableTextMarkComponent = (props) => {
    capturedProps.push(props)
    return <Text>{props.children}</Text>
  }

  render(<PortableText value={linkMarkDef.input} components={{marks: {link: CaptureMark}}} />)

  expect(capturedProps[0]?.markType).toBe('link')
  expect(capturedProps[0]?.markKey).toBe('someLinkId')
  expect(capturedProps[0]?.text).toBe('Sanity')
  expect(capturedProps[0]?.value).toEqual({
    _type: 'link',
    _key: 'someLinkId',
    href: 'https://sanity.io/',
  })
  expect(screen.getByText('Sanity')).toBeTruthy()
})

test('a custom type component receives value, index, and isInline but no children', () => {
  const capturedProps: PortableTextTypeComponentProps<ArbitraryTypedObject>[] = []
  const CaptureType: PortableTextTypeComponent = (props) => {
    capturedProps.push(props)
    return <Text />
  }
  const value: ArbitraryTypedObject = {_key: 'a', _type: 'custom', label: 'Sanity'}

  render(<PortableText value={[value]} components={{types: {custom: CaptureType}}} />)

  expect({
    value: capturedProps[0]?.value,
    index: capturedProps[0]?.index,
    isInline: capturedProps[0]?.isInline,
  }).toEqual({value, index: 0, isInline: false})
  expect(capturedProps[0]).not.toHaveProperty('children')
})

test('a function-valued block override replaces the whole category, bypassing per-style defaults', () => {
  const FunctionBlock: PortableTextBlockComponent = ({children}) => (
    <Text testID="function-block">{children}</Text>
  )
  const blocks: PortableTextBlock[] = [
    {
      _key: 'a',
      _type: 'block',
      style: 'h1',
      markDefs: [],
      children: [{_key: 'b', _type: 'span', marks: [], text: 'Sanity'}],
    },
    {
      _key: 'c',
      _type: 'block',
      style: 'normal',
      markDefs: [],
      children: [{_key: 'd', _type: 'span', marks: [], text: 'is addictive'}],
    },
  ]

  render(<PortableText value={blocks} components={{block: FunctionBlock}} />)

  expect(screen.getAllByTestId('function-block')).toHaveLength(2)
})

test('hard breaks render as newlines within the block text content', () => {
  render(<PortableText value={hardBreaks.input} />)

  expect(screen.getByText('A paragraph\ncan have hard\n\nbreaks.')).toBeTruthy()
})

test('an h1 block renders with the h1 text style', () => {
  const blocks: PortableTextBlock[] = [
    {
      _key: 'a',
      _type: 'block',
      style: 'h1',
      markDefs: [],
      children: [{_key: 'b', _type: 'span', marks: [], text: 'Sanity'}],
    },
  ]

  render(<PortableText value={blocks} />)

  const text = screen.getByText('Sanity')
  expect(text).toHaveStyle({fontWeight: 'bold', fontSize: 32})
  // `Text`'s host node sits under a composite `Text` wrapper, so the host `View` is two parents up.
  expect(text.parent?.parent).toHaveStyle({marginVertical: 22})
})

test('an unknown block type renders the default fallback text', () => {
  jest.spyOn(console, 'warn').mockReturnValue(undefined)
  const value = {_key: 'a', _type: 'mystery'}

  render(<PortableText value={value} />)

  const text = screen.getByText(
    'Unknown block type "mystery", specify a component for it in the `components.types` prop',
    {hidden: true},
  )
  expect(text).toBeTruthy()
  expect(text).toHaveStyle({display: 'none'})
})
