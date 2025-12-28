const StressRecipeCapability = Java.loadClass('com.mo_guang.ctpp.api.StressRecipeCapability')
ServerEvents.recipes(event =>{
    const id = 'galaxy_grag:primitive_ore/'
    //note: 2mb are 1 EU!
    const ulv = GTValues.ULV;
    const lv = GTValues.LV;
    const mv = GTValues.MV;
    const hv = GTValues.HV;
    const ev = GTValues.EV;
    const iv = GTValues.IV;
    const luv = GTValues.LuV;
    const zpm = GTValues.ZPM;
    const uv = GTValues.UV;
    const uhv = GTValues.UHV;
    const uev = GTValues.UEV;
    const uiv = GTValues.UIV;
    const uxv = GTValues.UXV;
    const opv = GTValues.OpV;
    const max = GTValues.MAX;

    const v = GTValues.V;
    const va = GTValues.VA;
    const vh = GTValues.VH;
    const vha = GTValues.VHA;

    const ore_processing = event.recipes.gtceu.primitive_ore_processing
    const mv_ore_processing = event.recipes.gtceu.electric_ore_processing
    
    ore_processing('iron_ore_processing')
        .itemInputs('gtceu:crushed_iron_ore')
        .itemOutputs('gtceu:iron_dust')
        .chancedOutput('gtceu:iron_dust', 5000, 0)
        .chancedOutput('gtceu:nickel_dust', 2500, 0)
        .chancedOutput('gtceu:tin_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .duration(400);

    ore_processing('magnetite_ore_processing')
        .itemInputs('gtceu:crushed_magnetite_ore')
        .itemOutputs('gtceu:magnetite_dust')
        .chancedOutput('gtceu:magnetite_dust', 5000, 0)
        .chancedOutput('gtceu:gold_dust', 2500, 0)
        .chancedOutput('gtceu:gold_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .duration(400);

    ore_processing('copper_ore_processing')
        .itemInputs('gtceu:crushed_copper_ore')
        .itemOutputs('gtceu:copper_dust')
        .chancedOutput('gtceu:copper_dust', 5000, 0)
        .chancedOutput('gtceu:gold_dust', 2500, 0)
        .chancedOutput('gtceu:nickel_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .duration(400);

    ore_processing('tin_ore_processing')
        .itemInputs('gtceu:crushed_tin_ore')
        .itemOutputs('gtceu:tin_dust')
        .chancedOutput('gtceu:tin_dust', 5000, 0)
        .chancedOutput('gtceu:iron_dust', 2500, 0)
        .chancedOutput('gtceu:zinc_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .duration(400);

    ore_processing('sphalerite_ore_processing')
        .itemInputs('gtceu:crushed_sphalerite_ore')
        .itemOutputs('gtceu:sphalerite_dust')
        .chancedOutput('gtceu:sphalerite_dust', 5000, 0)
        .chancedOutput('gtceu:gallium_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .duration(400);

    ore_processing('galena_ore_processing')
        .itemInputs('gtceu:crushed_galena_ore')
        .itemOutputs('gtceu:galena_dust')
        .chancedOutput('gtceu:galena_dust', 5000, 0)
        .chancedOutput('gtceu:silver_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .duration(400);

    ore_processing('stibnite_ore_processing')
        .itemInputs('gtceu:crushed_stibnite_ore')
        .itemOutputs('gtceu:stibnite_dust')
        .chancedOutput('gtceu:stibnite_dust', 5000, 0)
        .chancedOutput('gtceu:antimony_dust', 2500, 0)
        .chancedOutput('gtceu:sulfur_dust', 1250, 0)
        .chancedOutput('gtceu:stone_dust', 1500, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .duration(400);



    mv_ore_processing('iron_mv_ore_processing')
        .itemInputs('gtceu:crushed_iron_ore')
        .itemOutputs('gtceu:iron_dust')
        .chancedOutput('gtceu:iron_dust', 7500, 0)
        .chancedOutput('gtceu:nickel_dust', 4500, 0)
        .chancedOutput('gtceu:tin_dust', 3250, 0)
        .chancedOutput('gtceu:stone_dust', 1000, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .EUt(v[mv])
        .duration(400);

    mv_ore_processing('magnetite_mv_ore_processing')
        .itemInputs('gtceu:crushed_magnetite_ore')
        .itemOutputs('gtceu:magnetite_dust')
        .chancedOutput('gtceu:magnetite_dust', 7500, 0)
        .chancedOutput('gtceu:gold_dust', 4500, 0)
        .chancedOutput('gtceu:gold_dust', 3250, 0)
        .chancedOutput('gtceu:stone_dust', 1000, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .EUt(v[mv])
        .duration(400);

    mv_ore_processing('copper_mv_ore_processing')
        .itemInputs('gtceu:crushed_copper_ore')
        .itemOutputs('gtceu:copper_dust')
        .chancedOutput('gtceu:copper_dust', 7500, 0)
        .chancedOutput('gtceu:gold_dust', 4500, 0)
        .chancedOutput('gtceu:nickel_dust', 3250, 0)
        .chancedOutput('gtceu:stone_dust', 1000, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .EUt(v[mv])
        .duration(400);

    mv_ore_processing('tin_mv_ore_processing')
        .itemInputs('gtceu:crushed_tin_ore')
        .itemOutputs('gtceu:tin_dust')
        .chancedOutput('gtceu:tin_dust', 7500, 0)
        .chancedOutput('gtceu:iron_dust', 4500, 0)
        .chancedOutput('gtceu:zinc_dust', 3250, 0)
        .chancedOutput('gtceu:stone_dust', 1000, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .EUt(v[mv])
        .duration(400);

    mv_ore_processing('sphalerite_mv_ore_processing')
        .itemInputs('gtceu:crushed_sphalerite_ore')
        .itemOutputs('gtceu:sphalerite_dust')
        .chancedOutput('gtceu:sphalerite_dust', 7500, 0)
        .chancedOutput('gtceu:gallium_dust', 4500, 0)
        .chancedOutput('gtceu:sulfur_dust', 3250, 0)
        .chancedOutput('gtceu:stone_dust', 1000, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .EUt(v[mv])
        .duration(400);

    mv_ore_processing('galena_mv_ore_processing')
        .itemInputs('gtceu:crushed_galena_ore')
        .itemOutputs('gtceu:galena_dust')
        .chancedOutput('gtceu:galena_dust', 7500, 0)
        .chancedOutput('gtceu:silver_dust', 4500, 0)
        .chancedOutput('gtceu:sulfur_dust', 3250, 0)
        .chancedOutput('gtceu:stone_dust', 1000, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .EUt(v[mv])
        .duration(400);

    mv_ore_processing('stibnite_mv_ore_processing')
        .itemInputs('gtceu:crushed_stibnite_ore')
        .itemOutputs('gtceu:stibnite_dust')
        .chancedOutput('gtceu:stibnite_dust', 7500, 0)
        .chancedOutput('gtceu:antimony_dust', 4500, 0)
        .chancedOutput('gtceu:sulfur_dust', 3250, 0)
        .chancedOutput('gtceu:stone_dust', 1000, 0)
        .perTick(true)
        .input(StressRecipeCapability.CAP, 512)
        .inputFluids(Fluid.of('minecraft:water', 100))
        .perTick(false)
        .EUt(v[mv])
        .duration(400);



        const electric_ore_processing = [
            {
                name: 'chalcopyrite',
                input: 'gtceu:crushed_chalcopyrite_ore',
                output: 'gtceu:chalcopyrite_dust',
                chancedOutput1: 'gtceu:gold_dust',
                chancedOutput2: 'gtceu:pyrite_dust', 
                chancedOutput3: 'gtceu:cobalt_dust',
                chancedOutput4: 'gtceu:stone_dust', 
            },
            {
                name: 'cassiterite',
                input: 'gtceu:crushed_cassiterite_ore',
                output: 'gtceu:cassiterite_dust',
                chancedOutput1: 'gtceu:tin_dust',
                chancedOutput2: 'gtceu:tin_dust',
                chancedOutput3: 'gtceu:bismuth_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'silver',
                input: 'gtceu:crushed_silver_ore',
                output: 'gtceu:silver_dust',
                chancedOutput1: 'gtceu:gold_dust',
                chancedOutput2: 'gtceu:pyrite_dust',
                chancedOutput3: 'gtceu:cobalt_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'gold',
                input: 'gtceu:crushed_gold_ore',
                output: 'gtceu:gold_dust',
                chancedOutput1: 'gtceu:silver_dust',
                chancedOutput2: 'gtceu:copper_dust',
                chancedOutput3: 'gtceu:nickel_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'bornite',
                input: 'gtceu:crushed_bornite_ore',
                output: 'gtceu:bornite_dust',
                chancedOutput1: 'gtceu:gold_dust',
                chancedOutput2: 'gtceu:pyrite_dust',
                chancedOutput3: 'gtceu:cobalt_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'pentlandite',
                input: 'gtceu:crushed_pentlandite_ore',
                output: 'gtceu:pentlandite_dust',
                chancedOutput1: 'gtceu:cobalt_dust',
                chancedOutput2: 'gtceu:iron_dust',
                chancedOutput3: 'gtceu:sulfur_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'rock_salt',
                input: 'gtceu:crushed_rock_salt_ore',
                output: 'gtceu:rock_salt_dust',
                chancedOutput1: 'gtceu:salt_dust',
                chancedOutput2: 'gtceu:salt_dust',
                chancedOutput3: 'gtceu:borax_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'salt',
                input: 'gtceu:crushed_salt_ore',
                output: 'gtceu:salt_dust',
                chancedOutput1: 'gtceu:rock_salt_dust',
                chancedOutput2: 'gtceu:rock_salt_dust',
                chancedOutput3: 'gtceu:borax_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'monazite',
                input: 'gtceu:crushed_monazite_ore',
                output: 'gtceu:monazite_dust',
                chancedOutput1: 'gtceu:thorium_dust',
                chancedOutput2: 'gtceu:thorium_dust',
                chancedOutput3: 'gtceu:neodymium_dust',
                chancedOutput4: 'gtceu:rare_earth_dust',
            },
            {
                name: 'lepidolite',
                input: 'gtceu:crushed_lepidolite_ore',
                output: 'gtceu:lepidolite_dust',
                chancedOutput1: 'gtceu:lithium_dust',
                chancedOutput2: 'gtceu:lithium_dust',
                chancedOutput3: 'gtceu:caesium_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'pyrolusite',
                input: 'gtceu:crushed_pyrolusite_ore',
                output: 'gtceu:pyrolusite_dust',
                chancedOutput1: 'gtceu:manganese_dust',
                chancedOutput2: 'gtceu:manganese_dust',
                chancedOutput3: 'gtceu:tantalite_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'cobaltite',
                input: 'gtceu:crushed_cobaltite_ore',
                output: 'gtceu:cobaltite_dust',
                chancedOutput1: 'gtceu:cobalt_dust',
                chancedOutput2: 'gtceu:sulfur_dust',
                chancedOutput3: 'gtceu:cobalt_dust',
                chancedOutput4: 'gtceu:stone_dust',
            },
            {
                name: 'apatite',
                input: 'gtceu:crushed_apatite_ore',
                output: 'gtceu:apatite_dust',
                chancedOutput1: 'gtceu:tricalcium_phosphate_dust',
                chancedOutput2: 'gtceu:tricalcium_phosphate_dust',
                chancedOutput3: 'gtceu:phosphate_dust',
                chancedOutput4: 'gtceu:stone_dust',
            }

        ]
    electric_ore_processing.forEach(recipes => {
        mv_ore_processing(`${recipes.name}_ore_processing`)
            .itemInputs(recipes.input)
            .itemOutputs(recipes.output)
            .chancedOutput(recipes.chancedOutput1, 5000, 0)
            .chancedOutput(recipes.chancedOutput2, 2500, 0)
            .chancedOutput(recipes.chancedOutput3, 1250, 0)
            .chancedOutput(recipes.chancedOutput4, 1500, 0)
            .perTick(true)
            .input(StressRecipeCapability.CAP, 512)
            .inputFluids(Fluid.of('gtceu:distilled_water', 75))
            .perTick(false)
            .EUt(v[mv])
            .duration(400);
    })
})