import {StyleSheet, TextStyle} from 'react-native'

type LinkTheme = Record<'link', {color: string}>

type StrongTheme = Record<'strong', {fontWeight: TextStyle['fontWeight']; fontFamily: string}>

type CodeTheme = Record<'code', {backgroundColor: string; color: string}>

export type PortableTextFontTheme = Record<
  keyof typeof blockStyles | 'bulletListIcon' | 'listItem',
  {
    fontWeight?: TextStyle['fontWeight']
    fontSize?: number
    color?: string
    fontFamily?: string
    lineHeight?: number
  }
> &
  LinkTheme &
  StrongTheme &
  CodeTheme

export const blockStyles = StyleSheet.create({
  normal: {marginBottom: 16},

  blockquote: {
    paddingHorizontal: 14,
    borderLeftWidth: 3.5,
    borderLeftColor: '#dfe2e5',
    marginBottom: 16,
  },

  h1: {marginVertical: 22},
  h2: {marginVertical: 20},
  h3: {marginVertical: 18},
  h4: {marginVertical: 18},
  h5: {marginVertical: 18},
  h6: {marginVertical: 18},
})

export const listStyles = StyleSheet.create({
  list: {
    marginVertical: 16,
  },

  listDeep: {
    marginVertical: 0,
  },

  listItem: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  bulletListIcon: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
  },

  listItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
})

export const getListStylesWithTheme = (theme: PortableTextFontTheme) =>
  StyleSheet.create({
    list: {
      marginVertical: 16,
    },

    listDeep: {
      marginVertical: 0,
    },

    listItem: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      fontSize: theme.listItem.fontSize,
      fontWeight: theme.listItem.fontWeight,
      color: theme.listItem.color,
      fontFamily: theme.listItem.fontFamily,
      lineHeight: theme.listItem.lineHeight,
    },

    bulletListIcon: {
      marginLeft: 10,
      marginRight: 10,
      fontSize: theme.bulletListIcon.fontSize,
      fontWeight: theme.bulletListIcon.fontWeight,
      color: theme.bulletListIcon.color,
      fontFamily: theme.bulletListIcon.fontFamily,
      lineHeight: theme.bulletListIcon.lineHeight,
    },

    listItemWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
  })

export const textStyles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 32,
  },

  h2: {
    fontWeight: 'bold',
    fontSize: 24,
  },

  h3: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  h4: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  h5: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  h6: {
    fontWeight: 'bold',
    fontSize: 10,
  },

  normal: {},
  blockquote: {},
})

export const getTextStylesWithTheme = (theme: PortableTextFontTheme) => {
  return StyleSheet.create(theme)
}

export const markStyles = StyleSheet.create({
  strong: {
    fontWeight: 'bold',
  },

  em: {
    fontStyle: 'italic',
  },

  link: {
    textDecorationLine: 'underline',
  },

  underline: {
    textDecorationLine: 'underline',
  },

  strikeThrough: {
    textDecorationLine: 'line-through',
  },

  code: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(27, 31, 35, 0.05)',
    color: '#24292e',
  },
})

export const getMarkStylesWithTheme = (theme: PortableTextFontTheme) => {
  return StyleSheet.create({
    strong: {
      fontWeight: theme.strong.fontWeight,
      fontFamily: theme.strong.fontFamily,
    },

    em: {
      fontStyle: 'italic',
    },

    link: {
      textDecorationLine: 'underline',
      color: theme.link.color,
    },

    underline: {
      textDecorationLine: 'underline',
    },

    strikeThrough: {
      textDecorationLine: 'line-through',
    },

    code: {
      paddingVertical: 3,
      paddingHorizontal: 5,
      backgroundColor: theme.code.backgroundColor,
      color: theme.code.color,
    },
  })
}

export const utilityStyles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
})
