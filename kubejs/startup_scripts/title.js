StartupEvents.postInit(event => {
	if (Platform.isClientEnvironment()){
		let $AllTheTweaks = Java.loadClass("com.thevortex.allthetweaks.AllTheTweaks")
		$AllTheTweaks.DISPLAY = "ATM10: Aeronautics"	
		Client.updateTitle()
		let $MyCons = Java.loadClass("com.thevortex.allthetweaks.proxy.MyCons")
		$MyCons.setWindowIcon()
	}
})
