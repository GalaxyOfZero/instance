GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('larg_farm')
        .category('larg_farm')
        .setMaxIOSize(2, 1, 1, 0)
        .setSound(GTSoundEntries.BATH)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT);

    event.create('primitive_ore_processing')
        .category('ore_processing')
        .setMaxIOSize(1, 5, 1, 0)
        .setSound(GTSoundEntries.MACERATOR)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT);

    event.create('electric_ore_processing')
        .category('ore_processing')
        .setMaxIOSize(1, 5, 1, 0)
        .setSound(GTSoundEntries.MACERATOR)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT);

    event.create('better_primitive_blast_furnase')
        .category('better_primitive_blast_furnase')
        .setMaxIOSize(3, 3, 0, 0)
        .setSound(GTSoundEntries.FIRE)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);

    event.create('mechanical_sifter')
        .category('mechanical_sifter')
        .setMaxIOSize(1, 5, 1, 0)
        .setSound(GTSoundEntries.MACERATOR)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);

    event.create('superheated_pyrolyzing_oven')
        .category('superheated_pyrolyzing_oven')
        .setMaxIOSize(5, 5, 2, 2)
        .setSound(GTSoundEntries.MACERATOR)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT);

            GTRecipeTypes.PRIMITIVE_BLAST_FURNACE_RECIPES.onRecipeBuild((recipeBuilder, provider)=>{
                GTRecipeTypes.get('better_primitive_blast_furnase').copyFrom(recipeBuilder)
                .duration(Math.max((recipeBuilder.duration /2)))
                .save(provider);
            })

});