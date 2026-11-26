---
'@portabletext/react-native': major
---

Links with an unsafe `href` are now rendered as plain text instead of being opened with `Linking.openURL`. React Native 0.79 or later is now required, because `@portabletext/toolkit` 6.1 only ships `exports` and Metro resolves package exports by default only from 0.79.
