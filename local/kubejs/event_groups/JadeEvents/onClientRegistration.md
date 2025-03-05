# JadeEvents.onClientRegistration

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: WailaClientRegistrationEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| progress | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, ProgressView> | ✘ |
| block | ResourceLocation, Class<? extends Block> |  | BlockComponentProviderBuilder | ✘ |
| entity | ResourceLocation, Class<? extends Entity> |  | EntityComponentProviderBuilder | ✘ |
| addConfig | ResourceLocation, Enum<?> |  | void | ✘ |
| addConfig | ResourceLocation, String, Predicate<String> |  | void | ✘ |
| addConfig | ResourceLocation, int, int, int, boolean |  | void | ✘ |
| addConfig | ResourceLocation, boolean |  | void | ✘ |
| addConfig | ResourceLocation, float, float, float, boolean |  | void | ✘ |
| energyStorage | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, EnergyView> | ✘ |
| fluidStorage | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, FluidView> | ✘ |
| isClientFeature | ResourceLocation |  | boolean | ✘ |
| createPluginConfigScreen | Screen, String |  | Screen | ✘ |
| addRayTraceCallback | int, JadeRayTraceCallback |  | void | ✘ |
| addRayTraceCallback | JadeRayTraceCallback |  | void | ✘ |
| markAsClientFeature | ResourceLocation |  | void | ✘ |
| markAsServerFeature | ResourceLocation |  | void | ✘ |
| addBeforeRenderCallback | JadeBeforeRenderCallback |  | void | ✘ |
| addBeforeRenderCallback | int, JadeBeforeRenderCallback |  | void | ✘ |
| addRenderBackgroundCallback | int, JadeRenderBackgroundCallback |  | void | ✘ |
| addRenderBackgroundCallback | JadeRenderBackgroundCallback |  | void | ✘ |
| registerEnergyStorageClient | IClientExtensionProvider<CompoundTag, EnergyView> |  | void | ✘ |
| registerBlockComponent | IBlockComponentProvider, Class<? extends Block> |  | void | ✘ |
| registerFluidStorageClient | IClientExtensionProvider<CompoundTag, FluidView> |  | void | ✘ |
| registerProgressClient | IClientExtensionProvider<CompoundTag, ProgressView> |  | void | ✘ |
| registerEntityComponent | IEntityComponentProvider, Class<? extends Entity> |  | void | ✘ |
| addAfterRenderCallback | int, JadeAfterRenderCallback |  | void | ✘ |
| addAfterRenderCallback | JadeAfterRenderCallback |  | void | ✘ |
| registerItemStorageClient | IClientExtensionProvider<ItemStack, ItemView> |  | void | ✘ |
| isShowDetailsPressed |  |  | boolean | ✘ |
| registerCustomEnchantPower | Block, CustomEnchantPower |  | void | ✘ |
| addTooltipCollectedCallback | int, JadeTooltipCollectedCallback |  | void | ✘ |
| addTooltipCollectedCallback | JadeTooltipCollectedCallback |  | void | ✘ |
| addItemModNameCallback | JadeItemModNameCallback |  | void | ✘ |
| addItemModNameCallback | int, JadeItemModNameCallback |  | void | ✘ |
| registerAccessorHandler | Class<T extends Accessor<?>>, Accessor.ClientHandler<T extends Accessor<?>> |  | void | ✘ |
| hideTarget | Block |  | void | ✘ |
| hideTarget | EntityType<?> |  | void | ✘ |
| addConfigListener | ResourceLocation, Consumer<ResourceLocation> |  | void | ✘ |
| blockAccessor |  |  | Builder | ✘ |
| entityAccessor |  |  | Builder | ✘ |
| shouldHide | Entity |  | boolean | ✘ |
| shouldHide | BlockState |  | boolean | ✘ |
| registerBlockIcon | IBlockComponentProvider, Class<? extends Block> |  | void | ✘ |
| shouldPick | Entity |  | boolean | ✘ |
| shouldPick | BlockState |  | boolean | ✘ |
| usePickedResult | EntityType<?> |  | void | ✘ |
| usePickedResult | Block |  | void | ✘ |
| registerEntityIcon | IEntityComponentProvider, Class<? extends Entity> |  | void | ✘ |
| getServerData |  |  | CompoundTag | ✘ |
| maybeLowVisionUser |  |  | boolean | ✘ |
| setServerData | CompoundTag |  | void | ✘ |
| getAccessorHandler | Class<? extends Accessor<?>> |  | Accessor.ClientHandler<Accessor<?>> | ✘ |
| getBlockCamouflage | LevelAccessor, BlockPos |  | ItemStack | ✘ |
| isServerConnected |  |  | boolean | ✘ |
| itemStorage | ResourceLocation |  | ClientExtensionProviderBuilder<ItemStack, ItemView> | ✘ |
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
JadeEvents.onClientRegistration((event) => {
	// This space (un)intentionally left blank
});
```

