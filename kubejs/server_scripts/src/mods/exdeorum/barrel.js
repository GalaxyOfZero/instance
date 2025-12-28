ServerEvents.recipes(event => {
    //event.remove({ id: 'exdeorum:barrel_fluid_mixing/slime_block' })
    event.remove({ id: 'exdeorum:barrel_fluid_mixing/netherrack' })
    //event.remove({ id: 'exdeorum:barrel_fluid_mixing/blackstone' })
    event.remove({ id: 'exdeorum:barrel_mixing/end_stone' })
    event.custom(
        {
            "type": "exdeorum:barrel_mixing",
            "fluid": "exdeorum:witch_water",
            "fluid_amount": 1000,
            "ingredient": {
                "item": "minecraft:brown_mushroom"
            },
            "result": "minecraft:slime_block"
        }
    ).id('exdeorum:barrel_mixing/slime_block')

})