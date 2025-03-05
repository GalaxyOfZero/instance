ServerEvents.recipes(event =>{
    exdeorum.removeDefaultHeatSources();


    exdeorum.setCrucibleHeatValue('minecraft:lava', 5);
    exdeorum.setCrucibleHeatValue('minecraft:soul_campfire', 4);
    exdeorum.setCrucibleHeatValue('minecraft:campfire', 4);
    exdeorum.setCrucibleHeatValue('minecraft:torch', 1);
    exdeorum.setCrucibleHeatValue('minecraft:lantern', 1);
    exdeorum.setCrucibleHeatValue('minecraft:soul_lantern', 2);
    exdeorum.setCrucibleHeatValue('minecraft:soul_trocht', 2);
})