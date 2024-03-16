import {useCallback} from 'react'
import {Text, Linking} from 'react-native'
import type {PortableTextMarkComponent} from '@portabletext/react'
import type {TypedObject} from '@portabletext/types'
import {markStyles} from './styles'

interface DefaultLink extends TypedObject {
  _type: 'link'
  href: string
}

const link: PortableTextMarkComponent<DefaultLink> = ({children, value}) => {
  const href = value?.href
  const onPress = useCallback(() => (href ? Linking.openURL(href) : undefined), [href])

  return (
    <Text onPress={onPress} style={markStyles.link}>
      {children}
    </Text>
  )
}

export const defaultMarks: Record<string, PortableTextMarkComponent | undefined> = {
  em: ({children}) => <Text style={markStyles.em}>{children}</Text>,
  strong: ({children}) => <Text style={markStyles.strong}>{children}</Text>,
  code: ({children}) => <Text style={markStyles.code}>{children}</Text>,
  underline: ({children}) => <Text style={markStyles.underline}>{children}</Text>,
  'strike-through': ({children}) => <Text style={markStyles.strikeThrough}>{children}</Text>,
  link,
}
