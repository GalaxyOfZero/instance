//const StressRecipeCapability = Java.loadClass('com.mo_guang.ctpp.api.StressRecipeCapability')
ServerEvents.recipes(event =>{
    const mechanical_sifter = event.recipes.gtceu.mechanical_sifter

    mechanical_sifter('gravle_sive')
        .itemInputs(Item.of("minecraft:gravel",256))
        .itemOutputs(Item.of('gtceu:crushed_iron_ore', 64))
        .itemOutputs(Item.of('gtceu:crushed_magnetite_ore', 64))
        .itemOutputs(Item.of('gtceu:crushed_copper_ore', 64))
        .itemOutputs(Item.of('gtceu:crushed_tin_ore', 64))
        .itemOutputs(Item.of('gtceu:crushed_sphalerite_ore', 64))
        .perTick(true)
        .input(StressRecipeCapability.CAP, 256)
        .inputFluids(Fluid.of('minecraft:water', 250))
        .perTick(false)
        .duration(1200);

    mechanical_sifter('dust_sive')
        .itemInputs(Item.of("exdeorum:dust", 256))
        .itemOutputs(Item.of('minecraft:redstone', 64))
        .itemOutputs(Item.of('minecraft:glowstone_dust', 64))
        .itemOutputs(Item.of('gtceu:sulfur_dust', 32))
        .itemOutputs(Item.of('minecraft:ender_pearl', 64))
        .perTick(true)
        .input(StressRecipeCapability.CAP, 256)
        .inputFluids(Fluid.of('minecraft:water', 250))
        .perTick(false)
        .duration(1200);

    mechanical_sifter('sand_sive')
        .itemInputs(Item.of("minecraft:sand", 256))
        .itemOutputs(Item.of('minecraft:diamond', 64))
        .itemOutputs(Item.of('minecraft:lapis_lazuli', 64))
        .itemOutputs(Item.of('minecraft:amethyst_shard', 64))
        .itemOutputs(Item.of('minecraft:emerald', 64))
        .itemOutputs(Item.of('minecraft:quartz', 64))
        .perTick(true)
        .input(StressRecipeCapability.CAP, 256)
        .inputFluids(Fluid.of('minecraft:water', 250))
        .perTick(false)
        .duration(1200);

    mechanical_sifter('blackstone_sive')
        .itemInputs(Item.of("exdeorum:crushed_blackstone", 128))
        .itemOutputs(Item.of('gtceu:crushed_galena_ore', 64))
        .itemOutputs(Item.of('gtceu:crushed_stibnite_ore', 64))
        .perTick(true)
        .input(StressRecipeCapability.CAP, 256)
        .inputFluids(Fluid.of('minecraft:water', 250))
        .perTick(false)
        .duration(1200);
})