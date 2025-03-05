ServerEvents.recipes(event =>{
    const gas = [
        {
            fluid: Fluid.of("gtceu:sulfuric_gas", 32),
            stressCapacity: 250
        },
        {
            fluid: Fluid.of("gtceu:refinery_gas", 1),
            stressCapacity: 37
        },
        {
            fluid: Fluid.of("gtceu:natural_gas", 8),
            stressCapacity: 27
        },
        {
            fluid: Fluid.of("gtceu:methane", 2),
            stressCapacity: 38
        },
        {
            fluid: Fluid.of("gtceu:wood_gas", 8),
            stressCapacity: 32
        },
        {
            fluid: Fluid.of("gtceu:sulfuric_naphtha", 4),
            stressCapacity: 27
        },
        {
            fluid: Fluid.of("gtceu:coal_gas", 1),
            stressCapacity: 16
        },
        {
            fluid: Fluid.of("gtceu:ethylene", 1),
            stressCapacity: 22
        },
        {
            fluid: Fluid.of("gtceu:ethane", 4),
            stressCapacity: 113
        },
        {
            fluid: Fluid.of("gtceu:propene", 1),
            stressCapacity: 32
        },
        {
            fluid: Fluid.of("gtceu:butadiene", 4),
            stressCapacity: 108
        },
        {
            fluid: Fluid.of("gtceu:propane", 4),
            stressCapacity: 155
        },
        {
            fluid: Fluid.of("gtceu:butane", 4),
            stressCapacity: 198
        },
        {
            fluid: Fluid.of("gtceu:butene", 1),
            stressCapacity: 43
        },
        {
            fluid: Fluid.of("gtceu:phenol", 1),
            stressCapacity: 48
        },
        {
            fluid: Fluid.of("gtceu:benzene", 1),
            stressCapacity: 59
        },
        {
            fluid: Fluid.of("gtceu:lpg", 1),
            stressCapacity: 54
        },
        {
            fluid: Fluid.of("gtceu:nitrobenzene", 1),
            stressCapacity: 214
        }
    ];
    const gas_o2 = [
        {
            fluid: Fluid.of("gtceu:sulfuric_gas", 32),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 500
        },
        {
            fluid: Fluid.of("gtceu:refinery_gas", 1),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 74
        },
        {
            fluid: Fluid.of("gtceu:natural_gas", 8),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 54
        },
        {
            fluid: Fluid.of("gtceu:methane", 2),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 76
        },
        {
            fluid: Fluid.of("gtceu:wood_gas", 8),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 64
        },
        {
            fluid: Fluid.of("gtceu:sulfuric_naphtha", 4),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 54
        },
        {
            fluid: Fluid.of("gtceu:coal_gas", 1),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 32
        },
        {
            fluid: Fluid.of("gtceu:ethylene", 1),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 44
        },
        {
            fluid: Fluid.of("gtceu:ethane", 4),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 226
        },
        {
            fluid: Fluid.of("gtceu:propene", 1),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 64
        },
        {
            fluid: Fluid.of("gtceu:butadiene", 4),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 216
        },
        {
            fluid: Fluid.of("gtceu:propane", 4),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 310
        },
        {
            fluid: Fluid.of("gtceu:butane", 4),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 396
        },
        {
            fluid: Fluid.of("gtceu:butene", 1),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 86
        },
        {
            fluid: Fluid.of("gtceu:phenol", 1),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 96
        },
        {
            fluid: Fluid.of("gtceu:benzene", 1),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 118
        },
        {
            fluid: Fluid.of("gtceu:lpg", 1),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 108
        },
        {
            fluid: Fluid.of("gtceu:nitrobenzene", 1),
            fluid2: Fluid.of('gtceu:oxygen'),
            stressCapacity: 428
        }
    ];
    const gas_air = [
        {
            fluid: Fluid.of("gtceu:sulfuric_gas", 32),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 375
        },
        {
            fluid: Fluid.of("gtceu:refinery_gas", 1),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 56
        },
        {
            fluid: Fluid.of("gtceu:natural_gas", 8),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 41
        },
        {
            fluid: Fluid.of("gtceu:methane", 2),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 57
        },
        {
            fluid: Fluid.of("gtceu:wood_gas", 8),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 48
        },
        {
            fluid: Fluid.of("gtceu:sulfuric_naphtha", 4),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 41
        },
        {
            fluid: Fluid.of("gtceu:coal_gas", 1),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 24
        },
        {
            fluid: Fluid.of("gtceu:ethylene", 1),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 33
        },
        {
            fluid: Fluid.of("gtceu:ethane", 4),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 170
        },
        {
            fluid: Fluid.of("gtceu:propene", 1),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 48
        },
        {
            fluid: Fluid.of("gtceu:butadiene", 4),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 162
        },
        {
            fluid: Fluid.of("gtceu:propane", 4),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 233
        },
        {
            fluid: Fluid.of("gtceu:butane", 4),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 297
        },
        {
            fluid: Fluid.of("gtceu:butene", 1),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 65
        },
        {
            fluid: Fluid.of("gtceu:phenol", 1),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 72
        },
        {
            fluid: Fluid.of("gtceu:benzene", 1),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 89
        },
        {
            fluid: Fluid.of("gtceu:lpg", 1),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 81
        },
        {
            fluid: Fluid.of("gtceu:nitrobenzene", 1),
            fluid2: Fluid.of('gtceu:air'),
            stressCapacity: 321
        }
    ];
    gas.forEach(recipe =>{
        event.recipes.custommachinery.custom_machine('custommachinery:gas_generator', 20)
            .requireFluid(recipe.fluid)
            //.requireFluid(recipe.fluid2, recipe.amount)
            .produceSU(60, recipe.stressCapacity)
            .requireRedstone("0")
    })
    gas_o2.forEach(recipe => {
        event.recipes.custommachinery.custom_machine('custommachinery:gas_generator', 20)
            .requireFluid(recipe.fluid)
            .requireFluid(recipe.fluid2)
            .produceSU(120, recipe.stressCapacity)
            .requireRedstone("0")
    })
    gas_air.forEach(recipe => {
        event.recipes.custommachinery.custom_machine('custommachinery:gas_generator', 20)
            .requireFluid(recipe.fluid)
            .requireFluid(recipe.fluid2)
            .produceSU(120, recipe.stressCapacity)
            .requireRedstone("0")
    })
})