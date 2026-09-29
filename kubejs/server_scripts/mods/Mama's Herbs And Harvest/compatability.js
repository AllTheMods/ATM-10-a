const $RightClickBlock = Java.loadClass('net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock')
const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

const saltIngredient = Ingredient.of('#c:items/salt').or('#c:dusts/salt')

NativeEvents.onEvent($RightClickBlock, event => {
    const level = event.getLevel()
    if (level.isClientSide()) return

    const pos = event.getPos()
    const state = level.getBlockState(pos)
    if ($BuiltInRegistries.BLOCK.getKey(state.getBlock()).toString() !== 'herbsandharvest:cheese_cauldron') return

    const stack = event.getItemStack()
    if (stack.isEmpty() || !saltIngredient.test(stack)) return
    if (!state.getBlock().applySalt(level, pos, state)) return

    if (!event.getEntity().isCreative()) stack.shrink(1)
    event.setCanceled(true)
})

