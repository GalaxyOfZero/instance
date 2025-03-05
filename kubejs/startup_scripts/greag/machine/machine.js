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
                .workableCasingRenderer('galaxy_greg:block/machine/oak_barrel', 'gtceu:block/machines/item_collector', false)
        })

    event.create('auto_stone_barrel', 'simple')
        .tiers(ulv)
        .definition((tier, builder) => {
            builder
                .recipeType('auto_stone_barrel')
                .langValue('Auto Stone Barrel')
                .workableCasingRenderer('galaxy_greg:block/machine/stone_barrel', 'gtceu:block/machines/item_collector', false)
        })

    event.create('hammer_station', 'simple')
        .tiers(lv, mv, hv, iv, ev, luv, zpm, uv, uhv, uev, uiv, uxv, max)
        .definition((tier, builder) => {
            builder
                .langValue(GTValues.VLVH[tier] + " Hammer Station")
                .recipeType('hammer_station')
                .workableTieredHullRenderer("gtceu:block/machines/cutter")
        })
})