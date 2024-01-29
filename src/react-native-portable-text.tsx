import React from 'react'
import type {PortableTextProps} from '@portabletext/react'
import type {TypedObject, PortableTextBlock} from '@portabletext/types'
import {PortableText as BasePortableText, mergeComponents} from '@portabletext/react'
import {defaultComponents, getDefaultComponentsWithTheme} from './components/defaults'
import {PortableTextFontTheme} from './components/styles'

export function PortableText<B extends TypedObject = PortableTextBlock>(
  props: Omit<PortableTextProps<B>, 'listNestingMode'> & {theme?: PortableTextFontTheme},
) {
  const components = props.theme ? getDefaultComponentsWithTheme(props.theme) : defaultComponents
  return (
    <BasePortableText {...props} components={mergeComponents(components, props.components ?? {})} />
  )
}
