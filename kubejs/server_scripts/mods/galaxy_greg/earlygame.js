ServerEvents.recipes(event => {
    event.recipes.gtceu.auto_stone_barrel('cobbel_gen').notConsumableFluid(Fluid.of('minecraft:lava')).inputFluids(Fluid.of('minecraft:water', 1000)).duration(15).itemOutputs('minecraft:cobblestone')
    event.recipes.gtceu.auto_stone_barrel('blackstone_gen').notConsumableFluid(Fluid.of('minecraft:lava')).inputFluids(Fluid.of('exdeorum:witch_water', 1000)).duration(15).itemOutputs('minecraft:blackstone')
    event.recipes.gtceu.auto_stone_barrel('blackstone_pebbel_gen').notConsumableFluid(Fluid.of('minecraft:lava')).inputFluids(Fluid.of('exdeorum:witch_water', 1)).duration(15).chancedOutput('exdeorum:blackstone_pebble', 7500, 0).circuit(10)

    event.recipes.gtceu.auto_barrel_fluid_mixing('soulsand').inputFluids('exdeorum:witch_water', 1000).itemInputs('#minecraft:sand').itemOutputs('minecraft:soul_sand').duration(1)
    event.recipes.gtceu.auto_barrel_fluid_mixing('soulsoul').inputFluids('minecraft:lava', 1000).itemInputs('minecraft:soul_sand').itemOutputs('minecraft:soul_soil').duration(1)
    event.recipes.gtceu.auto_barrel_fluid_mixing('slime_block').inputFluids('exdeorum:witch_water', 1000).itemInputs('#forge:mushrooms').itemOutputs('minecraft:slime_block').duration(1)
    event.recipes.gtceu.auto_barrel_fluid_mixing('mud').inputFluids('minecraft:water', 1000).itemInputs('minecraft:dirt').itemOutputs('minecraft:mud').duration(1)
    event.recipes.gtceu.auto_barrel_fluid_mixing('clay').inputFluids('minecraft:water', 1000).itemInputs('exdeorum:dust').itemOutputs('minecraft:clay').duration(1)
    event.recipes.gtceu.auto_barrel_fluid_mixing('ice').inputFluids('minecraft:water', 1000).itemInputs('minecraft:snowball').itemOutputs('minecraft:ice').duration(1)

    
    event.recipes.gtceu.auto_barrel_compost('dirt_leaves').itemInputs('10x #minecraft:leaves').itemOutputs('minecraft:dirt').duration(200)
    event.recipes.gtceu.auto_barrel_compost('dirt_saplings').itemInputs('8x #minecraft:saplings').itemOutputs('minecraft:dirt').duration(200)
    event.recipes.gtceu.auto_barrel_compost('dirt_seeds').itemInputs('13x #forge:seeds').itemOutputs('minecraft:dirt').duration(200)


})