GTCEuStartupEvents.registry('gtceu:machine', event => {
    const ulv = [GTValues.ULV]
    const lv = [GTValues.LV]
    const mv = [GTValues.MV]
    const hv = [GTValues.HV]
    const ev = [GTValues.EV]
    const iv = [GTValues.IV]
    const luv = [GTValues.LuV]
    const zpm = [GTValues.ZPM]
    const uv = [GTValues.UV]
    const uhv = [GTValues.UHV]
    const uev = [GTValues.UEV]
    const uiv = [GTValues.UIV]
    //const umv = [GTValues.UMV]
    const uxv = [GTValues.UXV]
    const max = [GTValues.MAX]

    event.create('auto_wooden_barrel', 'simple')
        .tiers(ulv)
        .definition((tier, builder) => {
            builder
                .recipeTypes('auto_barrel_compost','auto_barrel_fluid_mixing')
                .langValue('Auto Wooden Barrel')
                .workableCasingModel('galaxy_greg:block/machine/oak_barrel', 'gtceu:block/machines/item_collector')
        })

    event.create('auto_stone_barrel', 'simple')
        .tiers(ulv)
        .definition((tier, builder) => {
            builder
                .recipeType('auto_stone_barrel')
                .langValue('Auto Stone Barrel')
                .workableCasingModel('galaxy_greg:block/machine/stone_barrel', 'gtceu:block/machines/item_collector')
        })

    event.create('hammer_station', 'simple')
        .tiers(lv, mv, hv, iv, ev)
        .definition((tier, builder) => {
            builder
                .langValue(GTValues.VLVH[tier] + " Hammer Station")
                .recipeType('hammer_station')
                .workableTieredHullModel("gtceu:block/machines/cutter")
        })
})