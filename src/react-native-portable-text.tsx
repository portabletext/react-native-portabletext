import React from 'react'
import type {PortableTextProps} from '@portabletext/react'
import type {TypedObject, PortableTextBlock} from '@portabletext/types'
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
