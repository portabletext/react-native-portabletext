import React from 'react'
import {View, Text} from 'react-native'
import type {PortableTextBlock, PortableTextComponent, BlockStyle} from '@portabletext/react'
import {blockStyles, textStyles} from './styles'

type BlockStyleName = keyof typeof blockStyles

export const DefaultBlock: PortableTextComponent<PortableTextBlock> = ({children, value}) => {
  const style = (value.style || 'normal') as BlockStyleName

  // Wrap in a text element to make children display inline
  return (
    <View style={blockStyles[style]}>
      <Text style={textStyles[style]}>{children}</Text>
    </View>
  )
}

export const defaultBlockStyles: Record<
  BlockStyle,
  PortableTextComponent<PortableTextBlock> | undefined
> = {
  normal: DefaultBlock,
  blockquote: DefaultBlock,
  h1: DefaultBlock,
  h2: DefaultBlock,
  h3: DefaultBlock,
  h4: DefaultBlock,
  h5: DefaultBlock,
  h6: DefaultBlock,
}
