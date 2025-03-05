ServerEvents.recipes(event =>{

    exdeorum.removeDefaultSieveRecipes(event)
    
    const dirt = 'minecraft:dirt';
    const gravel = '#forge:gravel';
    const sand = '#minecraft:sand';
    const dust = 'exdeorum:dust';
    const black = 'exdeorum:crushed_blackstone';
    const moss = 'minecraft:moss_block'
    const mud =  'minecraft:mud'
    const rotten_dirt = 'minecraft:rooted_dirt'
    const mycelium = 'minecraft:mycelium'
    const coars = 'minecraft:coarse_dirt'

    function sieve(mesh, roll, chance, input, result) {
        event.custom(
            {
                "type": "exdeorum:sieve",
                "ingredient": input,
                "mesh": mesh,
                "result": result,
                "result_amount": {
                    "type": "minecraft:binomial",
                    "n": roll,
                    "p": chance
                }
            }
        )

    }

    sieve('exdeorum:string_mesh', 1.0, 0.075, dirt, 'minecraft:cactus');
    sieve('exdeorum:string_mesh', 1.0, 0.05, dirt, 'minecraft:sunflower');
    sieve('exdeorum:string_mesh', 1.0, 0.05, dirt, 'minecraft:cocoa_beans');
    sieve('exdeorum:string_mesh', 1.0, 0.35, dirt, 'minecraft:pumpkin_seeds');
    sieve('exdeorum:string_mesh', 1.0, 0.7, dirt, 'minecraft:wheat_seeds');
    sieve('exdeorum:string_mesh', 1.0, 0.35, dirt, 'minecraft:melon_seeds');
    sieve('exdeorum:string_mesh', 1.0, 0.15, dirt, 'minecraft:fern');
    sieve('exdeorum:string_mesh', 1.0, 0.05, dirt, 'minecraft:large_fern');
    sieve('exdeorum:string_mesh', 1.0, 0.15, dirt, 'exdeorum:grass_seeds');


    //rotten dirt
    sieve('exdeorum:string_mesh', 1.0, 0.35, rotten_dirt, 'minecraft:beetroot_seeds');
    sieve('exdeorum:string_mesh', 1.0, 0.1, rotten_dirt, 'minecraft:sweet_berries');
    sieve('exdeorum:string_mesh', 1.0, 0.1, rotten_dirt, 'minecraft:glow_berries');
    sieve('exdeorum:string_mesh', 1.0, 0.05, rotten_dirt, 'minecraft:potato');
    sieve('exdeorum:string_mesh', 1.0, 0.05, rotten_dirt, 'minecraft:carrot');

    //moss
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'minecraft:oak_sapling');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'minecraft:dark_oak_sapling');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'minecraft:spruce_sapling');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'minecraft:birch_sapling');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'minecraft:jungle_sapling');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'minecraft:cherry_sapling');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'thermal:rubberwood_sapling');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'minecraft:azalea');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'minecraft:flowering_azalea');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'minecraft:acacia_sapling');
    sieve('exdeorum:string_mesh', 1.0, 0.075, moss, 'gtceu:rubber_sapling');

    //mud
    //sieve('exdeorum:string_mesh', 1.0, 0.25, mud, 'thermal:slime_mushroom_spores');
    sieve('exdeorum:string_mesh', 1.0, 0.2, mud, 'exdeorum:mycelium_spores');
    sieve('exdeorum:string_mesh', 1.0, 0.1, mud, 'minecraft:bamboo');
    sieve('exdeorum:string_mesh', 1.0, 0.1, mud, 'minecraft:mangrove_propagule');
    sieve('exdeorum:string_mesh', 1.0, 0.15, mud, 'minecraft:sugar_cane');

    sieve('exdeorum:string_mesh', 1.0, 0.05, sand, 'minecraft:sea_pickle');
    sieve('exdeorum:string_mesh', 1.0, 0.05, sand, 'minecraft:kelp');
    sieve('exdeorum:string_mesh', 1.0, 0.05, sand, 'minecraft:seagrass');

    //mysilium
    sieve('exdeorum:string_mesh', 1.0, 0.05, mycelium, 'minecraft:nether_wart');
    sieve('exdeorum:string_mesh', 1.0, 0.1, mycelium, 'minecraft:brown_mushroom');
    sieve('exdeorum:string_mesh', 1.0, 0.1, mycelium, 'minecraft:red_mushroom');
    sieve('exdeorum:string_mesh', 1.0, 0.5, mycelium, 'minecraft:dirt');
    sieve('exdeorum:string_mesh', 1.0, 0.35, mycelium, 'exdeorum:mycelium_spores');

    // gravel and blackstone
    sieve('exdeorum:string_mesh', 1.0, 0.45, gravel, 'gtceu:crushed_iron_ore');
    sieve('exdeorum:string_mesh', 1.0, 0.25, gravel, 'gtceu:crushed_magnetite_ore');
    sieve('exdeorum:string_mesh', 1.0, 0.60, gravel, 'gtceu:crushed_copper_ore');
    sieve('exdeorum:string_mesh', 1.0, 0.3, gravel, 'gtceu:crushed_tin_ore');
    sieve('exdeorum:string_mesh', 1.0, 0.25, gravel, 'gtceu:crushed_sphalerite_ore');

    sieve('exdeorum:string_mesh', 1.0, 0.4, black, 'gtceu:crushed_galena_ore');
    sieve('exdeorum:string_mesh', 1.0, 0.3, black, 'gtceu:crushed_stibnite_ore');

    //coars
    sieve('exdeorum:string_mesh', 1.0, 1.0, coars, 'minecraft:dirt');
    sieve('exdeorum:string_mesh', 1.0, 0.4, coars, 'minecraft:dirt');
    sieve('exdeorum:string_mesh', 1.0, 0.4, coars, 'minecraft:gravel');

    // sieve('exdeorum:flint_mesh', 1.0, 0.1, gravel, 'gtceu:crushed_silver_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.05, gravel, 'gtceu:crushed_gold_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.2, black, 'gtceu:crushed_pentlandite_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.25, gravel, 'gtceu:crushed_chalcopyrite_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.25, black, 'gtceu:crushed_bornite_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.25, gravel, 'gtceu:crushed_cassiterite_ore');

    // sieve('exdeorum:iron_mesh', 1.0, 0.12, gravel, 'gtceu:crushed_pyrolusite_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.05, gravel, 'gtceu:crushed_lepidolite_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.1, black, 'gtceu:crushed_cobaltite_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.16, black, 'gtceu:crushed_beryllium_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.21, black, 'gtceu:crushed_chromite_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.05, gravel, 'gtceu:crushed_pyrochlore_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.05, gravel, 'gtceu:crushed_vanadium_magnetite_ore');

    // sieve('exdeorum:diamond_mesh', 1.0, 0.12, black, 'gtceu:crushed_molybdenite_ore');
    // sieve('exdeorum:diamond_mesh', 1.0, 0.02, black, 'gtceu:crushed_pitchblende_ore',);
    // sieve('exdeorum:diamond_mesh', 1.0, 0.05, gravel, 'gtceu:crushed_tantalite_ore',);
    // sieve('exdeorum:diamond_mesh', 1.0, 0.075, black, 'gtceu:crushed_ilmenite_ore',);
    // sieve('exdeorum:diamond_mesh', 1.0, 0.18, gravel, 'gtceu:crushed_bauxite_ore',);
    // sieve('exdeorum:diamond_mesh', 1.0, 0.02, gravel, 'gtceu:crushed_pollucite_ore',);

    // sieve('galaxy_greg:emerald_mesh', 1.0, 0.15, gravel, 'gtceu:crushed_tungstate_ore');
    // sieve('galaxy_greg:emerald_mesh', 1.0, 0.125, gravel, 'gtceu:crushed_scheelite_ore');
    // sieve('galaxy_greg:emerald_mesh', 1.0, 0.35, black, 'gtceu:crushed_bastnasite_ore');
    // sieve('galaxy_greg:emerald_mesh', 1.0, 0.25, black, 'gtceu:crushed_cooperite_ore');
    // sieve('galaxy_greg:emerald_mesh', 1.0, 0.12, black, 'gtceu:crushed_barite_ore');

    // sieve('exdeorum:netherite_mesh', 1.0, 0.01, black, 'gtceu:crushed_naquadah_ore');

    // sand
    sieve('exdeorum:string_mesh', 1.0, 0.075, sand, 'minecraft:diamond');
    sieve('exdeorum:string_mesh', 1.0, 0.1, sand, 'minecraft:lapis_lazuli');
    sieve('exdeorum:string_mesh', 1.0, 0.12, sand, 'minecraft:amethyst_shard');
    sieve('exdeorum:string_mesh', 1.0, 0.08, sand, 'minecraft:emerald');
    sieve('exdeorum:string_mesh', 1.0, 0.25, sand, 'minecraft:quartz');

    // sieve('exdeorum:flint_mesh', 1.0, 0.075, sand, 'gtceu:crushed_diamond_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.05, sand, 'gtceu:crushed_emerald_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'gtceu:crushed_green_sapphire_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'gtceu:crushed_sapphire_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'gtceu:crushed_ruby_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'minecraft:coal');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'gtceu:crushed_quartzite_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'gtceu:crushed_certus_quartz_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'gtceu:crushed_salt_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'gtceu:crushed_rock_salt_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'gtceu:crushed_saltpeter_ore');
    // sieve('exdeorum:flint_mesh', 1.0, 0.1, sand, 'gtceu:crushed_realgar_ore');

    // sieve('exdeorum:iron_mesh', 1.0, 0.14, sand, 'gtceu:crushed_blue_topaz_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.14, sand, 'gtceu:crushed_topaz_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.08, sand, 'gtceu:crushed_yellow_garnet_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.08, sand, 'gtceu:crushed_red_garnet_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.1, sand, 'gtceu:crushed_garnet_sand_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.2, sand, 'gtceu:crushed_apatite_ore');
    // sieve('exdeorum:iron_mesh', 1.0, 0.15, sand, 'gtceu:crushed_monazite_ore');

    // dust
    sieve('exdeorum:string_mesh', 1.0, 0.43, dust, 'minecraft:redstone');
    sieve('exdeorum:string_mesh', 1.0, 0.43, dust, 'minecraft:glowstone_dust');
    sieve('exdeorum:string_mesh', 1.0, 0.3, dust, 'gtceu:tiny_sulfur_dust');
    sieve('exdeorum:string_mesh', 1.0, 0.08, dust, 'minecraft:ender_pearl');
    // sieve('exdeorum:netherite_mesh', 1.0, 0.01, dust, 'minecraft:echo_shard');
    //sieve('exdeorum:flint_mesh', 1.0, 0.25, dust, 'ae2:sky_dust');

})