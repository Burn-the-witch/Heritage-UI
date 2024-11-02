const loggingInterop_1 = require("@peacockproject/core/loggingInterop");
(0, loggingInterop_1.log)(loggingInterop_1.LogLevel.INFO, "[Heritage UI] Hub replacement active.")
module.exports = function HUI_PEACOCK_MENU_HUB(controller) {
  controller.configManager.configs.HubPageData = {
    "$datacontext": {
        "in": "$.data",
        "datavalues": {
            "IsFullMenuAvailable": {
                "$include": "menusystem/pages/hub/data/isfullmenuavailable.json"
            }
        },
        "do": {
            "id": "hub_root",
            "view": "common.UtcClockInitializer",
            "controller": "container",
            "actions": {
                "activated": [
                    {
                        "set-value": {
                            "target": "$.@global.CurrentBackgroundImage",
                            "value": "images/backgrounds/menu_bg.jpg"
                        },
                        "set-player-profile-xp-data": {
                            "$if $not $isnull $.PlayerProfileXpData": {
                                "$then": {
                                    "playerprofilelevel": "$.PlayerProfileXpData.Level"
                                },
                                "$else": null
                            }
                        }
                    },
                    {
                        "$if $not $isnullorempty $getapplicationoption AutoStartContractId": {
                            "$then": {
                                "set-menu-context": {
                                    "value": {
                                        "onpageopened": {
                                            "set-selected": {
                                                "target": "PLANNING_BUTTON_PLAY"
                                            },
                                            "trigger-input": {
                                                "action": "accept"
                                            }
                                        }
                                    }
                                },
                                "link": {
                                    "page": "planning",
                                    "args": {
                                        "url": "planning",
                                        "args": {
                                            "contractid": "$getapplicationoption AutoStartContractId"
                                        },
                                        "contractid": "$getapplicationoption AutoStartContractId"
                                    }
                                }
                            }
                        }
                    },
                    {
                        "$if $gamepersistentdata attraction_to_hub_flow": {
                            "$then": {
                                "$include": {
                                    "$path": "menusystem/pages/hub/modals/ioiaccount/showmodal_action.json"
                                }
                            }
                        }
                    },
                    {
                        "$if": {
                            "$condition": {
                                "$and": [
                                    "$isuser freeprologue",
                                    "$isininventory ACCESS_HIT_FLAMINGO"
                                ]
                            },
                            "$then": {
                                "set-selected": {
                                    "target": "FSP_Buy"
                                }
                            }
                        }
                    }
                ],
                "deactivated": {
                    "set-game-persistent-data": {
                        "key": "attraction_to_hub_flow",
                        "value": false
                    }
                },
                "actionx": {
                    "$if": {
                        "$condition": {
                            "$and": [
                                "$not $isonline",
                                {
                                    "$or": [
                                        "$not $eq($platform,izumo)",
                                        "$not $isuser freeprologue"
                                    ]
                                }
                            ]
                        },
                        "$then": {
                            "prompt_label": "$loc UI_BUTTON_PROMPTS_GO_ONLINE",
                            "try-trigger-online": {}
                        },
                        "$else": null
                    }
                },
                "actiony": {
                    "$if": {
                        "$condition": {
                            "$and": [
                                "$eq ($platform,pc)",
                                "$isuser freeprologue"
                            ]
                        },
                        "$then": {
                            "$include": {
                                "$path": "menusystem/pages/hub/actions/share.json"
                            }
                        },
                        "$else": null
                    }
                }
            },
            "data": {
                "direction": "vertical"
            },
            "children": [
                {
                    "$include": "menusystem/elements/general/general_headline.json"
                },
                {
                    "$if $gamepersistentdata attraction_to_hub_flow": {
                        "$then": {
                            "$include": "menusystem/pages/hub/modals/newunlockable/showmodal_element.json"
                        }
                    }
                },
                {
                    "$if $gamepersistentdata attraction_to_hub_flow": {
                        "$then": {
                            "$include": "menusystem/pages/hub/modals/limitedtime_freecontent/showmodal_element.json"
                        }
                    }
                },
                {
                    "$if $gamepersistentdata attraction_to_hub_flow": {
                        "$then": {
                            "$include": "menusystem/pages/hub/modals/roadmap/showmodal_element.json"
                        }
                    }
                },
                {
                    "$if $gamepersistentdata attraction_to_hub_flow": {
                        "$then": {
                            "$include": "menusystem/pages/hub/modals/sale/showmodal_element.json"
                        }
                    }
                },
                {
                    "$include": "menusystem/pages/hub/modals/vrtutorial/showmodal_element.json"
                },
                {
                    "$if $not $isnull $.@global.CurrentBackgroundImage": {
                        "$then": {
                            "selectable": false,
                            "pressable": false,
                            "actions": {
                                "activated": {
                                    "$if $not $isnullorempty $.@global.CurrentBackgroundImage.frames": {
                                        "$then": {
                                            "$datacontext": {
                                                "in": "$.",
                                                "datavalues": {
                                                    "Frames": {
                                                        "$each $.@global.CurrentBackgroundImage.frames": "$res $."
                                                    }
                                                },
                                                "do": {
                                                    "call": {
                                                        "onmenuframe": true,
                                                        "method": "setBackgroundData",
                                                        "args": {
                                                            "blendin": "$.@global.CurrentBackgroundImage.blendin",
                                                            "framemode": "$.@global.CurrentBackgroundImage.framemode",
                                                            "frames": "$.Frames"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "$else": {
                                            "call": {
                                                "onmenuframe": true,
                                                "method": "setBackground",
                                                "args": "$res $.@global.CurrentBackgroundImage"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "controller": "category",
                    "view": "menu3.containers.ScrollingTabsContainer",
                    "direction": "horizontal",
                    "ncols": 10,
                    "data": {
                        "direction": "horizontal",
                        "overflowscrolling": "0.45",
                        "buttonprompts": [
                            {
                                "actiontype": [
                                    "lb",
                                    "rb"
                                ],
                                "actionlabel": "$loc UI_BUTTON_PROMPTS_BROWSE_CATEGORIES"
                            }
                        ]
                    },
                    "children": [
                        {
                            "id": "category_featured",
                            "controller": "categoryitem",
                            "view": "menu3.basic.CategoryElement",
                            "data": {
                                "title": "$loc UI_HERITAGE_DASHBOARD",
                                "icon": "21"
                            },
                            "actions": {
                                "activated": {
                                    "set-value": {
                                        "target": "$.@global.CurrentBackgroundImage",
                                        "value": "images/backgrounds/menu_bg.jpg"
                                    }
                                }
                            },
                            "children": [
                                {
                                    "$if $isuser freeprologue": {
                                        "$then": {
                                            "$if $eq($platform,izumo)": {
                                                "$then": {
                                                    "$include": "menusystem/pages/hub/dashboard/dashboardfreestarterpack_izumo.json"
                                                },
                                                "$else": {
                                                    "$if $not $isonline": {
                                                        "$then": {
                                                            "$include": "menusystem/pages/hub/dashboard/dashboardfreestarterpack_offline.json"
                                                        },
                                                        "$else": {
                                                            "$include": "menusystem/pages/hub/dashboard/dashboardfreestarterpack.json"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "$else": {
                                            "$if $not $isonline": {
                                                "$then": {
                                                    "$include": "menusystem/pages/hub/dashboard/dashboard_offline.json"
                                                },
                                                "$else": {
                                                    "$include": "menusystem/pages/hub/dashboard/dashboard.json"
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "$if $.IsFullMenuAvailable": {
                                "$then": {
                                    "controller": "categoryitem",
                                    "view": "menu3.basic.CategoryElement",
                                    "_comment": "do not change this id - is used by challenge goto location!",
                                    "id": "location_tab",
                                    "data": {
                                        "title": "$loc UI_MENU_PAGE_HUB_DESTINATIONS",
                                        "icon": "location"
                                    },
                                    "children": [
                                        {
                                            "$include": {
                                                "$path": "menusystem/pages/hub/destinationssubmenu.json"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "$if $.IsFullMenuAvailable": {
                                "$then": {
                                    "controller": "categoryitem",
                                    "view": "menu3.basic.CategoryElement",
                                    "id": "category_story",
                                    "data": {
                                        "title": "$loc UI_MENU_PAGE_HUB_CAMPAIGNS",
                                        "icon": "story"
                                    },
                                    "children": [
                                        {
                                            "$include": {
                                                "$path": "menusystem/pages/hub/story/storyoverview.json"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            "$if $.IsFullMenuAvailable": {
                                "$then": {
                                    "$if $not $isonline": {
                                        "$then": {
                                            "$include": {
                                                "$path": "menusystem/pages/hub/gamemodes/gamemodesoverview_locked.json"
                                            }
                                        },
                                        "$else": {
                                            "$include": {
                                                "$path": "menusystem/pages/hub/gamemodes/gamemodesoverview.json"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "$if $.IsFullMenuAvailable": {
                                "$then": {
                                    "$if $not $isonline": {
                                        "$then": {
                                            "$include": {
                                                "$path": "menusystem/pages/hub/career_locked.json"
                                            }
                                        },
                                        "$else": {
                                            "$include": {
                                                "$path": "menusystem/pages/hub/career.json"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "$include": {
                                "$path": "menusystem/pages/hub/settings.json"
                            }
                        }
                    ]
                }
            ]
        }
    }
}
}