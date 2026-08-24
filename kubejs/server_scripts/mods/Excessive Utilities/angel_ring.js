// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove(
        [
            { id:'excessive_utilities:unstable/angel_ring_demon' },
            { id:'excessive_utilities:unstable/angel_ring_feather' },
            { id:'excessive_utilities:unstable/angel_ring_butterfly' },
            { id:'excessive_utilities:unstable/angel_ring_bat' },
            { id:'excessive_utilities:unstable/angel_ring_invisible' },
            { id:'excessive_utilities:unstable/angel_ring_gold' }
        ]
    )

    allthemods.custom({
        type: "excessive_utilities:shaped_unstable",
        pattern: {
            key: {
                B: {
                    type: "neoforge:components",
                    components: {
                        "excessive_utilities:entity_type": "minecraft:bat",
                    },
                    items: "excessive_utilities:golden_lasso",
                },
                G: {
                    type: "neoforge:components",
                    components: {
                        "excessive_utilities:charge": 600
                    },
                    items: "excessive_utilities:sun_crystal"
                },
                H: {
                    type: "neoforge:components",
                    components: {
                        "excessive_utilities:entity_type": "minecraft:ghast",
                    },
                    items: "excessive_utilities:cursed_lasso",
                },
                I: {
                    tag: "c:ingots/gold",
                },
                S: {
                    item: "excessive_utilities:ring_of_the_flying_squid",
                },
                U: {
                    item: "excessive_utilities:unstable_ingot",
                },
                N: {
                    item: "minecraft:nether_star",
                },
            },
            pattern: ["GNG", "ISI", "BUH"],
        },
        result: {
            count: 1,
            id: "excessive_utilities:angel_ring",
        },
    });
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
