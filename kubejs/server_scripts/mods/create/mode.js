ServerEvents.recipes( e =>{
    e.recipes.createMixing('2x galaxy_greg:grout_dust', ['1x galaxy_greg:sand_dust', '1x gtceu:flint_dust', '1x gtceu:clay_dust', Fluid.of("minecraft:water", 100)]).id('tconstruct:smeltery/seared/grout_multiple')
    e.recipes.createMixing('2x gtceu:fireclay_dust', ['1x gtceu:brick_dust', '1x gtceu:clay_dust', Fluid.of("minecraft:water", 100)]).id('gtceu:shapeless/fireclay_dust')

    e.recipes.createMixing('4x gtceu:bronze_ingot', ['3x minecraft:copper_ingot', '1x gtceu:tin_ingot']).lowheated().id('galaxy:create/bronze_mixing')
    e.recipes.createMixing('2x gtceu:brass_ingot', ['1x minecraft:copper_ingot', '1x gtceu:zinc_ingot']).lowheated().id('create:mixing/brass_mixing')
    e.recipes.createMixing('4x create:andesite_alloy', ['2x minecraft:andesite', '2x minecraft:iron_nugget']).lowheated().id('create:mixing/andesite_alloy')
    e.recipes.createMixing('4x create:andesite_alloy', ['2x minecraft:andesite', '2x gtceu:zinc_nugget']).lowheated().id('create:mixing/andesite_alloy_from_zinc')
    e.recipes.createMixing('4x thermal:cured_rubber', ['3x thermal:rubber', '1x gtceu:sulfur_dust']).lowheated().id('create:mixing/cured_rubber')

    e.recipes.createPressing('gtceu:bronze_plate', 'gtceu:bronze_ingot').id('create:pressing/bronze_plate')
    e.recipes.createPressing('gtceu:brass_plate', 'gtceu:brass_ingot').id('create:pressing/brass_plate')
    e.recipes.createPressing('gtceu:rubber_plate', 'thermal:cured_rubber').id('create:pressing/rubber_plate')

    e.recipes.create.filling('minecraft:moss_block', [Fluid.of('minecraft:water'), 'minecraft:grass_block']).id('galaxy_greg:create/spouting/grass_block')
    e.recipes.create.filling('minecraft:grass_block', [Fluid.of('minecraft:water'), 'minecraft:dirt']).id('galaxy_greg:create/spouting/dirt')

    e.recipes.create.deploying('minecraft:mycelium', ['minecraft:grass_block', 'exdeorum:mycelium_spores']).id('galaxy_greg:create/deplying/mycelium')

    e.recipes.create.splashing([Item.of('xycraft_world:xychorium_gem_light').withChance(0.25),
        Item.of('xycraft_world:xychorium_gem_dark').withChance(0.25),
        Item.of('xycraft_world:xychorium_gem_red').withChance(0.25),
        Item.of('xycraft_world:xychorium_gem_green').withChance(0.25),
        Item.of('xycraft_world:xychorium_gem_blue').withChance(0.25),
        Item.of('minecraft:kelp').withChance(0.35)],
        'exdeorum:dust')
    
    
    e.recipes.create.sequenced_assembly(['galaxy_greg:compressed_grout'], 'galaxy_greg:grout_dust', [
        e.recipes.createPressing([Item.of('galaxy_greg:incomplete_compressed_grout')], 'galaxy_greg:grout_dust')
    ]).transitionalItem('galaxy_greg:incomplete_compressed_grout').loops(2)

    e.recipes.create.sequenced_assembly(['gtceu:compressed_fireclay'], 'gtceu:fireclay_dust', [
        e.recipes.createPressing([Item.of('galaxy_greg:incomplete_compressed_fireclay')], 'gtceu:fireclay_dust')
    ]).transitionalItem('galaxy_greg:incomplete_compressed_fireclay').loops(2)

   const sand = [
    {
        output: 'galaxy_greg:sand_dust',
        input: 'minecraft:sand'
    }
   ];
   sand.forEach(recipe =>{
       e.recipes.create.milling(recipe.output, recipe.input).id('galaxy_greg:create/milling/sand')
       e.recipes.create.crushing(recipe.output, recipe.input).id('galaxy_greg:create/crushing/sand')
   })

    const recipes = [
        {
            output: '16x create:andesite_alloy',
            pattern: ['aaa','ann','nnn'],
            key: {
                a: 'minecraft:andesite',
                n: 'minecraft:iron_nugget'
            },
            id: 'create:crafting/materials/andesite_alloy'
        },
        {
            output: '16x create:andesite_alloy',
            pattern: ['aaa','ann','nnn'],
            key: {
                a: 'minecraft:andesite',
                n: 'gtceu:zinc_nugget'
            },
            id: 'create:crafting/materials/andesite_alloy_from_zinc'
        }
    ];
    recipes.forEach(crafting => {
        e.shaped(crafting.output, crafting.pattern, crafting.key).id(crafting.id)
    })
})