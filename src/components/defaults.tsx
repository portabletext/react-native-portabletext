import React from 'react'
import {Text} from 'react-native'
import type {PortableTextReactComponents} from '@portabletext/react'

import {defaultMarks} from './marks'
import {defaultBlockStyles, getDefaultBlockStylesWithTheme} from './block'
import {DefaultList, defaultListItems, getDefaultListItemsWithTheme} from './list'
import {
  DefaultUnknownType,
  DefaultUnknownMark,
  DefaultUnknownList,
  DefaultUnknownListItem,
  DefaultUnknownBlockStyle,
} from './unknown'
import {PortableTextTheme} from './styles'

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

export const getDefaultComponentsWithTheme = (
  theme: PortableTextTheme,
): PortableTextReactComponents => {
  return {
    types: {},

    block: getDefaultBlockStylesWithTheme(theme),
    marks: defaultMarks,
    list: DefaultList,
    listItem: getDefaultListItemsWithTheme(theme),
    hardBreak: DefaultHardBreak,

    unknownType: DefaultUnknownType,
    unknownMark: DefaultUnknownMark,
    unknownList: DefaultUnknownList,
    unknownListItem: DefaultUnknownListItem,
    unknownBlockStyle: DefaultUnknownBlockStyle,
  }
}
