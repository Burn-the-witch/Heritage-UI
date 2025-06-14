module.exports = function HUI_STASHPOINT(controller) {
	controller.configManager.configs.StashpointTemplate = {
		metricscontext: {
			contractid: "$.UserCentric.Contract.Metadata.Id",
			location: "$.UserCentric.Contract.Metadata.Location"
		},
		onpageopened: [
			{
				"set-selected": {
					target: "$formatstring {$arg selectedtype}_container"
				}
			},
			{
				"set-selected": {
					target: "$arg selecteditem"
				}
			}
		],
		onpageclosed: {
			"set-mastery-data": {}
		},
		buttons: [
			{
				actiontype: "accept",
				actionlabel: "$loc UI_BUTTON_PROMPTS_ACTION_SELECT"
			},
			{
				actiontype: "cancel",
				actionlabel: "$loc UI_BUTTON_PROMPTS_ACTION_BACK"
			}
		],
		body: {
			$setupcomponents: {
				"difficulty-manager": {
					"always-reload-setup": true,
					setup: {
						difficulty: "$.UserCentric.Contract.Metadata.Difficulty"
					}
				}
			},
			controller: "list",
			actions: {
				select: {
					"select-category": {}
				}
			},
			children: [
				{
					controller: "group",
					id: "headline_container",
					row: 4.25,
					col: 0,
					selectable: false,
					pressable: false,
					_comment:
						"the container that will hold the HeadlineElement. It will show info on whatever item is selected",
					children: {
						id: "headline_element",
						view: "menu3.basic.HeadlineElement"
					}
				},
				{
					id: "category_container",
					controller: "list"
				},
				{
					view: "menu3.containers.ScrollingTabsContainer",
					controller: "category",
					id: "category_context",
					container: "category_container",
					direction: "horizontal",
					data: {
						direction: "horizontal",
						topnavigation: {
							header: {
								"$if $arg extra-header": {
									$then: "$arg extra-header",
									$else: {
										"$if $arg extra-title": {
											$then: {
												"$switch $arg allowlargeitems": [
													{
														case: true,
														return: "$loc UI_MENU_PAGE_LOADOUT_ELEMENT_SLOT_STASHPOINT_LARGE"
													},
													{
														default: "$loc UI_MENU_PAGE_LOADOUT_ELEMENT_SLOT_STASHPOINT_SMALL"
													}
												]
											},
											$else: "$loc $formatstring UI_{$.UserCentric.Contract.Metadata.Location}_CITY"
										}
									}
								}
							},
							title: {
								"$if $arg extra-title": {
									$then: "$arg extra-title",
									$else: {
										"$use $.UserCentric": {
											"$if $arg contract-creation": {
												$then: "$loc $.Contract.Metadata.Title",
												$else: {
													"$switch $.Contract.Metadata.Type": [
														{
															case: "usercreated",
															return: "$.Contract.Metadata.Title"
														},
														{
															case: "featured",
															return: "$.Contract.Metadata.Title"
														},
														{
															default: "$loc $.Contract.Metadata.Title"
														}
													]
												}
											}
										}
									}
								}
							},
							icon: {
								"$if $arg extra-icon": {
									$then: "$arg extra-icon",
									$else: {
										"$if $arg extra-title": {
											$then: "stashpointempty",
											$else: {
												"$use $.UserCentric": {
													"$switch $.Contract.Metadata.Type": [
														{
															case: "dummy",
															return: {
																_dynamicPackerOverride: ["SniperChallenge"]
															}
														},
														{
															case: "orbis",
															return: "ica"
														},
														{
															case: "campaign",
															return: "mission"
														},
														{
															case: "sniper",
															return: "sniperrifle"
														},
														{
															case: "arcade",
															return: "arcademode"
														},
														{
															default: {
																"$if $.Contract.Metadata.IsVersus": {
																	$then: "versus",
																	$else: "$.Contract.Metadata.Type"
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
					},
					actions: {
						select: {
							"$use $.UserCentric": {
								"set-mastery-data": {
									$setup: {
										"$set ValidContractType": {
											"$if $isnull $.Contract": {
												$then: true,
												$else: {
													"$switch $.Contract.Metadata.Type": [
														{
															case: "usercreated",
															return: false
														},
														{
															case: "featured",
															return: false
														},
														{
															default: true
														}
													]
												}
											}
										},
										"$set HideProgression": {
											"$if $isnull $.CompletionData": {
												$then: "$.Data.LocationHideProgression",
												$else: "$.CompletionData.HideProgression"
											}
										},
										"$set MasteryTitle": {
											"$if $isnull $.CompletionData": {
												$then: "$formatstring {$.Data.LocationLevel,.0f}/{$.Data.LocationMaxLevel,.0f}",
												$else: "$formatstring {$.CompletionData.Level,.0f}/{$.CompletionData.MaxLevel,.0f}"
											}
										},
										"$set MasteryCompletion": {
											"$if $isnull $.CompletionData": {
												$then: "$.Data.LocationCompletion",
												$else: "$.CompletionData.Completion"
											}
										},
										"$set MasteryXpLeft": {
											"$if $isnull $.CompletionData": {
												$then: "$.Data.LocationXpLeft",
												$else: "$.CompletionData.XpLeft"
											}
										},
										"$set NameLocalized": {
											"$if $isnull $.CompletionData.Name": {
												$then: "$loc UI_MENU_PAGE_MASTERY_TITLE",
												$else: "$loc $.CompletionData.Name"
											}
										},
										"$set IsLocationProgression": {
											$if: {
												$condition: {
													$or: [
														"$isnull $.CompletionData",
														"$.CompletionData.IsLocationProgression"
													]
												},
												$then: true,
												$else: false
											}
										},
										"$set ShowUnit": {
											"$if $.IsLocationProgression": {
												$then: true,
												$else: false
											}
										},
										$in: {
											$if: {
												$condition: {
													$and: ["$arg _isonline", "$not $.HideProgression", "$.ValidContractType"]
												},
												$then: {
													masteryheader: "$.NameLocalized",
													masterytitle: "$.MasteryTitle",
													masterycompletion: "$.MasteryCompletion",
													masteryxpleft: "$.MasteryXpLeft",
													showUnit: "$.ShowUnit"
												},
												$else: {}
											}
										}
									}
								}
							}
						}
					},
					children: {
						view: "menu3.basic.CategoryElement",
						data: {
							title: "$loc UI_LOADOUT_SELECT_ITEM",
							icon: "stashpointempty"
						},
						children: {
							view: "menu3.containers.ListContainer",
							controller: "list",
							toshow: "$arg ShowSlotName",
							children: {
								"$use $.LoadoutItemsData": {
									id: "$formatstring loadout_overview_tile_{$.SlotId}",
									controller: "list",
									children: {
										"$if $eq ($arraysize $.Items,0)": {
											$then: {
												$setup: {
													"$set Title": "$loc UI_MENU_ELEMENT_NO_CONTENT",
													$in: {
														view: "menu3.basic.DefaultNoContentHeader",
														selectable: false,
														pressable: false,
														data: {
															header: "$.Header",
															title: "$.Title",
															typeicon: {
																"$if $.Icon": {
																	$then: "$.Icon",
																	$else: "info"
																}
															}
														}
													}
												}
											},
											$else: [
												{
													controller: "list",
													id: "sub_category_container",
													row: 0.1,
													col: 0,
													_comment: "enable analog handling to allow the submenu to handle LT/RT",
													handleanalog: true,
													actions: {
														"$if $not $arg _isingame": {
															$then: {
																"on-add-child": {
																	"show-background-layers": {
																		showMenuBackgroundFullOverlay: true
																	}
																},
																"on-remove-child": {
																	"show-background-layers": {
																		showMenuBackgroundFullOverlay: false
																	}
																},
																"on-page-closed": {
																	"show-background-layers": {
																		showMenuBackgroundFullOverlay: false
																	}
																}
															}
														}
													}
												},
												{
													$setup: {
														"$set GroupedItems": {
															$groupby: {
																from: {
																	$orderby: {
																		from: "$.Items",
																		by: "Item.Unlockable.Subtype",
																		order: [
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
																			"S8",
																			"S8",
																			"usercreated",
																			"evergreen_safe"
																		]
																	}
																},
																by: "Item.Unlockable.Subtype"
															}
														},
														$in: {
															$setpageargs: {
																ShowPrevNextButtonPrompt: "$gt ($arraysize $.GroupedItems,1)"
															},
															controller: "category",
															id: "sub_category_controller",
															container: "sub_category_container",
															view: "menu3.containers.ScrollingTabsContainer",
															ncols: 10,
															direction: "horizontal",
															"submenu-navigation": true,
															prevnextnav: true,
															data: {
																direction: "horizontal",
																submenu: true
															},
															children: {
																$each: {
																	in: "$.GroupedItems",
																	do: {
																		id: "$formatstring {$.by}_container",
																		view: "menu3.basic.SubCategoryElement",
																		data: {
																			title: "$loc $formatstring UI_ITEM_SUBTYPE_IN_PLURAL_{$.by}"
																		},
																		buttons: [
																			{
																				"$if $arg ShowPrevNextButtonPrompt": {
																					$then: {
																						actiontype: "lt_rt",
																						actionlabel:
																							"$loc UI_BUTTON_PROMPTS_ACTION_PREVNEXT_CATEGORY",
																						customplatform: {
																							platform: "key",
																							hide: true,
																							actiontype: "mouse_lmb"
																						}
																					}
																				}
																			}
																		],
																		children: {
																			id: "$formatstring scroll_container_{$.by}",
																			controller: "group",
																			view: "menu3.containers.ScrollingListContainer",
																			row: 1.0,
																			nrows: 3,
																			ncols: 10,
																			pages: true,
																			direction: "horizontal",
																			data: {
																				direction: "horizontal"
																			},
																			children: {
																				$each: {
																					in: {
																						$orderby: {
																							from: "$.group",
																							by: {
																								"$if $eqs ($.Item.Unlockable.Type,disguise)":
																									{
																										$then: {
																											"$if $not $isnull $.Item.Unlockable.Properties.OrderIndex":
																												{
																													$then: "$.Item.Unlockable.Properties.OrderIndex",
																													$else: 10000
																												}
																										},
																										$else: {
																											"$if $not $isnull $.Item.Unlockable.Properties.OrderIndex":
																												{
																													$then: "$.Item.Unlockable.Properties.OrderIndex",
																													$else: 10000
																												}
																										}
																									}
																							}
																						}
																					},
																					do: {
																						"$if ": {
																							$condition: {
																								$or: [
																									"$not $eqs ($.Item.Unlockable.Id,TOKEN_OUTFIT_WET_SUIT)",
																									"$not $eqs ($arg location,LOCATION_NEWZEALAND)"
																								]
																							},
																							$then: {
																								$mergeobjects: [
																									{
																										"$if $arg usetalltile":
																											{
																												$then: {
																													view: "menu3.basic.ItemTileTall",
																													nrows: 3
																												},
																												$else: {
																													view: "menu3.basic.ItemTileSmall",
																													nrows: 1.5
																												}
																											}
																									},
																									{
																										$setup: {
																											"$set LocalizedReproItem":
																												"$item $.Item",
																											$in: {
																												ncols: 2,
																												id: "$.LocalizedReproItem.id",
																												data: {
																													_header:
																														"$loc $formatstring UI_ITEM_SUBTYPE_{$.Item.Unlockable.Subtype}",
																													title: "$.LocalizedReproItem.name",
																													image: "$.LocalizedReproItem.image",
																													rarity: "$.LocalizedReproItem.rarity",
																													icon: {
																														"$if $eqs ($.Item.Unlockable.Type,disguise)":
																															{
																																$then: "disguise",
																																$else: "$.Item.Unlockable.Subtype"
																															}
																													},
																													perks: "$.LocalizedReproItem.perks",
																													itemcount:
																														"$.LocalizedReproItem.itemcount",
																													header: {
																														"$if $isinloadout $.LocalizedReproItem.repositoryid":
																															{
																																$then: "$loc UI_MENU_PAGE_LOADOUT_ALREADY_IN_USE",
																																$else: "$loc $formatstring UI_ITEM_SUBTYPE_{$.Item.Unlockable.Subtype}"
																															}
																													}
																												},
																												buttons: [
																													{
																														actiontype:
																															"action-y",
																														actionlabel:
																															"$loc UI_DIALOG_SHOW_DETAILS"
																													}
																												],
																												actions: {
																													select: {
																														"replace-children":
																															{
																																target: "headline_container",
																																children:
																																	[
																																		{
																																			view: "menu3.basic.ItemHeadlineElement",
																																			id: "headline_element"
																																		}
																																	]
																															},
																														"update-content":
																															{
																																target: "headline_element"
																															},
																														"update-buttons":
																															{
																																type: "slotitem",
																																slotid: "$.SlotId",
																																instanceId:
																																	"$.Item.InstanceId"
																															},
																														"set-repositoryitem-selected":
																															"$.LocalizedReproItem.repositoryid"
																													},
																													"action-y":
																														{
																															"show-modal":
																																{
																																	config: {
																																		priority:
																																			"low",
																																		view: "menu3.modal.ModalDialogItemDetails",
																																		buttons:
																																			[
																																				"$loc UI_DIALOG_OK",
																																				{
																																					type: "cancel"
																																				}
																																			],
																																		data: {
																																			description:
																																				"$.LocalizedReproItem.desc",
																																			name: "$.LocalizedReproItem.name",
																																			type: "$.Item.Unlockable.Type",
																																			subtype:
																																				{
																																					"$if $eqs ($.Item.Unlockable.Type,disguise)":
																																						{
																																							$then: "disguise",
																																							$else: "$.Item.Unlockable.Subtype"
																																						}
																																				},
																																			image: "$.LocalizedReproItem.image",
																																			rarity: "$.LocalizedReproItem.rarity",
																																			perks: "$.LocalizedReproItem.perks",
																																			item: "$($repository $.LocalizedReproItem.repositoryid)",
																																			displaybuttons:
																																				[
																																					{
																																						actiontype:
																																							"cancel",
																																						actionlabel:
																																							"$loc UI_BUTTON_PROMPTS_ACTION_BACK",
																																						hideIndicator: true
																																					}
																																				],
																																			actionAndKillTypes:
																																				{
																																					$setup: {
																																						"$set ItemRepositoryId":
																																							"$repository $.Item.Unlockable.Properties.RepositoryId",
																																						$in: {
																																							$convertarray:
																																								{
																																									discardElementsWithoutConversion: true,
																																									sourceArray:
																																										"$.ItemRepositoryId.OnlineTraits",
																																									conversionRules:
																																										{
																																											melee_nonlethal:
																																												"$loc UI_ITEM_ONLINETRAITS_MELEE_NONLETHAL",
																																											melee_lethal:
																																												"$loc UI_ITEM_ONLINETRAITS_MELEE_LETHAL",
																																											throw_nonlethal:
																																												"$loc UI_ITEM_ONLINETRAITS_THROW_NONLETHAL",
																																											throw_lethal:
																																												"$loc UI_ITEM_ONLINETRAITS_THROW_LETHAL",
																																											fiberwire:
																																												"$loc UI_ITEM_ONLINETRAITS_FIBERWIRE",
																																											syringe_poison:
																																												"$loc UI_ITEM_ONLINETRAITS_SYRINGE_POISON",
																																											consumable_poison:
																																												"$loc UI_ITEM_ONLINETRAITS_CONSUMABLE_POISON",
																																											accident_explosion:
																																												"$loc UI_KILL_METHOD_ACCIDENT_EXPLOSION",
																																											detonator_explosive_device:
																																												"$loc UI_KILL_METHOD_EXPLOSIVE",
																																											explosive_device:
																																												"$loc UI_KILL_METHOD_EXPLOSIVE"
																																										}
																																								}
																																						}
																																					}
																																				}
																																		}
																																	}
																																}
																														},
																													accept: {
																														"select-stashpoint":
																															{
																																target: {
																																	"$if $arg set-stashpoint":
																																		{
																																			$then: "$arg stashpoint",
																																			$else: null
																																		}
																																}
																															},
																														loadout_equip_unequip:
																															{
																																slotid: "$.SlotId",
																																instance:
																																	"$.Item",
																																mode: "equip"
																															},
																														"request-back":
																															{
																																target: [
																																	"contractcreation_planning",
																																	"planning",
																																	"multiplayer",
																																	"gamemode_versus"
																																],
																																usecache:
																																	{
																																		"$if $isnull $arg usecacheonreturn":
																																			{
																																				$then: false,
																																				$else: "$arg usecacheonreturn"
																																			}
																																	}
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
			]
		}
	}
}
