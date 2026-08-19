// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    // ##### Railcraft #####
    allthemods.add('railcraft:steam_turbine', [
        Text.green('Increased Energy Production!'),
        Text.gray('Cheaper Recipe!')
    ])

  // ##### BigReactors #####
    allthemods.add(/bigreactors:/, [
        Text.gray('Reduced multiblock size!'),
    ])

    // ##### EnderIO #####

    const eiobase = [
        'enderio:crafter', 
        'enderio:soul_binder', 
        'enderio:slice_and_splice', 
        'enderio:sag_mill', 
        'enderio:stirling_generator', 
        'enderio:wireless_charger', 
        'enderio:painting_machine', 
        'enderio:alloy_smelter', 
        'enderio:wired_charger'
    ]

    allthemods.add( eiobase, [
        Text.gray('Increased Base stats!'),
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

    //Solar Generator
    allthemods.add('mekanismgenerators:solar_generator', [
        Text.red('Decreased Energy Production!')
    ])
    //Advanced Solar Generator
    allthemods.add('mekanismgenerators:advanced_solar_generator', [
        Text.red('Decreased Energy Production!')
    ])
    //Wind Generator
    allthemods.add('mekanismgenerators:wind_generator', [
        Text.red('Decreased Energy Production!')
    ])
    //Gas Burning Generator
    allthemods.add('mekanismgenerators:gas_burning_generator', [
        Text.red('Decreased Energy Production!'),
        Text.red('Increased Fuel Consumption!')
    ])
    //Fission Generator
    allthemods.add(/mekanismgenerators:fission_/, [
        Text.red('Decreased Energy Production!'),
    ])
    //Fusion Generator
    allthemods.add(/mekanismgenerators:fusion_/, [
        Text.red('Decreased Energy Production!'),
        Text.green('Decreased Fuel Consumption!'),
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