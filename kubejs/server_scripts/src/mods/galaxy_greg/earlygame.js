ServerEvents.recipes(event => {

    const hammer_station = event.recipes.gtceu.hammer_station
    const auto_barrel_compost = event.recipes.gtceu.auto_barrel_compost
    const auto_stone_barrel = event.recipes.gtceu.auto_stone_barrel
    const auto_barrel_fluid_mixing = event.recipes.gtceu.auto_barrel_fluid_mixing

    auto_stone_barrel('cobbel_gen').notConsumableFluid(Fluid.of('minecraft:lava')).inputFluids(Fluid.of('minecraft:water', 1000)).duration(15).itemOutputs('minecraft:cobblestone')
    auto_stone_barrel('blackstone_gen').notConsumableFluid(Fluid.of('minecraft:lava')).inputFluids(Fluid.of('exdeorum:witch_water', 1000)).duration(15).itemOutputs('minecraft:blackstone')
    auto_stone_barrel('blackstone_pebbel_gen').notConsumableFluid(Fluid.of('minecraft:lava')).inputFluids(Fluid.of('exdeorum:witch_water', 1)).duration(15).chancedOutput('exdeorum:blackstone_pebble', 7500, 0).circuit(10)

    auto_barrel_fluid_mixing('soulsand').inputFluids(Fluid.of('exdeorum:witch_water', 1000)).itemInputs('#minecraft:sand').itemOutputs('minecraft:soul_sand').duration(1)
    auto_barrel_fluid_mixing('soulsoul').inputFluids(Fluid.of('minecraft:lava', 1000)).itemInputs('minecraft:soul_sand').itemOutputs('minecraft:soul_soil').duration(1)
    auto_barrel_fluid_mixing('slime_block').inputFluids(Fluid.of('exdeorum:witch_water', 1000)).itemInputs('#forge:mushrooms').itemOutputs('minecraft:slime_block').duration(1)
    auto_barrel_fluid_mixing('mud').inputFluids(Fluid.of('minecraft:water', 1000)).itemInputs('minecraft:dirt').itemOutputs('minecraft:mud').duration(1)
    auto_barrel_fluid_mixing('clay').inputFluids(Fluid.of('minecraft:water', 1000)).itemInputs('exdeorum:dust').itemOutputs('minecraft:clay').duration(1)
    auto_barrel_fluid_mixing('ice').inputFluids(Fluid.of('minecraft:water', 1000)).itemInputs('minecraft:snowball').itemOutputs('minecraft:ice').duration(1)
    auto_barrel_fluid_mixing('tempert_glass').inputFluids(Fluid.of('minecraft:lava', 1000)).itemInputs('minecraft:glass').itemOutputs('gtceu:tempered_glass').duration(10)

    
    auto_barrel_compost('dirt_leaves').itemInputs('10x #minecraft:leaves').itemOutputs('minecraft:dirt').duration(200)
    auto_barrel_compost('dirt_saplings').itemInputs('8x #minecraft:saplings').itemOutputs('minecraft:dirt').duration(200)
    auto_barrel_compost('dirt_seeds').itemInputs('13x #forge:seeds').itemOutputs('minecraft:dirt').duration(200)


    hammer_station('cobbel_to_gravel').itemInputs(Item.of('minecraft:cobblestone')).itemOutputs(Item.of('minecraft:gravel')).duration(60).EUt(GTValues.V[GTValues.ULV])
    hammer_station('gravel_to_sand').itemInputs(Item.of('minecraft:gravel')).itemOutputs(Item.of('minecraft:sand')).duration(60).EUt(GTValues.V[GTValues.ULV])
    hammer_station('sand_to_dust').itemInputs(Item.of('minecraft:sand')).itemOutputs(Item.of("exdeorum:dust")).duration(60).EUt(GTValues.V[GTValues.ULV])
    hammer_station('blackstone_to_crushed_blackstone').itemInputs(Item.of("minecraft:blackstone")).itemOutputs(Item.of("exdeorum:crushed_blackstone")).duration(60).EUt(GTValues.V[GTValues.ULV])

    event.replaceInput({id:'ulvcovm:shaped/ulv_electric_conveyor'}, Item.of("gtceu:sticky_resin"), Item.of("gtceu:rubber_plate"))
    event.replaceInput({ mod: 'ulvcovm' }, Item.of("gtceu:lead_single_cable"), Item.of("gtceu:red_alloy_single_cable"))

    event.remove({id:'gtceu:shaped/plate_wrought_iron'})
    event.remove({ id: 'thermal:smelting/cured_rubber_from_smelting'})

    event.recipes.gtceu.fluid_solidifier('raw_rubber_from_fluid').inputFluids(Fluid.of("thermal:latex", 125)).itemOutputs(Item.of("thermal:rubber")).duration(20).EUt(GTValues.V[GTValues.ULV])
    
    event.recipes.gtceu.extractor('thermal_latex_from_wood').chancedInput('thermal:rubberwood_log', 3000, 0).outputFluids(Fluid.of("thermal:latex",30)).duration(200).EUt(GTValues.V[GTValues.LV])
    event.recipes.gtceu.extractor('jungel_wood_from_wood').chancedInput('minecraft:jungle_log', 3000, 0).outputFluids(Fluid.of("thermal:latex",15)).duration(150).EUt(GTValues.V[GTValues.LV])
})