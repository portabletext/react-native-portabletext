import type {PortableTextProps} from '@portabletext/react'
import type {TypedObject, PortableTextBlock} from '@portabletext/types'
import {PortableText as BasePortableText, mergeComponents} from '@portabletext/react'
import {defaultComponents} from './components/defaults'

export function PortableText<B extends TypedObject = PortableTextBlock>(
  props: Omit<PortableTextProps<B>, 'listNestingMode'>,
) {
  return (
    <BasePortableText
      {...props}
      components={mergeComponents(defaultComponents, props.components ?? {})}
    />
  )
}
