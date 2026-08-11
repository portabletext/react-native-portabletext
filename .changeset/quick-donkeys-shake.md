---
"@portabletext/react-native": major
---

Render lists using `direct` nesting mode

Lists were nested the way HTML needs them to be, where a deeper list has to live inside a list
item because HTML cannot put a list directly inside a list. React Native has no such restriction,
so this rendered a `View` inside the `Text` of the list item above it, and any level that was
skipped in the source showed up as a list item with a bullet or number but no content.

`direct` mode nests a deeper list straight inside its parent list instead, so nested lists are no
longer wrapped in the preceding list item, and generated levels indent without drawing a marker.
