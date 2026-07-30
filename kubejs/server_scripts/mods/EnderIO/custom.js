
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

EnderIOEvents.conduits(event => {
  event.registerEnergyConduit('allthemodium_energy', 'Allthemodium Energy Conduit', 1000000)
  event.registerFluidConduit('allthemodium_fluid', 'Allthemodium Fluid Conduit', 10000)
  event.registerItemConduit('allthemodium_item', 'Allthemodium Item Conduit', 64, 1)
})

EnderIOEvents.grindingBalls(allthemods => {
  allthemods.add('kubejs:modium_grinding_ball', 1.85, 1.75, 0.7, 2500)
  allthemods.add('kubejs:vibranium_grinding_ball', 2, 1.9, 0.6, 5000)
  allthemods.add('kubejs:unobtainium_grinding_ball', 2.25, 2.1, 0.5, 7500)
})

ServerEvents.recipes(allthemods => {
 
// Conduits 
const allthemodiumEnergy = Item.of('enderio:conduit[enderio:conduit="enderio:allthemodium_energy"]')
const allthemodiumFluid  = Item.of('enderio:conduit[enderio:conduit="enderio:allthemodium_fluid"]')
const allthemodiumItem   = Item.of('enderio:conduit[enderio:conduit="enderio:allthemodium_item"]')

  allthemods.shaped(allthemodiumEnergy.withCount(8), ['BBB', 'ACA', 'BBB'], {
    A: 'allthemodium:allthemodium_ingot',
    B: 'enderio:conduit_binder',
    C: 'enderio:conduit[enderio:conduit="enderio:ender_energy"]'
  }).id('allthemods:kjsenderio/allthemodium_energy_conduit')

  allthemods.shaped(allthemodiumFluid.withCount(8), ['BBB', 'ACA', 'BBB'], {
    A: 'allthemodium:allthemodium_ingot',
    B: 'enderio:conduit_binder',
    C: 'enderio:conduit[enderio:conduit="enderio:ender_fluid"]'
  }).id('allthemods:kjsenderio/allthemodium_fluid_conduit')

  allthemods.shaped(allthemodiumItem.withCount(8), ['BBB', 'ACA', 'BBB'], {
    A: 'allthemodium:allthemodium_ingot',
    B: 'enderio:conduit_binder',
    C: 'enderio:conduit[enderio:conduit="enderio:ender_item"]'
  }).id('allthemods:kjsenderio/allthemodium_item_conduit')

  // Capacitors
  allthemods.shaped('enderio:modial_capacitor', [' A ', 'BCB', ' A '], {
    A: 'allthemodium:allthemodium_ingot',
    B: 'enderio:octadic_capacitor',
    C: 'enderio:vibrant_alloy_ingot'
  }).id('allthemods:kjsenderio/modial_capacitor')

  allthemods.shaped('enderio:vibranic_capacitor', [' A ', 'BCB', ' A '], {
    A: 'allthemodium:vibranium_ingot',
    B: 'enderio:modial_capacitor',
    C: 'allthemodium:allthemodium_gear'
  }).id('allthemods:kjsenderio/vibranic_capacitor')

  allthemods.shaped('enderio:unobtained_capacitor', [' A ', 'BCB', ' A '], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'enderio:vibranic_capacitor',
    C: 'allthemodium:vibranium_gear'
  }).id('allthemods:kjsenderio/unobtained_capacitor')

  // Grinding Balls
  const grindingballs = [
    {
      output: '24x kubejs:modium_grinding_ball',
      input: 'allthemodium:allthemodium_ingot'
    },
    {
      output: '24x kubejs:vibranium_grinding_ball',
      input: 'allthemodium:vibranium_ingot'
    },
    {
      output: '24x kubejs:unobtainium_grinding_ball',
      input: 'allthemodium:unobtainium_ingot'
    }
  ]

  grindingballs.forEach(r => {
    allthemods.shaped(r.output, [' A ', 'AAA', ' A '], {
      A: r.input
    }).id(`allthemods:kjsenderio/${r.input.split(':')[1]}_grinding_ball`)
  })

 })

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods projects.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.