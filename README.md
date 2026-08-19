# @portabletext/react-native

Render [Portable Text](https://portabletext.org/) with React Native.

Uses [@portabletext/react](https://github.com/portabletext/react-portabletext) under the hood, and has the same API (except `listNestingMode`, which this package's `PortableText` does not accept), but renders React Native views instead of HTML.

## Installation

```
npm install --save @portabletext/react-native
```

## Basic usage

```js
import {PortableText} from '@portabletext/react-native'

<PortableText
  value={[/* array of portable text blocks */]}
  components={/* optional object of custom components to use */}
/>
```

## Styling the output

The rendered views has very little or no styling applied, so you will quite often want to pass [custom components](#customizing-components) to override the built-in ones.

## Customizing components

Customizing components are done in the same way as in [@portabletext/react](https://github.com/portabletext/react-portabletext#customizing-components) - see the [README](https://github.com/portabletext/react-portabletext#customizing-components) for more details.

## License

MIT © [Sanity.io](https://www.sanity.io/)
