// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 Aeronautics.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


// Use tags to unify Excessive Utilities and AllTheCompressed stuff using Almost Unified
const eucompressed = ["cobblestone", "cobbled_deepslate", "dirt", "sand", "gravel"]
ServerEvents.tags('item' ,allthemods => {
	eucompressed.forEach(material => {
		for (let i = 1; i < 10; i++) {
			allthemods.add(`allthemods:compressed_${material}_${i}x`, [
				`excessive_utilities:compressed_${material}_${i}`,
				`allthecompressed:${material}_${i}x`
			])
		}
	})
})
ServerEvents.recipes(allthemods => {
	eucompressed.forEach(material => {
		allthemods.remove(`excessive_utilities:compressed_${material}/from_${material}`)
	})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 Aeronautics.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.