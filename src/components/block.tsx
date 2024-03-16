import React from 'react'
import {View, Text} from 'react-native'
import type {PortableTextComponent} from '@portabletext/react'
import type {PortableTextBlock, PortableTextBlockStyle} from '@portabletext/types'

import {PortableTextFontTheme, blockStyles, getTextStylesWithTheme, textStyles} from './styles'

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

export const getDefaultBlockWithTheme = (
  theme: PortableTextFontTheme,
): PortableTextComponent<PortableTextBlock> => {
  const textStylesWithTheme = getTextStylesWithTheme(theme)

  const DefaultBlockWithTheme: PortableTextComponent<PortableTextBlock> = ({children, value}) => {
    const style = (value.style || 'normal') as BlockStyleName

    return (
      <View style={blockStyles[style]}>
        <Text style={textStylesWithTheme[style]}>{children}</Text>
      </View>
    )
  }

  return DefaultBlockWithTheme
}

export const defaultBlockStyles: Record<
  PortableTextBlockStyle,
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

export const getDefaultBlockStylesWithTheme = (
  theme: PortableTextFontTheme,
): Record<PortableTextBlockStyle, PortableTextComponent<PortableTextBlock> | undefined> => {
  const defaultBlockWithTheme = getDefaultBlockWithTheme(theme)
  return {
    normal: defaultBlockWithTheme,
    blockquote: defaultBlockWithTheme,
    h1: defaultBlockWithTheme,
    h2: defaultBlockWithTheme,
    h3: defaultBlockWithTheme,
    h4: defaultBlockWithTheme,
    h5: defaultBlockWithTheme,
    h6: defaultBlockWithTheme,
  }
}
