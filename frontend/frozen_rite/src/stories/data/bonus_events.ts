export default {
	"reveal": {
		"index": 0,
		"type": "reveal",
		"board": [
			[
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				}
			],
			[
				{
					"name": "H5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				}
			],
			[
				{
					"name": "H4"
				},
				{
					"name": "H5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H5"
				},
				{
					"name": "H2"
				}
			],
			[
				{
					"name": "L3"
				},
				{
					"name": "S",
					"scatter": true
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				}
			],
			[
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				}
			]
		],
		"paddingPositions": [
			7,
			11,
			10,
			46,
			21
		],
		"gameType": "basegame",
		"anticipation": [
			0,
			0,
			0,
			0,
			0
		]
	},
	"setTotalWin": {
		"index": 1,
		"type": "setTotalWin",
		"amount": 0
	},
	"finalWin": {
		"index": 2,
		"type": "finalWin",
		"amount": 0
	},
	"winInfo": {
		"index": 1,
		"type": "winInfo",
		"totalWin": 90,
		"wins": [
			{
				"symbol": "L2",
				"kind": 3,
				"win": 10,
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 2
					}
				],
				"meta": {
					"ways": 1,
					"globalMult": 1,
					"winWithoutMult": 10,
					"symbolMult": 0
				}
			},
			{
				"symbol": "L4",
				"kind": 5,
				"win": 80,
				"positions": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 4,
						"row": 3
					}
				],
				"meta": {
					"ways": 4,
					"globalMult": 1,
					"winWithoutMult": 80,
					"symbolMult": 0
				}
			}
		]
	},
	"setWin": {
		"index": 2,
		"type": "setWin",
		"amount": 90,
		"winLevel": 2
	},
	"symbolSacrifice": {
		"index": 1,
		"type": "symbolSacrifice",
		"source": "scatter",
		"loser": "H4",
		"winner": "L2",
		"positions": [
			{
				"reel": 3,
				"row": 4
			}
		],
		"persistent": false,
		"extraSpins": 0
	},
	"auroraMult": {
		"index": 1,
		"type": "auroraMult",
		"mult": 2
	},
	"riteAwaken": {
		"index": 4,
		"type": "riteAwaken",
		"rite": "blizzard",
		"purchased": false,
		"startMult": 2,
		"wheelLevel": 1,
		"startSpins": 5,
		"higherWins": false,
		"convertLows": false
	},
	"freeSpinTrigger": {
		"index": 5,
		"type": "freeSpinTrigger",
		"totalFs": 5,
		"positions": [
			{
				"reel": 0,
				"row": 1
			},
			{
				"reel": 2,
				"row": 3
			},
			{
				"reel": 3,
				"row": 2
			}
		]
	},
	"updateGlobalMult": {
		"index": 6,
		"type": "updateGlobalMult",
		"globalMult": 2
	},
	"updateFreeSpin": {
		"index": 7,
		"type": "updateFreeSpin",
		"amount": 0,
		"total": 5
	},
	"frostWheel": {
		"index": 25,
		"type": "frostWheel",
		"level": 1,
		"kind": "dark_surge",
		"value": 0,
		"labels": [
			{
				"kind": "mult",
				"value": 1
			},
			{
				"kind": "mult",
				"value": 2
			},
			{
				"kind": "mult",
				"value": 3
			},
			{
				"kind": "mult",
				"value": 5
			},
			{
				"kind": "mult",
				"value": 10
			},
			{
				"kind": "mult",
				"value": 25
			},
			{
				"kind": "extra_sacrifice",
				"value": 0
			},
			{
				"kind": "chosen_offering",
				"value": 0
			},
			{
				"kind": "dark_surge",
				"value": 0
			},
			{
				"kind": "blood_moon",
				"value": 0
			},
			{
				"kind": "frenzy",
				"value": 20
			}
		],
		"resultIndex": 8,
		"newLevel": 1,
		"multAfter": 2,
		"boosted": false
	},
	"wincap": {
		"index": 93,
		"type": "wincap",
		"amount": 4000000
	},
	"freeSpinEnd": {
		"index": 95,
		"type": "freeSpinEnd",
		"amount": 4000000,
		"winLevel": 10
	}
};
