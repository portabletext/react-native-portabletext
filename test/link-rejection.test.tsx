import {fireEvent, render, screen} from '@testing-library/react-native'
import {Linking} from 'react-native'

import {PortableText} from '../src'
import linkMarkDef from './fixtures/007-link-mark-def'

test('resolves instead of rejecting when Linking.openURL has no handler', async () => {
  const openURLSpy = jest.spyOn(Linking, 'openURL').mockRejectedValue(new Error('no handler'))
  openURLSpy.mockClear()

  render(<PortableText value={linkMarkDef.input} />)
  const linkText = screen.getByText('Sanity')

  await expect(fireEvent.press(linkText)).resolves.toBeUndefined()

  expect(openURLSpy).toHaveBeenCalledTimes(1)
  expect(openURLSpy).toHaveBeenCalledWith('https://sanity.io/')
})
