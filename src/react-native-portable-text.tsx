import type {PortableTextProps} from '@portabletext/react'
import {mergeComponents, PortableText as BasePortableText} from '@portabletext/react'
import type {PortableTextBlock, TypedObject} from '@portabletext/types'
import React from 'react'

import {defaultComponents} from './components/defaults'

export type * from '@portabletext/react'

export function PortableText<B extends TypedObject = PortableTextBlock>(
  props: Omit<PortableTextProps<B>, 'listNestingMode'>,
): React.JSX.Element {
  return (
    <BasePortableText
      {...props}
      components={mergeComponents(defaultComponents, props.components ?? {})}
    />
  )
}
