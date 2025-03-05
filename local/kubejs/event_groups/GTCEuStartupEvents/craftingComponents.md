# GTCEuStartupEvents.craftingComponents

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: CraftingComponentsEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| createTag | Map<Number, ResourceLocation> |  | Component | ✘ |
| create | Map<Number, Object> |  | Component | ✘ |
| createItem | Map<Number, ItemStack> |  | Component | ✘ |
| modify | Component, int, Object |  | void | ✘ |
| modify | Component, Map<Number, Object> |  | void | ✘ |
| modifyTag | Component, Map<Number, ResourceLocation> |  | void | ✘ |
| modifyTag | Component, int, ResourceLocation |  | void | ✘ |
| modifyItem | Component, Map<Number, ItemStack> |  | void | ✘ |
| modifyItem | Component, int, ItemStack |  | void | ✘ |
| modifyUnificationEntry | Component, int, UnificationEntry |  | void | ✘ |
| modifyUnificationEntry | Component, Map<Number, UnificationEntry> |  | void | ✘ |
| createUnificationEntry | Map<Number, UnificationEntry> |  | Component | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
GTCEuStartupEvents.craftingComponents((event) => {
	// This space (un)intentionally left blank
});
```

