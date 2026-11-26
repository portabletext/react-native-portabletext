import type {PortableTextReactComponents} from '@portabletext/react'
import {Text, View} from 'react-native'

import {DefaultBlock} from './block'
import {defaultListItems} from './list'
import {utilityStyles} from './styles'

const DefaultListItem = defaultListItems.bullet || View

export const DefaultUnknownType: PortableTextReactComponents['unknownType'] = ({value}) => {
  const warning = `Unknown block type "${value._type}", specify a component for it in the \`components.types\` prop`

  return <Text style={utilityStyles.hidden}>{warning}</Text>
}

export const DefaultUnknownMark: PortableTextReactComponents['unknownMark'] = ({children}) => {
  return <Text>{children}</Text>
}

export const DefaultUnknownBlockStyle: PortableTextReactComponents['unknownBlockStyle'] = ({
  value,
  ...props
}) => {
  return <DefaultBlock {...props} value={{...value, style: 'normal'}} />
}

// This shouldn't ever happen, since we're overriding the main `List` component,
// but leaving it here for posterity (and because the types _require_ one right now)
export const DefaultUnknownList: PortableTextReactComponents['unknownList'] = ({children}) => {
  return <View>{children}</View>
}

export const DefaultUnknownListItem: PortableTextReactComponents['unknownListItem'] = ({
  value,
  ...props
}) => {
  return <DefaultListItem {...props} value={{...value, style: 'bullet'}} />
}
