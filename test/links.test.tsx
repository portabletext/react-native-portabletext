/* eslint-disable no-script-url */
import {fireEvent, render, screen} from '@testing-library/react-native'
import {Linking} from 'react-native'

import {PortableText} from '../src'

async function renderLink(href: string) {
  await render(
    <PortableText
      value={[
        {
          _type: 'block',
          _key: 'block',
          style: 'normal',
          markDefs: [{_type: 'link', _key: 'link', href}],
          children: [{_type: 'span', _key: 'span', text: 'link text', marks: ['link']}],
        },
      ]}
    />,
  )
  return screen.getByText('link text')
}

describe('link href', () => {
  let openURL: jest.SpyInstance

  beforeEach(() => {
    openURL = jest.spyOn(Linking, 'openURL').mockResolvedValue(undefined)
  })

  afterEach(() => {
    openURL.mockRestore()
  })

  test.each([
    'https://example.com/',
    'http://example.com/',
    'mailto:hello@example.com',
    'tel:+4712345678',
    '#section',
    '/docs',
    'docs/page',
  ])('opens %s', async (href) => {
    await fireEvent.press(await renderLink(href))
    expect(openURL).toHaveBeenCalledWith(href)
  })

  test.each([
    'javascript:alert(1)',
    'JaVaScRiPt:alert(1)',
    ' javascript:alert(1)',
    'data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==',
    'vbscript:msgbox(1)',
    'file:///etc/passwd',
  ])('does not open %s', async (href) => {
    const text = await renderLink(href)
    expect(text.props.onPress).toBeUndefined()
    await fireEvent.press(text)
    expect(openURL).not.toHaveBeenCalled()
  })
})
