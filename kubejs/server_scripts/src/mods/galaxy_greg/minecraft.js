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
    event.blasting('minecraft:glass', 'gtceu:glass_dust').cookingTime(200).id('galaxy_greg:glass_dust_to_glass')
    event.campfireCooking('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot').cookingTime(1200).id('galaxy_greg:iron_to_wrought_iron')


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
        },
        {
            output: 'gtceu:lv_machine_hull',
            pattern: ['   ', 'PLP', 'CHC'],
            key: {
                "P": '#forge:plates/wrought_iron',
                "L": "gtceu:steel_plate",
                "C": "gtceu:tin_single_cable",
                'H': 'gtceu:lv_machine_casing'
            },
            id: 'gtceu:shaped/lv_machine_hull'
        },
        {
            output: 'galaxy_greg:sieve_mesh',
            pattern: ['sbs', 'bmb', 'sbs'],
            key: {
                "s": 'gtceu:treated_wood_rod',
                "b": 'gtceu:treated_wood_screw',
                "m": 'exdeorum:string_mesh'
            },
            id: 'galaxy_greg:sieve_mesh'
        },
        {
            output: 'galaxy_greg:mesh_block',
            pattern: ['sbs', 'bmb', 'sbs'],
            key: {
                "b": 'galaxy_greg:sieve_mesh',
                "s": 'gtceu:treated_wood_screw',
                "m": 'gtceu:treated_wood_frame'
            },
            id: 'galaxy_greg:mesh_block'
        },
        {
            output: 'gtceu:ulv_input_hatch',
            pattern: [' p ', 'rmr', ' b '],
            key: {
                "p": 'ulvcovm:ulv_electric_pump',
                "r": 'gtceu:red_alloy_single_cable',
                "m": 'gtceu:ulv_machine_hull',
                'b': 'create:fluid_tank'
            },
            id: 'galaxy_greg:ulv_fluid_input_hatch'
        },
        {
            output: 'gtceu:ulv_output_hatch',
            pattern: [' p ', 'rmr', ' b '],
            key: {
                "b": 'ulvcovm:ulv_electric_pump',
                "r": 'gtceu:red_alloy_single_cable',
                "m": 'gtceu:ulv_machine_hull',
                'p': 'create:fluid_tank'
            },
            id: 'galaxy_greg:ulv_fluid_output_hatch'
        },
        {
            output: 'gtceu:ulv_input_bus',
            pattern: [' p ', 'rmr', ' b '],
            key: {
                "p": 'ulvcovm:ulv_conveyor_module',
                "r": 'gtceu:red_alloy_single_cable',
                "m": 'gtceu:ulv_machine_hull',
                'b': 'create:item_vault'
            },
            id: 'galaxy_greg:ulv_item_input_bus'
        },
        {
            output: 'gtceu:ulv_output_bus',
            pattern: [' p ', 'rmr', ' b '],
            key: {
                "b": 'ulvcovm:ulv_conveyor_module',
                "r": 'gtceu:red_alloy_single_cable',
                "m": 'gtceu:ulv_machine_hull',
                'p': 'create:item_vault'
            },
            id: 'galaxy_greg:ulv_item_output_bus'
        },
        {
            output: 'gtceu:primitive_ore_factory',
            pattern: ['pcp', 'shs', 'pup'],
            key: {
                "p": 'gtceu:double_bronze_plate',
                "c": 'gtceu:vacuum_tube',
                "s": 'create:shaft',
                'h': 'gtceu:ulv_machine_hull',
                'u': 'ulvcovm:ulv_electric_piston'
            },
            id: 'galaxy_greg:primitive_ore_factory'
        },
        {
            output: 'gtceu:mechanical_sifter',
            pattern: ['pcp', 'shb', 'pcp'],
            key: {
                "p": 'gtceu:double_wrought_iron_plate',
                "c": 'gtceu:vacuum_tube',
                "s": 'ulvcovm:ulv_robot_arm',
                "b": 'ulvcovm:ulv_electric_piston',
                'h': 'gtceu:ulv_machine_hull' 
            },
            id: 'galaxy_greg:mechanical_sifter'
        },
        {
            output: '2x galaxy_greg:aluminium_firebox_casing',
            pattern: ['prp', 'rfr', 'prp'],
            key: {
                "p": 'gtceu:aluminium_plate',
                "r": 'gtceu:aluminium_rod',
                "f": 'gtceu:aluminium_frame'
            },
            id: 'galaxy_greg:crafting/aluminium_firebox_casing'
        },
        {
            output: '2x galaxy_greg:aluminium_gearbox_casing',
            pattern: ['php', 'rfr', 'pwp'],
            key: {
                "p": 'gtceu:aluminium_plate',
                "r": 'gtceu:aluminium_gear',
                "f": 'gtceu:aluminium_frame',
                'w': '#gtceu:tools/crafting_wrenches',
                'h': '#gtceu:tools/crafting_hammers'
            },
            id: 'galaxy_greg:crafting/aluminium_gearbox_casing'
        },
        {
            output: '2x galaxy_greg:aluminium_pipe_casing',
            pattern: ['prp', 'rfr', 'prp'],
            key: {
                "p": 'gtceu:aluminium_plate',
                "r": 'gtceu:aluminium_normal_fluid_pipe',
                "f": 'gtceu:aluminium_frame'
            },
            id: 'galaxy_greg:crafting/aluminium_pipe_casing'
        },
        {
            output: '2x galaxy_greg:aluminium_casing',
            pattern: ['php', 'pfp', 'pwp'],
            key: {
                "p": 'gtceu:aluminium_plate',
                "f": 'gtceu:aluminium_frame',
                'w': '#gtceu:tools/crafting_wrenches',
                'h': '#gtceu:tools/crafting_hammers'
            },
            id: 'galaxy_greg:crafting/aluminium_casing'
        },
        {
            output: '2x galaxy_greg:wood_casing',
            pattern: ['php', 'rfr', 'pwp'],
            key: {
                "p": 'gtceu:wrought_iron_plate',
                "r": 'gtceu:steel_plate',
                "f": 'gtceu:treated_wood_frame',
                'w': '#gtceu:tools/crafting_wrenches',
                'h': '#gtceu:tools/crafting_hammers'
            },
            id: 'galaxy_greg:crafting/wood_casing'
        },

    ];
    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })

    const hammer_station = [
        {
            output: 'gtceu:lv_hammer_station',
            pattern: ['php', 'ckc', 'wcw'],
            key: {
                "p": 'gtceu:steel_plate',
                'h': 'exdeorum:wooden_hammer',
                "c": '#gtceu:circuits/lv',
                "k": 'gtceu:lv_machine_hull',
                "w": 'gtceu:tin_single_cable'
            },
            id: 'galaxy_greg:lv_hammer_station'
        },     
        {
            output: 'gtceu:mv_hammer_station',
            pattern: ['php', 'ckc', 'wcw'],
            key: {
                "p": 'gtceu:aluminium_plate',
                'h': 'exdeorum:stone_hammer',
                "c": '#gtceu:circuits/mv',
                "k": 'gtceu:mv_machine_hull',
                "w": 'gtceu:copper_single_cable'
            },
            id: 'galaxy_greg:mv_hammer_station'
        },
        {
            output: 'gtceu:hv_hammer_station',
            pattern: ['php', 'ckc', 'wcw'],
            key: {
                "p": 'gtceu:stainless_steel_plate',
                'h': 'exdeorum:iron_hammer',
                "c": '#gtceu:circuits/hv',
                "k": 'gtceu:hv_machine_hull',
                "w": 'gtceu:gold_single_cable'
            },
            id: 'galaxy_greg:hv_hammer_station'
        },
        {
            output: 'gtceu:ev_hammer_station',
            pattern: ['php', 'ckc', 'wcw'],
            key: {
                "p": 'gtceu:titanium_plate',
                'h': 'exdeorum:golden_hammer',
                "c": '#gtceu:circuits/ev',
                "k": 'gtceu:ev_machine_hull',
                "w": 'gtceu:aluminium_single_cable'
            },
            id: 'galaxy_greg:ev_hammer_station'
        },
        {
            output: 'gtceu:iv_hammer_station',
            pattern: ['php', 'ckc', 'wcw'],
            key: {
                "p": 'gtceu:tungsten_steel_plate',
                'h': 'exdeorum:diamond_hammer',
                "c": '#gtceu:circuits/iv',
                "k": 'gtceu:iv_machine_hull',
                "w": 'gtceu:aluminium_single_cable'
            },
            id: 'galaxy_greg:iv_hammer_station'
        },

    ]
    hammer_station.forEach(recipe =>{
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})