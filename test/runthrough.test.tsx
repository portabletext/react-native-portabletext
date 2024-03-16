// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import {Text, View} from 'react-native'
import renderer from 'react-test-renderer'
import {expect, test} from 'vitest'

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
    const tree = renderer
      .create(<PortableText value={passedInput} components={components} />)
      .toJSON()

    expect(tree).toMatchSnapshot(key)

    // Should not mutate the input
    expect(originalInput).toMatchObject(passedInput)
  }
})
