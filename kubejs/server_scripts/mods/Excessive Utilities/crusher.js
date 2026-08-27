// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 Aeronautics.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
	function crush(input, output, output_amount, aux_output, aux_output_amount, aux_output_chance) {
		if (aux_output_amount === undefined) aux_output_amount = 1
		if (aux_output_chance === undefined) aux_output_chance = 0.1
		if (aux_output == undefined) {
			allthemods.custom({
			  "type": "excessive_utilities:crusher",
			  "ingredient": {
				"tag": input
			  },
			  "primary_output": {
				"count": output_amount,
				"id": output
			  }
			}).id(`allthemods:excessive_utilities/crusher/${input.split(":")[0]}/${input.split(":")[1]}`)
		}
		else {
			allthemods.custom({
			  "type": "excessive_utilities:crusher",
			  "ingredient": {
				"tag": input
			  },
			  "primary_output": {
				"count": output_amount,
				"id": output
			  },
			  "secondary_chance": aux_output_chance,
			  "secondary_output": {
				"count": aux_output_amount,
				"id": aux_output
			  }
			}).id(`allthemods:excessive_utilities/crusher/${input.split(":")[0]}/${input.split(":")[1]}`)
		}
	}

	function crush_without_tag(input, output, output_amount, aux_output, aux_output_amount, aux_output_chance) {
		if (aux_output_amount === undefined) aux_output_amount = 1
		if (aux_output_chance === undefined) aux_output_chance = 0.1
		if (aux_output == undefined) {
			allthemods.custom({
			  "type": "excessive_utilities:crusher",
			  "ingredient": {
				"item": input
			  },
			  "primary_output": {
				"count": output_amount,
				"id": output
			  }
			}).id(`allthemods:excessive_utilities/crusher/${input.split(":")[0]}/${input.split(":")[1]}`)
		}
		else {
			allthemods.custom({
			  "type": "excessive_utilities:crusher",
			  "ingredient": {
				"item": input
			  },
			  "primary_output": {
				"count": output_amount,
				"id": output
			  },
			  "secondary_chance": aux_output_chance,
			  "secondary_output": {
				"count": aux_output_amount,
				"id": aux_output
			  }
			}).id(`allthemods:excessive_utilities/crusher/${input.split(":")[0]}/${input.split(":")[1]}`)
		}
	}

	// Vanilla Dusts
	const vanillaores = ["iron", "gold", "copper"]
	vanillaores.forEach(materials => {
		crush(`c:raw_materials/${materials}`, `alltheores:${materials}_dust`, 2)
		crush(`c:ingots/${materials}`, `alltheores:${materials}_dust`, 1)
	})
	// Diamond
	crush("c:gems/diamond", "alltheores:diamond_dust", 1)
	// Netherite
	crush_without_tag("minecraft:ancient_debris", "minecraft:netherite_scrap", 2)
	crush_without_tag("minecraft:netherite_scrap", "occultism:netherite_scrap_dust", 1)
	crush("c:ingots/netherite", "alltheores:netherite_dust", 1)
	// AllTheOres Ores
	const atoores = ["aluminum", "lead", "nickel", "osmium", "platinum", "silver", "tin", "uranium", "zinc", "iridium"]
	atoores.forEach(materials => {
		crush(`c:raw_materials/${materials}`, `alltheores:${materials}_dust`, 2)
		crush(`c:ingots/${materials}`, `alltheores:${materials}_dust`, 1)
		crush(`c:ores/${materials}`, `alltheores:raw_${materials}`, 2, `alltheores:raw_${materials}`)
	})
	// AllTheOres Alloys
	const atoalloys = ["invar", "electrum", "bronze", "brass", "enderium", "lumium", "signalum", "constantan"]
	atoalloys.forEach(materials => {
		crush(`c:ingots/${materials}`, `alltheores:${materials}_dust`, 1)
	})
		// Steel separated to allow Biosteel to be crushed without turning into Steel Dust
	crush_without_tag("alltheores:steel_ingot", "alltheores:steel_dust", 1)
	// AllTheOres Gems
	const atogems = ["ruby", "peridot", "sapphire", "cinnabar", "fluorite"]
	atogems.forEach(materials => {
		crush(`c:gems/${materials}`, `alltheores:${materials}_dust`, 1)
		crush(`c:ores/${materials}`, `alltheores:${materials}`, 2, `alltheores:${materials}`)
	})
	// ATM Metals
	const atmmetals = ["allthemodium", "vibranium", "unobtainium"]
	atmmetals.forEach(materials => {
		crush(`c:raw_materials/${materials}`, `allthemodium:${materials}_dust`, 2)
		crush(`c:ingots/${materials}`, `allthemodium:${materials}_dust`, 1)
		crush(`c:ores/${materials}`, `allthemodium:raw_${materials}`, 2, `allthemodium:raw_${materials}`)
	})
	// AE2 Materials
	crush("c:gems/certus_quartz", "ae2:certus_quartz_dust", 1)
	crush("c:gems/fluix", "ae2:fluix_dust", 1)
	crush_without_tag("ae2:sky_stone_block", "ae2:sky_dust", 1)
	crush("c:gems/entro", "extendedae:entro_dust", 1)
	crush_without_tag("advanced_ae:shattered_singularity", "advanced_ae:quantum_infused_dust", 1)
	crush("c:ender_pearls", "ae2:ender_dust", 1)
	// EvilCraft Dark Gem
	crush("c:ores/dark_gem", "evilcraft:dark_gem", 2, "evilcraft:dark_gem_crushed", 1, 0.5)
	crush("c:gems/dark_gem", "evilcraft:dark_gem_crushed", 1)
	// Forbidden Arcanus Arcane Crystals
	crush("c:ores/arcane_crystal", "forbidden_arcanus:arcane_crystal", 2)
	crush("c:gems/arcane_crystal", "forbidden_arcanus:arcane_crystal_dust", 1)
	// Mekanism Dusts
	crush_without_tag("minecraft:coal", "mekanism:dust_coal", 1)
	crush_without_tag("minecraft:charcoal", "mekanism:dust_charcoal", 1)
	crush("c:gems/lapis", "mekanism:dust_lapis_lazuli", 1)
	crush("c:gems/quartz", "mekanism:dust_quartz", 1)
	crush("c:gems/emerald", "mekanism:dust_emerald", 1)
	crush("c:obsidians", "mekanism:dust_obsidian", 4)
	crush("c:ingots/refined_obsidian", "mekanism:dust_refined_obsidian", 1)
	// Occultism Iesnium
	crush(`c:raw_materials/iesnium`, `occultism:iesnium_dust`, 2)
	crush(`c:ingots/iesnium`, `occultism:iesnium_dust`, 1)
	crush(`c:ores/iesnium`, `occultism:raw_iesnium`, 2, `occultism:raw_iesnium`)
	// Oritech Alloys
	const oritechalloys = ["adamant", "biosteel", "duratium", "energite"]
	oritechalloys.forEach(materials => {
		crush(`c:ingots/${materials}`, `oritech:${materials}_dust`, 1)
	})
	// Silent Gear Ores
	const sgearores = ["crimson_iron", "azure_silver"]
	sgearores.forEach(materials => {
		crush(`c:raw_materials/${materials}`, `silentgear:${materials}_dust`, 2)
		crush(`c:ingots/${materials}`, `silentgear:${materials}_dust`, 1)
		crush(`c:ores/${materials}`, `silentgear:raw_${materials}`, 2, `silentgear:raw_${materials}`)
	})
	// Silent Gear Alloys
	const sgearalloys = ["crimson_steel", "tyrian_steel", "azure_electrum", "blaze_gold"]
	sgearalloys.forEach(materials => {
		crush(`c:ingots/${materials}`, `silentgear:${materials}_dust`, 1)
	})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 Aeronautics.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.