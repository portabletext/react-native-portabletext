import React from 'react'
import {Text} from 'react-native'
import type {PortableTextReactComponents} from '@portabletext/react'

import {defaultMarks, getDefaultMarksWithTheme} from './marks'
import {defaultBlockStyles, getDefaultBlockStylesWithTheme} from './block'
import {DefaultList, defaultListItems, getDefaultListItemsWithTheme} from './list'
import {
  DefaultUnknownType,
  DefaultUnknownMark,
  DefaultUnknownList,
  DefaultUnknownListItem,
  DefaultUnknownBlockStyle,
} from './unknown'
import {PortableTextFontTheme} from './styles'

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
  theme: PortableTextFontTheme,
): PortableTextReactComponents => {
  return {
    types: {},

    block: getDefaultBlockStylesWithTheme(theme),
    marks: getDefaultMarksWithTheme(theme),
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
