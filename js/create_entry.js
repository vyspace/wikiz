(function($, undefined){
	"use strict";
	var channelJson = [
	    {
	        "channelName": "名品",
	        "childList": [
	        	{
	                "channelID": 106,
	                "channelName": "经典造型",
	                "level": 0
	            }, {
	                "channelID": 107,
	                "channelName": "风格名品",
	                "level": 0
	            }]
	    }, {
	        "channelName": "术语",
	        "childList": [
		        {
		            "channelID": 108,
		            "channelName": "行业组织",
		            "level": 0
		        }, {
		            "channelID": 109,
		            "channelName": "权威奖项",
		            "level": 0
		        }, {
		            "channelID": 110,
		            "channelName": "学术派别",
		            "level": 0
		        }, {
		            "channelID": 111,
		            "channelName": "思想运动",
		            "level": 0
		        }, {
		            "channelID": 112,
		            "channelName": "历史事件",
		            "level": 0
		        }, {
		            "channelID": 113,
		            "channelName": "历史人物",
		            "level": 0
		        }, {
		            "channelID": 114,
		            "channelName": "经典著作",
		            "level": 0
		        }
	        ]
	    }, {
	        "channelName": "装饰",
	        "childList": [
		        {
		            "channelID": 115,
		            "channelName": "纹样",
		            "level": 0
		        }, {
		            "channelID": 116,
		            "channelName": "部件",
		            "level": 0
		        }, {
		            "channelID": 117,
		            "channelName": "材料",
		            "level": 0
		        }, {
		            "channelID": 118,
		            "channelName": "工艺技术",
		            "level": 0
		        }
	        ]
	    }
	];
	var categoryJson = [
		{
		    "categoryName":"床榻",
		    "childList": [
		        {
		            "categoryID": 1446,
		            "categoryName": "榻",
		            "level": 2
		        },
		        {
		            "categoryID": 1447,
		            "categoryName": "Sleigh Bed",
		            "level": 2
		        },
		        {
		            "categoryID": 1448,
		            "categoryName": "架子床",
		            "level": 2
		        },
		        {
		            "categoryID": 1449,
		            "categoryName": "拔步床",
		            "level": 2
		        },
		        {
		            "categoryID": 1450,
		            "categoryName": "华盖床",
		            "level": 2
		        },
		        {
		            "categoryID": 1451,
		            "categoryName": "四柱床",
		            "level": 2
		        }
		    ]
		},
		{
			"categoryName": "柜架",
		    "childList": [
		        {
		            "categoryID": 1368,
		            "categoryName": "抽屉柜",
		            "childList": [
		                {
		                    "categoryID": 1369,
		                    "categoryName": "Chest",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1370,
		                    "categoryName": "闷户橱",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1371,
		                    "categoryName": "联二橱",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1372,
		                    "categoryName": "联三橱",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1373,
		                    "categoryName": "Commode",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1374,
		                    "categoryName": "Chest of Drawer",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1375,
		                    "categoryName": "Dresser",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1376,
		                    "categoryName": "Jevelry Armoire",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1377,
		                    "categoryName": "Semanier",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1378,
		                    "categoryName": "Chiffonier",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1379,
		                    "categoryName": "High Chest",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1380,
		                    "categoryName": "High Boy",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1381,
		                    "categoryName": "Vargueno",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1382,
		                    "categoryName": "Chest on Chest",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1383,
		                    "categoryName": "Isho-Dansu",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1384,
		                    "categoryName": "Dansu",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1385,
		            "categoryName": "橱柜",
		            "childList": [
		                {
		                    "categoryID": 1386,
		                    "categoryName": "Cupboard",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1387,
		                    "categoryName": "橱",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1388,
		                    "categoryName": "Cabinet",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1389,
		                    "categoryName": "Cupboard",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1390,
		                    "categoryName": "Gentleman Chest",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1391,
		                    "categoryName": "Sunflower Chest",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1392,
		                    "categoryName": "Bachelor Chest",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1393,
		                    "categoryName": "Vanities",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1394,
		            "categoryName": "边柜",
		            "childList": [
		                {
		                    "categoryID": 1395,
		                    "categoryName": "Sideboard",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1396,
		                    "categoryName": "Buffet",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1397,
		                    "categoryName": "Credenza",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1398,
		                    "categoryName": "Enfilade",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1399,
		                    "categoryName": "炕柜",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1400,
		            "categoryName": "陈列柜",
		            "childList": [
		                {
		                    "categoryID": 1401,
		                    "categoryName": "亮格柜",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1402,
		                    "categoryName": "Court Cupboard",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1403,
		                    "categoryName": "Bureau cabinet",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1404,
		                    "categoryName": "Secretaire",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1405,
		                    "categoryName": "Secretary",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1406,
		                    "categoryName": "Bookcase",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1407,
		                    "categoryName": "Hutch",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1408,
		                    "categoryName": "China Cabinet",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1409,
		                    "categoryName": "Vitrine",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1410,
		                    "categoryName": "万历柜",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1411,
		            "categoryName": "衣柜",
		            "childList": [
		                {
		                    "categoryID": 1412,
		                    "categoryName": "衣柜",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1413,
		                    "categoryName": "四件柜",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1414,
		                    "categoryName": "圆角柜",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1415,
		                    "categoryName": "方角柜",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1416,
		                    "categoryName": "Armoire",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1417,
		                    "categoryName": "Wardrobe",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1418,
		                    "categoryName": "Kast",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1419,
		                    "categoryName": "Schrank",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1420,
		                    "categoryName": "Deux-Corps",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1421,
		                    "categoryName": "Press",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1422,
		                    "categoryName": "Linen Press",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1423,
		                    "categoryName": "Bonnetiere",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1424,
		                    "categoryName": "Cabinet on chests",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1425,
		                    "categoryName": "Cabinet on Stand",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1426,
		            "categoryName": "组合衣柜",
		            "level": 2
		        },
		        {
		            "categoryID": 1427,
		            "categoryName": "文件柜",
		            "level": 2
		        },
		        {
		            "categoryID": 1428,
		            "categoryName": "角柜",
		            "childList": [
		                {
		                    "categoryID": 1429,
		                    "categoryName": "Davenport",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1430,
		                    "categoryName": "Canterbury",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1431,
		                    "categoryName": "Cellarette",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1432,
		                    "categoryName": "Cconfiturier",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1433,
		                    "categoryName": "床头柜",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1434,
		                    "categoryName": "Night Stand",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1435,
		            "categoryName": "架",
		            "childList": [
		                {
		                    "categoryID": 1436,
		                    "categoryName": "shelves",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1437,
		                    "categoryName": "架格",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1438,
		                    "categoryName": "多宝格",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1439,
		            "categoryName": "箱子",
		            "childList": [
		                {
		                    "categoryID": 1440,
		                    "categoryName": "Trunk",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1441,
		                    "categoryName": "Coffer",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1442,
		                    "categoryName": "Chest",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1443,
		                    "categoryName": "Cassone",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1444,
		                    "categoryName": "Hadley Chest",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        }
		    ],
		},
		{
			"categoryName": "桌案",
		    "childList": [
		        {
		            "categoryID": 1226,
		            "categoryName": "餐桌,会议桌",
		            "childList": [
		                {
		                    "categoryID": 1227,
		                    "categoryName": "Dining Table,Conference Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1228,
		                    "categoryName": "Trestle Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1229,
		                    "categoryName": "Draw Leaf Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1230,
		                    "categoryName": "Drop Leaf Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1231,
		                    "categoryName": "Gate-leg Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1232,
		                    "categoryName": "Card Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1233,
		                    "categoryName": "Pembroke Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1234,
		                    "categoryName": "八仙桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1235,
		                    "categoryName": "六仙桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1236,
		                    "categoryName": "棋桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1237,
		                    "categoryName": "画案",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1238,
		                    "categoryName": "画桌",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1239,
		            "categoryName": "边桌",
		            "childList": [
		                {
		                    "categoryID": 1240,
		                    "categoryName": "Console Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1241,
		                    "categoryName": "条桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1242,
		                    "categoryName": "炕几",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1243,
		                    "categoryName": "条案",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1244,
		                    "categoryName": "翘头案",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1245,
		                    "categoryName": "卷书案",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1246,
		                    "categoryName": "平头案",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1247,
		                    "categoryName": "琴桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1248,
		                    "categoryName": "供桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1249,
		                    "categoryName": "供案",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1250,
		                    "categoryName": "条几",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1251,
		                    "categoryName": "月牙桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1252,
		                    "categoryName": "扇面桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1253,
		                    "categoryName": "半桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1254,
		                    "categoryName": "Pier Table",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1255,
		            "categoryName": "小桌",
		            "childList": [
		                {
		                    "categoryID": 1256,
		                    "categoryName": "Occasional Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1257,
		                    "categoryName": "香几",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1258,
		                    "categoryName": "Candle Stand",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1259,
		                    "categoryName": "Work Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1260,
		                    "categoryName": "Pedestal Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1261,
		                    "categoryName": "Gueridon",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1262,
		                    "categoryName": "Tilt-top Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1263,
		                    "categoryName": "Tray Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1264,
		                    "categoryName": "套桌",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1265,
		            "categoryName": "炕几",
		            "childList": [
		                {
		                    "categoryID": 1266,
		                    "categoryName": "Coffee Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1267,
		                    "categoryName": "Sofa Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1268,
		                    "categoryName": "炕桌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1269,
		                    "categoryName": "炕案",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1270,
		            "categoryName": "书桌",
		            "childList": [
		                {
		                    "categoryID": 1271,
		                    "categoryName": "Desk",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1272,
		                    "categoryName": "书案",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1273,
		                    "categoryName": "Bureau ",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1274,
		                    "categoryName": "架几案",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1275,
		                    "categoryName": "Kneehole Desk",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1276,
		                    "categoryName": "Roll-Top Desk",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1277,
		            "categoryName": "梳妆台",
		            "childList": [
		                {
		                    "categoryID": 1278,
		                    "categoryName": "Dressing Table",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1279,
		                    "categoryName": "Low boy",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1280,
		            "categoryName": "转角工作台",
		            "childList": [
		                {
		                    "categoryID": 1281,
		                    "categoryName": "L-Shape DesK",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        }
		    ]
		},
		{
			"categoryName": "椅凳",
			"childList": [
		        {
		            "categoryID": 1283,
		            "categoryName": "靠背椅",
		            "childList": [
		                {
		                    "categoryID": 1284,
		                    "categoryName": "Side Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1285,
		                    "categoryName": "一统碑式靠背椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1286,
		                    "categoryName": "灯挂椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1287,
		                    "categoryName": "波士顿椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1288,
		                    "categoryName": "Sgabella Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1289,
		                    "categoryName": "Marcha Washington Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1290,
		                    "categoryName": "梳背椅",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1291,
		            "categoryName": "办公椅",
		            "childList": [
		                {
		                    "categoryID": 1292,
		                    "categoryName": "Office Chair",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1293,
		            "categoryName": "扶手椅",
		            "childList": [
		                {
		                    "categoryID": 1294,
		                    "categoryName": "Armchair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1295,
		                    "categoryName": "玫瑰椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1296,
		                    "categoryName": "温莎椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1297,
		                    "categoryName": "官帽椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1298,
		                    "categoryName": "南官帽椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1299,
		                    "categoryName": "克里莫斯椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1300,
		                    "categoryName": "读书椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1301,
		                    "categoryName": "Brewster Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1302,
		                    "categoryName": "Carver Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1303,
		                    "categoryName": "Farthingale Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1304,
		                    "categoryName": "Canquetoire",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1305,
		            "categoryName": "休闲椅/单人沙发",
		            "childList": [
		                {
		                    "categoryID": 1306,
		                    "categoryName": "Lounge Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1307,
		                    "categoryName": "宝座",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1308,
		                    "categoryName": "圈椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1309,
		                    "categoryName": "伯爵夫人椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1310,
		                    "categoryName": "公爵夫人椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1311,
		                    "categoryName": "Byzantin Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1312,
		                    "categoryName": "Gondola Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1313,
		                    "categoryName": "Bergere",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1314,
		                    "categoryName": "Fauteul",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1315,
		                    "categoryName": "Barrel Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1316,
		                    "categoryName": "Club Chair",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1317,
		            "categoryName": "翼背椅",
		            "childList": [
		                {
		                    "categoryID": 1318,
		                    "categoryName": "Wing Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1319,
		                    "categoryName": "Confessional chair",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1320,
		            "categoryName": "摇椅",
		            "childList": [
		                {
		                    "categoryID": 1321,
		                    "categoryName": "Rocking Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1322,
		                    "categoryName": "波士顿摇椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1323,
		                    "categoryName": "Platform Rocker",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1324,
		            "categoryName": "折叠椅",
		            "childList": [
		                {
		                    "categoryID": 1325,
		                    "categoryName": "Folding Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1326,
		                    "categoryName": "交椅",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1327,
		                    "categoryName": "Glastonbury Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1328,
		                    "categoryName": "Savonarola Chair",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1329,
		            "categoryName": "吧椅",
		            "childList": [
		                {
		                    "categoryID": 1330,
		                    "categoryName": "Bar Stool",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1331,
		            "categoryName": "敦",
		            "childList": [
		                {
		                    "categoryID": 1332,
		                    "categoryName": "绣敦",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1333,
		            "categoryName": "凳",
		            "childList": [
		                {
		                    "categoryID": 1334,
		                    "categoryName": "Stool",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1335,
		                    "categoryName": "交杌",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1336,
		                    "categoryName": "Curule Chair",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1337,
		                    "categoryName": "脚凳",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1338,
		                    "categoryName": "Pouf",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1339,
		            "categoryName": "长凳",
		            "childList": [
		                {
		                    "categoryID": 1340,
		                    "categoryName": "春凳",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        }
	    	]
		},
		{
			"categoryName": "沙发",
			"childList": [
		        {
		            "categoryID": 1342,
		            "categoryName": "沙发",
		            "childList": [
		                {
		                    "categoryID": 1343,
		                    "categoryName": "Sofa",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1344,
		                    "categoryName": "Camel-Back Sofa",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1345,
		                    "categoryName": "Cabriole Sofa",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1346,
		                    "categoryName": "Canape",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1347,
		                    "categoryName": "Divani（意）",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1348,
		                    "categoryName": "Banquette",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1349,
		                    "categoryName": "Lawson Sofa",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1350,
		                    "categoryName": "Tuxedo Sofa",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1351,
		            "categoryName": "罗汉床",
		            "level": 2
		        },
		        {
		            "categoryID": 1352,
		            "categoryName": "长椅",
		            "childList": [
		                {
		                    "categoryID": 1353,
		                    "categoryName": "Bench",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1354,
		                    "categoryName": "Settee",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1355,
		            "categoryName": "转角沙发",
		            "childList": [
		                {
		                    "categoryID": 1356,
		                    "categoryName": "Sectional Sofa",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1357,
		                    "categoryName": "Sofa With Chaise Lounge",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        },
		        {
		            "categoryID": 1358,
		            "categoryName": "贵妃椅",
		            "childList": [
		                {
		                    "categoryID": 1359,
		                    "categoryName": "Rest bed",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1360,
		                    "categoryName": "Daybed",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1361,
		                    "categoryName": "Greek Kline",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1362,
		                    "categoryName": "Couch",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1363,
		                    "categoryName": "Chaise longue",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1364,
		                    "categoryName": "Recamier",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1365,
		                    "categoryName": "Méridienne",
		                    "level": 3
		                },
		                {
		                    "categoryID": 1366,
		                    "categoryName": "Duchesse",
		                    "level": 3
		                }
		            ],
		            "level": 2
		        }
		    ]
		}
	];
	var countryJson = [
	    {
	        "categoryID": 178,
	        "categoryName": "古埃及",
	        "childList": [],
	        "level": 0
	    },
	    {
	        "categoryID": 179,
	        "categoryName": "古希腊",
	        "childList": [],
	        "level": 0
	    },
	    {
	        "categoryID": 180,
	        "categoryName": "古罗马",
	        "childList": [],
	        "level": 0
	    },
	    {
	        "categoryID": 181,
	        "categoryName": "东罗马帝国",
	        "childList": [],
	        "level": 0
	    },
	    {
	        "childList": [
	            {
	                "categoryID": 183,
	                "categoryName": "英国",
	                "level": 1
	            },
	            {
	                "categoryID": 184,
	                "categoryName": "意大利",
	                "level": 1
	            },
	            {
	                "categoryID": 185,
	                "categoryName": "西班牙",
	                "level": 1
	            },
	            {
	                "categoryID": 186,
	                "categoryName": "法国",
	                "level": 1
	            },
	            {
	                "categoryID": 187,
	                "categoryName": "德国",
	                "level": 1
	            },
	            {
	                "categoryID": 188,
	                "categoryName": "奥地利",
	                "level": 1
	            },
	            {
	                "categoryID": 189,
	                "categoryName": "匈牙利",
	                "level": 1
	            },
	            {
	                "categoryID": 190,
	                "categoryName": "荷兰",
	                "level": 1
	            },
	            {
	                "categoryID": 191,
	                "categoryName": "比利时",
	                "level": 1
	            },
	            {
	                "categoryID": 192,
	                "categoryName": "俄罗斯",
	                "level": 1
	            },
	            {
	                "categoryID": 193,
	                "categoryName": "乌克兰",
	                "level": 1
	            },
	            {
	                "childList": [
	                    {
	                        "categoryID": 195,
	                        "categoryName": "瑞典",
	                        "level": 2
	                    },
	                    {
	                        "categoryID": 196,
	                        "categoryName": "丹麦",
	                        "level": 2
	                    },
	                    {
	                        "categoryID": 197,
	                        "categoryName": "挪威",
	                        "level": 2
	                    },
	                    {
	                        "categoryID": 198,
	                        "categoryName": "芬兰",
	                        "level": 2
	                    }
	                ],
	                "categoryID": 194,
	                "categoryName": "北欧",
	                "level": 1
	            }
	        ],
	        "categoryID": 182,
	        "categoryName": "欧洲",
	        "level": 0
	    },
	    {
	        "childList": [
	            {
	                "categoryID": 200,
	                "categoryName": "美国",
	                "level": 1
	            },
	            {
	                "categoryID": 201,
	                "categoryName": "加拿大",
	                "level": 1
	            },
	            {
	                "categoryID": 202,
	                "categoryName": "墨西哥",
	                "level": 1
	            },
	            {
	                "categoryID": 203,
	                "categoryName": "巴西",
	                "level": 1
	            },
	            {
	                "categoryID": 204,
	                "categoryName": "阿根廷",
	                "level": 1
	            },
	            {
	                "categoryID": 205,
	                "categoryName": "智力",
	                "level": 1
	            }
	        ],
	        "categoryID": 199,
	        "categoryName": "美洲",
	        "level": 0
	    },
	    {
	        "childList": [
	            {
	                "categoryID": 210,
	                "categoryName": "日本",
	                "level": 1
	            },
	            {
	                "categoryID": 211,
	                "categoryName": "东南亚",
	                "level": 1
	            },
	            {
	                "categoryID": 207,
	                "categoryName": "中国",
	                "level": 1,
	                "childList": [
	                    {
	                        "categoryID": 208,
	                        "categoryName": "香港",
	                        "level": 2
	                    },
	                    {
	                        "categoryID": 209,
	                        "categoryName": "台湾",
	                        "level": 2
	                    }
	                ]
	            },
	            {
	                "categoryID": 216,
	                "categoryName": "澳大利亚",
	                "level": 1
	            },
	            {
	                "childList": [
	                    {
	                        "categoryID": 213,
	                        "categoryName": "土耳其",
	                        "level": 2
	                    },
	                    {
	                        "categoryID": 214,
	                        "categoryName": "埃及",
	                        "level": 2
	                    },
	                    {
	                        "categoryID": 215,
	                        "categoryName": "黎巴嫩",
	                        "level": 2
	                    }
	                ],
	                "categoryID": 212,
	                "categoryName": "阿拉伯",
	                "level": 1
	            }
	        ],
	        "categoryID": 206,
	        "categoryName": "亚洲",
	        "level": 0
	    },
	    {
	        "categoryID": 217,
	        "categoryName": "其他",
	        "childList": [],
	        "level": 0
	    }
	];
	var ceMenuChannel = $('#ceMenuChannel'),
		ceDecoration = $('#ceDecoration'),
		ceTerm = $('#ceTerm'),
		ceBrands = $('#ceBrands'),
		mutilMenu = $('#mutilMenu'),
		styleList = $("#styleList"),
		upperStyle = $('#upperStyle'),
		upperStyleBtn = $('.upperStyleBtn');


	initChannel(ceMenuChannel, channelJson);
	var cJson = {
		cid: 'categoryID',
		cname: 'categoryName',
		clist: 'childList',
		clevel: 'level',
		cnew: true
	};
	initStyleList(upperStyleBtn, styleList, countryJson, cJson);

	function initChannel(_obj, _data) {
		var lis = [],
			downObj = null;
		if(_data && _data.length>0) {
			$.each(_data, function(i, cell){
				if(!cell.channelID) {
					cell.channelID = '';
				}
			  	var tit = '<a href="javascript:void(0);" class="tit" data-cid="'+cell.channelID+'">'+cell.channelName+'</a>',
			  		subArr = [];
			  	$.each(cell.childList, function(i, cell){
			  		subArr.push('<a href="javascript:void(0);" data-cid="'+cell.channelID+'">'+cell.channelName+'</a>');
			  	});
			  	var suba = subArr.join('');
			  	lis.push('<li>'+tit+suba+'</li>');
			});
		}
		_obj.html(lis.join(''));
		var txtShow = _obj.parents('.btn-group').find('.txt-show');
		_obj.find('a').on('click', function(e) {
			var t = $(this),
				txt = $.trim(t.html()),
				cid = t.data('cid');
			txtShow.html(txt).data('cid',cid);
			var obj = judgeChannel(cid);
			if(downObj !== obj) {
				if(downObj !== null){
					downObj.hide();
				}
				if(obj[0].style.display == "none") {
					obj.show();
				}
				downObj = obj;
			}
			
		});
	}
	function judgeChannel(cid) {
		var down = null;
		if(cid>105 && cid<=107) {
			down = ceBrands;
		}
		else if(cid>107 && cid<=114) {
			down = ceTerm;
		}
		else if(cid>114 && cid<=118) {
			down = ceDecoration;
		}
		return down;
	}

	function initStyleList(_triggle, _container, _data, _params) {
		var opts = {
				cid: '',
				cname: '',
				clist: '',
				clevel: '',
				cnew: false
			},
			lis = '',
			treeDemo = null,
			_this = null,
			boxes = null,
			crumbsArr = [];
		$.extend(opts, _params || {});
		lis = createCategory(_data, opts);
		treeDemo = $('<ul id="treeDemo" class="treeview">'+lis+'</ul>');
		if(_triggle.length > 1){
        	_triggle.on("click", function(e) {
        		_this = $(this);
        	});	
        }
        else{
        	_this = _triggle;
        }
		_container.html(treeDemo);
		boxes = _container.parents('.modal-dialog').find('.mo-box');
		treeDemo.treeview({
            persist: "location",
			collapsed: true,
			unique: true
        }).on('click', function(e) {
        	switch(e.target.tagName){
        		case 'A':
					var t = $(e.target),
		        		txt = $.trim(t.html()),
						cid = t.data('cid');
		        	upperStyle.modal('hide');
		        	_this.html(txt).data('cid',cid);
		        	switch(cid) {
		        		case 1446:
		        			judgeUpStyle(_this, cid, 'aaa', 'aaa');
		        			break;
		        		default:
		        			break;
		        	}
		        	break;
		        case 'SPAN':
		        	if(opts.cnew) {
			        	e.stopPropagation();
			        	var sp = $(e.target),
			        		a = sp.prev('a');
			        	crumbsArr = findParents(a);
			        	boxes.eq(0).hide();
			        	boxes.eq(1).find('#crumbs').html(createCrumbs(crumbsArr));
			        	boxes.eq(1).show();
			        }
		        	break;
		        default: 
		        	break;
        	}
        });
        if(opts.cnew) {
        	var subEntryName = $('#subEntryName');
        	$('#styleSure').on('click', function() {
        		var ncid = 'n'+crumbsArr[0].cid;
	        	upperStyle.modal('hide');
	        	_this.html(subEntryName.val()).data('cid', ncid);
	        	boxes.eq(1).hide();
			    boxes.eq(0).show();
	        });
	        $('#styleCancel').on('click', function(e) {
	        	e.stopPropagation();
	        	boxes.eq(1).hide();
			    boxes.eq(0).show();
	        });
        }
	}

	function createCategory(_data, _opts) {
		var ulStr = [],
			span = '';
		if(_opts.cnew) {
			span = '<span class="add">新增</span>';
		}
		$.each(_data, function(i, cell){
			if(!cell[_opts.cid]) {
				cell[_opts.cid] = '';
			}
			if(cell[_opts.clist] && cell[_opts.clist].length) {
				var str = createCategory(cell[_opts.clist], _opts);
				ulStr.push(('<li><a data-cid="'+cell[_opts.cid]+'">'+cell[_opts.cname]+'</a>'+span+'<ul>')+str+'</ul></li>');
			}
			else {
				ulStr.push('<li><a data-cid="'+cell[_opts.cid]+'">'+cell[_opts.cname]+'</a>'+span+'</li>');
			}
		}); 
		return ulStr.join('');
	}

	function judgeUpStyle(_this, _cid, _name, _tag) {
		if(!_cid) {
			return false;
		}
		var str = '<div class="form-group"><label class="col-sm-2 control-label" for="channel">'+_name+'</label><div class="btn-group col-sm-4 col-xs-12"><input type="text" class="form-control" id="'+_tag+'" name="'+_tag+'" placeholder="请输入"></div><div class="col-sm-6 col-xs-12"></div></div>';
		if(_cid == 1446){
			_this.parents('.form-group').after(str);
		}
	}

	function findParents(_a) {
		var obj = {
			"cid": '',
			"cname": ''
		},
		ul = null,
		arr = [],		
		objStr = '';
		if(_a[0].tagName != 'A') {
			return false;
		}
		obj.cid = _a.data('cid');
		obj.cname = _a.html();
		ul = _a.parents('ul');
		if(!ul.eq(0).hasClass('treeview')) {
			arr.push(obj);
			var subArr = findParents(ul.eq(0).prevAll('a'));
			arr = arr.concat(subArr);
		}
		else {
			arr.push(obj);
		}
		return arr;
	}

	function createCrumbs(arr) {
		var str = '',
			tag = '<span class="arrow-r">&gt;</span>';
		$.each(arr.reverse(), function(i, cell) {
			if(i>=(arr.length-1)) {
				tag = '';
			}
			str += ('<span>'+cell.cname+'</span>'+tag);
		});
		return str;
	}
})(jQuery);