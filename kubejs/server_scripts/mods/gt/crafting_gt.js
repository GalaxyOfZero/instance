ServerEvents.recipes(event => {

    event.shapeless('2x gtceu:fireclay_dust', [
        'gtceu:brick_dust',
        'gtceu:clay_dust',
        'minecraft:water_bucket',
    ]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket').id('galaxy_greg:gtceu/fireclay_dust')

    event.shapeless('2x gtceu:fireclay_dust', [
        'gtceu:brick_dust',
        'gtceu:clay_dust',
        'exdeorum:porcelain_water_bucket',
    ]).replaceIngredient('exdeorum:porcelain_water_bucket', 'exdeorum:porcelain_bucket').id('galaxy_greg:gtceu/fireclay_dust_2')

    event.shaped('3x gtceu:compressed_coke_clay', ['ccc', 'sfs', 'sss'], {
        c: 'minecraft:clay_ball',
        s: 'minecraft:sand',
        f: Item.of('gtceu:brick_wooden_form').ignoreNBT()
    },).damageIngredient('gtceu:brick_wooden_form', 4).keepIngredient('gtceu:brick_wooden_form').id('gtceu:shaped/compressed_coke_clay')

    event.shaped('8x gtceu:compressed_fireclay', ['ccc', 'cfc', 'ccc'], {
        c: 'gtceu:fireclay_dust',
        f: Item.of('gtceu:brick_wooden_form').ignoreNBT()
    },).damageIngredient('gtceu:brick_wooden_form', 8).keepIngredient('gtceu:brick_wooden_form').id('galaxy_greg:gtceu/shaped/compressed_fireclay')

})