import {render} from '@testing-library/react-native'

import {PortableText} from '../src'

afterEach(() => {
  jest.restoreAllMocks()
})

test('unknown block type emits exactly one console.warn', () => {
  const consoleWarnSpy = jest.spyOn(console, 'warn').mockReturnValue(undefined)

  render(<PortableText value={[{_type: 'mysteryType', _key: 'a'}]} />)

  expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
  expect(consoleWarnSpy).toHaveBeenCalledWith(
    '[@portabletext/react] Unknown block type "mysteryType", specify a component for it in the `components.types` prop',
  )
})

test('onMissingComponent={false} emits zero warnings', () => {
  const consoleWarnSpy = jest.spyOn(console, 'warn').mockReturnValue(undefined)

  render(<PortableText value={[{_type: 'mysteryType', _key: 'a'}]} onMissingComponent={false} />)

  expect(consoleWarnSpy).toHaveBeenCalledTimes(0)
})

test('custom onMissingComponent receives the exact message and details', () => {
  const consoleWarnSpy = jest.spyOn(console, 'warn').mockReturnValue(undefined)
  const onMissingComponent = jest.fn()

  render(
    <PortableText
      value={[{_type: 'mysteryType', _key: 'a'}]}
      onMissingComponent={onMissingComponent}
    />,
  )

  expect(onMissingComponent).toHaveBeenCalledTimes(1)
  expect(onMissingComponent.mock.calls[0][0]).toBe(
    '[@portabletext/react] Unknown block type "mysteryType", specify a component for it in the `components.types` prop',
  )
  expect(onMissingComponent.mock.calls[0][1]).toEqual({
    nodeType: 'block',
    type: 'mysteryType',
  })
  expect(consoleWarnSpy).toHaveBeenCalledTimes(0)
})

test('unknown mark type emits exactly one console.warn', () => {
  const consoleWarnSpy = jest.spyOn(console, 'warn').mockReturnValue(undefined)

  render(
    <PortableText
      value={[
        {
          _type: 'block',
          _key: 'a',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'a-span',
              text: 'hello',
              marks: ['mysteryMark'],
            },
          ],
          markDefs: [],
        },
      ]}
    />,
  )

  expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
  expect(consoleWarnSpy).toHaveBeenCalledWith(
    '[@portabletext/react] Unknown mark type "mysteryMark", specify a component for it in the `components.marks` prop',
  )
})

test('unknown list item style emits exactly one console.warn', () => {
  const consoleWarnSpy = jest.spyOn(console, 'warn').mockReturnValue(undefined)

  render(
    <PortableText
      value={[
        {
          _type: 'block',
          _key: 'a',
          style: 'normal',
          listItem: 'square',
          children: [{_type: 'span', _key: 'a-span', text: 'hello', marks: []}],
          markDefs: [],
        },
      ]}
    />,
  )

  expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
  expect(consoleWarnSpy).toHaveBeenCalledWith(
    '[@portabletext/react] Unknown list item style "square", specify a component for it in the `components.listItem` prop',
  )
})

test('unknown block style emits exactly one console.warn', () => {
  const consoleWarnSpy = jest.spyOn(console, 'warn').mockReturnValue(undefined)

  render(
    <PortableText
      value={[
        {
          _type: 'block',
          _key: 'a',
          style: 'mysteryStyle',
          children: [{_type: 'span', _key: 'a-span', text: 'hello', marks: []}],
          markDefs: [],
        },
      ]}
    />,
  )

  expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
  expect(consoleWarnSpy).toHaveBeenCalledWith(
    '[@portabletext/react] Unknown block style "mysteryStyle", specify a component for it in the `components.block` prop',
  )
})
