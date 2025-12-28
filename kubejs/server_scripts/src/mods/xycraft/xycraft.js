ServerEvents.recipes(event =>{
    event.remove({ output:'xycraft_world:aluminum_storage' })
    event.remove({ output: 'xycraft_world:aluminum_nugget' })
    event.remove({ output: 'xycraft_world:raw_aluminum' })
    event.remove({ input: 'xycraft_world:raw_aluminum' })
    event.remove({ output: 'xycraft_world:raw_aluminum_block' })
    event.remove({ output: 'xycraft_machines:recipe/water_block'})


    const recipes = [
        // {
        //     output: 'xycraft_machines:hydro_pump',
        //     pattern: ['pcp', 'ghg', 'pcp'],
        //     key: {
        //         "p": 'gtceu:invar_ingot',
        //         "c": 'gtceu:bronze_gear',
        //         'h': 'gtceu:lv_machine_hull',
        //         'g': 'thermal:obsidian_glass'
        //     },
        //     id: 'xycraft_machines:recipe/hydro_pump'
        // },
        {
            output: '2x xycraft_machines:machine_base',
            pattern: ['sas', 'aha', 'sas'],
            key: {
                "s": 'gtceu:aluminium_ingot',
                "a": 'gtceu:bronze_gear',
                'h': 'gtceu:lv_machine_hull'
            },
            id: 'xycraft_machines:recipe/machine_base'
        }
    ];



    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })


})