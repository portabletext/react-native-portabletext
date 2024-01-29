import React from 'react'
import {View, Text} from 'react-native'
import type {PortableTextListComponent, PortableTextListItemComponent} from '@portabletext/react'
import type {PortableTextListItemType} from '@portabletext/types'

import {PortableTextFontTheme, getListStylesWithTheme, listStyles} from './styles'

export const DefaultList: PortableTextListComponent = ({value, children}) => {
  const base = value.level > 1 ? listStyles.listDeep : listStyles.list
  const padding = {paddingLeft: 16 * value.level}
  return <View style={[base, padding]}>{children}</View>
}

export const defaultListItems: Record<
  PortableTextListItemType,
  PortableTextListItemComponent | undefined
> = {
  bullet: ({children}) => (
    <View style={listStyles.listItemWrapper}>
      <Text style={listStyles.bulletListIcon}>{'\u00B7'}</Text>
      <Text style={listStyles.listItem}>{children}</Text>
    </View>
  ),
  number: ({children, index}) => (
    <View style={listStyles.listItemWrapper}>
      <Text style={listStyles.bulletListIcon}>{index + 1}. </Text>
      <Text style={listStyles.listItem}>{children}</Text>
    </View>
  ),
}

export const getDefaultListItemsWithTheme = (
  theme: PortableTextFontTheme,
): Record<PortableTextListItemType, PortableTextListItemComponent | undefined> => {
  const listStylesWithTheme = getListStylesWithTheme(theme)

  const defaultListItemsWithTheme: Record<
    PortableTextListItemType,
    PortableTextListItemComponent | undefined
  > = {
    bullet: ({children}) => (
      <View style={listStylesWithTheme.listItemWrapper}>
        <Text style={listStylesWithTheme.bulletListIcon}>{'\u00B7'}</Text>
        <Text style={listStylesWithTheme.listItem}>{children}</Text>
      </View>
    ),
    number: ({children, index}) => (
      <View style={listStylesWithTheme.listItemWrapper}>
        <Text style={listStylesWithTheme.bulletListIcon}>{index + 1}. </Text>
        <Text style={listStylesWithTheme.listItem}>{children}</Text>
      </View>
    ),
  }

  return defaultListItemsWithTheme
}
