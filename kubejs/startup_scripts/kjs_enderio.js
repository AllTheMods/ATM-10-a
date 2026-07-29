// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry("item", allthemods => {
    
allthemods.create(
    "enderio:modial_capacitor",
    "enderio:capacitor"
        )
        .displayName("Modial Capacitor")
        .rarity("rare")
        .glow(false)
        .baseValue(4)
        .texture("kubejs:item/allthemodium_capacitor")

allthemods.create(
    "enderio:vibranic_capacitor",
    "enderio:capacitor"
        )
        .displayName("Vibranic Capacitor")
        .rarity("epic")
        .glow(false)
        .baseValue(5)
        .texture("kubejs:item/vibranium_capacitor")

allthemods.create(
    "enderio:unobtained_capacitor", // id of the capacitor (will use kubejs if no namespace is specified)
    "enderio:capacitor" // type to register (always enderio:capacitor)
        )
        .displayName("Unobtained Capacitor") // overrides the automatically generated display name, can still be changed with lang file
        .rarity("epic") // common, uncommon, rare, epic
        .glow(true) // enchantment overlay
        .baseValue(6)
        .texture("kubejs:item/unobtainium_capacitor") // custom texture for the capacitor
    
if (Platform.isLoaded("enderio")) {
        allthemods.create('modium_grinding_ball').displayName('Modium Grinding Ball').texture("allthemods:item/allthemodium_grinding_ball")
        allthemods.create('vibranium_grinding_ball').displayName('Vibranium Grinding Ball').texture("allthemods:item/vibranium_grinding_ball")
        allthemods.create('unobtainium_grinding_ball').displayName('Unobtainium Grinding Ball').texture("allthemods:item/unobtainium_grinding_ball")
    }
})