import React from 'react'
import type {TypedObject, PortableTextBlock, PortableTextProps} from '@portabletext/react'
import {PortableText as BasePortableText, PortableTextComponentsProvider} from '@portabletext/react'
import {defaultComponents} from './components/defaults'

export function PortableText<B extends TypedObject = PortableTextBlock>(
  props: Omit<PortableTextProps<B>, 'listNestingMode'>
) {
  return (
    <PortableTextComponentsProvider components={defaultComponents}>
      <BasePortableText {...props} />
    </PortableTextComponentsProvider>
  )
}
