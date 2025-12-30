/**
 * @type import("../components/loggingInterop")
 */
const _loggingInterop = require("@peacockproject/core/loggingInterop")
const { log, LogLevel } = _loggingInterop

/**
 * @type import("../components/menus/menuSystem")
 */
const menuSystem = require("@peacockproject/core/menus/menuSystem")
const fs = require("fs")
const path = require("path")

/**
 * Main function that gets run at startup
 * @param {import("../components/controller").Controller} controller
 */
module.exports = function initPlugin(controller) {
	// ----------------- sketchy code:
	let pluginPath = ""
	let pluginFolder = ""
	try {
		throw new Error()
	} catch (e) {
		const stacktrace = e.stack
		const startindex = stacktrace.indexOf("(") + 1
		const endindex = stacktrace.indexOf(".js:") + 3
		pluginPath = stacktrace.slice(startindex, endindex)
		pluginFolder = path.dirname(pluginPath)
	}
	// ----------------------
	// read template as json string

	const menu1 = {
		controller: "categoryitem",
		view: "menu3.basic.CategoryElement",
		id: "category_gamemodes",
		data: {
			title: "$loc UI_HERITAGE_GAMEMODES",
			icon: "mission"
		},
		children: [
			{
				id: "gamemodes_container_context",
				controller: "context",
				view: "menu3.containers.SimpleButtonTileScrollingListContainer",
				direction: "horizontal",
				data: {
					direction: "horizontal"
				},
				row: 1,
				nrows: 3,
				header: "UI_HERITAGE_GAMEMODES",
				ncols: 10,
				children: [
					{
						$datacontext: {
							in: "$.",
							datavalues: {
								Title: "$loc UI_MENU_PAGE_HUB_CONTRACTS",
								header: "UI_HERITAGE_GAMEMODES",
								Icon: "contract",
								image: "$res images/challenges/profile_challenges/classics_normal_47_silent_assassin.jpg",
								ExtraActions: {
									accept: {
										link: {
											page: "gamemode_contracts",
											args: {
												url: "contracts"
											}
										}
									}
								}
							},
							do: {
								$include: {
									$path: "menusystem/pages/careermenu/Gamemodestile.JSON"
								}
							}
						}
					},
					{
						$datacontext: {
							in: "$.",
							datavalues: {
								Title: "$loc UI_HERITAGE_ESC_TITLE",
								Icon: "54",
								image: "$res images/challenges/profile_challenges/escalation_s2_tier_9.jpg",
								Category: "ContractAttack"
							},
							do: {
								$mergeobjects: [
									{
										$include: {
											$path: "menusystem/pages/careermenu/Gamemodestile.JSON"
										}
									},
									{
										children: [
											{
												controller: "container",
												children: [
													{
														$include: {
															$path: "menusystem/elements/contract/contractshitcategoryloading.json"
														}
													}
												]
											}
										]
									}
								]
							}
						}
					},
					{
						$datacontext: {
							in: "$.",
							datavalues: {
								Title: "$loc UI_SNIPER_CHALLENGE_TITLE",
								Icon: "sniperrifle",
								image: "$res images/backgrounds/gamemode_sniper.jpg",
								Id: "mastery_tile",
								ExtraActions: {
									accept: {
										link: {
											page: "gamemode_sniper",
											args: {
												url: "hitscategory",
												type: "Sniper",
												mode: "dataonly"
											}
										}
									}
								}
							},
							do: {
								$mergeobjects: [
									{
										$include: {
											$path: "menusystem/pages/careermenu/Gamemodestile.JSON"
										}
									},
									{
										children: [
											{
												controller: "container",
												row: -0.75,
												children: [
													{
														$include: {
															$path: "menusystem/elements/mastery/masterylocationview.json"
														}
													}
												]
											}
										]
									}
								]
							}
						}
					},
					{
						$datacontext: {
							in: "$.",
							datavalues: {
								Title: "$loc UI_HERITAGE_GHOST",
								Icon: "versus",
								image: "$res images/backgrounds/gamemode_ghostmode.jpg",
								Id: "mastery_tile",
								ExtraActions: {
									accept: {
										$include: {
											$path: "menusystem/elements/multiplayer/gotomultiplayerpresets_actions.json"
										}
									}
								}
							},
							do: {
								$mergeobjects: [
									{
										$include: {
											$path: "menusystem/pages/careermenu/Gamemodestile.JSON"
										}
									}
								]
							}
						}
					},
					{
						$datacontext: {
							in: "$.",
							datavalues: {
								Title: "$loc UI_ARCADE_TITLE",
								Icon: "arcademode",
								image: "$res images/backgrounds/gamemode_arcade.jpg",
								Id: "gamemodes_category_arcade",
								ExtraActions: {
									accept: {
										link: {
											page: "gamemode_arcade",
											args: {
												url: "hitscategory",
												type: "Arcade",
												mode: "dataonly"
											}
										}
									}
								}
							},
							do: {
								$mergeobjects: [
									{
										$include: {
											$path: "menusystem/pages/careermenu/Gamemodestile.JSON"
										}
									}
								]
							}
						}
					},
					{
						$datacontext: {
							in: "$.",
							datavalues: {
								Title: "$loc UI_EVERGREEN_TITLE",
								Icon: "evergreen_gamemode",
								image: "$res images/livetile/tile_gamemode_evergreen.jpg",
								Id: "challenge_tile",
								ExtraActions: {
									accept: {
										link: {
											page: "gamemode_evergreen",
											args: {
												locationId: "LOCATION_PARENT_SNUG"
											}
										}
									}
								}
							},
							do: {
								$mergeobjects: [
									{
										$include: {
											$path: "menusystem/pages/careermenu/Gamemodestile.JSON"
										}
									}
								]
							}
						}
					}
				]
			}
		]
	}
	if (!controller.smf.modIsInstalled("BurnthewitchRiisikumi.Roulette")) {
	} else {
		menu1.children[0].children.push({
			$datacontext: {
				in: "$.",
				datavalues: {
					Id: "gamemodes_category_roulette",
					Title: "$loc UI_CONTRACT_HEADER_BULLETDANCER",
					Icon: "bulletdancer",
					image: "$res images/contracts/roulette/roulettebranding_hui.jpg",
					ExtraActions: {
						accept: [
							{
								ioiaccount: {
									mode: "submit-email",
									email: "$formatstring peacock:setFlagEnum?key={randomroulette.contractgen}&value={true}|getAllFlags"
								}
							},
							{
								link: {
									page: "contractsearchpagetest",
									args: {
										url: "contractsearchpage"
									}
								}
							}
						]
					}
				},
				do: {
					$mergeobjects: [
						{
							$include: {
								$path: "menusystem/pages/careermenu/Gamemodestile.JSON"
							}
						},
						{
							children: [
								{
									controller: "container",
									children: [
										{
											$include: {
												$path: "menusystem/elements/contract/contractshitcategoryloading.json"
											}
										}
									]
								}
							]
						}
					]
				}
			}
		})
	}
	if (!controller.smf.modIsInstalled("BurnMushroomNotex.Containment")) {
	} else {
		menu1.children[0].children.push({
			$datacontext: {
				in: "$.",
				datavalues: {
					Id: "gamemodes_category_containment",
					Title: "$loc UI_MENU_PAGE_HUB_CONTAINMENT",
					Icon: "outbreak",
					image: "$res images/containment/branding/background.jpg",
					ExtraActions: {
						accept: [
							{
								link: {
									page: "containment",
									args: {
										url: "contractsearchpage"
									}
								}
							}
						]
					}
				},
				do: {
					$mergeobjects: [
						{
							$include: {
								$path: "menusystem/pages/careermenu/Gamemodestile.JSON"
							}
						},
						{
							children: [
								{
									controller: "container",
									children: [
										{
											$include: {
												$path: "menusystem/elements/contract/contractshitcategoryloading.json"
											}
										}
									]
								}
							]
						}
					]
				}
			}
		})
	}

	// add gamemodesoverview.json to the list of menu pages that need to be fetched from the server
	menuSystem.menuSystemDatabase.hooks.getDatabaseDiff.tap("MenuEditExamplePlugin", (configs, gameVersion) => {
		if (gameVersion === "h3") {
			configs.push("menusystem/pages/hub/gamemodes/gamemodesoverview.json")
		}
	})

	// return the correct gamemodesoverview.json object when asked
	menuSystem.menuSystemDatabase.hooks.getConfig.tap("MenuEditExamplePlugin", (configName, gameVersion) => {
		if (gameVersion === "h3") {
			if (configName === "/pages/hub/gamemodes/gamemodesoverview.json") {
				return menu1
			}
		}
	})

	log(LogLevel.INFO, "Plugin loaded!", "MenuEditExamplePlugin")
}
