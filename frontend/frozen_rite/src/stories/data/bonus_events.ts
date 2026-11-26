export default {
	"reveal": {
		"index": 0,
		"type": "reveal",
		"board": [
			[
				{
					"name": "L2"
				},
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
					"name": "L1"
				},
				{
					"name": "L4"
				}
			],
			[
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				}
			],
			[
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "S",
					"scatter": true
				},
				{
					"name": "L2"
				},
				{
					"name": "H5"
				},
				{
					"name": "L1"
				}
			],
			[
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H5"
				},
				{
					"name": "L2"
				}
			],
			[
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				}
			]
		],
		"paddingPositions": [
			20,
			41,
			13,
			27,
			34
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
		"totalWin": 50,
		"wins": [
			{
				"symbol": "L1",
				"kind": 5,
				"win": 40,
				"positions": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 4,
						"row": 4
					}
				],
				"meta": {
					"ways": 1,
					"globalMult": 1,
					"winWithoutMult": 40,
					"symbolMult": 0
				}
			},
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
						"row": 1
					},
					{
						"reel": 2,
						"row": 1
					}
				],
				"meta": {
					"ways": 1,
					"globalMult": 1,
					"winWithoutMult": 10,
					"symbolMult": 0
				}
			}
		]
	},
	"setWin": {
		"index": 2,
		"type": "setWin",
		"amount": 50,
		"winLevel": 2
	},
	"auroraMult": {
		"index": 1,
		"type": "auroraMult",
		"mult": 2
	},
	"riteAwaken": {
		"index": 2,
		"type": "riteAwaken",
		"rite": "blizzard",
		"purchased": false,
		"startMult": 1,
		"step": 1,
		"maxMult": 20
	},
	"freeSpinTrigger": {
		"index": 3,
		"type": "freeSpinTrigger",
		"totalFs": 10,
		"positions": [
			{
				"reel": 0,
				"row": 4
			},
			{
				"reel": 1,
				"row": 3
			},
			{
				"reel": 2,
				"row": 3
			}
		]
	},
	"updateGlobalMult": {
		"index": 4,
		"type": "updateGlobalMult",
		"globalMult": 1
	},
	"updateFreeSpin": {
		"index": 5,
		"type": "updateFreeSpin",
		"amount": 0,
		"total": 10
	},
	"frostWheel": {
		"index": 62,
		"type": "frostWheel",
		"segments": [
			1,
			2,
			3,
			5,
			10,
			25,
			50,
			100
		],
		"result": 100,
		"preWheelAmount": 24130,
		"postWheelAmount": 2413000
	},
	"wincap": {
		"index": 63,
		"type": "wincap",
		"amount": 1000000
	},
	"freeSpinEnd": {
		"index": 65,
		"type": "freeSpinEnd",
		"amount": 1000000,
		"winLevel": 10
	},
	"freeSpinRetrigger": {
		"index": 51,
		"type": "freeSpinRetrigger",
		"totalFs": 16,
		"positions": [
			{
				"reel": 1,
				"row": 3
			},
			{
				"reel": 3,
				"row": 4
			}
		]
	}
};
