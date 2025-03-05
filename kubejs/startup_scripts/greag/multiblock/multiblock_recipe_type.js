GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('larg_farm')
        .category('larg_farm')
        .setMaxIOSize(2, 1, 1, 0)
        .setSound(GTSoundEntries.BATH);

    event.create('primitive_ore_processing')
        .category('primitive_ore_processing')
        .setMaxIOSize(1, 5, 1, 1)
        .setSound(GTSoundEntries.MACERATOR);

    event.create('better_primitive_blast_furnase')
        .category('better_primitive_blast_furnase')
        .setMaxIOSize(3, 3, 0, 0)
        .setSound(GTSoundEntries.FURNACE);

            GTRecipeTypes.PRIMITIVE_BLAST_FURNACE_RECIPES.onRecipeBuild((recipeBuilder, provider)=>{
                GTRecipeTypes.get('better_primitive_blast_furnase').copyFrom(recipeBuilder)
                .duration(Math.max((recipeBuilder.duration /2)))
                .save(provider);
            })



});