// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    //This is the same recipe as the one on dire's github. It currently just overrides the old one to make EMI recognize it
    allthemods.smithing(
        'justdirethings:celestigem_paxel',
        'justdirethings:celestigem_axe',
        'justdirethings:celestigem_shovel')
        .template('justdirethings:celestigem_pickaxe');

        allthemods.remove({ id: 'justdirethings:upgrade_orexray' })
        allthemods.shaped('justdirethings:upgrade_orexray', ['ABA', 'CDC', 'ABA'], {
            A: '#c:ingots/unobtainium',
            B: 'minecraft:calibrated_sculk_sensor',
            C: 'minecraft:sculk_shrieker',
            D: 'justdirethings:upgrade_blank'
          })
	
	allthemods.custom({
		  "type": "excessive_utilities:shaped_unstable",
		  "pattern": {
			"key": {
			  "I": {
				"item": "excessive_utilities:unstable_ingot"
			  },
			  "L": {
				"item": "minecraft:phantom_membrane"
			  },
			  "F": {
				"tag": "c:feathers"
			  },
			  "B": {
				"item": "justdirethings:upgrade_blank"
			  }
			},
			"pattern": [
			  "LIL",
			  "FBF",
			  "LIL"
			]
		  },
		  "result": {
			"count": 1,
			"id": "justdirethings:upgrade_flight"
		  }
	}).id("justdirethings:upgrade_flight")

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.