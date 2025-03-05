GTCEuStartupEvents.registry('gtceu:material', event => {
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

    // Flags
    const no_unify = GTMaterialFlags.NO_UNIFICATION;
    const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
    const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
    const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
    const explosive = GTMaterialFlags.EXPLOSIVE;
    const flammable = GTMaterialFlags.FLAMMABLE;
    const sticky = GTMaterialFlags.STICKY;
    const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;

    // Dust Flags
    const plates = GTMaterialFlags.GENERATE_PLATE;
    const dense_plate = GTMaterialFlags.GENERATE_DENSE;
    const rod = GTMaterialFlags.GENERATE_ROD;
    const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
    const frame = GTMaterialFlags.GENERATE_FRAME;
    const gear = GTMaterialFlags.GENERATE_GEAR;
    const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
    const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;

    // Ingot Flags
    const foil = GTMaterialFlags.GENERATE_FOIL;
    const ring = GTMaterialFlags.GENERATE_RING;
    const spring = GTMaterialFlags.GENERATE_SPRING;
    const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
    const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
    const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
    const rotor = GTMaterialFlags.GENERATE_ROTOR;
    const round = GTMaterialFlags.GENERATE_ROUND;
    const magnetic = GTMaterialFlags.IS_MAGNETIC;

    // Gem Flags
    const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
    const lens = GTMaterialFlags.GENERATE_LENS;

    // Fluid Flags
    const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
    const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
    const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;

    // Ore Flags
    const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;

    // Misc
    const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
    const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
    const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
    const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
    const no_working = GTMaterialFlags.NO_WORKING;
    const no_smashing = GTMaterialFlags.NO_SMASHING;
    const no_smelt = GTMaterialFlags.NO_SMELTING;
    const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
    const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
    const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
    const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

    const DULL = GTMaterialIconSet.DULL;
    const METALLIC = GTMaterialIconSet.METALLIC;
    const MAGNETIC = GTMaterialIconSet.MAGNETIC;
    const SHINY = GTMaterialIconSet.SHINY;
    const BRIGHT = GTMaterialIconSet.BRIGHT;
    const DIAMOND = GTMaterialIconSet.DIAMOND;
    const EMERALD = GTMaterialIconSet.EMERALD;
    const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
    const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
    const RUBY = GTMaterialIconSet.RUBY;
    const OPAL = GTMaterialIconSet.OPAL;
    const GLASS = GTMaterialIconSet.GLASS;
    const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
    const FINE = GTMaterialIconSet.FINE;
    const SAND = GTMaterialIconSet.SAND;
    const WOOD = GTMaterialIconSet.WOOD;
    const ROUGH = GTMaterialIconSet.ROUGH;
    const FLINT = GTMaterialIconSet.FLINT;
    const LIGNITE = GTMaterialIconSet.LIGNITE;
    const QUARTZ = GTMaterialIconSet.QUARTZ;
    const CERTUS = GTMaterialIconSet.CERTUS;
    const LAPIS = GTMaterialIconSet.LAPIS;
    const FLUID = GTMaterialIconSet.FLUID;
    const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;

    event.create('hepatizon').ingot(1).fluid().components('3x copper', '1x cobalt', '3x obsidian').color(0x4a0e66).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear).rotorStats(150, 120, 5.5, 35500).blastTemp(1500, 'high')
    event.create('manyullyn').ingot(1).fluid().components('4x cobalt', '1x netherite').color(0x7444ac).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear).rotorStats(180, 120, 3, 60000).blastTemp(1800, 'high')
    event.create('amethyst_bronze').ingot(1).fluid().components('1x bronze', '1x amethyst').color(0xbc74bc).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear).rotorStats(100, 120, 3, 20000).blastTemp(1000)
    event.create('slimesteel').ingot(1).fluid().color(0x42efef).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear).rotorStats(120, 100, 5.5, 25000).blastTemp(1000)//.components('1x steel', '1x skyslime', '1x seard_stone')
    })