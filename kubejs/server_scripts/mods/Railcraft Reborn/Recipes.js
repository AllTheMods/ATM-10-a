// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: `railcraft:steam_turbine` })
    allthemods.shaped('2x railcraft:steam_turbine', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'alltheores:steel_plate',
        B: 'railcraft:high_pressure_steam_boiler_tank',
        C: 'alltheores:steel_block'
    })

    allthemods.remove({ id: `railcraft:rolling/steel_turbine_blade` })
    allthemods.shaped('2x railcraft:turbine_blade', [
        '  A',
        ' A ',
        'A  '
    ], {
        A: 'alltheores:steel_plate'
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
