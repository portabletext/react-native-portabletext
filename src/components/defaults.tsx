import type {PortableTextReactComponents} from '@portabletext/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import {Text} from 'react-native'

import {defaultBlockStyles} from './block'
import {DefaultList, defaultListItems} from './list'
import {defaultMarks} from './marks'
import {
  DefaultUnknownBlockStyle,
  DefaultUnknownList,
  DefaultUnknownListItem,
  DefaultUnknownMark,
  DefaultUnknownType,
} from './unknown'

export const DefaultHardBreak = (): React.JSX.Element => <Text>{'\n'}</Text>

export const defaultComponents: PortableTextReactComponents = {
  types: {},

  block: defaultBlockStyles,
  marks: defaultMarks,
  list: DefaultList,
  listItem: defaultListItems,
  hardBreak: DefaultHardBreak,

  unknownType: DefaultUnknownType,
  unknownMark: DefaultUnknownMark,
  unknownList: DefaultUnknownList,
  unknownListItem: DefaultUnknownListItem,
  unknownBlockStyle: DefaultUnknownBlockStyle,
}
