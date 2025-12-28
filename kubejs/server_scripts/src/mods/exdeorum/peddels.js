BlockEvents.rightClicked(event => {
    const { hand, block, player, facing } = event
    if (hand != 'MAIN_HAND') return
    if (!block.hasTag('minecraft:dirt')) return
    if (!player.isShiftKeyDown()) return
    let loot = [
        "exdeorum:andesite_pebble",
        "exdeorum:diorite_pebble",
        "exdeorum:granite_pebble",
        'exdeorum:stone_pebble',
    ]
    let random = Math.floor(Math.random() * 2 * loot.length)
    let dropItem = Item.of(loot[random] ?? "exdeorum:stone_pebble")
    block.popItemFromFace(dropItem, facing)
    player.swing()
    player.playNotifySound('minecraft:block.grass.break',"ambient", 1, 1)
})