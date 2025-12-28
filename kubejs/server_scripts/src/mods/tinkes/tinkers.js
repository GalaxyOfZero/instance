ServerEvents.recipes(event =>{
    const recipes = [
        // {
        //     output: '',
        //     pattern: [],
        //     key: {},
        //     id: 
        // },
    ];
    recipes.forEach(crafting =>{
        event.shaped(crafting.output, crafting.patter, crafting.key).id(crafting.id)
    })

    event.shapeless('2x galaxy_greg:grout_dust', [
        'gtceu:quartz_sand_dust',
        'gtceu:flint_dust',
        'gtceu:clay_dust',
        'exdeorum:porcelain_water_bucket',
    ]).id('tconstruct:smeltery/seared/grout').replaceIngredient('exdeorum:porcelain_water_bucket', 'exdeorum:porcelain_bucket')

    event.shapeless('2x galaxy_greg:grout_dust', [
        'gtceu:quartz_sand_dust',
        'gtceu:flint_dust',
        'gtceu:clay_dust',
        'minecraft:water_bucket',
    ]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket').id('galaxy_greg:tconstruct/smeltery/seared/grout')


    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": "minecraft:glass"
        },
        "cast_consumed": true,
        "cooling_time": 203,
        "fluid": {
            "amount": 1000,
            "tag": "minecraft:lava"
        },
        "result": {
            "item": "gtceu:tempered_glass"
        }
    })
})