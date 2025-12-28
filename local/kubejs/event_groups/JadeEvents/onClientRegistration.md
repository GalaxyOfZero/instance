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
| block | ResourceLocation, Class<? extends Block> |  | BlockComponentProviderBuilder | ✘ |
| progress | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, ProgressView> | ✘ |
| registerBlockIcon | IBlockComponentProvider, Class<? extends Block> |  | void | ✘ |
| addConfigListener | ResourceLocation, Consumer<ResourceLocation> |  | void | ✘ |
| registerEntityIcon | IEntityComponentProvider, Class<? extends Entity> |  | void | ✘ |
| entity | ResourceLocation, Class<? extends Entity> |  | EntityComponentProviderBuilder | ✘ |
| registerBlockComponent | IBlockComponentProvider, Class<? extends Block> |  | void | ✘ |
| entityAccessor |  |  | Builder | ✘ |
| shouldHide | Entity |  | boolean | ✘ |
| shouldHide | BlockState |  | boolean | ✘ |
| shouldPick | BlockState |  | boolean | ✘ |
| shouldPick | Entity |  | boolean | ✘ |
| usePickedResult | EntityType<?> |  | void | ✘ |
| usePickedResult | Block |  | void | ✘ |
| hideTarget | Block |  | void | ✘ |
| hideTarget | EntityType<?> |  | void | ✘ |
| isServerConnected |  |  | boolean | ✘ |
| setServerData | CompoundTag |  | void | ✘ |
| getAccessorHandler | Class<? extends Accessor<?>> |  | Accessor.ClientHandler<Accessor<?>> | ✘ |
| maybeLowVisionUser |  |  | boolean | ✘ |
| getBlockCamouflage | LevelAccessor, BlockPos |  | ItemStack | ✘ |
| addRenderBackgroundCallback | JadeRenderBackgroundCallback |  | void | ✘ |
| addRenderBackgroundCallback | int, JadeRenderBackgroundCallback |  | void | ✘ |
| registerEntityComponent | IEntityComponentProvider, Class<? extends Entity> |  | void | ✘ |
| registerItemStorageClient | IClientExtensionProvider<ItemStack, ItemView> |  | void | ✘ |
| addAfterRenderCallback | JadeAfterRenderCallback |  | void | ✘ |
| addAfterRenderCallback | int, JadeAfterRenderCallback |  | void | ✘ |
| addRayTraceCallback | JadeRayTraceCallback |  | void | ✘ |
| addRayTraceCallback | int, JadeRayTraceCallback |  | void | ✘ |
| addItemModNameCallback | JadeItemModNameCallback |  | void | ✘ |
| addItemModNameCallback | int, JadeItemModNameCallback |  | void | ✘ |
| registerFluidStorageClient | IClientExtensionProvider<CompoundTag, FluidView> |  | void | ✘ |
| addBeforeRenderCallback | int, JadeBeforeRenderCallback |  | void | ✘ |
| addBeforeRenderCallback | JadeBeforeRenderCallback |  | void | ✘ |
| addTooltipCollectedCallback | int, JadeTooltipCollectedCallback |  | void | ✘ |
| addTooltipCollectedCallback | JadeTooltipCollectedCallback |  | void | ✘ |
| registerEnergyStorageClient | IClientExtensionProvider<CompoundTag, EnergyView> |  | void | ✘ |
| registerProgressClient | IClientExtensionProvider<CompoundTag, ProgressView> |  | void | ✘ |
| markAsClientFeature | ResourceLocation |  | void | ✘ |
| isShowDetailsPressed |  |  | boolean | ✘ |
| registerAccessorHandler | Class<T extends Accessor<?>>, Accessor.ClientHandler<T extends Accessor<?>> |  | void | ✘ |
| markAsServerFeature | ResourceLocation |  | void | ✘ |
| registerCustomEnchantPower | Block, CustomEnchantPower |  | void | ✘ |
| createPluginConfigScreen | Screen, String |  | Screen | ✘ |
| addConfig | ResourceLocation, float, float, float, boolean |  | void | ✘ |
| addConfig | ResourceLocation, String, Predicate<String> |  | void | ✘ |
| addConfig | ResourceLocation, int, int, int, boolean |  | void | ✘ |
| addConfig | ResourceLocation, Enum<?> |  | void | ✘ |
| addConfig | ResourceLocation, boolean |  | void | ✘ |
| energyStorage | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, EnergyView> | ✘ |
| isClientFeature | ResourceLocation |  | boolean | ✘ |
| fluidStorage | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, FluidView> | ✘ |
| getServerData |  |  | CompoundTag | ✘ |
| blockAccessor |  |  | Builder | ✘ |
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

