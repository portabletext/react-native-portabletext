import type {PortableTextListComponent, PortableTextListItemComponent} from '@portabletext/react'
import type {PortableTextListItemType} from '@portabletext/types'
import {Text, View} from 'react-native'

import {listStyles} from './styles'

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
