ItemEvents.modification(event =>{
    event.modify('gtceu:brick_wooden_form', item =>{
        item.maxDamage = 256
    })
    event.modify('minecraft:ender_pearl', item =>{
        item.maxStackSize = 64
    })
    event.modify('minecraft:bucket', item =>{
        item.maxStackSize = 64
    })
    event.modify('minecraft:snowball', item =>{
        item.maxStackSize = 64
    })
})

const Map = Java.loadClass("java.util.Map")
GTCEuStartupEvents.craftingComponents(event =>{
    event.setMaterialEntry(GTCraftingComponents.PLATE, GTValues.LV, new MaterialEntry('plate', 'gtceu:steal'))
})
