// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    function dissolution_chamber(output, inputs, fluid, amount, time, id) {
        let recipe = {
            type: 'industrialforegoing:dissolution_chamber',
            input: [],
            inputFluid: fluid.startsWith('#')
                ? { tag: fluid.substring(1), amount: amount }
                : { fluid: fluid, amount: amount },
            processingTime: time,
            output: {
                count: output.count || 1,
                id: output.item
            }
        }

        inputs.forEach(input => {
            let ingredient = {}
            if (input.tag) {
                ingredient.tag = input.tag
            } else {
                ingredient.item = input.item
            }
            recipe.input.push(ingredient)
        })

        allthemods.custom(recipe).id(id)
    }

    dissolution_chamber(
        { item: 'industrialforegoing:pink_slime_block' },
        [{ tag: 'c:glass_blocks/colorless' }],
        'industrialforegoing:pink_slime',
        2700,
        200,
        'kubejs:dissolution_chamber/pink_slime_block'
    )

    dissolution_chamber(
        { item: 'minecraft:experience_bottle' },
        [{ item: 'minecraft:glass_bottle' }],
        '#c:experience',
        250,
        5,
        'industrialforegoing:dissolution_chamber/xp_bottles'
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.