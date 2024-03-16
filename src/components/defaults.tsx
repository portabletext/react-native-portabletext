import {Text} from 'react-native'
import type {PortableTextReactComponents} from '@portabletext/react'

import {defaultMarks} from './marks'
import {defaultBlockStyles} from './block'
import {DefaultList, defaultListItems} from './list'
import {
  DefaultUnknownType,
  DefaultUnknownMark,
  DefaultUnknownList,
  DefaultUnknownListItem,
  DefaultUnknownBlockStyle,
} from './unknown'

export const DefaultHardBreak = () => <Text>{'\n'}</Text>

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
