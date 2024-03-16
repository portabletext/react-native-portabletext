import React from 'react'
import {test, expect} from 'vitest'
import {View, Text} from 'react-native'
import renderer from 'react-test-renderer'
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

test('with theme', () => {
  for (const [key, fixture] of Object.entries(fixtures)) {
    if (key === 'default') {
      continue
    }

    const tree = renderer
      .create(
        <PortableText
          value={fixture.input}
          theme={{
            h1: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 32,
              fontWeight: '900',
              lineHeight: 40,
            },
            h2: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 28,
              fontWeight: '800',
              lineHeight: 36,
            },
            h3: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 24,
              fontWeight: '700',
              lineHeight: 32,
            },
            h4: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 24,
            },
            h5: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 20,
            },
            h6: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 14,
              fontWeight: '700',
              lineHeight: 18,
            },
            normal: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 24,
            },
            blockquote: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 24,
            },
            listItem: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 24,
            },
            bulletListIcon: {
              color: 'white',
              fontFamily: 'Arial',
              fontSize: 16,
              fontWeight: '700',
              lineHeight: 24,
            },
            strong: {
              fontFamily: 'Arial',
              fontWeight: '700',
            },
            code: {
              backgroundColor: 'rgba(27, 31, 35, 0.05)',
              color: '#24292e',
            },
            link: {
              color: 'blue',
            },
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot(key)
  }
})
