export default [
	{
		"id": 0,
		"payoutMultiplier": 383.2,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
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
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					46,
					15,
					23,
					43,
					34
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 10,
				"wins": [
					{
						"symbol": "L2",
						"kind": 3,
						"win": 10,
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
								"reel": 2,
								"row": 4
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
			{
				"index": 2,
				"type": "setWin",
				"amount": 10,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 10
			},
			{
				"index": 4,
				"type": "riteAwaken",
				"rite": "blizzard",
				"purchased": true,
				"startMult": 2,
				"wheelLevel": 1,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 5,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 3,
						"row": 4
					}
				]
			},
			{
				"index": 6,
				"type": "updateGlobalMult",
				"globalMult": 2
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
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
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					6,
					57,
					20,
					1,
					1
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 9,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L4",
				"winner": "H1",
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
						"reel": 1,
						"row": 3
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 4,
						"row": 1
					},
					{
						"reel": 4,
						"row": 3
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 10,
				"type": "frostWheel",
				"level": 1,
				"kind": "mult",
				"value": 1,
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
				"resultIndex": 0,
				"newLevel": 1,
				"multAfter": 3,
				"boosted": false
			},
			{
				"index": 11,
				"type": "updateGlobalMult",
				"globalMult": 3
			},
			{
				"index": 12,
				"type": "winInfo",
				"totalWin": 30,
				"wins": [
					{
						"symbol": "L3",
						"kind": 3,
						"win": 30,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 3,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 30,
				"winLevel": 2
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 40
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 7
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
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
					]
				],
				"paddingPositions": [
					1,
					33,
					14,
					48,
					28
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 17,
				"type": "winInfo",
				"totalWin": 5100,
				"wins": [
					{
						"symbol": "L3",
						"kind": 3,
						"win": 60,
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
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 4
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 3,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H1",
						"kind": 5,
						"win": 5040,
						"positions": [
							{
								"reel": 0,
								"row": 3
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
								"row": 1
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 3,
							"winWithoutMult": 1680,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 5100,
				"winLevel": 8
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 5140
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 7
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
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
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					35,
					14,
					22,
					14,
					43
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 22,
				"type": "winInfo",
				"totalWin": 20160,
				"wins": [
					{
						"symbol": "H1",
						"kind": 5,
						"win": 20160,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 8,
							"globalMult": 3,
							"winWithoutMult": 6720,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 20160,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 25300
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 7
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						}
					],
					[
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
							"name": "H1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					29,
					18,
					59,
					1,
					26
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 27,
				"type": "winInfo",
				"totalWin": 10080,
				"wins": [
					{
						"symbol": "H1",
						"kind": 5,
						"win": 10080,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 2
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
							"globalMult": 3,
							"winWithoutMult": 3360,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 10080,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 35380
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 7
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
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
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
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
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					35,
					59,
					41,
					6,
					11
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 32,
				"type": "winInfo",
				"totalWin": 2880,
				"wins": [
					{
						"symbol": "H1",
						"kind": 3,
						"win": 2880,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 3,
							"winWithoutMult": 960,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 2880,
				"winLevel": 6
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 38260
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 7
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
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
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					46,
					55,
					18,
					7,
					47
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 37,
				"type": "winInfo",
				"totalWin": 60,
				"wins": [
					{
						"symbol": "L2",
						"kind": 4,
						"win": 60,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 1
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
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 3,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 60,
				"winLevel": 2
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 38320
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 7
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H1"
						},
						{
							"name": "L1"
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
							"name": "H5"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					46,
					45,
					32,
					59,
					27
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 38320
			},
			{
				"index": 43,
				"type": "freeSpinEnd",
				"amount": 38310,
				"winLevel": 7
			},
			{
				"index": 44,
				"type": "finalWin",
				"amount": 38320
			}
		]
	},
	{
		"id": 1,
		"payoutMultiplier": 52.0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
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
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					46,
					4,
					21,
					43,
					34
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "riteAwaken",
				"rite": "blizzard",
				"purchased": true,
				"startMult": 2,
				"wheelLevel": 1,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 3,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 0,
						"row": 4
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
						"row": 4
					}
				]
			},
			{
				"index": 4,
				"type": "updateGlobalMult",
				"globalMult": 2
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 6,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H1"
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
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					23,
					29,
					59,
					20,
					58
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 7,
				"type": "winInfo",
				"totalWin": 40,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 40,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
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
							"ways": 2,
							"globalMult": 2,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 40,
				"winLevel": 2
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 40
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 5
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					57,
					56,
					33,
					10,
					35
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 12,
				"type": "winInfo",
				"totalWin": 160,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 160,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 2,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 160,
				"winLevel": 3
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 200
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 5
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H5"
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
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						}
					],
					[
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
						},
						{
							"name": "H1"
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
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					14,
					1,
					11,
					20,
					11
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 17,
				"type": "winInfo",
				"totalWin": 20,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 20,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 2,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 20,
				"winLevel": 2
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 220
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 5
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					32,
					23,
					32,
					43,
					35
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 22,
				"type": "winInfo",
				"totalWin": 340,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 20,
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
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 2,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H4",
						"kind": 4,
						"win": 320,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 2,
							"winWithoutMult": 160,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 340,
				"winLevel": 4
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 560
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 5
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "L1"
						},
						{
							"name": "H1"
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
					],
					[
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
							"name": "H4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					57,
					28,
					50,
					26,
					47
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 27,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L4",
				"winner": "L1",
				"positions": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 3,
						"row": 2
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
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 28,
				"type": "frostWheel",
				"level": 1,
				"kind": "blood_moon",
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
				"resultIndex": 9,
				"newLevel": 2,
				"multAfter": 2,
				"boosted": false
			},
			{
				"index": 29,
				"type": "winInfo",
				"totalWin": 640,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 640,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 8,
							"globalMult": 2,
							"winWithoutMult": 320,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 30,
				"type": "setWin",
				"amount": 640,
				"winLevel": 5
			},
			{
				"index": 31,
				"type": "setTotalWin",
				"amount": 1200
			},
			{
				"index": 32,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 7
			},
			{
				"index": 33,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
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
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					10,
					48,
					25,
					45,
					47
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 34,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L3",
				"winner": "L1",
				"positions": [
					{
						"reel": 3,
						"row": 2
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 35,
				"type": "frostWheel",
				"level": 2,
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
				"newLevel": 2,
				"multAfter": 2,
				"boosted": false
			},
			{
				"index": 36,
				"type": "winInfo",
				"totalWin": 960,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 960,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 2,
							"winWithoutMult": 480,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 37,
				"type": "setWin",
				"amount": 960,
				"winLevel": 5
			},
			{
				"index": 38,
				"type": "setTotalWin",
				"amount": 2160
			},
			{
				"index": 39,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 9
			},
			{
				"index": 40,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
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
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					53,
					50,
					22,
					42,
					56
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 41,
				"type": "winInfo",
				"totalWin": 1920,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 1920,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 4
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 24,
							"globalMult": 2,
							"winWithoutMult": 960,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 42,
				"type": "setWin",
				"amount": 1920,
				"winLevel": 6
			},
			{
				"index": 43,
				"type": "setTotalWin",
				"amount": 4080
			},
			{
				"index": 44,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 9
			},
			{
				"index": 45,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
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
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					57,
					29,
					22,
					36,
					46
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 46,
				"type": "winInfo",
				"totalWin": 960,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 960,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
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
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 2,
							"winWithoutMult": 480,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 47,
				"type": "setWin",
				"amount": 960,
				"winLevel": 5
			},
			{
				"index": 48,
				"type": "setTotalWin",
				"amount": 5040
			},
			{
				"index": 49,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 9
			},
			{
				"index": 50,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					46,
					29,
					31,
					42,
					14
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 51,
				"type": "winInfo",
				"totalWin": 160,
				"wins": [
					{
						"symbol": "H4",
						"kind": 4,
						"win": 160,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 2,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 52,
				"type": "setWin",
				"amount": 160,
				"winLevel": 3
			},
			{
				"index": 53,
				"type": "setTotalWin",
				"amount": 5200
			},
			{
				"index": 54,
				"type": "freeSpinEnd",
				"amount": 5200,
				"winLevel": 6
			},
			{
				"index": 55,
				"type": "finalWin",
				"amount": 5200
			}
		]
	},
	{
		"id": 2,
		"payoutMultiplier": 174.8,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
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
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
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
							"name": "H3"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
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
						}
					]
				],
				"paddingPositions": [
					50,
					6,
					20,
					43,
					19
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 40,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 40,
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
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 1,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 40,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 40
			},
			{
				"index": 4,
				"type": "riteAwaken",
				"rite": "blizzard",
				"purchased": true,
				"startMult": 2,
				"wheelLevel": 1,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 5,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 4
					}
				]
			},
			{
				"index": 6,
				"type": "updateGlobalMult",
				"globalMult": 2
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
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
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H4"
						},
						{
							"name": "H2"
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
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
					59,
					33,
					24,
					47,
					0
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 9,
				"type": "winInfo",
				"totalWin": 40,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 40,
						"positions": [
							{
								"reel": 0,
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
								"row": 4
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 2,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 10,
				"type": "setWin",
				"amount": 40,
				"winLevel": 2
			},
			{
				"index": 11,
				"type": "setTotalWin",
				"amount": 80
			},
			{
				"index": 12,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 5
			},
			{
				"index": 13,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H5"
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
							"name": "H4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					4,
					10,
					48,
					37,
					2
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 14,
				"type": "winInfo",
				"totalWin": 80,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 80,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 2,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 15,
				"type": "setWin",
				"amount": 80,
				"winLevel": 2
			},
			{
				"index": 16,
				"type": "setTotalWin",
				"amount": 160
			},
			{
				"index": 17,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 5
			},
			{
				"index": 18,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
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
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
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
					1,
					52,
					55,
					17,
					30
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 19,
				"type": "winInfo",
				"totalWin": 80,
				"wins": [
					{
						"symbol": "L2",
						"kind": 3,
						"win": 40,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 4
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
							"ways": 2,
							"globalMult": 2,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L4",
						"kind": 5,
						"win": 40,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 2,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 20,
				"type": "setWin",
				"amount": 80,
				"winLevel": 2
			},
			{
				"index": 21,
				"type": "setTotalWin",
				"amount": 240
			},
			{
				"index": 22,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 5
			},
			{
				"index": 23,
				"type": "reveal",
				"board": [
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
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
							"name": "H4"
						},
						{
							"name": "H2"
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
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					58,
					56,
					24,
					45,
					50
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 24,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L4",
				"winner": "L2",
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 4,
						"row": 3
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 25,
				"type": "winInfo",
				"totalWin": 480,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 480,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 8,
							"globalMult": 2,
							"winWithoutMult": 240,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 480,
				"winLevel": 4
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 720
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 7
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
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
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					8,
					56,
					23,
					6,
					2
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 30,
				"type": "winInfo",
				"totalWin": 160,
				"wins": [
					{
						"symbol": "L3",
						"kind": 3,
						"win": 40,
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
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 1
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 2,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L2",
						"kind": 5,
						"win": 120,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 2,
							"winWithoutMult": 60,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 160,
				"winLevel": 3
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 880
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 7
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
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
							"name": "H2"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					13,
					16,
					43,
					27,
					49
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 35,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H5",
				"winner": "H4",
				"positions": [],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 36,
				"type": "frostWheel",
				"level": 1,
				"kind": "mult",
				"value": 2,
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
				"resultIndex": 1,
				"newLevel": 1,
				"multAfter": 4,
				"boosted": false
			},
			{
				"index": 37,
				"type": "updateGlobalMult",
				"globalMult": 4
			},
			{
				"index": 38,
				"type": "winInfo",
				"totalWin": 5760,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 5760,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
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
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 48,
							"globalMult": 4,
							"winWithoutMult": 1440,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 39,
				"type": "setWin",
				"amount": 5760,
				"winLevel": 8
			},
			{
				"index": 40,
				"type": "setTotalWin",
				"amount": 6640
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 9
			},
			{
				"index": 42,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
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
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					37,
					14,
					57,
					21,
					43
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 43,
				"type": "winInfo",
				"totalWin": 2880,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 2880,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 24,
							"globalMult": 4,
							"winWithoutMult": 720,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 44,
				"type": "setWin",
				"amount": 2880,
				"winLevel": 6
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 9520
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 9
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
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
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					1,
					54,
					17,
					38,
					42
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 48,
				"type": "winInfo",
				"totalWin": 6520,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 6480,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 54,
							"globalMult": 4,
							"winWithoutMult": 1620,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L3",
						"kind": 4,
						"win": 40,
						"positions": [
							{
								"reel": 0,
								"row": 2
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
								"reel": 3,
								"row": 1
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 4,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setWin",
				"amount": 6520,
				"winLevel": 8
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 16040
			},
			{
				"index": 51,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 9
			},
			{
				"index": 52,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
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
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					44,
					55,
					20,
					34,
					57
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 53,
				"type": "winInfo",
				"totalWin": 1440,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 1440,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
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
							"ways": 12,
							"globalMult": 4,
							"winWithoutMult": 360,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 54,
				"type": "setWin",
				"amount": 1440,
				"winLevel": 5
			},
			{
				"index": 55,
				"type": "setTotalWin",
				"amount": 17480
			},
			{
				"index": 56,
				"type": "freeSpinEnd",
				"amount": 17440,
				"winLevel": 7
			},
			{
				"index": 57,
				"type": "finalWin",
				"amount": 17480
			}
		]
	},
	{
		"id": 4,
		"payoutMultiplier": 28.9,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
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
							"name": "L4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
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
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					31,
					48,
					23,
					16,
					57
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "riteAwaken",
				"rite": "blizzard",
				"purchased": true,
				"startMult": 2,
				"wheelLevel": 1,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 3,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 4,
						"row": 4
					}
				]
			},
			{
				"index": 4,
				"type": "updateGlobalMult",
				"globalMult": 2
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 6,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
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
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
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
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					0,
					46,
					13,
					26,
					17
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 7,
				"type": "winInfo",
				"totalWin": 160,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 160,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 2,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 160,
				"winLevel": 3
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 160
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 5
			},
			{
				"index": 11,
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H5"
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
							"name": "H3"
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
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
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
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					55,
					49,
					24,
					10,
					48
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 12,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H3",
				"winner": "H2",
				"positions": [
					{
						"reel": 1,
						"row": 4
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 13,
				"type": "frostWheel",
				"level": 1,
				"kind": "mult",
				"value": 1,
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
				"resultIndex": 0,
				"newLevel": 1,
				"multAfter": 3,
				"boosted": false
			},
			{
				"index": 14,
				"type": "updateGlobalMult",
				"globalMult": 3
			},
			{
				"index": 15,
				"type": "winInfo",
				"totalWin": 420,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 240,
						"positions": [
							{
								"reel": 0,
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
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 3,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H2",
						"kind": 3,
						"win": 180,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 3,
							"winWithoutMult": 60,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 420,
				"winLevel": 4
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 580
			},
			{
				"index": 18,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 7
			},
			{
				"index": 19,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
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
							"name": "H3"
						}
					],
					[
						{
							"name": "H5"
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
							"name": "H4"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
							"name": "L1"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					0,
					13,
					49,
					13,
					10
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 20,
				"type": "winInfo",
				"totalWin": 270,
				"wins": [
					{
						"symbol": "L2",
						"kind": 3,
						"win": 30,
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
							"globalMult": 3,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L4",
						"kind": 5,
						"win": 240,
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
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 3,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 270,
				"winLevel": 4
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 850
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 7
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
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
							"name": "H2"
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
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
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
							"name": "L4"
						},
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
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					18,
					20,
					12,
					34,
					56
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 25,
				"type": "winInfo",
				"totalWin": 240,
				"wins": [
					{
						"symbol": "L4",
						"kind": 4,
						"win": 60,
						"positions": [
							{
								"reel": 0,
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
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 3,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H2",
						"kind": 3,
						"win": 180,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 3,
							"winWithoutMult": 60,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 240,
				"winLevel": 4
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 1090
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 7
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
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
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H5"
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
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
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
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					13,
					11,
					44,
					12,
					57
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 30,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H4",
				"winner": "L3",
				"positions": [
					{
						"reel": 3,
						"row": 2
					},
					{
						"reel": 4,
						"row": 1
					},
					{
						"reel": 4,
						"row": 4
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 31,
				"type": "frostWheel",
				"level": 1,
				"kind": "blood_moon",
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
				"resultIndex": 9,
				"newLevel": 2,
				"multAfter": 3,
				"boosted": false
			},
			{
				"index": 32,
				"type": "winInfo",
				"totalWin": 1500,
				"wins": [
					{
						"symbol": "H2",
						"kind": 5,
						"win": 1500,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 3,
							"winWithoutMult": 500,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 1500,
				"winLevel": 6
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 2590
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 9
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
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
							"name": "H2"
						},
						{
							"name": "L2"
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
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
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
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						}
					]
				],
				"paddingPositions": [
					21,
					19,
					52,
					38,
					37
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 37,
				"type": "winInfo",
				"totalWin": 60,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 60,
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
								"row": 4
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 3,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 60,
				"winLevel": 2
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 2650
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 9
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
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
							"name": "L4"
						},
						{
							"name": "L1"
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
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
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
							"name": "H2"
						},
						{
							"name": "L2"
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
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					43,
					45,
					21,
					4,
					19
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 42,
				"type": "winInfo",
				"totalWin": 60,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 60,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 3,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 60,
				"winLevel": 2
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 2710
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 9
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
					[
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
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						}
					],
					[
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
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					19,
					30,
					44,
					20,
					11
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 47,
				"type": "winInfo",
				"totalWin": 120,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 120,
						"positions": [
							{
								"reel": 0,
								"row": 4
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
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 3,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 2830
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 9
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
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
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					45,
					11,
					3,
					16,
					1
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 52,
				"type": "winInfo",
				"totalWin": 60,
				"wins": [
					{
						"symbol": "L1",
						"kind": 4,
						"win": 60,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 3,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 53,
				"type": "setWin",
				"amount": 60,
				"winLevel": 2
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 2890
			},
			{
				"index": 55,
				"type": "freeSpinEnd",
				"amount": 2890,
				"winLevel": 5
			},
			{
				"index": 56,
				"type": "finalWin",
				"amount": 2890
			}
		]
	},
	{
		"id": 5,
		"payoutMultiplier": 491.8,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
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
							"name": "H2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
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
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H3"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					47,
					4,
					22,
					12,
					57
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "riteAwaken",
				"rite": "blizzard",
				"purchased": true,
				"startMult": 2,
				"wheelLevel": 1,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 3,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 4,
						"row": 4
					}
				]
			},
			{
				"index": 4,
				"type": "updateGlobalMult",
				"globalMult": 2
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 6,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
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
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						}
					],
					[
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
							"name": "L2"
						},
						{
							"name": "L4"
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
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					51,
					46,
					16,
					42,
					51
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 7,
				"type": "winInfo",
				"totalWin": 40,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 40,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 4
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 2,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 40,
				"winLevel": 2
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 40
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 5
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					5,
					54,
					27,
					21,
					5
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 12,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L2",
				"winner": "L1",
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 3,
						"row": 2
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 13,
				"type": "frostWheel",
				"level": 1,
				"kind": "mult",
				"value": 1,
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
				"resultIndex": 0,
				"newLevel": 1,
				"multAfter": 3,
				"boosted": false
			},
			{
				"index": 14,
				"type": "updateGlobalMult",
				"globalMult": 3
			},
			{
				"index": 15,
				"type": "winInfo",
				"totalWin": 60,
				"wins": [
					{
						"symbol": "L4",
						"kind": 4,
						"win": 60,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 4
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
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 3,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 60,
				"winLevel": 2
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 100
			},
			{
				"index": 18,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 7
			},
			{
				"index": 19,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "L3"
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
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
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
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					40,
					50,
					18,
					6,
					2
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 20,
				"type": "winInfo",
				"totalWin": 60,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 60,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 1,
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
							"ways": 2,
							"globalMult": 3,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 60,
				"winLevel": 2
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 160
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 7
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						}
					]
				],
				"paddingPositions": [
					12,
					52,
					41,
					58,
					23
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 25,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L4",
				"winner": "L3",
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 4,
						"row": 3
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 26,
				"type": "frostWheel",
				"level": 1,
				"kind": "mult",
				"value": 3,
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
				"resultIndex": 2,
				"newLevel": 1,
				"multAfter": 6,
				"boosted": false
			},
			{
				"index": 27,
				"type": "updateGlobalMult",
				"globalMult": 6
			},
			{
				"index": 28,
				"type": "winInfo",
				"totalWin": 960,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 960,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 8,
							"globalMult": 6,
							"winWithoutMult": 160,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 29,
				"type": "setWin",
				"amount": 960,
				"winLevel": 5
			},
			{
				"index": 30,
				"type": "setTotalWin",
				"amount": 1120
			},
			{
				"index": 31,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 9
			},
			{
				"index": 32,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
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
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					51,
					32,
					58,
					1,
					40
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 33,
				"type": "winInfo",
				"totalWin": 2160,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 2160,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 18,
							"globalMult": 6,
							"winWithoutMult": 360,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 34,
				"type": "setWin",
				"amount": 2160,
				"winLevel": 6
			},
			{
				"index": 35,
				"type": "setTotalWin",
				"amount": 3280
			},
			{
				"index": 36,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 9
			},
			{
				"index": 37,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H5"
						}
					]
				],
				"paddingPositions": [
					38,
					27,
					19,
					22,
					37
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 38,
				"type": "winInfo",
				"totalWin": 480,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 480,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 3,
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
							"globalMult": 6,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 39,
				"type": "setWin",
				"amount": 480,
				"winLevel": 4
			},
			{
				"index": 40,
				"type": "setTotalWin",
				"amount": 3760
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 9
			},
			{
				"index": 42,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					32,
					56,
					43,
					33,
					12
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 43,
				"type": "winInfo",
				"totalWin": 5760,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 5760,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 48,
							"globalMult": 6,
							"winWithoutMult": 960,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 44,
				"type": "setWin",
				"amount": 5760,
				"winLevel": 8
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 9520
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 9
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					42,
					17,
					19,
					46,
					12
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 48,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H4",
				"winner": "L3",
				"positions": [
					{
						"reel": 0,
						"row": 2
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 49,
				"type": "winInfo",
				"totalWin": 1440,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 1440,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
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
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 6,
							"winWithoutMult": 240,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 50,
				"type": "setWin",
				"amount": 1440,
				"winLevel": 5
			},
			{
				"index": 51,
				"type": "setTotalWin",
				"amount": 10960
			},
			{
				"index": 52,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 11
			},
			{
				"index": 53,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					56,
					44,
					33,
					0,
					12
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 54,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H2",
				"winner": "H1",
				"positions": [
					{
						"reel": 0,
						"row": 3
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 55,
				"type": "winInfo",
				"totalWin": 1680,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 240,
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
								"row": 4
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L3",
						"kind": 5,
						"win": 1440,
						"positions": [
							{
								"reel": 0,
								"row": 4
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
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 6,
							"winWithoutMult": 240,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 56,
				"type": "setWin",
				"amount": 1680,
				"winLevel": 6
			},
			{
				"index": 57,
				"type": "setTotalWin",
				"amount": 12640
			},
			{
				"index": 58,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 13
			},
			{
				"index": 59,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
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
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					39,
					19,
					23,
					24,
					33
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 60,
				"type": "winInfo",
				"totalWin": 24480,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 19440,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 162,
							"globalMult": 6,
							"winWithoutMult": 3240,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H1",
						"kind": 5,
						"win": 5040,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 840,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 61,
				"type": "setWin",
				"amount": 24480,
				"winLevel": 9
			},
			{
				"index": 62,
				"type": "setTotalWin",
				"amount": 37120
			},
			{
				"index": 63,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 13
			},
			{
				"index": 64,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
					]
				],
				"paddingPositions": [
					8,
					43,
					31,
					3,
					11
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 65,
				"type": "winInfo",
				"totalWin": 5340,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 4320,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
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
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 36,
							"globalMult": 6,
							"winWithoutMult": 720,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H5",
						"kind": 5,
						"win": 1020,
						"positions": [
							{
								"reel": 0,
								"row": 3
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
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 170,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 66,
				"type": "setWin",
				"amount": 5340,
				"winLevel": 8
			},
			{
				"index": 67,
				"type": "setTotalWin",
				"amount": 42460
			},
			{
				"index": 68,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 13
			},
			{
				"index": 69,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
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
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					47,
					25,
					6,
					28,
					15
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 70,
				"type": "winInfo",
				"totalWin": 2160,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 2160,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 18,
							"globalMult": 6,
							"winWithoutMult": 360,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 71,
				"type": "setWin",
				"amount": 2160,
				"winLevel": 6
			},
			{
				"index": 72,
				"type": "setTotalWin",
				"amount": 44620
			},
			{
				"index": 73,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 13
			},
			{
				"index": 74,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					5,
					57,
					38,
					42,
					55
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 75,
				"type": "winInfo",
				"totalWin": 4560,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 4320,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 36,
							"globalMult": 6,
							"winWithoutMult": 720,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L1",
						"kind": 5,
						"win": 240,
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
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 76,
				"type": "setWin",
				"amount": 4560,
				"winLevel": 7
			},
			{
				"index": 77,
				"type": "setTotalWin",
				"amount": 49180
			},
			{
				"index": 78,
				"type": "freeSpinEnd",
				"amount": 49180,
				"winLevel": 7
			},
			{
				"index": 79,
				"type": "finalWin",
				"amount": 49180
			}
		]
	},
	{
		"id": 0,
		"payoutMultiplier": 766.3,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
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
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "SB",
							"scatter": true
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					46,
					15,
					23,
					43,
					34
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 10,
				"wins": [
					{
						"symbol": "L2",
						"kind": 3,
						"win": 10,
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
								"reel": 2,
								"row": 4
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
			{
				"index": 2,
				"type": "setWin",
				"amount": 10,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 10
			},
			{
				"index": 4,
				"type": "riteAwaken",
				"rite": "whiteout",
				"purchased": true,
				"startMult": 5,
				"wheelLevel": 2,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 5,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 3,
						"row": 4
					}
				]
			},
			{
				"index": 6,
				"type": "updateGlobalMult",
				"globalMult": 5
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
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
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					6,
					57,
					20,
					1,
					1
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 9,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L4",
				"winner": "H1",
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
						"reel": 1,
						"row": 3
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 4,
						"row": 1
					},
					{
						"reel": 4,
						"row": 3
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 10,
				"type": "frostWheel",
				"level": 2,
				"kind": "mult",
				"value": 1,
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
				"resultIndex": 0,
				"newLevel": 2,
				"multAfter": 6,
				"boosted": false
			},
			{
				"index": 11,
				"type": "updateGlobalMult",
				"globalMult": 6
			},
			{
				"index": 12,
				"type": "winInfo",
				"totalWin": 60,
				"wins": [
					{
						"symbol": "L3",
						"kind": 3,
						"win": 60,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 60,
				"winLevel": 2
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 70
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 7
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
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
					]
				],
				"paddingPositions": [
					1,
					33,
					14,
					48,
					28
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 17,
				"type": "winInfo",
				"totalWin": 10200,
				"wins": [
					{
						"symbol": "L3",
						"kind": 3,
						"win": 120,
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
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 4
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 6,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H1",
						"kind": 5,
						"win": 10080,
						"positions": [
							{
								"reel": 0,
								"row": 3
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
								"row": 1
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 6,
							"winWithoutMult": 1680,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 10200,
				"winLevel": 9
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 10270
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 7
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
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
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					35,
					14,
					22,
					14,
					43
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 22,
				"type": "winInfo",
				"totalWin": 40320,
				"wins": [
					{
						"symbol": "H1",
						"kind": 5,
						"win": 40320,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 8,
							"globalMult": 6,
							"winWithoutMult": 6720,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 40320,
				"winLevel": 9
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 50590
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 7
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						}
					],
					[
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
							"name": "H1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					29,
					18,
					59,
					1,
					26
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 27,
				"type": "winInfo",
				"totalWin": 20160,
				"wins": [
					{
						"symbol": "H1",
						"kind": 5,
						"win": 20160,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 2
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
							"globalMult": 6,
							"winWithoutMult": 3360,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 28,
				"type": "setWin",
				"amount": 20160,
				"winLevel": 9
			},
			{
				"index": 29,
				"type": "setTotalWin",
				"amount": 70750
			},
			{
				"index": 30,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 7
			},
			{
				"index": 31,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
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
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
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
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					35,
					59,
					41,
					6,
					11
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 32,
				"type": "winInfo",
				"totalWin": 5760,
				"wins": [
					{
						"symbol": "H1",
						"kind": 3,
						"win": 5760,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 6,
							"winWithoutMult": 960,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 5760,
				"winLevel": 8
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 76510
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 7
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
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
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					46,
					55,
					18,
					7,
					47
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 37,
				"type": "winInfo",
				"totalWin": 120,
				"wins": [
					{
						"symbol": "L2",
						"kind": 4,
						"win": 120,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 1
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
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 6,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 76630
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 7
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H1"
						},
						{
							"name": "L1"
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
							"name": "H5"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					46,
					45,
					32,
					59,
					27
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 42,
				"type": "setTotalWin",
				"amount": 76630
			},
			{
				"index": 43,
				"type": "freeSpinEnd",
				"amount": 76620,
				"winLevel": 8
			},
			{
				"index": 44,
				"type": "finalWin",
				"amount": 76630
			}
		]
	},
	{
		"id": 1,
		"payoutMultiplier": 738.0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
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
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "SB",
							"scatter": true
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					46,
					4,
					21,
					43,
					34
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "riteAwaken",
				"rite": "whiteout",
				"purchased": true,
				"startMult": 5,
				"wheelLevel": 2,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 3,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 0,
						"row": 4
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
						"row": 4
					}
				]
			},
			{
				"index": 4,
				"type": "updateGlobalMult",
				"globalMult": 5
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 6,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H1"
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
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					23,
					29,
					59,
					20,
					58
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 7,
				"type": "winInfo",
				"totalWin": 100,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 100,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
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
							"ways": 2,
							"globalMult": 5,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 100,
				"winLevel": 3
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 100
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 5
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					57,
					56,
					33,
					10,
					35
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 12,
				"type": "winInfo",
				"totalWin": 400,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 400,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 5,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 13,
				"type": "setWin",
				"amount": 400,
				"winLevel": 4
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 500
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 5
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H5"
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
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						}
					],
					[
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
						},
						{
							"name": "H1"
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
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					14,
					1,
					11,
					20,
					11
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 17,
				"type": "winInfo",
				"totalWin": 50,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 50,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 5,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 18,
				"type": "setWin",
				"amount": 50,
				"winLevel": 2
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 550
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 5
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					32,
					23,
					32,
					43,
					35
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 22,
				"type": "winInfo",
				"totalWin": 850,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 50,
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
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 5,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H4",
						"kind": 4,
						"win": 800,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 5,
							"winWithoutMult": 160,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 23,
				"type": "setWin",
				"amount": 850,
				"winLevel": 5
			},
			{
				"index": 24,
				"type": "setTotalWin",
				"amount": 1400
			},
			{
				"index": 25,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 5
			},
			{
				"index": 26,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "L1"
						},
						{
							"name": "H1"
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
					],
					[
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
							"name": "H4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					57,
					28,
					50,
					26,
					47
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 27,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L4",
				"winner": "L1",
				"positions": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 3,
						"row": 2
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
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 28,
				"type": "frostWheel",
				"level": 2,
				"kind": "blood_moon",
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
				"resultIndex": 9,
				"newLevel": 3,
				"multAfter": 5,
				"boosted": false
			},
			{
				"index": 29,
				"type": "winInfo",
				"totalWin": 1600,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 1600,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 8,
							"globalMult": 5,
							"winWithoutMult": 320,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 30,
				"type": "setWin",
				"amount": 1600,
				"winLevel": 6
			},
			{
				"index": 31,
				"type": "setTotalWin",
				"amount": 3000
			},
			{
				"index": 32,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 7
			},
			{
				"index": 33,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
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
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					10,
					48,
					25,
					45,
					47
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 34,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L3",
				"winner": "L1",
				"positions": [
					{
						"reel": 3,
						"row": 2
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 35,
				"type": "frostWheel",
				"level": 3,
				"kind": "blood_moon",
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
				"resultIndex": 9,
				"newLevel": 4,
				"multAfter": 5,
				"boosted": false
			},
			{
				"index": 36,
				"type": "winInfo",
				"totalWin": 2400,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 2400,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
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
								"row": 2
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 5,
							"winWithoutMult": 480,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 37,
				"type": "setWin",
				"amount": 2400,
				"winLevel": 6
			},
			{
				"index": 38,
				"type": "setTotalWin",
				"amount": 5400
			},
			{
				"index": 39,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 9
			},
			{
				"index": 40,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
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
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					53,
					50,
					22,
					42,
					56
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 41,
				"type": "winInfo",
				"totalWin": 2400,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 2400,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
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
								"row": 1
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 5,
							"winWithoutMult": 480,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 42,
				"type": "setWin",
				"amount": 2400,
				"winLevel": 6
			},
			{
				"index": 43,
				"type": "setTotalWin",
				"amount": 7800
			},
			{
				"index": 44,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 9
			},
			{
				"index": 45,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
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
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
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
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					57,
					29,
					22,
					36,
					46
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 46,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H5",
				"winner": "L1",
				"positions": [
					{
						"reel": 0,
						"row": 4
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 47,
				"type": "winInfo",
				"totalWin": 19200,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 19200,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 3
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 96,
							"globalMult": 5,
							"winWithoutMult": 3840,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setWin",
				"amount": 19200,
				"winLevel": 9
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 27000
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 11
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
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
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
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
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					52,
					44,
					53,
					10,
					56
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 52,
				"type": "winInfo",
				"totalWin": 10800,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 10800,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 54,
							"globalMult": 5,
							"winWithoutMult": 2160,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 53,
				"type": "setWin",
				"amount": 10800,
				"winLevel": 9
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 37800
			},
			{
				"index": 55,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 11
			},
			{
				"index": 56,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
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
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					17,
					49,
					58,
					30,
					19
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 57,
				"type": "winInfo",
				"totalWin": 7200,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 7200,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 2
							},
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
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 36,
							"globalMult": 5,
							"winWithoutMult": 1440,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 58,
				"type": "setWin",
				"amount": 7200,
				"winLevel": 8
			},
			{
				"index": 59,
				"type": "setTotalWin",
				"amount": 45000
			},
			{
				"index": 60,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 11
			},
			{
				"index": 61,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
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
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
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
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					51,
					45,
					53,
					32,
					35
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 62,
				"type": "winInfo",
				"totalWin": 28800,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 28800,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 144,
							"globalMult": 5,
							"winWithoutMult": 5760,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 63,
				"type": "setWin",
				"amount": 28800,
				"winLevel": 9
			},
			{
				"index": 64,
				"type": "setTotalWin",
				"amount": 73800
			},
			{
				"index": 65,
				"type": "freeSpinEnd",
				"amount": 73800,
				"winLevel": 8
			},
			{
				"index": 66,
				"type": "finalWin",
				"amount": 73800
			}
		]
	},
	{
		"id": 2,
		"payoutMultiplier": 311.9,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
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
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
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
							"name": "H3"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "SB",
							"scatter": true
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
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
						}
					]
				],
				"paddingPositions": [
					50,
					6,
					20,
					43,
					19
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 40,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 40,
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
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 1,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 40,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 40
			},
			{
				"index": 4,
				"type": "riteAwaken",
				"rite": "whiteout",
				"purchased": true,
				"startMult": 5,
				"wheelLevel": 2,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 5,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 4
					}
				]
			},
			{
				"index": 6,
				"type": "updateGlobalMult",
				"globalMult": 5
			},
			{
				"index": 7,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 8,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
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
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H4"
						},
						{
							"name": "H2"
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
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
					59,
					33,
					24,
					47,
					0
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 9,
				"type": "winInfo",
				"totalWin": 100,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 100,
						"positions": [
							{
								"reel": 0,
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
								"row": 4
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 5,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 10,
				"type": "setWin",
				"amount": 100,
				"winLevel": 3
			},
			{
				"index": 11,
				"type": "setTotalWin",
				"amount": 140
			},
			{
				"index": 12,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 5
			},
			{
				"index": 13,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H5"
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
							"name": "H4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					4,
					10,
					48,
					37,
					2
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 14,
				"type": "winInfo",
				"totalWin": 200,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 200,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 5,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 15,
				"type": "setWin",
				"amount": 200,
				"winLevel": 4
			},
			{
				"index": 16,
				"type": "setTotalWin",
				"amount": 340
			},
			{
				"index": 17,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 5
			},
			{
				"index": 18,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
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
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
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
					1,
					52,
					55,
					17,
					30
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 19,
				"type": "winInfo",
				"totalWin": 200,
				"wins": [
					{
						"symbol": "L2",
						"kind": 3,
						"win": 100,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 4
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
							"ways": 2,
							"globalMult": 5,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L4",
						"kind": 5,
						"win": 100,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 5,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 20,
				"type": "setWin",
				"amount": 200,
				"winLevel": 4
			},
			{
				"index": 21,
				"type": "setTotalWin",
				"amount": 540
			},
			{
				"index": 22,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 5
			},
			{
				"index": 23,
				"type": "reveal",
				"board": [
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
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
							"name": "H4"
						},
						{
							"name": "H2"
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
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					58,
					56,
					24,
					45,
					50
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 24,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L4",
				"winner": "L2",
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 4,
						"row": 3
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 25,
				"type": "winInfo",
				"totalWin": 1200,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 1200,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 8,
							"globalMult": 5,
							"winWithoutMult": 240,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 1200,
				"winLevel": 5
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 1740
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 7
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
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
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					8,
					56,
					23,
					6,
					2
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 30,
				"type": "winInfo",
				"totalWin": 400,
				"wins": [
					{
						"symbol": "L3",
						"kind": 3,
						"win": 100,
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
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 1
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 5,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L2",
						"kind": 5,
						"win": 300,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 5,
							"winWithoutMult": 60,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 31,
				"type": "setWin",
				"amount": 400,
				"winLevel": 4
			},
			{
				"index": 32,
				"type": "setTotalWin",
				"amount": 2140
			},
			{
				"index": 33,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 7
			},
			{
				"index": 34,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
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
							"name": "H2"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					13,
					16,
					43,
					27,
					49
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 35,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H5",
				"winner": "H4",
				"positions": [],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 36,
				"type": "frostWheel",
				"level": 2,
				"kind": "mult",
				"value": 2,
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
				"resultIndex": 1,
				"newLevel": 2,
				"multAfter": 7,
				"boosted": false
			},
			{
				"index": 37,
				"type": "updateGlobalMult",
				"globalMult": 7
			},
			{
				"index": 38,
				"type": "winInfo",
				"totalWin": 10080,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 10080,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
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
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 48,
							"globalMult": 7,
							"winWithoutMult": 1440,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 39,
				"type": "setWin",
				"amount": 10080,
				"winLevel": 9
			},
			{
				"index": 40,
				"type": "setTotalWin",
				"amount": 12220
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 9
			},
			{
				"index": 42,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
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
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					37,
					14,
					57,
					21,
					43
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 43,
				"type": "winInfo",
				"totalWin": 5040,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 5040,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 24,
							"globalMult": 7,
							"winWithoutMult": 720,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 44,
				"type": "setWin",
				"amount": 5040,
				"winLevel": 8
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 17260
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 9
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
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
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					1,
					54,
					17,
					38,
					42
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 48,
				"type": "winInfo",
				"totalWin": 11410,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 11340,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 54,
							"globalMult": 7,
							"winWithoutMult": 1620,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L3",
						"kind": 4,
						"win": 70,
						"positions": [
							{
								"reel": 0,
								"row": 2
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
								"reel": 3,
								"row": 1
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 7,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 49,
				"type": "setWin",
				"amount": 11410,
				"winLevel": 9
			},
			{
				"index": 50,
				"type": "setTotalWin",
				"amount": 28670
			},
			{
				"index": 51,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 9
			},
			{
				"index": 52,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
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
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					44,
					55,
					20,
					34,
					57
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 53,
				"type": "winInfo",
				"totalWin": 2520,
				"wins": [
					{
						"symbol": "L2",
						"kind": 5,
						"win": 2520,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
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
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
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
							"ways": 12,
							"globalMult": 7,
							"winWithoutMult": 360,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 54,
				"type": "setWin",
				"amount": 2520,
				"winLevel": 6
			},
			{
				"index": 55,
				"type": "setTotalWin",
				"amount": 31190
			},
			{
				"index": 56,
				"type": "freeSpinEnd",
				"amount": 31150,
				"winLevel": 7
			},
			{
				"index": 57,
				"type": "finalWin",
				"amount": 31190
			}
		]
	},
	{
		"id": 4,
		"payoutMultiplier": 58.6,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
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
							"name": "L4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
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
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
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
							"name": "SB",
							"scatter": true
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					31,
					48,
					23,
					16,
					57
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "riteAwaken",
				"rite": "whiteout",
				"purchased": true,
				"startMult": 5,
				"wheelLevel": 2,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 3,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 4,
						"row": 4
					}
				]
			},
			{
				"index": 4,
				"type": "updateGlobalMult",
				"globalMult": 5
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 6,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
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
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
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
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					0,
					46,
					13,
					26,
					17
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 7,
				"type": "winInfo",
				"totalWin": 400,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 400,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 5,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 400,
				"winLevel": 4
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 400
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 5
			},
			{
				"index": 11,
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H5"
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
							"name": "H3"
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
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
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
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					55,
					49,
					24,
					10,
					48
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 12,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H3",
				"winner": "H2",
				"positions": [
					{
						"reel": 1,
						"row": 4
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 13,
				"type": "frostWheel",
				"level": 2,
				"kind": "mult",
				"value": 1,
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
				"resultIndex": 0,
				"newLevel": 2,
				"multAfter": 6,
				"boosted": false
			},
			{
				"index": 14,
				"type": "updateGlobalMult",
				"globalMult": 6
			},
			{
				"index": 15,
				"type": "winInfo",
				"totalWin": 840,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 480,
						"positions": [
							{
								"reel": 0,
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
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 6,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H2",
						"kind": 3,
						"win": 360,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 60,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 840,
				"winLevel": 5
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 1240
			},
			{
				"index": 18,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 7
			},
			{
				"index": 19,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
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
							"name": "H3"
						}
					],
					[
						{
							"name": "H5"
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
							"name": "H4"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
							"name": "L1"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					0,
					13,
					49,
					13,
					10
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 20,
				"type": "winInfo",
				"totalWin": 540,
				"wins": [
					{
						"symbol": "L2",
						"kind": 3,
						"win": 60,
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
							"globalMult": 6,
							"winWithoutMult": 10,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L4",
						"kind": 5,
						"win": 480,
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
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 6,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 540,
				"winLevel": 5
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 1780
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 7
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
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
							"name": "H2"
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
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
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
							"name": "L4"
						},
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
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					18,
					20,
					12,
					34,
					56
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 25,
				"type": "winInfo",
				"totalWin": 480,
				"wins": [
					{
						"symbol": "L4",
						"kind": 4,
						"win": 120,
						"positions": [
							{
								"reel": 0,
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
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 6,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H2",
						"kind": 3,
						"win": 360,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 60,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 480,
				"winLevel": 4
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 2260
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 7
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
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
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H5"
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
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
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
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					13,
					11,
					44,
					12,
					57
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 30,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H4",
				"winner": "L3",
				"positions": [
					{
						"reel": 3,
						"row": 2
					},
					{
						"reel": 4,
						"row": 1
					},
					{
						"reel": 4,
						"row": 4
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 31,
				"type": "frostWheel",
				"level": 2,
				"kind": "blood_moon",
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
				"resultIndex": 9,
				"newLevel": 3,
				"multAfter": 6,
				"boosted": false
			},
			{
				"index": 32,
				"type": "winInfo",
				"totalWin": 3000,
				"wins": [
					{
						"symbol": "H2",
						"kind": 5,
						"win": 3000,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 500,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 33,
				"type": "setWin",
				"amount": 3000,
				"winLevel": 7
			},
			{
				"index": 34,
				"type": "setTotalWin",
				"amount": 5260
			},
			{
				"index": 35,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 9
			},
			{
				"index": 36,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
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
							"name": "H2"
						},
						{
							"name": "L2"
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
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
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
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						}
					]
				],
				"paddingPositions": [
					21,
					19,
					52,
					38,
					37
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 37,
				"type": "winInfo",
				"totalWin": 120,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 120,
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
								"row": 4
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 38,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 39,
				"type": "setTotalWin",
				"amount": 5380
			},
			{
				"index": 40,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 9
			},
			{
				"index": 41,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
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
							"name": "L4"
						},
						{
							"name": "L1"
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
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
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
							"name": "H2"
						},
						{
							"name": "L2"
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
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					43,
					45,
					21,
					4,
					19
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 42,
				"type": "winInfo",
				"totalWin": 120,
				"wins": [
					{
						"symbol": "L4",
						"kind": 5,
						"win": 120,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 43,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 44,
				"type": "setTotalWin",
				"amount": 5500
			},
			{
				"index": 45,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 9
			},
			{
				"index": 46,
				"type": "reveal",
				"board": [
					[
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
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						}
					],
					[
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
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					19,
					30,
					44,
					20,
					11
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 47,
				"type": "winInfo",
				"totalWin": 240,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 240,
						"positions": [
							{
								"reel": 0,
								"row": 4
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
							}
						],
						"meta": {
							"ways": 4,
							"globalMult": 6,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 48,
				"type": "setWin",
				"amount": 240,
				"winLevel": 4
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 5740
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 9
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
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
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					45,
					11,
					3,
					16,
					1
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 52,
				"type": "winInfo",
				"totalWin": 120,
				"wins": [
					{
						"symbol": "L1",
						"kind": 4,
						"win": 120,
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 6,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 53,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 5860
			},
			{
				"index": 55,
				"type": "freeSpinEnd",
				"amount": 5860,
				"winLevel": 6
			},
			{
				"index": 56,
				"type": "finalWin",
				"amount": 5860
			}
		]
	},
	{
		"id": 5,
		"payoutMultiplier": 902.1,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
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
							"name": "H2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
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
							"name": "SB",
							"scatter": true
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H3"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					47,
					4,
					22,
					12,
					57
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "riteAwaken",
				"rite": "whiteout",
				"purchased": true,
				"startMult": 5,
				"wheelLevel": 2,
				"startSpins": 5,
				"higherWins": false,
				"convertLows": false
			},
			{
				"index": 3,
				"type": "freeSpinTrigger",
				"totalFs": 5,
				"positions": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 4,
						"row": 4
					}
				]
			},
			{
				"index": 4,
				"type": "updateGlobalMult",
				"globalMult": 5
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 5
			},
			{
				"index": 6,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
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
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						}
					],
					[
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
							"name": "L2"
						},
						{
							"name": "L4"
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
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					51,
					46,
					16,
					42,
					51
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 7,
				"type": "winInfo",
				"totalWin": 100,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 100,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 4
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 5,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 8,
				"type": "setWin",
				"amount": 100,
				"winLevel": 3
			},
			{
				"index": 9,
				"type": "setTotalWin",
				"amount": 100
			},
			{
				"index": 10,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 5
			},
			{
				"index": 11,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					5,
					54,
					27,
					21,
					5
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 12,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L2",
				"winner": "L1",
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 3,
						"row": 2
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 13,
				"type": "frostWheel",
				"level": 2,
				"kind": "mult",
				"value": 1,
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
				"resultIndex": 0,
				"newLevel": 2,
				"multAfter": 6,
				"boosted": false
			},
			{
				"index": 14,
				"type": "updateGlobalMult",
				"globalMult": 6
			},
			{
				"index": 15,
				"type": "winInfo",
				"totalWin": 120,
				"wins": [
					{
						"symbol": "L4",
						"kind": 4,
						"win": 120,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 4
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
							}
						],
						"meta": {
							"ways": 2,
							"globalMult": 6,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 220
			},
			{
				"index": 18,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 7
			},
			{
				"index": 19,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "L3"
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
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
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
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						}
					]
				],
				"paddingPositions": [
					40,
					50,
					18,
					6,
					2
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 20,
				"type": "winInfo",
				"totalWin": 120,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 120,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 1,
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
							"ways": 2,
							"globalMult": 6,
							"winWithoutMult": 20,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 21,
				"type": "setWin",
				"amount": 120,
				"winLevel": 3
			},
			{
				"index": 22,
				"type": "setTotalWin",
				"amount": 340
			},
			{
				"index": 23,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 7
			},
			{
				"index": 24,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						}
					]
				],
				"paddingPositions": [
					12,
					52,
					41,
					58,
					23
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 25,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "L4",
				"winner": "L3",
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 4,
						"row": 3
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 26,
				"type": "frostWheel",
				"level": 2,
				"kind": "mult",
				"value": 5,
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
				"resultIndex": 3,
				"newLevel": 2,
				"multAfter": 11,
				"boosted": false
			},
			{
				"index": 27,
				"type": "updateGlobalMult",
				"globalMult": 11
			},
			{
				"index": 28,
				"type": "winInfo",
				"totalWin": 1760,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 1760,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 8,
							"globalMult": 11,
							"winWithoutMult": 160,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 29,
				"type": "setWin",
				"amount": 1760,
				"winLevel": 6
			},
			{
				"index": 30,
				"type": "setTotalWin",
				"amount": 2100
			},
			{
				"index": 31,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 9
			},
			{
				"index": 32,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
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
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					51,
					32,
					58,
					1,
					40
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 33,
				"type": "winInfo",
				"totalWin": 3960,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 3960,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 18,
							"globalMult": 11,
							"winWithoutMult": 360,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 34,
				"type": "setWin",
				"amount": 3960,
				"winLevel": 7
			},
			{
				"index": 35,
				"type": "setTotalWin",
				"amount": 6060
			},
			{
				"index": 36,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 9
			},
			{
				"index": 37,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H5"
						}
					]
				],
				"paddingPositions": [
					38,
					27,
					19,
					22,
					37
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 38,
				"type": "winInfo",
				"totalWin": 880,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 880,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 3,
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
							"globalMult": 11,
							"winWithoutMult": 80,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 39,
				"type": "setWin",
				"amount": 880,
				"winLevel": 5
			},
			{
				"index": 40,
				"type": "setTotalWin",
				"amount": 6940
			},
			{
				"index": 41,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 9
			},
			{
				"index": 42,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					32,
					56,
					43,
					33,
					12
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 43,
				"type": "winInfo",
				"totalWin": 10560,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 10560,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 48,
							"globalMult": 11,
							"winWithoutMult": 960,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 44,
				"type": "setWin",
				"amount": 10560,
				"winLevel": 9
			},
			{
				"index": 45,
				"type": "setTotalWin",
				"amount": 17500
			},
			{
				"index": 46,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 9
			},
			{
				"index": 47,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					42,
					17,
					19,
					46,
					12
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 48,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H4",
				"winner": "L3",
				"positions": [
					{
						"reel": 0,
						"row": 2
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 49,
				"type": "winInfo",
				"totalWin": 2640,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 2640,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
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
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 11,
							"winWithoutMult": 240,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 50,
				"type": "setWin",
				"amount": 2640,
				"winLevel": 6
			},
			{
				"index": 51,
				"type": "setTotalWin",
				"amount": 20140
			},
			{
				"index": 52,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 11
			},
			{
				"index": 53,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
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
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					56,
					44,
					33,
					0,
					12
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					1,
					2,
					3,
					4
				]
			},
			{
				"index": 54,
				"type": "symbolSacrifice",
				"source": "scatter",
				"loser": "H2",
				"winner": "H1",
				"positions": [
					{
						"reel": 0,
						"row": 3
					}
				],
				"persistent": true,
				"extraSpins": 2
			},
			{
				"index": 55,
				"type": "winInfo",
				"totalWin": 3080,
				"wins": [
					{
						"symbol": "L1",
						"kind": 5,
						"win": 440,
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
								"row": 4
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 11,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L3",
						"kind": 5,
						"win": 2640,
						"positions": [
							{
								"reel": 0,
								"row": 4
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
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 12,
							"globalMult": 11,
							"winWithoutMult": 240,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 56,
				"type": "setWin",
				"amount": 3080,
				"winLevel": 7
			},
			{
				"index": 57,
				"type": "setTotalWin",
				"amount": 23220
			},
			{
				"index": 58,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 13
			},
			{
				"index": 59,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
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
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					39,
					19,
					23,
					24,
					33
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 60,
				"type": "winInfo",
				"totalWin": 44880,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 35640,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 162,
							"globalMult": 11,
							"winWithoutMult": 3240,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H1",
						"kind": 5,
						"win": 9240,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 11,
							"winWithoutMult": 840,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 61,
				"type": "setWin",
				"amount": 44880,
				"winLevel": 9
			},
			{
				"index": 62,
				"type": "setTotalWin",
				"amount": 68100
			},
			{
				"index": 63,
				"type": "updateFreeSpin",
				"amount": 10,
				"total": 13
			},
			{
				"index": 64,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H5"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H5"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
					]
				],
				"paddingPositions": [
					8,
					43,
					31,
					3,
					11
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 65,
				"type": "winInfo",
				"totalWin": 9790,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 7920,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
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
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 36,
							"globalMult": 11,
							"winWithoutMult": 720,
							"symbolMult": 0
						}
					},
					{
						"symbol": "H5",
						"kind": 5,
						"win": 1870,
						"positions": [
							{
								"reel": 0,
								"row": 3
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
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 11,
							"winWithoutMult": 170,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 66,
				"type": "setWin",
				"amount": 9790,
				"winLevel": 8
			},
			{
				"index": 67,
				"type": "setTotalWin",
				"amount": 77890
			},
			{
				"index": 68,
				"type": "updateFreeSpin",
				"amount": 11,
				"total": 13
			},
			{
				"index": 69,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
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
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					47,
					25,
					6,
					28,
					15
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 70,
				"type": "winInfo",
				"totalWin": 3960,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 3960,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 4
							}
						],
						"meta": {
							"ways": 18,
							"globalMult": 11,
							"winWithoutMult": 360,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 71,
				"type": "setWin",
				"amount": 3960,
				"winLevel": 7
			},
			{
				"index": 72,
				"type": "setTotalWin",
				"amount": 81850
			},
			{
				"index": 73,
				"type": "updateFreeSpin",
				"amount": 12,
				"total": 13
			},
			{
				"index": 74,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H5"
						},
						{
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					5,
					57,
					38,
					42,
					55
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 75,
				"type": "winInfo",
				"totalWin": 8360,
				"wins": [
					{
						"symbol": "L3",
						"kind": 5,
						"win": 7920,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							}
						],
						"meta": {
							"ways": 36,
							"globalMult": 11,
							"winWithoutMult": 720,
							"symbolMult": 0
						}
					},
					{
						"symbol": "L1",
						"kind": 5,
						"win": 440,
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
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"ways": 1,
							"globalMult": 11,
							"winWithoutMult": 40,
							"symbolMult": 0
						}
					}
				]
			},
			{
				"index": 76,
				"type": "setWin",
				"amount": 8360,
				"winLevel": 8
			},
			{
				"index": 77,
				"type": "setTotalWin",
				"amount": 90210
			},
			{
				"index": 78,
				"type": "freeSpinEnd",
				"amount": 90210,
				"winLevel": 8
			},
			{
				"index": 79,
				"type": "finalWin",
				"amount": 90210
			}
		]
	}
];
