ServerEvents.recipes(event =>{
    let multiSmelt = (output, input, includeBlasting) => {
        event.smelting(output, input)

        if (includeBlasting) {
            event.blasting(output, input)
        }
    }

    multiSmelt('xycraft_world:kivi', 'minecraft:blackstone', true)
    event.smelting('gtceu:lead_ingot', 'gtceu:crushed_galena_ore')
    event.smelting('gtceu:lead_ingot', 'gtceu:crushed_lead_ore')
    event.smelting('gtceu:tin_ingot', 'gtceu:crushed_tin_ore')


    const recipes = [
        {
            output: 'gtceu:ulv_auto_wooden_barrel',
            pattern: ['pip','pbp','psp'],
            key: {
                p: 'minecraft:oak_planks',
                s: 'minecraft:oak_slab',
                b: 'exdeorum:oak_barrel',
                i: 'exdeorum:porcelain_bucket'
            },
            id: 'galaxy_greg:crafting/auto_wooden_barrel'
        },
        {
            output: 'gtceu:ulv_auto_stone_barrel',
            pattern: ['pip','pbp','psp'],
            key: {
                p: 'minecraft:stone',
                s: 'minecraft:stone_slab',
                b: 'exdeorum:stone_barrel',
                i: 'exdeorum:porcelain_bucket'
            },
            id: 'galaxy_greg:crafting/auto_stone_barrel'
        }
    ];
    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})