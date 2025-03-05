ServerEvents.recipes( event => {

    const replaceInput = [
        {
            input: 'tconstruct:rose_gold_ingot',
            replace: 'gtceu:rose_gold_ingot'
        },
        {
            input: 'tconstruct:rose_gold_nugget',
            replace: 'gtceu:rose_gold_nugget'
        },
        {
            input: 'tconstruct:rose_gold_block',
            replace: 'gtceu:rose_gold_block'
        },
        {
            input: 'tconstruct:cobalt_ingot',
            replace: 'gtceu:cobalt_ingot'
        },
        {
            input: 'tconstruct:cobalt_nugget',
            replace: 'gtceu:cobalt_nugget'
        },
        {
            input: 'tconstruct:cobalt_block',
            replace: 'gtceu:cobalt_block'
        },
        {
            input: 'tconstruct:raw_cobalt_block',
            replace: 'gtceu:raw_cobalt_block'
        },
        {
            input: 'tconstruct:raw_cobalt',
            replace: 'gtceu:raw_cobalt'
        },
        {
            input: 'tconstruct:manyullyn_ingot',
            replace: 'gtceu:manyullyn_ingot'
        },
        {
            input: 'tconstruct:manyullyn_nugget',
            replace: 'gtceu:manyullyn_nugget'
        },
        {
            input: 'tconstruct:manyullyn_block',
            replace: 'gtceu:manyullyn_block'
        },
        {
            input: 'tconstruct:hepatizon_ingot',
            replace: 'gtceu:hepatizon_ingot'
        },
        {
            input: 'tconstruct:hepatizon_nugget',
            replace: 'gtceu:hepatizon_nugget'
        },
        {
            input: 'tconstruct:hepatizon_block',
            replace: 'gtceu:hepatizon_block'
        },
        {
            input: 'tconstruct:amethyst_bronze_ingot',
            replace: 'gtceu:amethyst_bronze_ingot'
        },
        {
            input: 'tconstruct:amethyst_bronze_nugget',
            replace: 'gtceu:amethyst_bronze_nugget'
        },
        {
            input: 'tconstruct:amethyst_bronze_block',
            replace: 'gtceu:amethyst_bronze_block'
        },
        {
            input: 'tconstruct:slimesteel_ingot',
            replace: 'gtceu:slimesteel_ingot'
        },
        {
            input: 'tconstruct:slimesteel_nugget',
            replace: 'gtceu:slimesteel_nugget'
        },
        {
            input: 'tconstruct:slimesteel_block',
            replace: 'gtceu:slimesteel_block'
        },
        {
            input: 'create:brass_ingot',
            replace: 'gtceu:brass_ingot'
        },
        {
            input: 'create:brass_nugget',
            replace: 'gtceu:brass_nugget'
        },
        {
            input: 'create:brass_block',
            replace: 'gtceu:brass_block'
        },
        {
            input: 'create:zinc_ingot',
            replace: 'gtceu:zinc_ingot'
        },
        {
            input: 'create:zinc_nugget',
            replace: 'gtceu:zinc_nugget'
        },
        {
            input: 'create:zinc_block',
            replace: 'gtceu:zinc_block'
        },
        {
            input: 'create:iron_sheet',
            replace: 'gtceu:iron_plate'
        },
        {
            input: 'create:golden_sheet',
            replace: 'gtceu:gold_plate'
        },
        {
            input: 'create:copper_sheet',
            replace: 'gtceu:copper_plate'
        },
        {
            input: 'create:brass_sheet',
            replace: 'gtceu:brass_plate'
        },
        {
            input: 'tconstruct:grout',
            replace: 'galaxy_greg:compressed_grout'
        },
    ];
    replaceInput.forEach(input =>{
        event.replaceInput({}, input.input, input.replace)
        event.replaceOutput({}, input.input, input.replace)
    })
})