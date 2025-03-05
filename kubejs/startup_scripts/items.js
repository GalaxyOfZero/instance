StartupEvents.registry('item', event => {
    event.create('galaxy_greg:compressed_grout')
    event.create('galaxy_greg:grout_dust')
    event.create('galaxy_greg:sand_dust')
    event.create('galaxy_greg:gregcoin').glow(true).tooltip(Text.of('its a coin to spend in the shop, maybe you find something for you').darkPurple())
    event.create('galaxy_greg:incomplete_compressed_grout', 'create:sequenced_assembly').texture("galaxy_greg:item/compressed_grout")
    event.create('galaxy_greg:incomplete_compressed_coke_clay', 'create:sequenced_assembly').texture("galaxy_greg:item/compressed_coke_clay")
    event.create('galaxy_greg:incomplete_compressed_fireclay', 'create:sequenced_assembly').texture("galaxy_greg:item/compressed_fireclay")
})

StartupEvents.registry('item', event =>{
    event.create('galaxy_greg:lv_augment', "thermal:upgrade_augment").setValue(4).displayName('LV Upgrade')
    event.create('galaxy_greg:mv_augment', "thermal:upgrade_augment").setValue(8).displayName('§bMV Upgrade §b')
    event.create('galaxy_greg:hv_augment', "thermal:upgrade_augment").setValue(16).displayName('§6HV Upgrade §6')
    event.create('galaxy_greg:ev_augment', "thermal:upgrade_augment").setValue(32).displayName('§5EV Upgrade §5')
    event.create('galaxy_greg:iv_augment', "thermal:upgrade_augment").setValue(64).displayName('§1IV Upgrade §1')
})