GTCEuStartupEvents.registry('gtceu:recipe_type', event =>{

    event.create('hammer_station')
        .category('hammer_station')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0) // 
        .setSlotOverlay(false, false, GuiTextures.HAMMER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.MACERATOR)

    event.create('auto_barrel_fluid_mixing')
        .category('auto_wooden_barrel')
        .setMaxIOSize(1, 1, 1, 1) 
        .setSlotOverlay(false, false, GuiTextures.HAMMER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.BATH)

    event.create('auto_barrel_compost')
        .category('auto_wooden_barrel')
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.HAMMER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.COMPRESSOR)

    event.create('auto_stone_barrel')
        .category('auto_stone_barrel')
        .setMaxIOSize(1, 1, 2, 0) 
        .setSlotOverlay(false, false, GuiTextures.HAMMER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.BATH)
})