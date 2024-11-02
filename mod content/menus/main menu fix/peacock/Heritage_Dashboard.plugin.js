const loggingInterop_1 = require("@peacockproject/core/loggingInterop");
(0, loggingInterop_1.log)(loggingInterop_1.LogLevel.INFO, "[Heritage UI] Dashboard replacement active.")
module.exports = function HUI_PEACOCK_MENU_DASHBOARD(controller) {

    xorshift = (t) => {
        let e = t;
        return (e ^= e << 13), (e ^= e >> 17), (e ^= e << 5), e >>> 0;
      };
    const getRandomIntWithSeed = (t, e, r) => {
        const n = xorshift(r),
          s = new MersenneTwister(n).random() / 4294967295;
        return Math.floor(s * (e - t + 1)) + t;
      }
      
      class MersenneTwister {
        constructor(t) {
          (this.N = 624),
            (this.mt = new Array(this.N)),
            (this.index = 0),
            (this.mt[0] = t >>> 0);
          for (let t = 1; t < this.N; t++)
            this.mt[t] =
              (1812433253 * (this.mt[t - 1] ^ (this.mt[t - 1] >>> 30)) + t) >>> 0;
        }
        random() {
          0 === this.index && this.generateNumbers();
          let t = this.mt[this.index];
          return (
            (t ^= t >>> 11),
            (t ^= (t << 7) & 2636928640),
            (t ^= (t << 15) & 4022730752),
            (t ^= t >>> 18),
            (this.index = (this.index + 1) % this.N),
            t >>> 0
          );
        }
        generateNumbers() {
          for (let t = 0; t < this.N; t++) {
            let e =
              (2147483648 & this.mt[t]) + (2147483647 & this.mt[(t + 1) % this.N]);
            (this.mt[t] = this.mt[(t + 397) % this.N] ^ (e >>> 1)),
              e % 2 != 0 && (this.mt[t] ^= 2567483615);
          }
        }
      }
      function crc32(t) {
        "string" != typeof t && (t = String(t));
        const e = [];
        let r = -1;
        for (let t = 0; t < 256; t++) {
          let r = t;
          for (let t = 0; t < 8; t++)
            1 & r ? (r = (r >>> 1) ^ 3988292384) : (r >>>= 1);
          e[t] = r;
        }
        for (let n = 0; n < t.length; n++) {
          r = (r >>> 8) ^ e[255 & (r ^ t.charCodeAt(n))];
        }
        return (-1 ^ r) >>> 0;
      }
    const ET_Tiles = [
        {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_TEQUILA_SUNRISE_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/018_TequilaSunrise/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "8813e0a4-08ac-494f-a847-687a2da3582f",
                                "resetescalation": false
                            },
                            "contractid": "8813e0a4-08ac-494f-a847-687a2da3582f"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_TEQUILA_SUNRISE_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_SHANDY_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/029_Shandy/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "13680605-83ed-4b8c-a44d-30cc5b4fb17a",
                                "resetescalation": false
                            },
                            "contractid": "13680605-83ed-4b8c-a44d-30cc5b4fb17a"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_SHANDY_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_MARGARITA_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/008_Margarita/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "158b600a-6448-45d3-907f-77351b9656ee",
                                "resetescalation": false
                            },
                            "contractid": "158b600a-6448-45d3-907f-77351b9656ee"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_MARGARITA_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_KAMIKAZE_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/039_Kamikaze/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "2b928d67-c244-4601-bafb-7af664fb17bb",
                                "resetescalation": false
                            },
                            "contractid": "2b928d67-c244-4601-bafb-7af664fb17bb"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_KAMIKAZE_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_KIRROYAL_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/021_KirRoyal/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "a9d93d2a-c541-49ab-8ba1-9e345cf7e806",
                                "resetescalation": false
                            },
                            "contractid": "a9d93d2a-c541-49ab-8ba1-9e345cf7e806"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_KAMIKAZE_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_WHITE_RUSSIAN_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/001_WhiteRussian/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "16d78245-5392-413c-b3db-989d6685c32a",
                                "resetescalation": false
                            },
                            "contractid": "16d78245-5392-413c-b3db-989d6685c32a"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_WHITE_RUSSIAN_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_SAKINI_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/030_Sakini/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "92a87b10-a230-4986-bb35-06f16e84b11f",
                                "resetescalation": false
                            },
                            "contractid": "92a87b10-a230-4986-bb35-06f16e84b11f"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_SAKINI_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_LUMUMBA_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/031_Lumumba/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "5dc115d3-e5d4-4023-a11a-27c6f7194bea",
                                "resetescalation": false
                            },
                            "contractid": "5dc115d3-e5d4-4023-a11a-27c6f7194bea"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_LUMUMBA_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_MOJITO_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/015_Mojito/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "0fea5e55-9aec-41ef-9e5b-4e5e5f536f82",
                                "resetescalation": false
                            },
                            "contractid": "0fea5e55-9aec-41ef-9e5b-4e5e5f536f82"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_MOJITO_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_MINT_JULEP_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/006_MintJulep/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "ff188c8b-e1eb-4c59-af75-6b6fe3da5955",
                                "resetescalation": false
                            },
                            "contractid": "ff188c8b-e1eb-4c59-af75-6b6fe3da5955"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_MINT_JULEP_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_SAZERAC_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/002_Sazerac/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "0fd17346-bcb4-4bcc-acc3-5e1b6b184ef4",
                                "resetescalation": false
                            },
                            "contractid": "0fd17346-bcb4-4bcc-acc3-5e1b6b184ef4"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_SAZERAC_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_PISCO_SOUR_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/013_PiscoSour/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "e87217e3-4809-4855-80d5-74bed66be58d",
                                "resetescalation": false
                            },
                            "contractid": "e87217e3-4809-4855-80d5-74bed66be58d"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_PISCO_SOUR_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_QUADRUPLERUMANDCOKE_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/044_quadruplerumandcoke/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "8f13ea71-b207-4955-9eb8-ede757f3baa6",
                                "resetescalation": false
                            },
                            "contractid": "8f13ea71-b207-4955-9eb8-ede757f3baa6"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_QUADRUPLERUMANDCOKE_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_HARVEY_WALLBANGER_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/022_HarveyWallbanger/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "0dc242ce-084e-4f6d-980f-e65885cd6955",
                                "resetescalation": false
                            },
                            "contractid": "0dc242ce-084e-4f6d-980f-e65885cd6955"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_HARVEY_WALLBANGER_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_SCREWDRIVER_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/010_Screwdriver/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "0d938ef9-05c7-4eb8-89cc-ae79b73c6992",
                                "resetescalation": false
                            },
                            "contractid": "0d938ef9-05c7-4eb8-89cc-ae79b73c6992"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_SCREWDRIVER_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_COSMOPOLITAN_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/019_Cosmopolitan/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "ad549098-eb3d-4132-8ef8-fe77c6afbbaa",
                                "resetescalation": false
                            },
                            "contractid": "ad549098-eb3d-4132-8ef8-fe77c6afbbaa"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_COSMOPOLITAN_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_HOTTODDY_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/037_HotToddy/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "c3c7126e-32cd-4502-b5ce-90b5ae436806",
                                "resetescalation": false
                            },
                            "contractid": "c3c7126e-32cd-4502-b5ce-90b5ae436806"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_HOTTODDY_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_MAI_TAI_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/014_MaiTai/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "2e2c3f33-92ad-412f-a351-b7267697ff70",
                                "resetescalation": false
                            },
                            "contractid": "2e2c3f33-92ad-412f-a351-b7267697ff70"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_MAI_TAI_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_BRASSMONKEY_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/026_BrassMonkey/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "b0bed170-8652-4188-8b9a-92caf9f97e5b",
                                "resetescalation": false
                            },
                            "contractid": "b0bed170-8652-4188-8b9a-92caf9f97e5b"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_BRASSMONKEY_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_MARTINI_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/016_Martini/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "b0b8995c-7b3f-4fa6-91a2-be4bc8edc046",
                                "resetescalation": false
                            },
                            "contractid": "b0b8995c-7b3f-4fa6-91a2-be4bc8edc046"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_MARTINI_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_BLOODYMARY_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/009_BloodyMary/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "87f8293a-29cd-4cb1-ade7-dd6bb056d38e",
                                "resetescalation": false
                            },
                            "contractid": "87f8293a-29cd-4cb1-ade7-dd6bb056d38e"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_BLOODYMARY_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_BUSHWHACKER_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/027_Bushwacker/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "550c4d75-ca87-4be7-a18e-caf30e6c8136",
                                "resetescalation": false
                            },
                            "contractid": "550c4d75-ca87-4be7-a18e-caf30e6c8136"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_BUSHWHACKER_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_FLIRTINI_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/042_Flitini/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "655c5a57-69d1-48b6-a14b-2ae396c16174",
                                "resetescalation": false
                            },
                            "contractid": "655c5a57-69d1-48b6-a14b-2ae396c16174"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_FLIRTINI_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_MOSCOWMULE_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/017_MoscowMule/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "1c0377f3-6e32-4563-8baf-9677cdb3bb60",
                                "resetescalation": false
                            },
                            "contractid": "1c0377f3-6e32-4563-8baf-9677cdb3bb60"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_MOSCOWMULE_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_DIRTY_OCTOPUS_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/028_DirtyOctopus/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "deace35f-ab6d-44c9-b1a6-98757e854f74",
                                "resetescalation": false
                            },
                            "contractid": "deace35f-ab6d-44c9-b1a6-98757e854f74"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_DIRTY_OCTOPUS_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_ADONIS_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/047_adonis/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "44fd7474-d7be-4d3d-b944-6c1cf6ca09d1",
                                "resetescalation": false
                            },
                            "contractid": "44fd7474-d7be-4d3d-b944-6c1cf6ca09d1"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_ADONIS_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_SAMBUCA_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/046_sambuca/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "06a58b66-56f4-45c3-ba1b-d03998212289",
                                "resetescalation": false
                            },
                            "contractid": "06a58b66-56f4-45c3-ba1b-d03998212289"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_SAMBUCA_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_SAMBUCA2_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/s2_sambuca2/title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "ecf353e8-3dd8-4958-b255-f963926aea51",
                                "resetescalation": false
                            },
                            "contractid": "ecf353e8-3dd8-4958-b255-f963926aea51"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_SAMBUCA2_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_HIGHBALL_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S2_Highball/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "654685ab-d52d-49cb-815d-f98ee00454d3",
                                "resetescalation": false
                            },
                            "contractid": "654685ab-d52d-49cb-815d-f98ee00454d3"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_HIGHBALL_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_ALABAMASLAMMER_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S2_AlabamaSlammer/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "9f5b8d74-1f70-49ea-94e2-21d2de3e5cf3",
                                "resetescalation": false
                            },
                            "contractid": "9f5b8d74-1f70-49ea-94e2-21d2de3e5cf3"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_ALABAMASLAMMER_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_GOLDENDOUBLET_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S2_GoldenDoublet/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "263eca3d-d25d-40ce-ba0a-48a221cd0b9e",
                                "resetescalation": false
                            },
                            "contractid": "263eca3d-d25d-40ce-ba0a-48a221cd0b9e"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_GOLDENDOUBLET_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_SKITTLEBOMB_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/s2_skittlebomb/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "cbc86bed-51ce-4699-89d4-0ded8f200cbc",
                                "resetescalation": false
                            },
                            "contractid": "cbc86bed-51ce-4699-89d4-0ded8f200cbc"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_SKITTLEBOMB_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_GIBSON_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S3_Gibson/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "b2c0251e-1803-4e12-b860-b9fa6ce5c004",
                                "resetescalation": false
                            },
                            "contractid": "b2c0251e-1803-4e12-b860-b9fa6ce5c004"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_GIBSON_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_BRAMBLE_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S3_Bramble/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "92951377-419d-4c31-aa21-2a3f03ef82d0",
                                "resetescalation": false
                            },
                            "contractid": "92951377-419d-4c31-aa21-2a3f03ef82d0"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_BRAMBLE_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_VESPER_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S3_Vesper/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "1fcaff1b-7fa3-4b9f-a586-9c7a1689b48d",
                                "resetescalation": false
                            },
                            "contractid": "1fcaff1b-7fa3-4b9f-a586-9c7a1689b48d"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_VESPER_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_RADLER_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S3_Radler/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "3f0b8f19-d5d4-4611-ac8f-480f81c18f54",
                                "resetescalation": false
                            },
                            "contractid": "3f0b8f19-d5d4-4611-ac8f-480f81c18f54"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_RADLER_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_TOMORROWLAND_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S3_Tomorrowland/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "1f0f3c70-b559-48ea-aca4-b64c8c762b69",
                                "resetescalation": false
                            },
                            "contractid": "1f0f3c70-b559-48ea-aca4-b64c8c762b69"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_TOMORROWLAND_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_REDSNAPPER_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S3_Redsnapper/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "6fad7901-279f-45df-ab8d-087a3cb06dcc",
                                "resetescalation": false
                            },
                            "contractid": "6fad7901-279f-45df-ab8d-087a3cb06dcc"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_REDSNAPPER_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_JOCKEYCLUB_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S3_JockeyClub/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "d030216e-a8d6-4446-a1f6-2fc1a2461464",
                                "resetescalation": false
                            },
                            "contractid": "d030216e-a8d6-4446-a1f6-2fc1a2461464"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_JOCKEYCLUB_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_CLERICO_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S3_Clerico/Title.jpg"
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "9a36cc55-bfc4-4f8b-99d2-c65cf4de365d",
                                "resetescalation": false
                            },
                            "contractid": "9a36cc55-bfc4-4f8b-99d2-c65cf4de365d"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_CLERICO_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    {
        "view": "menu3.basic.MenuTileTall",
        "row": 0,
        "col": 6,
        "nrows": 3,
        "ncols": 4,
        "data": {
            "title": "$loc UI_CONTRACT_PENICILLIN_TITLE",
            "header": "$loc UI_HERITAGE_ET",
            "icon": "elusive",
            "image": "$res images/contracts/elusive/S3_Penicillin/Title.jpg",
        },
        "actions": {
            "accept": [
                {
                    "link": {
                        "page": "planning",
                        "args": {
                            "url": "planning",
                            "args": {
                                "contractid": "8813e0a4-08ac-494f-a847-687a2da3582f",
                                "resetescalation": false
                            },
                            "contractid": "8813e0a4-08ac-494f-a847-687a2da3582f"
                        }
                    }
                }
            ],
            "select": {
                "replace-children": {
                    "target": "headline_container",
                    "children": [
                        {
                            "view": "menu3.basic.HeadlineElement",
                            "selectable": false,
                            "pressable": false,
                            "data": {
                                "title": "$loc UI_CONTRACT_PENICILLIN_TITLE",
                                "header": "$loc UI_HERITAGE_ET",
                                "typeicon": "elusive"
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
            }
        }
    },
    ]
    
    const currentDate = new Date();
  const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();
const finalDate = crc32(month.toString() + day.toString() + year.toString());

    const randomIndex = [getRandomIntWithSeed( 0, ET_Tiles.length-1, finalDate)]

    controller.configManager.configs.EiderDashboard = { 
      "controller": "group",
      "row": 1,
      "nrows": 3,
      "ncols": 10,
      "layoutchildren": true,
      "children": {
          "$mergearrays": [
              {
                  "$if": {
                      "$condition": {
                          "$and": [
                              "$isuser vr",
                              {
                                  "$or": [
                                      "$isvrdeviceavailable",
                                      "$eq ($platform,orbis)"
                                  ]
                              }
                          ]
                      },
                      "$then": [
                          {
                              "view": "menu3.basic.MenuTileTall",
                              "row": 0,
                              "col": 0,
                              "nrows": 3,
                              "ncols": 4,
                              "data": {
                                  "header": "$loc UI_MENU_PAGE_HUB_CAMPAIGN",
                                  "title": "$loc UI_MENU_PAGE_HUB_STORY",
                                  "icon": "story",
                                  "image": "$res images/hui/test.jpg"
                              },
                              "actions": {
                                  "accept": [
                                      {
                                          "set-selected": {
                                              "target": "category_story"
                                          }
                                      }
                                  ],
                                  "select": {
                                      "replace-children": {
                                          "target": "headline_container",
                                          "children": [
                                              {
                                                  "view": "menu3.basic.HeadlineElement",
                                                  "selectable": false,
                                                  "pressable": false,
                                                  "data": {
                                                      "header": "$loc UI_MENU_PAGE_HUB_CAMPAIGN",
                                                      "title": "$loc UI_MENU_PAGE_HUB_STORY",
                                                      "typeicon": "story"
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
                                  }
                              }
                          },
                          {
                              "$databinding menusystem/pages/hub/dashboard/data/data_dashboardtile_vr.json": {
                                  "view": "menu3.basic.ButtonTileXXSmall",
                                  "row": 3,
                                  "col": 6,
                                  "nrows": 3,
                                  "ncols": 2,
                                  "data": {
                                      "header": "$.Header",
                                      "title": "$.Title",
                                      "icon": "$.Icon",
                                      "image": "$.Image"
                                  },
                                  "actions": {
                                      "$include": "menusystem/pages/hub/dashboard/actions/actions_dashboardtile_vr.json"
                                  }
                              }
                          }
                      ],
                      "$else": {
                          "view": "menu3.basic.MenuTileTall",
                          "row": 0,
                          "col": 0,
                          "nrows": 3,
                          "ncols": 4,
                          "data": {
                              "header": "$loc UI_MENU_PAGE_HUB_CAMPAIGN",
                              "title": "$loc UI_MENU_PAGE_HUB_STORY",
                              "icon": "story",
                              "image": "$res images/hui/test.jpg"
                          },
                          "actions": {
                              "accept": [
                                  {
                                      "set-selected": {
                                          "target": "category_story"
                                      }
                                  }
                              ],
                              "select": {
                                  "replace-children": {
                                      "target": "headline_container",
                                      "children": [
                                          {
                                              "view": "menu3.basic.HeadlineElement",
                                              "selectable": false,
                                              "pressable": false,
                                              "data": {
                                                  "header": "$loc UI_MENU_PAGE_HUB_CAMPAIGN",
                                                  "title": "$loc UI_MENU_PAGE_HUB_STORY",
                                                  "typeicon": "story"
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
                              }
                          }
                      }
                  }
              },
              {
                "view": "menu3.basic.ButtonTileXXSmall",
                "row": 3,
                "col": 8,
                "nrows": 3,
                "ncols": 2,
                "data":{
                    "title": "$loc UI_PEACOCK_GO_OFFLINE",
                    "icon": "goonline",
                    "image": "$res images/ui/tiles/button_goonline.jpg"
                },
                "actions": {
                    "accept": {
                        "force-offline": {}
                    },
                    "select": {
                        "replace-children": {
                            "target": "headline_container",
                            "children": [
                                {
                                    "view": "menu3.basic.HeadlineElement",
                                    "selectable": false,
                                    "pressable": false,
                                    "data": {
                                        "header": "",
                                        "title": "$loc UI_PEACOCK_GO_OFFLINE",
                                        "typeicon": "goonline"
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
                    }
                }
            },
              {
                  "view": "menu3.basic.MenuTileTall",
                  "row": 0,
                  "col": 2,
                  "nrows": 3,
                  "ncols": 4,
                  "data": {
                      "title": "$loc UI_HERITAGE_EVERGREEN",
                      "header": "$loc UI_HERITAGE_GAMEMODE",
                      "icon": "evergreen_gamemode",
                      "image": "$res images/livetile/tile_gamemode_evergreen.jpg"
                  },
                  "actions": {
                      "accept": [
                          {
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
                              }
                          },
                          {
                              "link": {
                                  "page": "planning",
                                  "args": {
                                      "url": "planning",
                                      "args": {
                                          "contractid": "f8ec92c2-4fa2-471e-ae08-545480c746ee",
                                          "resetescalation": false
                                      },
                                      "contractid": "f8ec92c2-4fa2-471e-ae08-545480c746ee"
                                  }
                              }
                          }
                      ],
                      "select": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": [
                                  {
                                      "view": "menu3.basic.HeadlineElement",
                                      "selectable": false,
                                      "pressable": false,
                                      "data": {
                                          "title": "$loc UI_HERITAGE_EVERGREEN",
                                          "header": "$loc UI_HERITAGE_GAMEMODE",
                                          "typeicon": "evergreen_gamemode"
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
                          "prompt_label": "Go to Destination",
                          "link": {
                              "page": "gamemode_evergreen",
                              "args": {
                                  "locationId": "LOCATION_PARENT_SNUG"
                              }
                          }
                      }
                  }
              },
              {
                  "view": "menu3.basic.MenuTileTall",
                  "row": 0,
                  "col": 4,
                  "nrows": 3,
                  "ncols": 4,
                  "data": {
                      "header": "$loc UI_HERITAGE_GAMEMODE",
                      "title": "$loc UI_HERITAGE_ESC_TITLE",
                      "icon": "ESCALATION",
                      "image": "$res images/hui/test2.jpg"
                  },
                  "actions": {
                    "accept": {
                        "link": {
                            "page": "gamemode_arcade",
                            "args": {
                                "url": "hitscategory",
                                "type": "ContractAttack",
                                "mode": "dataonly"
                            }
                        }
                    },
                    "select": {
                        "replace-children": {
                            "target": "headline_container",
                            "children": [
                                {
                                    "view": "menu3.basic.HeadlineElement",
                                    "selectable": false,
                                    "pressable": false,
                                    "data": {
                                      "header": "$loc UI_HERITAGE_GAMEMODE",
                                      "title": "$loc UI_HERITAGE_ESC_TITLE",
                                        "typeicon": "ESCALATION"
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
                    }
                }
              },
              {
                "view": "menu3.basic.ItemTileSmall",
                "row": 0,
                "col": 8,
                "nrows": 1.5,
                "ncols": 2,
                "data": {
                    "header": "$loc UI_PEACOCK_POWERED_BY",
                    "title": "$loc UI_PEACOCK_BRANDING",
                    "icon": "fixed",
                    "image": "$res images/hui/peacocktest.jpg"
                },
                "actions": {
                    "accept": {
                        "open-url": {
                            "url": "https://thepeacockproject.org"
                        }
                    },
                    "select": {
                        "replace-children": {
                            "target": "headline_container",
                            "children": [
                                {
                                    "view": "menu3.basic.HeadlineElement",
                                    "selectable": false,
                                    "pressable": false,
                                    "data": {
                                        "header": "$loc UI_PEACOCK_POWERED_BY",
                                        "title": "$loc UI_PEACOCK_BRANDING",
                                        "typeicon": "fixed"
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
                    }
                }
            },
              {
                  "view": "menu3.basic.MenuTileTall",
                  "row": 0,
                  "col": 6,
                  "nrows": 3,
                  "ncols": 4,
                  "data": {
                      "header": "$loc UI_HERITAGE_GAMEMODE",
                      "title": "$loc UI_HERITAGE_ESC_TITLE",
                      "icon": "ESCALATION",
                      "image": "$res images/hui/test3.jpg"
                  },
                  "actions": {
                      "accept": [
                          {
                              "call": {
                                  "onmenuframe": true,
                                  "method": "showBackground",
                                  "args": false
                              }
                          },
                          {
                              "set-selected": {
                                  "target": "category_gamemodes"
                              }
                          },
                          {
                              "set-selected": {
                                  "target": "$loc UI_HERITAGE_ESC_TITLE"
                              }
                          },
                          {
                              "trigger-input": {
                                  "action": "accept"
                              }
                          },
                          {
                              "call": {
                                  "onmenuframe": true,
                                  "method": "showBackground",
                                  "args": true
                              }
                          }
                      ],
                      "select": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": [
                                  {
                                      "view": "menu3.basic.HeadlineElement",
                                      "selectable": false,
                                      "pressable": false,
                                      "data": {
                                        "header": "$loc UI_HERITAGE_GAMEMODE",
                                        "title": "$loc UI_HERITAGE_ESC_TITLE",
                                          "typeicon": "ESCALATION"
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
                      }
                  }
              },
              {
                  "$each": {
                      "in": {
                          "$arraysort": {
                              "source": "$.DashboardData",
                              "property": "Properties.DashboardCategory",
                              "order": [
                                  "Dashboard_Category_Elusive",
                                  "Dashboard_Category_Arcade",
                                  "Dashboard_Category_Escalation",
                                  "Dashboard_Category_Featured"
                              ]
                          }
                      },
                      "do": {
                          "$switch $.Properties.DashboardCategory": [
                              {
                                  "case": "Dashboard_Category_Elusive",
                                  "return": {
                                      "controller": "container",
                                      "row": 0,
                                      "col": 4,
                                      "nrows": 3,
                                      "ncols": 2,
                                      "usechilddimensions": true,
                                      "children": [
                                          {
                                              "$include": {
                                                  "$path": "menusystem/pages/hub/dashboard/category_elusive/loadasync.json"
                                              }
                                          }
                                      ]
                                  }
                              },
                              {
                                  "case": "Dashboard_Category_Escalation",
                                  "return": {
                                      "controller": "container",
                                      "row": 0,
                                      "col": 6,
                                      "nrows": 1.5,
                                      "ncols": 2,
                                      "usechilddimensions": true,
                                      "children": [
                                          {
                                              "$include": {
                                                  "$path": "menusystem/pages/hub/dashboard/category_escalation/loadasync.json"
                                              }
                                          }
                                      ]
                                  }
                              },
                              {
                                  "case": "Dashboard_Category_Featured",
                                  "return": {
                                      "controller": "container",
                                      "row": 1.5,
                                      "col": 6,
                                      "nrows": 1.5,
                                      "ncols": 2,
                                      "usechilddimensions": true,
                                      "children": [
                                          {
                                              "$include": {
                                                  "$path": "menusystem/pages/hub/dashboard/category_featured/loadasync.json"
                                              }
                                          }
                                      ]
                                  }
                              },
                              {
                                  "default": null
                              }
                          ]
                      }
                  }
              },
              {
                  "$each $.DashboardData": {
                      "$switch $.Properties.DashboardCategory": [
                          {
                              "case": "Dashboard_Category_Live",
                              "return": {
                                  "controller": "container",
                                  "row": 0,
                                  "col": 8,
                                  "nrows": 1.5,
                                  "ncols": 2,
                                  "children": [
                                      {
                                          "$include": {
                                              "$path": "menusystem/pages/hub/dashboard/category_live/livetiles.json"
                                          }
                                      }
                                  ]
                              }
                          },
                          {
                              "default": null
                          }
                      ]
                  }
              },
              {
                  "view": "menu3.basic.ItemTileSmall",
                  "row": 1.5,
                  "col": 8,
                  "nrows": 1.5,
                  "ncols": 2,
                  "data": {
                      "title": "$loc UI_DIALOG_LOAD_GAME",
                      "icon": "load",
                      "image": "$res images/ui/tiles/load_menu_tile.jpg"
                  },
                  "actions": {
                      "accept": {
                                    "link": {
                                        "page": "loadpage",
                                        "args": {
                                            "url": "load",
                                            "args": {
                                                "saveorload": "load"
                                            },
                                            "saveorload": "load",
                                            "mainmenu": true,
                                            "reloadonchange": true
                                        }
                                    }
                                },
                      "select": {
                          "replace-children": {
                              "target": "headline_container",
                              "children": [
                                  {
                                      "view": "menu3.basic.HeadlineElement",
                                      "selectable": false,
                                      "pressable": false,
                                      "data": {
                                          "header": "",
                                          "title": "$loc UI_DIALOG_LOAD_GAME",
                                          "typeicon": "load"
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
                      }
                  }
              }
          ]
      }
  }

  controller.configManager.configs.EiderDashboard.children.$mergearrays[5] = ET_Tiles[randomIndex]
  if (!controller.smf.modIsInstalled("BurnthewitchRiisikumi.Roulette")) {
    {    controller.configManager.configs.EiderDashboard.children.$mergearrays[5].col = 4//et
        controller.configManager.configs.EiderDashboard.children.$mergearrays[3].col = 6//esca
        controller.configManager.configs.EiderDashboard.children.$mergearrays[3].row = 0//esca
        controller.configManager.configs.EiderDashboard.children.$mergearrays[3].view = "menu3.basic.MenuTileSmall"
        controller.configManager.configs.EiderDashboard.children.$mergearrays[3].data.image = "$res images/challenges/profile_challenges/escalation_s2_tier_9.jpg"
        var Roulettetile = [{
            "view": "menu3.basic.MenuTileSmall",
            "row": 1.5,
            "col": 6,
            "nrows": 3,
            "ncols": 4,
            "data": {
                "title": "$loc UI_MENU_PAGE_HUB_CONTRACTS",
                            "header": "$loc UI_HERITAGE_GAMEMODE",
                            "icon": "contract",
                            "image": "$res images/hui/background.jpg"
            },
            "actions": {
                        "select": {
                            "replace-children": {
                                "target": "headline_container",
                                "children": [
                                    {
                                        "view": "menu3.basic.HeadlineElement",
                                        "id": "headline_element"
                                    }
                                ]
                            },
                            "update-content": {
                                "target": "headline_element"
                            }
                        },
                        "deselect": {
                            "replace-children": {
                                "target": "headline_container",
                                "children": []
                            }
                        },
                        "accept": {
                                    "link": {
                                        "page": "gamemode_contracts",
                                        "args": {
                                            "url": "contracts"
                                        }
                                    }
                                }
                    }
        }]
        controller.configManager.configs.EiderDashboard.children.$mergearrays[7] = Roulettetile[0]
        
        
        }
}
else {    controller.configManager.configs.EiderDashboard.children.$mergearrays[5].col = 4//et
controller.configManager.configs.EiderDashboard.children.$mergearrays[3].col = 6//esca
controller.configManager.configs.EiderDashboard.children.$mergearrays[3].row = 1.5//esca
controller.configManager.configs.EiderDashboard.children.$mergearrays[3].view = "menu3.basic.MenuTileSmall"
controller.configManager.configs.EiderDashboard.children.$mergearrays[3].data.image = "$res images/challenges/profile_challenges/escalation_s2_tier_9.jpg"
var Roulettetile = [{
    "view": "menu3.basic.MenuTileSmall",
    "row": 0,
    "col": 6,
    "nrows": 3,
    "ncols": 4,
    "data": {
        "header": "$loc UI_HERITAGE_GAMEMODE",
        "title": "$loc UI_CONTRACT_HEADER_BULLETDANCER",
        "icon": "bulletdancer",
        "image": "$res images/Contracts/Roulette/roulettebranding.jpg"
    },
    "actions": {
      "accept": [
        {
            "ioiaccount": {
                "mode": "submit-email",
                "email": "$formatstring peacock:setFlagEnum?key={randomroulette.contractgen}&value={true}|getAllFlags"
            }
        },
        {
            "link": {
                "page": "contractsearchpagetest",
                "args": {
                    "url": "contractsearchpage"
                }
            }
        }
    ],
      "actiony": {
        "prompt_label": "Go to Daily Contract",
        "link": {
                                                            "page": "planning",
                                                            "args": {
                                                                "url": "planning",
                                                                "args": {
                                                                    "contractid": "218313f3-2b5e-4a8b-b916-ab5862b7874f",
                                                                    "resetescalation": true
                                                                },
                                                                "contractid": "218313f3-2b5e-4a8b-b916-ab5862b7874f"
                                                            }
                                                        }
    },
      "select": {
          "replace-children": {
              "target": "headline_container",
              "children": [
                  {
                      "view": "menu3.basic.HeadlineElement",
                      "selectable": false,
                      "pressable": false,
                      "data": {
                        "header": "$loc UI_HERITAGE_GAMEMODE",
        "title": "$loc UI_CONTRACT_HEADER_BULLETDANCER",
        "typeicon": "bulletdancer",
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
      }
  }
}]
controller.configManager.configs.EiderDashboard.children.$mergearrays[7] = Roulettetile[0]


}
  }