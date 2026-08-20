// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    // ##### Railcraft #####
    allthemods.add('railcraft:steam_turbine', [
        Text.gray('Cheaper Recipe!')
    ])

  // ##### BigReactors #####
    allthemods.add(/bigreactors:/, [
        Text.gray('Reduced multiblock size!'),
    ])

    // ##### EnderIO #####

    const baseplus = [
        'enderio:crafter', 
        'enderio:soul_binder', 
        'enderio:slice_and_splice', 
        'enderio:sag_mill', 
        'enderio:wireless_charger', 
        'enderio:painting_machine', 
        'enderio:alloy_smelter', 
        'enderio:wired_charger'
    ]

//    const baseneg = [
//    ]

    const powpos = [
        `enderio:stirling_generator`,
        'enderio:soul_engine',
        'railcraft:steam_turbine'
    ]

    const powneg = [
    'mekanismgenerators:solar_generator',
    'mekanismgenerators:advanced_solar_generator',
    'mekanismgenerators:wind_generator',
    'mekanismgenerators:gas_burning_generator'
    ]

    allthemods.add( baseplus, [
        Text.green('Increased base speed!'),
    ])

    allthemods.add( powpos, [
        Text.green('Increased power production!'),
    ])

    allthemods.add( powneg, [
        Text.gray('Reduced power production'),
    ])

    // ##### Mekanism #####

    //Mekasuit
    allthemods.add(/mekanism:mekasuit_/, [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity')
    ])
    //Meka Tool
    allthemods.add('mekanism:meka_tool', [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity!'),
        Text.green('Increased Attack Speed & Damage!')
    ])

    //Fission Generator
    allthemods.add(/mekanismgenerators:fission_/, [
        Text.red('Decreased Energy Production!'),
    ])

    // ##### Machines #####

    //Upgrades
    allthemods.add(/mekanism:upgrade_/, [
        Text.green('Increased Machine Boost!')
    ])
    //Waste Barrel
    allthemods.add('mekanism:radioactive_waste_barrel', [
        Text.green('Increased Decay Rate!')
    ])
    //Thermal Evaporation Tower
    allthemods.add(/mekanism:thermal_evaporation_/, [
        Text.green('Increased Production Speed!')
    ])
    //Solar Neutron Activator
    allthemods.add('mekanism:solar_neutron_activator', [
        Text.green('Increased Production Speed!'),
        Text.green('Waste -> Polonium buffed!')
    ])
    //Isotopic Centrifuge
    allthemods.add('mekanism:isotopic_centrifuge', [
        Text.green('Waste -> Plutonium buffed!')
    ])
    //Electric Pump
    allthemods.add('mekanism:electric_pump', [
        Text.green('Increased Production Speed!')
    ])
    //SPS
    allthemods.add(/mekanism:sps_/, [
        Text.green('Decreased Energy Consumption!')
    ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.