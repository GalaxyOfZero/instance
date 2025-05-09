ServerEvents.recipes(event =>{
    const id = 'galaxy_grag:primitive_ore/'
    //note: 2mb are 1 EU!

    event.recipes.gtceu.primitive_ore_processing('iron_ore_processing')
        .itemInputs('gtceu:crushed_iron_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:iron_dust')
        .chancedOutput('gtceu:iron_dust', 5000, 0)
        .chancedOutput('gtceu:nickel_dust', 2500, 0)
        .chancedOutput('gtceu:tin_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .duration(400)
        .EUt(5)

    event.recipes.gtceu.primitive_ore_processing('magnetite_ore_processing')
        .itemInputs('gtceu:crushed_magnetite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:magnetite_dust')
        .chancedOutput('gtceu:magnetite_dust', 5000, 0)
        .chancedOutput('gtceu:gold_dust', 2500, 0)
        .chancedOutput('gtceu:gold_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .duration(400)
        .EUt(5)

    event.recipes.gtceu.primitive_ore_processing('copper_ore_processing')
        .itemInputs('gtceu:crushed_copper_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:copper_dust')
        .chancedOutput('gtceu:copper_dust', 5000, 0)
        .chancedOutput('gtceu:gold_dust', 2500, 0)
        .chancedOutput('gtceu:nickel_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .duration(400)
        .EUt(5)

    event.recipes.gtceu.primitive_ore_processing('tin_ore_processing')
        .itemInputs('gtceu:crushed_tin_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:tin_dust')
        .chancedOutput('gtceu:tin_dust', 5000, 0)
        .chancedOutput('gtceu:iron_dust', 2500, 0)
        .chancedOutput('gtceu:zinc_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .duration(400)
        .EUt(5)

    event.recipes.gtceu.primitive_ore_processing('sphalerite_ore_processing')
        .itemInputs('gtceu:crushed_sphalerite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:sphalerite_dust')
        .chancedOutput('gtceu:sphalerite_dust', 5000, 0)
        .chancedOutput('gtceu:gallium_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .duration(400)
        .EUt(5)

    event.recipes.gtceu.primitive_ore_processing('galena_ore_processing')
        .itemInputs('gtceu:crushed_galena_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:galena_dust')
        .chancedOutput('gtceu:galena_dust', 5000, 0)
        .chancedOutput('gtceu:silver_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .duration(400)
        .EUt(5)

    event.recipes.gtceu.primitive_ore_processing('stibnite_ore_processing')
        .itemInputs('gtceu:crushed_stibnite_ore')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:stibnite_dust')
        .chancedOutput('gtceu:stibnite_dust', 5000, 0)
        .chancedOutput('gtceu:antimony_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .duration(400)
        .EUt(5)
})