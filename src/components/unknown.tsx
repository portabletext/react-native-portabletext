import React from 'react'
import {Text, View} from 'react-native'
import type {PortableTextReactComponents} from '@portabletext/react'
import {DefaultBlock} from './block'
import {utilityStyles} from './styles'
import {defaultListItems} from './list'

const DefaultListItem = defaultListItems.bullet || View

export const DefaultUnknownType: PortableTextReactComponents['unknownType'] = ({value}) => {
  const warning = `Unknown block type "${value._type}", specify a component for it in the \`components.types\` prop`

  // eslint-disable-next-line no-console
  console.warn(warning)

  return <Text style={utilityStyles.hidden}>{warning}</Text>
}

export const DefaultUnknownMark: PortableTextReactComponents['unknownMark'] = ({
  markType,
  children,
}) => {
  // eslint-disable-next-line no-console
  console.warn(
    `Unknown mark type "${markType}", please specify a component for it in the \`components.marks\` prop`,
  )

  return <Text>{children}</Text>
}

export const DefaultUnknownBlockStyle: PortableTextReactComponents['unknownBlockStyle'] = ({
  value,
  ...props
}) => {
  const style = value.style || 'normal'
  // eslint-disable-next-line no-console
  console.warn(
    `Unknown block style "${style}", please specify a component for it in the \`components.block\` prop`,
  )

  return <DefaultBlock {...props} value={{...value, style: 'normal'}} />
}

// This shouldn't ever happen, since we're overriding the main `List` component,
// but leaving it here for posterity (and because the types _require_ one right now)
export const DefaultUnknownList: PortableTextReactComponents['unknownList'] = ({
  children,
  value,
}) => {
  // eslint-disable-next-line no-console
  console.warn(
    `Unknown list style "${
      value.listItem || 'bullet'
    }", please specify a component for it in the \`components.list\` prop`,
  )

  return <View>{children}</View>
}

export const DefaultUnknownListItem: PortableTextReactComponents['unknownListItem'] = ({
  value,
  ...props
}) => {
  const style = value.listItem || 'bullet'
  // eslint-disable-next-line no-console
  console.warn(
    `Unknown list item style "${style}", please specify a component for it in the \`components.list\` prop`,
  )

  return <DefaultListItem {...props} value={{...value, style: 'bullet'}} />
}
