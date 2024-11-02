const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

module.exports = function AutoSuitSorter3000(controller) {
const allUnlockables = controller.configManager.configs.allunlockables
allUnlockables.forEach(unlockable => {
    if (unlockable.Type === "disguise") {
        const validSubtypes = ["disguise", "S0", "S1", "S2", "S3", "S4", "S5", "S6", "S7"];
        if (!validSubtypes.includes(unlockable.Subtype)) {
            unlockable.Subtype = "S8";
        }
    }
});
let newUnlockable = {
    "Id": "ROULETTE_DART_RIFLE",
    Guid: "6eee733b-b831-4666-b794-fe0147cb45a7",
    "Type": "weapon",
	"Subtype": "evergreen_kill_method_pistol",
    RMTPrice: -1,
    GamePrice: -1,
    IsPurchasable: !1,
    IsPublished: !0,
    IsDroppable: !1,
    Capabilities: [],
    Qualities: {},
    Properties: {
        "Gameplay": {},
		"Name": "UI_ROULETTE_DART_RIFLE",
		"Description": "UI_ROULETTE_DART_RIFLE_DESC",
		"Quality": 4,
		"Rarity": "common",
		"LoadoutSlot": "carriedweapon",
		"RepositoryId": "8d714b18-f837-4d82-896b-b13e208f0a31",
		"UnlockOrder": 20
    },
    Rarity: "common"
};

allUnlockables.forEach((unlockable, index) => {
    if (unlockable.Id === "ROULETTE_DART_RIFLE") {
        allUnlockables[index] = newUnlockable; // Replace the old entry with the new one
    }
});
newUnlockable = {
    "Id": "ROULETTE_DART_RIFLE",
    Guid: "fce79cfc-a59e-4ebc-acf3-489a636282eb",
    "Type": "weapon",
	"Subtype": "melee",
    RMTPrice: -1,
    GamePrice: -1,
    IsPurchasable: !1,
    IsPublished: !0,
    IsDroppable: !1,
    Capabilities: [],
    Qualities: {},
    Properties: {
		"Quality": 3,
		"LoadoutSlot": "gear",
        "OrderIndex": 394,
		"Rarity": "common",
		"RepositoryId": "490926c9-4a74-4cac-952b-d203af4e498a",
		"RepositoryAssets": [
			"490926c9-4a74-4cac-952b-d203af4e498a",
			"490926c9-4a74-4cac-952b-d203af4e498a",
			"490926c9-4a74-4cac-952b-d203af4e498a"
		]
	},
    Rarity: "common"
};
allUnlockables.forEach((unlockable, index) => {
    if (unlockable.Id === "PROP_DEVICE_PLAYING_CARD_HACKER") {
        allUnlockables[index] = newUnlockable; // Replace the old entry with the new one
    }
});
    controller.configManager.configs.allunlockables =allUnlockables
}
