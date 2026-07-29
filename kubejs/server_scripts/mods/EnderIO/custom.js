EnderIOEvents.grindingBalls(allthemods => {

 // registers an iron ingot as a Grinding Ball
 // it has a 1.5x output multiplier, the default 1.0x bonus multiplier,
 // a 0.75x energy multiplier and a durability of 500
 //   event.add("minecraft:iron_ingot", 1.5, 1.0, 0.75, 500)

allthemods.add('kubejs:modium_grinding_ball', 1.85, 1.75, 0.7, 2500)
allthemods.add('kubejs:vibranium_grinding_ball', 2, 1.9, 0.6, 5000)
allthemods.add('kubejs:unobtainium_grinding_ball', 2.25, 2.1, 0.5, 7500)

})


ServerEvents.recipes(allthemods => {
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