---
"@portabletext/react-native": major
---

Nested lists are no longer rendered inside the list item above them

#### When you will see a difference

Any content with a nested list is affected, not only unusual content. If you use the default list components and have not replaced `list` or `listItem`, the visible result should look the same or better, and the only change you may notice is that stray bullets disappear.

#### What changes

Lists were nested the way HTML needs them to be, where a deeper list has to live inside a list item because HTML cannot put a list directly inside a list. React Native has no such restriction, so this rendered a `View` inside the `Text` of the list item above it.

A deeper list is now nested straight inside its parent list, as a sibling of the list item above it rather than inside it.

The old shape, for a list with one nested item under it:

```jsx
<View>            {/* the list */}
  <View>          {/* the list item */}
    <Text>
      Item
      <View>      {/* the nested list, inside the item's Text */}
        ...
      </View>
    </Text>
  </View>
</View>
```

The new shape:

```jsx
<View>            {/* the list */}
  <View>          {/* the list item */}
    <Text>Item</Text>
  </View>
  <View>          {/* the nested list, a sibling of the item */}
    ...
  </View>
</View>
```

It also fixes stray markers. A list that starts at level 3, or that jumps from level 1 to level 3, has levels that nobody authored. Those used to be filled with an empty list item, which drew a bullet or a number next to nothing. They are now filled with a bare list, which indents without drawing a marker.

#### What you may need to do

Nothing, if you use the default components.

If you have supplied your own `listItem` component and it expects a nested list among its children, it will no longer receive one. Move that handling to your `list` component, which now receives nested lists as children alongside the list items.

Snapshot tests covering nested lists will need updating.

`value.level` is unchanged and still matches how deeply the list is nested, so components that indent by `level` keep working.
