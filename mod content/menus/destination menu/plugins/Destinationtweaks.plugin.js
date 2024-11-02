const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
module.exports = function MissionPlugin(controller) {controller.configManager.configs.LocationsData.parents.LOCATION_PARENT_AUSTRIA.Properties.Order = 75;controller.configManager.configs.LocationsData["parents"]["LOCATION_PARENT_AUSTRIA"]["Properties"]["Season"] = 1
    
    controller.configManager.configs.LocationsData.parents.LOCATION_PARENT_SALTY.Properties.Order = 160;

    controller.configManager.configs.LocationsData.parents.LOCATION_PARENT_CAGED.Properties.Order = 170;

    controller.configManager.configs.LocationsData.parents.LOCATION_PARENT_SNUG.Properties.Order = 350;
    controller.configManager.configs.LocationsData.children.LOCATION_PARIS_NOEL.Properties.Order = 16;

    controller.configManager.configs.LocationsData["parents"]["LOCATION_PARENT_ROCKY"]["Properties"]["Order"] = 125
    controller.configManager.configs.LocationsData["parents"]["LOCATION_PARENT_ROCKY"]["Properties"]["Season"] = 2

    controller.configManager.configs.LocationsData["children"]["LOCATION_ROCKY_DUGONG"]["Properties"]["Order"] = 113
    controller.configManager.configs.LocationsData["children"]["LOCATION_ROCKY_DUGONG"]["Properties"]["Season"] = 2

    controller.configManager.configs.LocationsData["parents"] = Object.entries(controller.configManager.configs.LocationsData["parents"]).sort(
        (a,b) => a[1]["Properties"]["Order"] - b[1]["Properties"]["Order"]
    ).reduce(
        (obj, [key, value]) => (
            {
                ...obj,
                [key]: value
            }
        ),
        {}
    )

    controller.hooks.contributeCampaigns.tap(
        "AccurateAmbrose-Campaign",
        (campaigns, gsmFunc, gsvFunc, gameVersion) => {
            if (gameVersion !== "h3") return

            campaigns.forEach((menu) => {
                if (menu.Name === "UI_SEASON_2") {
                    menu.StoryData = [
                        gsmFunc(
                            "c65019e5-43a8-4a33-8a2a-84c750a5eeb3",
                            gameVersion,
                        ),
                        gsvFunc("debriefing_sheep", gameVersion),
                        gsmFunc(
                            "c1d015b4-be08-4e44-808e-ada0f387656f",
                            gameVersion,
                        ),
                        gsvFunc("debriefing_flamingo", gameVersion),
                        gsmFunc(
                            "422519be-ed2e-44df-9dac-18f739d44fd9",
                            gameVersion,
                        ),
                        gsvFunc("debriefing_hippo", gameVersion),
                        gsmFunc(
                            "0fad48d7-3d0f-4c66-8605-6cbe9c3a46d7",
                            gameVersion,
                        ),
                        gsvFunc("debriefing_mongoose", gameVersion),
                        gsvFunc("intro_skunk", gameVersion),
                        gsmFunc(
                            "82f55837-e26c-41bf-bc6e-fa97b7981fbc",
                            gameVersion,
                        ),
                        gsvFunc("debriefing_skunk", gameVersion),
                        gsmFunc(
                            "b2aac100-dfc7-4f85-b9cd-528114436f6c",
                            gameVersion,
                        ),
                        gsvFunc("intro_magpie", gameVersion),
                        gsmFunc(
                            "0d225edf-40cd-4f20-a30f-b62a373801d3",
                            gameVersion,
                        ),
                        gsvFunc("debriefing_magpie", gameVersion),
                        gsmFunc(
                            "7a03a97d-238c-48bd-bda0-e5f279569cce",
                            gameVersion,
                        ),
                        gsmFunc(
                            "095261b5-e15b-4ca1-9bb7-001fb85c5aaa",
                            gameVersion,
                        ),
                    ]
                }
            })
        }
    )

    controller.hooks.getNextCampaignMission.tap(
        "AccurateAmbrose-PlayNext",
        (curContractId) => {
            // Whittleton -> Ambrose
            if (curContractId === "82f55837-e26c-41bf-bc6e-fa97b7981fbc") {
                return {
                    nextContractId: "b2aac100-dfc7-4f85-b9cd-528114436f6c",
                    campaignDetails: {
                        CampaignName: "UI_SEASON_2"
                    },
                    overrideIndex: 0,
                }
            }

            // Ambrose -> Sgail
            if (curContractId === "b2aac100-dfc7-4f85-b9cd-528114436f6c") {
                return {
                    nextContractId: "0d225edf-40cd-4f20-a30f-b62a373801d3",
                    campaignDetails: {
                        CampaignName: "UI_SEASON_2"
                    },
                }
            }
        }
    )
}

