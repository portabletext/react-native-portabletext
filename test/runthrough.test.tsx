import {Text, View} from 'react-native'
import {render, screen} from '@testing-library/react-native'

import {PortableText, PortableTextReactComponents} from '../src'
import * as fixtures from './fixtures'

test('never mutates input', () => {
  for (const [key, fixture] of Object.entries(fixtures)) {
    if (key === 'default') {
      continue
    }

    const components: Partial<PortableTextReactComponents> = {
      marks: {highlight: () => <Text />},
      unknownMark: ({children}) => <Text>{children}</Text>,
      unknownType: ({children}) => <View>{children}</View>,
    }
    const originalInput = JSON.parse(JSON.stringify(fixture.input))
    const passedInput = fixture.input
    render(<PortableText value={passedInput} components={components} />)
    expect(screen.toJSON()).toMatchSnapshot(key)

    // Should not mutate the input
    expect(originalInput).toMatchObject(passedInput)
  }
})
