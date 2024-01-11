import {StyleSheet} from 'react-native'

export type PortableTextTheme = {fontColor: string; fontFamily: string}

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

export const getListStylesWithTheme = (theme: PortableTextTheme): typeof listStyles =>
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
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
    },

    bulletListIcon: {
      marginLeft: 10,
      marginRight: 10,
      fontWeight: 'bold',
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
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

export const getTextStylesWithTheme = (theme: PortableTextTheme): typeof textStyles =>
  StyleSheet.create({
    h1: {
      fontWeight: 'bold',
      fontSize: 32,
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
    },

    h2: {
      fontWeight: 'bold',
      fontSize: 24,
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
    },

    h3: {
      fontWeight: 'bold',
      fontSize: 18,
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
    },

    h4: {
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
    },

    h5: {
      fontWeight: 'bold',
      fontSize: 14,
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
    },

    h6: {
      fontWeight: 'bold',
      fontSize: 10,
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
    },

    normal: {
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
    },
    blockquote: {
      color: theme.fontColor,
      fontFamily: theme.fontFamily,
    },
  })

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

export const utilityStyles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
})
