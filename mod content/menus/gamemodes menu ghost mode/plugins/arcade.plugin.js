const loggingInterop_1 = require("@peacockproject/core/loggingInterop")
;(0, loggingInterop_1.log)(loggingInterop_1.LogLevel.INFO, "[Heritage UI] Arcade Page overriden.")
module.exports = function HUI_PEACOCK_MENU_DASHBOARD(controller) {
	controller.configManager.configs.ArcadePageTemplate = {
		id: "gamemodearcade_root",
		controller: "list",
		actions: {
			activated: {
				call: {
					$if: {
						$condition: {
							$or: [
								{
									$include: "menusystem/data/isheritage.json"
								},
								"$eq ($.data.Data.Type,ContractAttack)",
								"$eq ($.data.Data.Type,Elusive_Target_Hits)"
							]
						},
						$then: {},
						$else: {
							onmenuframe: true,
							method: "setBackground",
							args: "$res images/images/backgrounds/menu_bg.jpg"
						}
					}
				}
			}
		},
		children: [
			{
				controller: "category",
				id: "category_controller",
				view: "menu3.containers.ScrollingTabsContainer",
				direction: "horizontal",
				data: {
					direction: "horizontal",
					topnavigation: {
						title: "$loc UI_MENU_PAGE_HUB_GAMEMODES",
						icon: "mission"
					}
				},
				children: [
					{
						view: "menu3.basic.CategoryElement",
						controller: "categoryitem",
						data: {
							"$switch $.data.Data.Type": [
								{
									case: "ContractAttack",
									return: {
										title: "$loc UI_PEACOCK_ESCALATIONS",
										icon: "54"
									}
								},
								{
									case: "Elusive_Target_Hits",
									return: {
										title: "$loc UI_MENU_PAGE_HITS_ELEMENT_CATEGORY_Elusive_Target_Hits",
										icon: "elusive"
									}
								},
								{
									default: {
										title: "$loc UI_ARCADE_TITLE",
										icon: "arcademode"
									}
								}
							]
						},
						children: [
							{
								controller: "container",
								id: "headline_container",
								view: "menu3.containers.ListContainer",
								direction: "horizontal",
								data: {
									direction: "horizontal"
								},
								row: 4.22,
								col: 0,
								selectable: false,
								pressable: false,
								children: []
							},
							{
								controller: "container",
								row: 1,
								children: [
									{
										$include: {
											$path: {
												"$switch $.data.Data.Type": [
													{
														case: "ContractAttack",
														return: "menusystem/elements/contract/hitscategory_contractattack.json"
													},
													{
														case: "Elusive_Target_Hits",
														return: "menusystem/elements/contract/hitscategory_elusive.json"
													},
													{
														default: "menusystem/elements/contract/hitscategory.json"
													}
												]
											}
										}
									}
								]
							}
						]
					}
				]
			}
		]
	}
}
