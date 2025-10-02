const loggingInterop_1 = require("@peacockproject/core/loggingInterop")
const { menuSystemDatabase } = require("@peacockproject/core/menus/menuSystem")
module.exports = function HUI_STASHPOINT(controller) {

	const menu1 =  {
	"$if $isnullorempty $.Items": {
		"$then": {
			"$include": {
				"$path": "menusystem/elements/challenges/challenges_notavailable.json"
			}
		},
		"$else": {
			"$datacontext": {
				"in": "$.",
				"datavalues": {
					"GroupedItems": {
						"$arraygroupby": {
							"source": {
								"$arraysort": {
									"source": "$.Items",
									"property": "Item.Unlockable.Subtype",
									"order": [
										"featured",
								"container",
								"pistol",
								"evergreen_kill_method_pistol",
								"smg",
								"shotgun",
								"assaultrifle",
								"sniperrifle",
								"melee",
								"tool",
								"distraction",
								"poison",
								"explosive",
								"classic",
								"formal",
								"coats",
								"casual",
								"tactical",
								"themed",
								"S0",
								"S1",
								"S2",
								"S3",
								"S4",
								"S5",
								"S6",
								"S7",
																								"S71",
																"S72",
								"S8",
								"usercreated",
								"evergreen_safe"
									]
								}
							},
							"property": "Item.Unlockable.Subtype"
						}
					}
				},
				"do": {
					"controller": "category",
					"id": "sub_category_controller",
					"container": "sub_category_container",
					"view": "menu3.containers.ScrollingTabsContainer",
					"ncols": 10,
					"direction": "horizontal",
					"submenunavigation": true,
					"loopedselection": false,
					"data": { "direction": "horizontal", "submenu": true },
					"children": {
						"$each": {
							"in": "$.GroupedItems",
							"do": {
								"id": "$formatstring {$.by}_container",
								"view": "menu3.basic.SubCategoryElement",
								"controller": "categoryitem",
								"data": {
									"title": "$loc $formatstring UI_ITEM_SUBTYPE_IN_PLURAL_{$.by}"
								},
								"children": [
									{
										"controller": "group",
										"view": "menu3.containers.ScrollingListContainer",
										"id": "$formatstring scroll_container_{$.by}",
										"layoutchildren": true,
										"row": 1,
										"nrows": 3,
										"ncols": 10,
										"direction": "horizontal",
										"data": {
											"direction": "horizontal"
										},
										"children": {
											"$each": {
												"in": {
													"$arraysort": {
														"source": "$.group",
														"condition": {
															"$if $eq ($.Item.Unlockable.Type,disguise)": {
																"$then": {
																	"$if $not $isnull $.Item.Unlockable.Properties.OrderIndex": {
																		"$then": "$.Item.Unlockable.Properties.OrderIndex",
																		"$else": 10000
																	}
																},
																"$else":  {
																	"$if $not $isnull $.Item.Unlockable.Properties.OrderIndex": {
																		"$then": "$.Item.Unlockable.Properties.OrderIndex",
																		"$else": 10000
																	}
																}
															}
														}
													}
												},
												"do": {
													"$if": {
														"$condition": {
															"$or": [
																"$not $eq ($.Item.Unlockable.Id,TOKEN_OUTFIT_WET_SUIT)",
																"$not $eq ($.@global.args.location,LOCATION_NEWZEALAND)"
															]
														},
														"$then": {
															"$mergeobjects": [
																{
																	"$if $.@global.args.usetalltile": {
																		"$then": {
																			"view": "menu3.basic.ItemTileTall",
																			"nrows": 3
																		},
																		"$else": {
																			"view": "menu3.basic.ItemTileSmall",
																			"nrows": 1.5
																		}
																	}
																},
																{
																	"$datacontext": {
																		"in": "$.",
																		"datavalues": {
																			"LocalizedReproItem": "$item $.Item.Unlockable"
																		},
																		"do": {
																			"ncols": 2,
																			"id": "$.LocalizedReproItem.id",
																			"data": {
																				"_header": "$loc $formatstring UI_ITEM_SUBTYPE_{$.Item.Unlockable.Subtype}",
																				"mousemode": {
																					"$if $eq($inputcontrollertype,touchinput)": {
																						"$then": "onover-hover-onup-select"
																					}
																				},
																				"title": "$loc $.LocalizedReproItem.name",
																				"image": "$.LocalizedReproItem.image",
																				"rarity": "$.LocalizedReproItem.rarity",
																				"icon": {
																					"$if $eq ($.Item.Unlockable.Type,disguise)": {
																						"$then": "disguise",
																						"$else": "$.Item.Unlockable.Subtype"
																					}
																				},
																				"perks": "$.LocalizedReproItem.perks",
																				"itemcount": "$.LocalizedReproItem.itemcount",
																				"header": {
																					"$if $isinloadout $.LocalizedReproItem.repositoryid": {
																						"$then": "$loc UI_MENU_PAGE_LOADOUT_ALREADY_IN_USE",
																						"$else": "$loc $formatstring UI_ITEM_SUBTYPE_{$.Item.Unlockable.Subtype}"
																					}
																				}
																			},
																			"actions": {
																				"select": {
																					"replace-children": {
																						"target": "headline_container",
																						"children": [
																							{
																								"view": "menu3.basic.ItemHeadlineElement",
																								"data": {
																									"header": {
																										"$if $isinloadout $.LocalizedReproItem.repositoryid": {
																											"$then": "$loc UI_MENU_PAGE_LOADOUT_ALREADY_IN_USE",
																											"$else": "$loc $formatstring UI_ITEM_SUBTYPE_{$.Item.Unlockable.Subtype}"
																										}
																									},
																									"title": "$loc {$item $.Item.Unlockable}.name",
																									"typeicon": {
																										"$if $eq ($.Item.Unlockable.Type,disguise)": {
																											"$then": "disguise",
																											"$else": "$.Item.Unlockable.Subtype"
																										}
																									},
																									"rarity": "{$item $.Item.Unlockable}.rarity",
																									"perks": "{$repository $.Item.Unlockable.Properties.RepositoryId}.Perks"
																								}
																							}
																						]
																					}
																				},
																				"deselect": {
																					"replace-children": {
																						"target": "headline_container",
																						"children": []
																					}
																				},
																				"actiony": {
																					"prompt_label": "$loc UI_DIALOG_SHOW_DETAILS",
																					"prompt_alticon": "info",
																					"show-modal": {
																						"config": {
																							"priority": "low",
																							"view": "menu3.modal.ModalDialogItemDetails",
																							"buttons": [
																								"$loc UI_DIALOG_OK",
																								{
																									"type": "cancel"
																								}
																							],
																							"data": {
																								"type": "$.Item.Unlockable.Type",
																								"subtype": {
																									"$if $eq ($.Item.Unlockable.Type,disguise)": {
																										"$then": "disguise",
																										"$else": "$.Item.Unlockable.Subtype"
																									}
																								},
																								"name": "$loc {$item $.Item.Unlockable}.name",
																								"description": "$loc {$item $.Item.Unlockable}.desc",
																								"rarity": "$.Item.Unlockable.Properties.Rarity",
																								"item": "$repository $.Item.Unlockable.Properties.RepositoryId",
																								"image": "{$item $.Item.Unlockable}.image",
																								"displaybuttons": [
																									{
																										"actiontype": "cancel",
																										"actionlabel": "$loc UI_BUTTON_PROMPTS_ACTION_BACK",
																										"hideIndicator": true
																									}
																								],
																								"actionAndKillTypes": {
																									"$datacontext": {
																										"in": "$.",
																										"datavalues": {
																											"ItemRepositoryId": "$repository $.Item.Unlockable.Properties.RepositoryId"
																										},
																										"do": {
																											"$include": {
																												"$path": "menusystem/elements/items/items_actionandkilltypedata.json"
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				},
																				"accept": [
																					{
																						"$if $.@global.args.set-stashpoint": {
																							"$then": {
																								"set-loadout-agencypickup": {
																									"id": "$.@global.args.stashpoint"
																								}
																							}
																						}
																					},
																					{
																						"loadout": {
																							"mode": "equip",
																							"slotid": "$.SlotId",
																							"instance": "$.Item"
																						},
																						"request-back": {
																							"target": [
																								"contractcreation_planning",
																								"planning",
																								"multiplayer",
																								"gamemode_versus"
																							],
																							"usecache": {
																								"$if $isnull $.@global.args.usecacheonreturn": {
																									"$then": false,
																									"$else": "$.@global.args.usecacheonreturn"
																								}
																							}
																						}
																					}
																				]
																			}
																		}
																	}
																}
															]
														}
													}
												}
											}
										}
									}
								]
							}
						}
					}
				}
			}
		}
	}
}

		// add gamemodesoverview.json to the list of menu pages that need to be fetched from the server
	menuSystemDatabase.hooks.getDatabaseDiff.tap("MenuEditExamplePlugin", (configs, gameVersion) => {
		if (gameVersion === "h3") {
			configs.push("menusystem/pages/stashpoint/stashpointslot.json")
		}
	})

	// return the correct gamemodesoverview.json object when asked
	menuSystemDatabase.hooks.getConfig.tap("MenuEditExamplePlugin", (configName, gameVersion) => {
		if (gameVersion === "h3") {
			if (configName === "/pages/stashpoint/stashpointslot.json") {
				return menu1
			}
		}
	})
}
