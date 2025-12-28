ServerEvents.recipes(event =>{
    const gas = [
        {
            fluid: Fluid.of("gtceu:sulfuric_gas", 32),
            stressCapacity: 250,
            id: 'sulfuric_gas'
        },
        {
            fluid: Fluid.of("gtceu:refinery_gas", 1),
            stressCapacity: 37,
            id: 'refinery_gas'
        },
        {
            fluid: Fluid.of("gtceu:natural_gas", 8),
            stressCapacity: 27,
            id: 'natural_gas'
        },
        {
            fluid: Fluid.of("gtceu:methane", 2),
            stressCapacity: 38,
            id: 'methane'
        },
        {
            fluid: Fluid.of("gtceu:wood_gas", 8),
            stressCapacity: 32,
            id: 'wood_gas'
        },
        {
            fluid: Fluid.of("gtceu:sulfuric_naphtha", 4),
            stressCapacity: 27,
            id: 'sulfuric_naphtha'
        },
        {
            fluid: Fluid.of("gtceu:coal_gas", 1),
            stressCapacity: 16,
            id: 'coal_gas'
        },
        {
            fluid: Fluid.of("gtceu:ethylene", 1),
            stressCapacity: 22,
            id: 'ethylene'
        },
        {
            fluid: Fluid.of("gtceu:ethane", 4),
            stressCapacity: 113,
            id: 'ethane'
        },
        {
            fluid: Fluid.of("gtceu:propene", 1),
            stressCapacity: 32,
            id: 'propene'
        },
        {
            fluid: Fluid.of("gtceu:butadiene", 4),
            stressCapacity: 108,
            id: 'butadiene'
        },
        {
            fluid: Fluid.of("gtceu:propane", 4),
            stressCapacity: 155,
            id: 'propane'
        },
        {
            fluid: Fluid.of("gtceu:butane", 4),
            stressCapacity: 198,
            id: 'butane'
        },
        {
            fluid: Fluid.of("gtceu:butene", 1),
            stressCapacity: 43,
            id: 'butene'
        },
        {
            fluid: Fluid.of("gtceu:phenol", 1),
            stressCapacity: 48,
            id: 'phenol'
        },
        {
            fluid: Fluid.of("gtceu:benzene", 1),
            stressCapacity: 59,
            id: 'benzene'
        },
        {
            fluid: Fluid.of("gtceu:lpg", 1),
            stressCapacity: 54,
            id: 'lpg'
        },
        {
            fluid: Fluid.of("gtceu:nitrobenzene", 1),
            stressCapacity: 214,
            id: 'nitrobenzene'
        }
    ];
    const gas_o2 = [
        {
            fluid: Fluid.of("gtceu:sulfuric_gas", 32),
            stressCapacity: 500,
            id: 'sulfuric_gas'
        },
        {
            fluid: Fluid.of("gtceu:refinery_gas", 1),
            stressCapacity: 74,
            id: 'refinery_gas'
        },
        {
            fluid: Fluid.of("gtceu:natural_gas", 8),
            stressCapacity: 54,
            id: 'natural_gas'
        },
        {
            fluid: Fluid.of("gtceu:methane", 2),
            stressCapacity: 76,
            id: 'methane'
        },
        {
            fluid: Fluid.of("gtceu:wood_gas", 8),
            stressCapacity: 64,
            id: 'wood_gas'
        },
        {
            fluid: Fluid.of("gtceu:sulfuric_naphtha", 4),
            stressCapacity: 54,
            id: 'sulfuric_naphtha'
        },
        {
            fluid: Fluid.of("gtceu:coal_gas", 1),
            stressCapacity: 32,
            id: 'coal_gas'
        },
        {
            fluid: Fluid.of("gtceu:ethylene", 1),
            stressCapacity: 44,
            id: 'ethylene'
        },
        {
            fluid: Fluid.of("gtceu:ethane", 4),
            stressCapacity: 226,
            id: 'ethane'
        },
        {
            fluid: Fluid.of("gtceu:propene", 1),
            stressCapacity: 64,
            id: 'propene'
        },
        {
            fluid: Fluid.of("gtceu:butadiene", 4),
            stressCapacity: 216,
            id: 'butadiene'
        },
        {
            fluid: Fluid.of("gtceu:propane", 4),
            stressCapacity: 310,
            id: 'propane'
        },
        {
            fluid: Fluid.of("gtceu:butane", 4),
            stressCapacity: 396,
            id: 'butane'
        },
        {
            fluid: Fluid.of("gtceu:butene", 1),
            stressCapacity: 86,
            id: 'butene'
        },
        {
            fluid: Fluid.of("gtceu:phenol", 1),
            stressCapacity: 96,
            id: 'phenol'
        },
        {
            fluid: Fluid.of("gtceu:benzene", 1),
            stressCapacity: 118,
            id: 'benzene'
        },
        {
            fluid: Fluid.of("gtceu:lpg", 1),
            stressCapacity: 108,
            id: ''
        },
        {
            fluid: Fluid.of("gtceu:nitrobenzene", 1),
            stressCapacity: 428,
            id: 'nitrobenzene'
        }
    ];
    const gas_air = [
        {
            fluid: Fluid.of("gtceu:sulfuric_gas", 32),
            id: 'sulfuric_gas',
            stressCapacity: 375
        },
        {
            fluid: Fluid.of("gtceu:refinery_gas", 1),
            id: 'refinery_gas',
            stressCapacity: 56
        },
        {
            fluid: Fluid.of("gtceu:natural_gas", 8),
            id: 'natural_gas',
            stressCapacity: 41
        },
        {
            fluid: Fluid.of("gtceu:methane", 2),
            id: 'methane',
            stressCapacity: 57
        },
        {
            fluid: Fluid.of("gtceu:wood_gas", 8),
            id: 'wood_gas',
            stressCapacity: 48
        },
        {
            fluid: Fluid.of("gtceu:sulfuric_naphtha", 4),
            id: 'sulfuric_naphtha',
            stressCapacity: 41
        },
        {
            fluid: Fluid.of("gtceu:coal_gas", 1),
            id: 'coal_gas',
            stressCapacity: 24
        },
        {
            fluid: Fluid.of("gtceu:ethylene", 1),
            id: 'ethylene',
            stressCapacity: 33
        },
        {
            fluid: Fluid.of("gtceu:ethane", 4),
            id: 'ethane',
            stressCapacity: 170
        },
        {
            fluid: Fluid.of("gtceu:propene", 1),
            id: 'propene',
            stressCapacity: 48
        },
        {
            fluid: Fluid.of("gtceu:butadiene", 4),
            id: 'butadiene',
            stressCapacity: 162
        },
        {
            fluid: Fluid.of("gtceu:propane", 4),
            id: 'propane',
            stressCapacity: 233
        },
        {
            fluid: Fluid.of("gtceu:butane", 4),
            id: 'butane',
            stressCapacity: 297
        },
        {
            fluid: Fluid.of("gtceu:butene", 1),
            id: 'butene',
            stressCapacity: 65
        },
        {
            fluid: Fluid.of("gtceu:phenol", 1),
            id: 'phenol',
            stressCapacity: 72
        },
        {
            fluid: Fluid.of("gtceu:benzene", 1),
            id: 'benzene',
            stressCapacity: 89
        },
        {
            fluid: Fluid.of("gtceu:lpg", 1),
            id: 'lpg',
            stressCapacity: 81
        },
        {
            fluid: Fluid.of("gtceu:nitrobenzene", 1),
            id: 'nitrobenzene',
            stressCapacity: 321
        }
    ];
    gas.forEach(recipe =>{
        event.recipes.custommachinery.custom_machine('custommachinery:gas_generator', 20)
            .requireFluid(recipe.fluid, 'input')
            .produceSU(60, recipe.stressCapacity)
            .requireRedstone("0")
            .priority(0)
            .id(`galaxy_greg:su_gen_${recipe.id}`)
    })
    gas_o2.forEach(recipe => {
        event.recipes.custommachinery.custom_machine('custommachinery:gas_generator', 20)
            .requireFluid(recipe.fluid, 'input')
            .requireFluidTag('#forge:oxygen', 20, 'input_extra')
            .produceSU(120, recipe.stressCapacity)
            .requireRedstone("0")
            .priority(2)
            .id(`galaxy_greg:su_gen_${recipe.id}_oxygen_boost`)
    })
    gas_air.forEach(recipe => {
        event.recipes.custommachinery.custom_machine('custommachinery:gas_generator', 20)
            .requireFluid(recipe.fluid, 'input')
            .requireFluidTag('#forge:air', 50, 'input_extra')
            .produceSU(120, recipe.stressCapacity)
            .requireRedstone("0")
            .priority(1)
            .id(`galaxy_greg:su_gen_${recipe.id}_air_boost`)
    })
})