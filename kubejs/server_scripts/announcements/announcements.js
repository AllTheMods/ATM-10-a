let $DefaultArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")
let announcements = []
let currentVersion = null

// files related:
// kubejs/assets/atm/lang/en_us.json

// Add your announcements here
function initAnnouncements() {
  announcements = []
  addAnnouncement("4.0", "Added mods: Ars Creo, Ice and Fire, Oritech,")
  addAnnouncement("5.5", Text.of("We just launched ").append(Text.green("All The Mons (ATM10 + Cobblemon)").clickOpenUrl("https://www.curseforge.com/minecraft/modpacks/all-the-mons").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))).append(" for public beta testing!"))
}

function addAnnouncement(version, component) {
  let ver = new $DefaultArtifactVersion(version)
  let existing = null
  for (let i = 0; i < announcements.length; i++) {
    if (announcements[i].version.compareTo(ver) === 0) {
      existing = announcements[i]
      break
    }
  }
  if (existing === null) {
    existing = { version: ver, messages: [] }
    announcements.push(existing)
    announcements.sort((a, b) => a.version.compareTo(b.version))
  }
  existing.messages.push(typeof component == "string" ? Text.of(component) : component)
}

ServerEvents.loaded(event => {
  if (!Platform.isLoaded("bcc")) return
  let $BccInstance = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
  currentVersion = new $DefaultArtifactVersion($BccInstance.betterStatus.version())
  initAnnouncements()
})

PlayerEvents.loggedIn(event => {
  if (currentVersion == null) return
  let raw = event.player.persistentData.getString("LastDismissedAnnouncementVersion")
  let currentDismissed = new $DefaultArtifactVersion(raw ? raw : "0.0.0")
  let ableToDismiss = false
  let printHeader = true

  for (let i = 0; i < announcements.length; i++) {
    let key = announcements[i].version
    let listComponents = announcements[i].messages
    if (currentDismissed.compareTo(key) < 0 && currentVersion.compareTo(key) >= 0) {
      ableToDismiss = true
      if (printHeader) {
        event.player.tell(Text.translatable("=====[  %s  ]=====", Text.yellow("All The Mods Announcements").bold()).gold().bold())
        printHeader = false
      }
      for (let j = 0; j < listComponents.length; j++) {
        event.player.tell(Text.translatable("[%s] - %s", Text.gold(key.toString()), listComponents[j].yellow()).yellow())
      }
    }
  }

  if (ableToDismiss) {
    event.player.tell(
      Text.translatable("announcements.atm.dismiss_up_to_version", Text.blue(currentVersion.toString()))
        .green()
        .hover(Text.translatable("kubejs.atm.click_here"))
        .clickRunCommand("/dismiss_announcements")
    )
  }
})

ServerEvents.basicPublicCommand("dismiss_announcements", event => {
  let player = event.player
  if (player == null) {
    event.cancel("Player was not found!")
  } else {
    let pData = player.getPersistentData()
    if (event.input == "clear") {
      pData.putString("LastDismissedAnnouncementVersion", "0.0.0")
      event.respond(Text.yellow("Cleared dismissed version!"))
    } else {
      if (currentVersion == null) {
        event.cancel("Current version of the modpack is null, is BetterCompatibilityCheck installed?")
      } else {
        pData.putString("LastDismissedAnnouncementVersion", currentVersion.toString())
        event.respond(Text.translatable("announcements.atm.dismissed_up_to_version", currentVersion.toString()).yellow())
      }
    }
  }
})