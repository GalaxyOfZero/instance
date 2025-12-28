ServerEvents.recipes(event =>{
    const ulv = GTValues.ULV;
    const lv = GTValues.LV;
    const mv = GTValues.MV;
    const hv = GTValues.HV;
    const ev = GTValues.EV;
    const iv = GTValues.IV;
    const luv = GTValues.LuV;
    const zpm = GTValues.ZPM;
    const uv = GTValues.UV;
    const uhv = GTValues.UHV;
    const uev = GTValues.UEV;
    const uiv = GTValues.UIV;
    const uxv = GTValues.UXV;
    const opv = GTValues.OpV;
    const max = GTValues.MAX;

    const v = GTValues.V;
    const va = GTValues.VA;
    const vh = GTValues.VH;
    const vha = GTValues.VHA;

    const assembler = event.recipes.gtceu.assembler

    const remove_id = [
        'crucible',
        'press',
        'centrifuge',
        'insolator', 
        'smelter',
        'pulverizer',
        'sawmill', 
        'furnace',
        'crystallizer',
        'brewer',
        'bottler',
        'pyrolyzer',
        'refinery',
        'smelter_recycle',
        'pulverizer_recycle',
        'chiller',
        'furnace',
        'advanced_refinery',
        'nitratic_igniter',
        'fluid_mixer', 
        'component_assembly',
        'endothermic_dehydrator',

    ]
    const remove_output =[
        /thermal:bronze_.*/,
        /thermal:silver_.*/,
        /thermal:tin_.*/,
        /thermal:lead_.*/,
        /thermal:nickel_.*/,
        /thermal:electrum_.*/,
        /thermal:invar_.*/,
        /thermal:.*_gear/,
        /thermal:.*_dust/,
        /thermal:.*_sulfur/,
        /thermal:.*_rockwool/,
        /thermal:press_.*/,
        /thermal:chiller_.*/,

        /thermalendergy:melodium_.*/,
        /thermalendergy:stellarium_.*/,
        /thermal_extra:dragonsteel_.*/,
        /thermal_extra:shellite_.*/,
        /thermal_extra:twinite_.*/,
        /thermalendergy:prismalium_.*/,
        /thermal:enerium_.*/,
        /thermal:signalum_.*/,
        /thermal:enderium_.*/,
        /thermal:lumium_.*/,
        /thermal:constantan_.*/,
        /thermal_extra:soul_infused_.*/,
        /thermal.*_grenade/,
        /thermal.*_tnt/,

        /thermal_extra:area_radius_augment_.*/,
        /thermal_extra:potion_amplifier_augment_.*/,
        /thermal_extra:machine_speed_augment_.*/,
        /thermal_extra:machine_output_augment_.*/,
        /thermal_extra:machine_catalyst_augment_.*/,

        /thermal_extra:signalum_.*/,
        /thermal_extra:enderium_.*/,
        /thermal_extra:lumium_.*/,
        /thermal_extra:abyssal_.*/,
        /thermal_extra:.*_rod/,
        /thermal:dynamo*/,
        /thermal:machine_.*/,
        /thermal:rf_coil_.*/,


        'thermal:machine_chiller',
        'thermal:machine_crystallizer',
        'thermal:machine_brewer',
        'thermal:machine_centrifuge',
        'thermal:machine_insolator',
        'thermal:machine_smelter', 
        'thermal:machine_pulverizer',
        'thermal:machine_sawmill',
        'thermal:machine_furnace', 
        'thermal:machine_bottler',
        'thermal:machine_pyrolyzer',
        'thermal:machine_refinery',
        'thermal:machine_crafter',
        'thermal:machine_press',
        'thermal:machine_crucible',
        'thermal:saw_blade',
        'thermal:drill_head',
        'thermal:fluid_duct_windowed',
        'thermal:fluid_duct',
        'thermal:energy_duct',
        'thermal:niter_block',
        'thermal:sulfur_block',
        'thermal:cinnabar_block',
        'thermal:apatite_block',
        'thermal:bitumen',
        'thermal:cinnabar_dust',
        'thermal:niter',
        'thermal:cinnabar',
        'thermal:sawdust',
        'thermal:coal_coke',
        'thermal:apatite',
        'thermal:apatite_dust',
        'thermal:rich_slag',
        'thermal:slag',
        'thermal:tar',
        'thermal:satchel',
        'thermal:lock',
        'thermal:wrench',
        'thermal:detonator',
        'thermal:florb',
        'thermal:slot_seal',
        'thermal:area_radius_augment',
        'thermal:machine_catalyst_augment',
        'thermal:machine_null_augment',
        'thermal:machine_cycle_augment',
        'thermal:filter_attachment',
        'thermal:turbo_servo_attachment',
        'thermal:energy_limiter_attachment',
        'thermal:servo_attachment',
        'thermal:redprint',
        'thermal:sapphire',
        'thermal:ruby',
        'thermal:slag_bricks', 
        'thermal:device_soil_infuser', 
        'thermal:item_filter_augment', 
        'thermal:fluid_tank_creative_augment',
        'thermal:xp_storage_augment',
        'thermal:side_config_augment',
        'thermal:rs_control_augment',
        'thermal:energy_cell',
        'thermal:energy_cell_frame',
        'thermal:redstone_servo',
        'thermal:rf_coil',
    ]
    remove_output.forEach((remove)=>{
        event.remove({output:`${remove}`})
    })
    remove_id.forEach((id)=>{
        event.remove({type:`thermal:${id}`})
        event.remove({type:`thermal_extra:${id}`})
    })
    event.remove({ id: 'thermal:rubber_from_vine'})
    event.remove({ id: 'thermal:rubber_from_dandelion'})
    event.remove({ id: 'thermal:fire_charge/obsidian_glass_2'})

    //event.recipes.gtceu.brewery('sunflower_oil')
    //.itemInputs('16x minecraft:sunflower')
    //.outputFluids('thermal_extra:sunflower_oil 500')
    //.duration(400)
    //.EUt(28);

    //event.recipes.gtceu.mixer('crystalized_sunflower_oil')
    //.itemInputs('minecraft:amethyst_shard')
    //.inputFluids('thermal_extra:sunflower_oil 1000')
    //.outputFluids('thermal_extra:crystallized_sunflower_oil 750')
    //.duration(600)
    //.EUt(28);

    //event.recipes.gtceu.distillery('sunflower_oil_refined')
    //.inputFluids('thermal_extra:crystallized_sunflower_oil 1000')
    //.outputFluids('thermal_extra:refined_sunflower_oil 600')
    //.circuit(0)
    //.duration(600)
    //.EUt(325);

    //event.recipes.gtceu.distillery('sunflower_oil_seed').inputFluids('thermal_extra:crystallized_sunflower_oil 1000').outputFluids('gtceu:seed_oil 400').circuit(1).duration(600).EUt(325);

    // Dynamo upgrades
    //event.remove({ output: /thermal.*augment.*/ });
    //event.remove({ output: /thermalendergy:endergy.*/ });

    // Upgrade augments
    // event.recipes.gtceu.assembler('lv_kit')
    //     .itemInputs('4x gtceu:invar_plate', 'thermal:obsidian_glass', 'gtceu:bronze_gear', '#gtceu:circuits/lv')
    //     .itemOutputs(Item.of('kubejs:lv_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:4f}}'))
    //     .duration(600)
    //     .EUt(28);

    // event.recipes.gtceu.assembler('upgrade_augment_2')
    //     .itemInputs('4x gtceu:electrum_plate', 'thermal:signalum_glass', 'gtceu:steel_gear', '#gtceu:circuits/mv')
    //     .inputFluids('gtceu:redstone 720')
    //     .itemOutputs(Item.of('kubejs:mv_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:16f}}'))
    //     .duration(600)
    //     .EUt(112);

    // event.recipes.gtceu.assembler('upgrade_augment_3')
    //     .itemInputs('4x gtceu:lumium_plate', 'thermal:lumium_glass', 'gtceu:aluminium_gear', '#gtceu:circuits/hv')
    //     .inputFluids('gtceu:glowstone 720')
    //     .itemOutputs(Item.of('kubejs:hv_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:64f}}'))
    //     .duration(600)
    //     .EUt(496);

    // event.recipes.gtceu.assembler('upgrade_augment_4')
    //     .itemInputs('4x gtceu:soul_infused_plate', 'thermal:enderium_glass', 'gtceu:stainless_steel_gear', '#gtceu:circuits/ev')
    //     .inputFluids('thermal:ender 750')
    //     .itemOutputs(Item.of('kubejs:ev_upgrade_kit', '{AugmentData:{Type: Upgrade, BaseMod:256f}}'))
    //     .duration(600)
    //     .EUt(1625);


    //event.smelting('minecraft:slime_ball', 'thermal:slime_mushroom_spores');

    event.replaceInput({ id: 'thermal:device_water_gen' },
        'minecraft:copper_ingot',
        'gtceu:lead_ingot'
    );
    event.replaceInput({ id: 'thermal:device_water_gen' },
        'minecraft:iron_ingot',
        'minecraft:copper_ingot'
    );
    // event.remove({ id: 'thermal:redstone_servo' })

    // event.shaped(Item.of('thermal:redstone_servo', 1), [
    //     'RPR',
    //     ' P ',
    //     'RPR'
    // ], {
    //     R: 'minecraft:redstone',
    //     P: 'gtceu:iron_plate'
    // }
    // );
    // event.shaped(Item.of('thermal:rf_coil'), [
    //     ' RP',
    //     'RBR',
    //     'PR '
    // ], {
    //     R: 'gtceu:gold_rod',
    //     P: 'gtceu:gold_plate',
    //     B: 'minecraft:redstone_block'
    //});

    event.replaceInput({ id: 'thermal:device_fisher' },
        '#forge:gears/copper',
        'gtceu:bronze_gear'
    );

    event.replaceInput({ id: 'thermal:device_rock_gen' },
        '#forge:gears/constantan',
        'gtceu:bronze_gear'
    );

    event.replaceInput({ id: 'thermal:device_potion_diffuser' },
        '#forge:gears/constantan',
        'gtceu:bronze_gear'
    );

    event.recipes.gtceu.extractor('molten_ender')
        .itemInputs('minecraft:ender_pearl')
        .outputFluids(Fluid.of("tconstruct:molten_ender"))
        .duration(600)
        .EUt(v[lv]);

    event.recipes.gtceu.fluid_solidifier('hardened_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids(Fluid.of('minecraft:lava', 250))
        .itemOutputs('thermal:obsidian_glass')
        .duration(240)
        .EUt(v[lv])

    event.recipes.gtceu.fluid_solidifier('signalum_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids(Fluid.of('gtceu:molten_signalum', 144))
        .itemOutputs('thermal:signalum_glass')
        .duration(480)
        .EUt(v[lv]);

    event.recipes.gtceu.fluid_solidifier('lumium_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids(('gtceu:molten_lumium 144'))
        .itemOutputs('thermal:lumium_glass')
        .duration(960)
        .EUt(v[lv]);

    event.recipes.gtceu.fluid_solidifier('enderium_glass')
        .itemInputs('gtceu:tempered_glass')
        .inputFluids('gtceu:enderium 144')
        .itemOutputs('thermal:enderium_glass')
        .duration(1920)
        .EUt(112);

    // event.recipes.gtceu.fluid_solidifier('soul_infused_glass')
    //     .itemInputs('gtceu:laminated_glass')
    //     .inputFluids('gtceu:soul_infused 144')
    //     .itemOutputs('thermal_extra:soul_infused_glass')
    //     .duration(3840)
    //     .EUt(28);

    // event.recipes.gtceu.fluid_solidifier('shellite_glass')
    //     .itemInputs('gtceu:laminated_glass')
    //     .inputFluids('gtceu:shellite 144')
    //     .itemOutputs('thermal_extra:shellite_glass')
    //     .duration(7680)
    //     .EUt(28);

    // event.recipes.gtceu.fluid_solidifier('twinite_glass')
    //     .itemInputs('gtceu:laminated_glass')
    //     .inputFluids('gtceu:twinite 144')
    //     .itemOutputs('thermal_extra:twinite_glass')
    //     .duration(15360)
    //     .EUt(28);

    // event.recipes.gtceu.fluid_solidifier('dragonsteel_glass')
    //     .itemInputs('gtceu:fusion_glass')
    //     .inputFluids('gtceu:dragonsteel 144')
    //     .itemOutputs('thermal_extra:dragonsteel_glass')
    //     .duration(30720)
    //     .EUt(28);

    // event.shaped(Item.of('thermal:rf_coil_augment'), [
    //     ' G ',
    //     'SCS',
    //     ' G '
    // ], {
    //     G: 'gtceu:gold_plate',
    //     S: 'gtceu:silver_plate',
    //     C: 'thermal:rf_coil'
    // });

    // event.recipes.gtceu.alloy_smelter('rf_coil_2')
    //     .itemInputs('thermal:rf_coil_augment', '2x gtceu:soul_infused_gear')
    //     .itemOutputs('thermal_extra:rf_coil_augment_1')
    //     .duration(600)
    //     .EUt(28);

    // event.recipes.gtceu.alloy_smelter('rf_coil_3')
    //     .itemInputs('thermal_extra:rf_coil_augment_1', '2x gtceu:enderium_gear')
    //     .itemOutputs('thermal_extra:rf_coil_augment_2')
    //     .duration(600)
    //     .EUt(112);

    // event.recipes.gtceu.alloy_smelter('rf_coil_4')
    //     .itemInputs('thermal_extra:rf_coil_augment_2', '2x gtceu:shellite_gear')
    //     .itemOutputs('thermal_extra:rf_coil_augment_3')
    //     .duration(600)
    //     .EUt(496);

    // event.recipes.gtceu.alloy_smelter('rf_coil_5')
    //     .itemInputs('thermal_extra:rf_coil_augment_3', '2x gtceu:twinite_gear')
    //     .itemOutputs('thermal_extra:rf_coil_augment_4')
    //     .duration(600)
    //     .EUt(1625);

    // event.recipes.gtceu.alloy_smelter('rf_coil_6')
    //     .itemInputs('thermal_extra:rf_coil_augment_4', '2x gtceu:dragonsteel_gear')
    //     .itemOutputs('thermal_extra:rf_coil_augment_5')
    //     .duration(600)
    //     .EUt(6500);

    // event.shaped(Item.of('thermal:rf_coil_storage_augment'), [
    //     ' S ',
    //     'GCG',
    //     ' G '
    // ], {
    //     G: 'gtceu:gold_plate',
    //     S: 'gtceu:silver_plate',
    //     C: 'thermal:rf_coil'
    // });

    // event.recipes.gtceu.alloy_smelter('rf_coil_storage_2')
    //     .itemInputs('thermal:rf_coil_storage_augment', '2x gtceu:soul_infused_gear')
    //     .itemOutputs('thermal_extra:rf_coil_storage_augment_1')
    //     .duration(600)
    //     .EUt(28);

    // event.recipes.gtceu.alloy_smelter('rf_coil_storage_3')
    //     .itemInputs('thermal_extra:rf_coil_storage_augment_1', 'gtceu:enderium_gear')
    //     .itemOutputs('thermal_extra:rf_coil_storage_augment_2')
    //     .duration(600)
    //     .EUt(112);

    // event.recipes.gtceu.alloy_smelter('rf_coil_storage_4')
    //     .itemInputs('thermal_extra:rf_coil_storage_augment_2', '2x gtceu:shellite_gear')
    //     .itemOutputs('thermal_extra:rf_coil_storage_augment_3')
    //     .duration(600)
    //     .EUt(496);

    // event.recipes.gtceu.alloy_smelter('rf_coil_storage_5')
    //     .itemInputs('thermal_extra:rf_coil_storage_augment_3', '2x gtceu:twinite_gear')
    //     .itemOutputs('thermal_extra:rf_coil_storage_augment_4')
    //     .duration(600)
    //     .EUt(1625);

    // event.recipes.gtceu.alloy_smelter('rf_coil_storage_6')
    //     .itemInputs('thermal_extra:rf_coil_storage_augment_4', '2x gtceu:dragonsteel_gear')
    //     .itemOutputs('thermal_extra:rf_coil_storage_augment_5')
    //     .duration(600)
    //     .EUt(6500);

    // event.shaped(Item.of('thermal:rf_coil_xfer_augment'), [
    //     ' S ',
    //     'SCS',
    //     ' G '
    // ], {
    //     G: 'gtceu:gold_plate',
    //     S: 'gtceu:silver_plate',
    //     C: 'thermal:rf_coil'
    // });

    // event.recipes.gtceu.alloy_smelter('rf_coil_xfer_2')
    //     .itemInputs('thermal:rf_coil_xfer_augment', '2x gtceu:soul_infused_gear')
    //     .itemOutputs('thermal_extra:rf_coil_xfer_augment_1')
    //     .duration(600)
    //     .EUt(28);

    // event.recipes.gtceu.alloy_smelter('rf_coil_xfer_3')
    //     .itemInputs('thermal_extra:rf_coil_xfer_augment_1', '2x gtceu:enderium_gear')
    //     .itemOutputs('thermal_extra:rf_coil_xfer_augment_2')
    //     .duration(2400)
    //     .EUt(112);

    // event.recipes.gtceu.alloy_smelter('rf_coil_xfer_4')
    //     .itemInputs('thermal_extra:rf_coil_xfer_augment_2', '2x gtceu:shellite_gear')
    //     .itemOutputs('thermal_extra:rf_coil_xfer_augment_3')
    //     .duration(600)
    //     .EUt(496);

    // event.recipes.gtceu.alloy_smelter('rf_coil_xfer_5')
    //     .itemInputs('thermal_extra:rf_coil_xfer_augment_3', '2x gtceu:twinite_gear')
    //     .itemOutputs('thermal_extra:rf_coil_xfer_augment_4')
    //     .duration(600)
    //     .EUt(1625);

    // event.recipes.gtceu.alloy_smelter('rf_coil_xfer_6')
    //     .itemInputs('thermal_extra:rf_coil_xfer_augment_4', '2x gtceu:dragonsteel_gear')
    //     .itemOutputs('thermal_extra:rf_coil_xfer_augment_5')
    //     .duration(600)
    //     .EUt(6500);

    // event.shaped(Item.of('thermal:fluid_tank_augment'), [
    //     'RIR',
    //     'IGI',
    //     'RIR'
    // ], {
    //     R: 'gtceu:wrought_iron_plate',
    //     I: 'gtceu:rubber_plate',
    //     G: 'thermal:obsidian_glass'
    // });

    // event.recipes.gtceu.alloy_smelter('fluid_tank_2')
    //     .itemInputs('thermal:fluid_tank_augment', '2x gtceu:soul_infused_gear')
    //     .itemOutputs('thermal_extra:fluid_tank_augment_1')
    //     .duration(600)
    //     .EUt(28);

    // event.recipes.gtceu.alloy_smelter('fluid_tank_3')
    //     .itemInputs('thermal_extra:fluid_tank_augment_1', '2x gtceu:enderium_gear')
    //     .itemOutputs('thermal_extra:fluid_tank_augment_2')
    //     .duration(600)
    //     .EUt(112);

    // event.recipes.gtceu.alloy_smelter('fluid_tank_4')
    //     .itemInputs('thermal_extra:fluid_tank_augment_2', '2x gtceu:shellite_gear')
    //     .itemOutputs('thermal_extra:fluid_tank_augment_3')
    //     .duration(600)
    //     .EUt(496);

    // event.recipes.gtceu.alloy_smelter('fluid_tank_5')
    //     .itemInputs('thermal_extra:fluid_tank_augment_3', '2x gtceu:twinite_gear')
    //     .itemOutputs('thermal_extra:fluid_tank_augment_4')
    //     .duration(600)
    //     .EUt(1625);

    // event.recipes.gtceu.alloy_smelter('fluid_tank_6')
    //     .itemInputs('thermal_extra:fluid_tank_augment_4', '2x gtceu:dragonsteel_gear')
    //     .itemOutputs('thermal_extra:fluid_tank_augment_5')
    //     .duration(600)
    //     .EUt(6500);

    // event.recipes.gtceu.fluid_solidifier('fluid_tank_7')
    //     .itemInputs('thermal_extra:fluid_tank_augment_5')
    //     .inputFluids('thermal_extra:refined_sunflower_oil 1000')
    //     .itemOutputs('thermal_extra:fluid_tank_augment_6')
    //     .duration(600)
    //     .EUt(6500);

    // event.shaped(Item.of('thermal:fluid_cell_frame'), [
    //     'BTB',
    //     'TGT',
    //     'BTB'
    // ], {
    //     B: 'gtceu:bronze_plate',
    //     T: 'gtceu:tin_plate',
    //     G: '#forge:glass'
    // });

    // event.shaped(Item.of('thermal:machine_frame'), [
    //     'SSS',
    //     'S S',
    //     'BBB'
    // ], {
    //     S: 'gtceu:double_stainless_steel_plate',
    //     B: 'gtceu:double_black_steel_plate'
    // });

    // event.recipes.create.item_application('thermal:fluid_cell', ['thermal:fluid_cell_frame', 'create:fluid_tank']);

    // event.recipes.gtceu.alloy_smelter('fluid_cell')
    //     .itemInputs('thermal:fluid_cell_frame', 'create:fluid_tank')
    //     .itemOutputs('thermal:fluid_cell')
    //     .duration(80)
    //     .EUt(28);

    // event.recipes.create.item_application('thermal:energy_cell', ['thermal:energy_cell_frame', 'minecraft:redstone_block']);

    // event.recipes.gtceu.alloy_smelter('energy_cell')
    //     .itemInputs('thermal:energy_cell_frame', 'minecraft:redstone_block')
    //     .itemOutputs('thermal:energy_cell')
    //     .duration(80)
    //     .EUt(28);

    // event.recipes.gtceu.assembler('boiler_pipe')
    //     .itemInputs('gtceu:tempered_glass', '3x gtceu:bronze_ring')
    //     .itemOutputs('systeams:boiler_pipe')
    //     .duration(120)
    //     .EUt(112);

    // event.recipes.gtceu.assembler('steam_dynamo')
    //     .itemInputs('gtceu:lv_machine_hull', 'systeams:boiler_pipe', 'gtceu:black_steel_gear', 'gtceu:lead_rotor')
    //     .itemOutputs('systeams:steam_dynamo')
    //     .duration(320)
    //     .EUt(112);
    assembler('device_rock_gen').itemInputs('gtceu:lv_machine_hull', '4x gtceu:invar_ingot', 'gtceu:bronze_gear', '2x thermal:obsidian_glass', 'gtceu:lv_conveyor_module').itemOutputs('thermal:device_rock_gen').duration(320).EUt(v[lv]);

    assembler('device_water_gen').itemInputs('gtceu:lv_hermetic_casing', '4x gtceu:lead_ingot', 'minecraft:copper_ingot', '2x thermal:obsidian_glass', 'gtceu:lv_electric_pump').itemOutputs('thermal:device_water_gen').EUt(v[lv]).duration(400)

    const recipes = [
        {
            output: 'thermal:device_rock_gen',
            pattern: ['pcp', 'ghg', 'pip'],
            key: {
                "p": 'gtceu:invar_ingot',
                "c": 'gtceu:bronze_gear',
                'h': 'gtceu:lv_machine_hull',
                'g': 'thermal:obsidian_glass',
                'i': 'gtceu:lv_conveyor_module'
            },
            id: 'thermal:device_rock_gen'
        },
        {
            output: 'thermal:device_water_gen',
            pattern: ['pcp', 'ghg', 'pip'],
            key: {
                "p": 'gtceu:lead_ingot',
                "c": 'minecraft:copper_ingot',
                'h': 'gtceu:lv_hermetic_casing',
                'g': 'thermal:obsidian_glass',
                'i': 'gtceu:lv_electric_pump'
            },
            id: 'thermal:device_water_gen'
        }
    ];



    recipes.forEach(recipe => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })

});