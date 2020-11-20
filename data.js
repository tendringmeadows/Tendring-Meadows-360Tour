var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.131240047198755,
        "pitch": 0.09903505143703839,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -3.093783334073672,
          "pitch": 0.0014462913606045902,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.206467977745497,
          "pitch": -0.20834503186158315,
          "title": "Staff accomodations",
          "text": "Living quarters for staff"
        }
      ]
    },
    {
      "id": "1-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.071797905914556,
        "pitch": 0.06953762811043873,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 2.9218324322617972,
          "pitch": 0.05694691568417731,
          "rotation": 0,
          "target": "4-reception-corridor"
        },
        {
          "yaw": 1.340069224908861,
          "pitch": 0.015222015758524776,
          "rotation": 6.283185307179586,
          "target": "3-ladies-reception-toilet"
        },
        {
          "yaw": -1.317180372422932,
          "pitch": -0.003101579047299907,
          "rotation": 6.283185307179586,
          "target": "2-mens-reception-toilet"
        },
        {
          "yaw": 0.5440173169810016,
          "pitch": 0.021318201458170094,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-mens-reception-toilet",
      "name": "Men's Reception Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9247535383813403,
        "pitch": 0.1198281184202088,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.6322930579218919,
          "pitch": -0.039596941326445645,
          "rotation": 11.780972450961727,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ladies-reception-toilet",
      "name": "Ladies Reception Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9628839706885302,
        "pitch": 0.061144459298038356,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.9628842147052143,
          "pitch": 0.1624602482135451,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-reception-corridor",
      "name": "Reception Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3376528842150375,
        "pitch": 0.12876129390930657,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.5396890170514972,
          "pitch": 0.003777669186060706,
          "rotation": 6.283185307179586,
          "target": "5-activity-room"
        },
        {
          "yaw": -3.0542341571229983,
          "pitch": -0.07583529610408846,
          "rotation": 0.7853981633974483,
          "target": "28-1st-floor-lobby"
        },
        {
          "yaw": 2.1669379523985945,
          "pitch": 0.18941307323852286,
          "rotation": 0.7853981633974483,
          "target": "1-reception"
        },
        {
          "yaw": -2.9651245360728016,
          "pitch": 0.3502640395630756,
          "rotation": 0.7853981633974483,
          "target": "9-clover-corridor"
        },
        {
          "yaw": 1.3341076661758855,
          "pitch": 0.06923103465123859,
          "rotation": 5.497787143782138,
          "target": "21-primrose-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-activity-room",
      "name": "Activity Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7644177248085349,
        "pitch": 0.15575459540085212,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.757997279972912,
          "pitch": 0.18912552129005178,
          "rotation": 0.7853981633974483,
          "target": "6-rear-garden"
        },
        {
          "yaw": -2.4052443699313493,
          "pitch": 0.10620562807651446,
          "rotation": 5.497787143782138,
          "target": "4-reception-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-rear-garden",
      "name": "Rear Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1458773352474925,
        "pitch": 0.03785791240614955,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.675486955872934,
          "pitch": 0.02270116762299068,
          "rotation": 5.497787143782138,
          "target": "5-activity-room"
        },
        {
          "yaw": -0.3260983233776784,
          "pitch": 0.09543424197529582,
          "rotation": 5.497787143782138,
          "target": "7-clover-garden"
        },
        {
          "yaw": 2.612647688648181,
          "pitch": 0.1032857694491831,
          "rotation": 0,
          "target": "8-primrose-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-clover-garden",
      "name": "Clover Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.31876131577960365,
        "pitch": 0.015660983340682222,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.2817762319744546,
          "pitch": 0.07988547347920871,
          "rotation": 7.0685834705770345,
          "target": "6-rear-garden"
        },
        {
          "yaw": 0.07258910255585604,
          "pitch": -0.017950470594087164,
          "rotation": 0,
          "target": "12-sensory-garden"
        },
        {
          "yaw": 1.3893869315050829,
          "pitch": 0.03751666883981386,
          "rotation": 5.497787143782138,
          "target": "19-clover-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-primrose-garden",
      "name": "Primrose Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.1025169800661345,
        "pitch": 0.1870416071440335,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.24947445970756732,
          "pitch": 0.19512703375079354,
          "rotation": 5.497787143782138,
          "target": "6-rear-garden"
        },
        {
          "yaw": -2.077979506100517,
          "pitch": 0.12284826149707939,
          "rotation": 0,
          "target": "23-primrose-lounge"
        },
        {
          "yaw": 2.9722315842882505,
          "pitch": 0.047008166147717745,
          "rotation": 0.7853981633974483,
          "target": "27-primrose-dinning-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-clover-corridor",
      "name": "Clover Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0463221315108715,
        "pitch": 0.09680162581691043,
        "fov": 1.8605459128810562
      },
      "linkHotspots": [
        {
          "yaw": -0.2035216129306825,
          "pitch": 0.037932618150218644,
          "rotation": 0,
          "target": "4-reception-corridor"
        },
        {
          "yaw": 0.681468651956715,
          "pitch": 0.13027708298639418,
          "rotation": 0,
          "target": "10-room-2"
        },
        {
          "yaw": 2.765506906420571,
          "pitch": 0.19832585093011446,
          "rotation": 0,
          "target": "11-clover-corridor-near-sensory-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-room-2",
      "name": "Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0415197817913224,
          "pitch": -0.028816553209537688,
          "rotation": 0,
          "target": "9-clover-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-clover-corridor-near-sensory-garden",
      "name": "Clover Corridor (near sensory garden)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.896084036365,
        "pitch": 0.027946735873140227,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -3.057060717394661,
          "pitch": 0.08581050681349467,
          "rotation": 0,
          "target": "9-clover-corridor"
        },
        {
          "yaw": 0.0897715176762155,
          "pitch": 0.0613759014135411,
          "rotation": 0,
          "target": "13-clover-corridor-near-dinning-area"
        },
        {
          "yaw": 1.6689872552257343,
          "pitch": 0.09468747404624445,
          "rotation": 0,
          "target": "12-sensory-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-sensory-garden",
      "name": "Sensory Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9985145944875047,
        "pitch": 0.09702164064673369,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.228929318106328,
          "pitch": 0.2323373616118971,
          "rotation": 0,
          "target": "7-clover-garden"
        },
        {
          "yaw": 0.43513850552697164,
          "pitch": 0.07456307729763978,
          "rotation": 0,
          "target": "11-clover-corridor-near-sensory-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-clover-corridor-near-dinning-area",
      "name": "Clover Corridor (near dinning area)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.39502354446961974,
        "pitch": 0.11269095281953945,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.238366199909093,
          "pitch": 0.12305621575148074,
          "rotation": 0,
          "target": "11-clover-corridor-near-sensory-garden"
        },
        {
          "yaw": -0.4209221681710318,
          "pitch": 0.0026907150890114195,
          "rotation": 0,
          "target": "19-clover-dining-area"
        },
        {
          "yaw": -2.317007831426828,
          "pitch": 0.15723940001943681,
          "rotation": 0,
          "target": "15-clover-corridor-near-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-room-9",
      "name": "Room 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5490008030255158,
          "pitch": 0.027423512192410016,
          "rotation": 0.7853981633974483,
          "target": "15-clover-corridor-near-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-clover-corridor-near-lift",
      "name": "Clover Corridor (near lift)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6678867364901855,
          "pitch": 0.31435851578246776,
          "rotation": 0.7853981633974483,
          "target": "13-clover-corridor-near-dinning-area"
        },
        {
          "yaw": 1.5854769705516345,
          "pitch": 0.10477649169227021,
          "rotation": 0.7853981633974483,
          "target": "14-room-9"
        },
        {
          "yaw": -0.13968587461316595,
          "pitch": -0.15291651007309248,
          "rotation": 5.497787143782138,
          "target": "16-laundry-and-kitchen-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-laundry-and-kitchen-lobby",
      "name": "Laundry and Kitchen Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.29460108442257393,
        "pitch": -0.03235978639929371,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.5769178440797766,
          "pitch": 0.08210160613131556,
          "rotation": 0,
          "target": "18-kitchen"
        },
        {
          "yaw": -0.8460995381503835,
          "pitch": 0.02115959242780363,
          "rotation": 0,
          "target": "17-laundry"
        },
        {
          "yaw": -2.3105136062351015,
          "pitch": -0.14767082205447224,
          "rotation": 0,
          "target": "15-clover-corridor-near-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.06470657193276,
        "pitch": 0.13761374797011072,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "18-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1632215353825845,
        "pitch": 0.45731170325359827,
        "fov": 1.8420210674669568
      },
      "linkHotspots": [
        {
          "yaw": -1.7432127792052778,
          "pitch": 0.2882047565563113,
          "rotation": 0,
          "target": "16-laundry-and-kitchen-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-clover-dining-area",
      "name": "Clover Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7246486949632214,
        "pitch": 0.17290365659877338,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.9959256218058865,
          "pitch": 0.10058937750379826,
          "rotation": 0.7853981633974483,
          "target": "13-clover-corridor-near-dinning-area"
        },
        {
          "yaw": 2.319163080600301,
          "pitch": 0.03252782324394943,
          "rotation": 0.7853981633974483,
          "target": "7-clover-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-visitor-room",
      "name": "Visitor Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3915126502625377,
        "pitch": 0.3352426148535166,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -3.081917001928865,
          "pitch": 0.15726305249155814,
          "rotation": 0,
          "target": "21-primrose-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-primrose-corridor",
      "name": "Primrose Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.026635295977804,
        "pitch": 0.2682963523427233,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4138263294559046,
          "pitch": 0.08178786078513944,
          "rotation": 0,
          "target": "4-reception-corridor"
        },
        {
          "yaw": 2.8460980889040464,
          "pitch": 0.025862722920376058,
          "rotation": 0,
          "target": "22-primrose-corridor-near-lounge"
        },
        {
          "yaw": -1.7885533542810315,
          "pitch": -0.028862173480124653,
          "rotation": 0,
          "target": "20-visitor-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-primrose-corridor-near-lounge",
      "name": "Primrose Corridor (near lounge)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9550936091748365,
          "pitch": 0.06679268215476597,
          "rotation": 0,
          "target": "21-primrose-corridor"
        },
        {
          "yaw": -0.6976652821788552,
          "pitch": -0.02506102921636888,
          "rotation": 0,
          "target": "23-primrose-lounge"
        },
        {
          "yaw": 0.8188140422186247,
          "pitch": 0.004165636719699606,
          "rotation": 0,
          "target": "25-primrose-corridor-near-dining-area"
        },
        {
          "yaw": 2.4505438889355897,
          "pitch": -0.03252464971668445,
          "rotation": 10.995574287564278,
          "target": "24-room-21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-primrose-lounge",
      "name": "Primrose Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.986377873072934,
        "pitch": 0.12115028985101439,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.29576995805443573,
          "pitch": -0.017237373666898037,
          "rotation": 5.497787143782138,
          "target": "6-rear-garden"
        },
        {
          "yaw": 1.1573059013174642,
          "pitch": -0.10691281495716254,
          "rotation": 0.7853981633974483,
          "target": "8-primrose-garden"
        },
        {
          "yaw": -1.9597716962278309,
          "pitch": 0.005266142824357445,
          "rotation": 5.497787143782138,
          "target": "22-primrose-corridor-near-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-room-21",
      "name": "Room 21",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9472349902442794,
          "pitch": -0.1152953666837071,
          "rotation": 5.497787143782138,
          "target": "22-primrose-corridor-near-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-primrose-corridor-near-dining-area",
      "name": "Primrose Corridor (near dining area)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4438438771292521,
        "pitch": 0.008812321608948182,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 2.150071465437331,
          "pitch": 0.027173754793627936,
          "rotation": 0.7853981633974483,
          "target": "26-staff-room"
        },
        {
          "yaw": 0.3941862763286057,
          "pitch": -0.040113724895899594,
          "rotation": 5.497787143782138,
          "target": "27-primrose-dinning-room"
        },
        {
          "yaw": -1.4462225358816987,
          "pitch": 0.015132496861163247,
          "rotation": 0,
          "target": "22-primrose-corridor-near-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-staff-room",
      "name": "Staff Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.021600792770565036,
        "pitch": -0.05964295877677017,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 2.0442526376411605,
          "pitch": 0.06917690078990546,
          "rotation": 5.497787143782138,
          "target": "25-primrose-corridor-near-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-primrose-dinning-room",
      "name": "Primrose Dinning Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.46912944106180277,
          "pitch": 0.16098008843932732,
          "rotation": 0,
          "target": "34-poppy-corridor-near-dining-area"
        },
        {
          "yaw": -2.128340139549337,
          "pitch": 0.38866476366150593,
          "rotation": 5.497787143782138,
          "target": "8-primrose-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-1st-floor-lobby",
      "name": "1st Floor Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.102880484422757,
        "pitch": 0.2168564824799688,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.290263018770208,
          "pitch": -0.2194560832410346,
          "rotation": 10.210176124166829,
          "target": "4-reception-corridor"
        },
        {
          "yaw": -1.6730291034334037,
          "pitch": 0.0768690663861804,
          "rotation": 0,
          "target": "29-poppy-corridor"
        },
        {
          "yaw": 1.9689951121228217,
          "pitch": 0.11129178507930781,
          "rotation": 0,
          "target": "44-poppy-corridor-near-room-49"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-poppy-corridor",
      "name": "Poppy Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2290204699625882,
        "pitch": 0.09196992922200664,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 0.642980237735717,
          "pitch": -0.00801070062556164,
          "rotation": 0.7853981633974483,
          "target": "40-staff-toilet"
        },
        {
          "yaw": -1.360978079956869,
          "pitch": 0.03711089442572835,
          "rotation": 0,
          "target": "28-1st-floor-lobby"
        },
        {
          "yaw": 1.8782619430269119,
          "pitch": 0.03963001677217548,
          "rotation": 0,
          "target": "31-poppy-corridor-near-lounge"
        },
        {
          "yaw": 0.3114315204909861,
          "pitch": -0.053473942708006206,
          "rotation": 6.283185307179586,
          "target": "39-training-room"
        },
        {
          "yaw": 0.15810442487667942,
          "pitch": -0.16584392210355503,
          "rotation": 4.71238898038469,
          "target": "38-managers-office"
        },
        {
          "yaw": -2.781273964426152,
          "pitch": 0.058897763514799806,
          "rotation": 0,
          "target": "43-room-66"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-room-33",
      "name": "Room 33",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4655564159383463,
          "pitch": -0.02739284387108043,
          "rotation": 18.84955592153877,
          "target": "34-poppy-corridor-near-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-poppy-corridor-near-lounge",
      "name": "Poppy Corridor (near lounge)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7941457191601913,
        "pitch": 0.030177949055451236,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.8381200587346225,
          "pitch": 0.12341848957925805,
          "rotation": 0,
          "target": "29-poppy-corridor"
        },
        {
          "yaw": -2.455642064675173,
          "pitch": 0.08634440581295522,
          "rotation": 0,
          "target": "33-poppy-lounge"
        },
        {
          "yaw": 2.2129126896268225,
          "pitch": -0.028552565810185726,
          "rotation": 0,
          "target": "34-poppy-corridor-near-dining-area"
        },
        {
          "yaw": 0.842032382351718,
          "pitch": -0.06125067112175131,
          "rotation": 0,
          "target": "32-room-35"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-room-35",
      "name": "Room 35",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0241122621928955,
          "pitch": 0.0909777883505285,
          "rotation": 0,
          "target": "31-poppy-corridor-near-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-poppy-lounge",
      "name": "Poppy Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0467648883687755,
          "pitch": 0.04722336484425149,
          "rotation": 0,
          "target": "31-poppy-corridor-near-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-poppy-corridor-near-dining-area",
      "name": "Poppy Corridor (near dining area)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.611103496683975,
        "pitch": 0.1529797671787705,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.7785373587343747,
          "pitch": -0.06858049364851837,
          "rotation": 0,
          "target": "35-poppy-dining-area"
        },
        {
          "yaw": -2.9169876542448456,
          "pitch": 0.016637130412279433,
          "rotation": 0,
          "target": "31-poppy-corridor-near-lounge"
        },
        {
          "yaw": -2.8245818373333886,
          "pitch": -0.09568266578839513,
          "rotation": 14.137166941154074,
          "target": "36-room-38"
        },
        {
          "yaw": -3.0635674287730055,
          "pitch": -0.10054205253176107,
          "rotation": 10.995574287564278,
          "target": "37-room-43"
        },
        {
          "yaw": -0.25378711316171376,
          "pitch": 0.05010131727568634,
          "rotation": 0.7853981633974483,
          "target": "30-room-33"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-poppy-dining-area",
      "name": "Poppy Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4312595460127042,
          "pitch": 0.12145252170547494,
          "rotation": 0.7853981633974483,
          "target": "34-poppy-corridor-near-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-room-38",
      "name": "Room 38",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4246444214744258,
          "pitch": -0.015613694543562318,
          "rotation": 0.7853981633974483,
          "target": "34-poppy-corridor-near-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-room-43",
      "name": "Room 43",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6809967003205273,
          "pitch": -0.015386312559435567,
          "rotation": 0.7853981633974483,
          "target": "34-poppy-corridor-near-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-managers-office",
      "name": "Managers Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9016218407999155,
        "pitch": 0.43701439693941424,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.2085697261091877,
          "pitch": -0.033237429338342395,
          "rotation": 5.497787143782138,
          "target": "29-poppy-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-training-room",
      "name": "Training Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7497260723122974,
        "pitch": 0.10977117867949282,
        "fov": 1.808117939351191
      },
      "linkHotspots": [
        {
          "yaw": 0.8986064429051019,
          "pitch": 0.17048156744320764,
          "rotation": 0,
          "target": "29-poppy-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-staff-toilet",
      "name": "Staff Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7912877792197115,
        "pitch": 0.08966709572612608,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.0702256764190814,
          "pitch": -0.24758644611500102,
          "rotation": 0,
          "target": "29-poppy-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-room-49",
      "name": "Room 49",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.376659816689095,
        "pitch": 0.008204958084494507,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.5294010809956564,
          "pitch": 0.05602324712939932,
          "rotation": 0,
          "target": "44-poppy-corridor-near-room-49"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-room-53",
      "name": "Room 53",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6840363643063956,
        "pitch": 0.10093456503174458,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.1409232920565504,
          "pitch": -0.11601068327345665,
          "rotation": 0,
          "target": "47-bluebell-corridor-near-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-room-66",
      "name": "Room 66",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6728212746185367,
        "pitch": 0.07734739245189104,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -2.8755092733036207,
          "pitch": 0.10008678017146266,
          "rotation": 0,
          "target": "29-poppy-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-poppy-corridor-near-room-49",
      "name": "Poppy Corridor (near room 49)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5288173843093702,
        "pitch": 0.155320581007361,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.5516936745778835,
          "pitch": 0.02263714938589878,
          "rotation": 0,
          "target": "45-bluebell-corridor-near-lounge"
        },
        {
          "yaw": 1.5930713785931427,
          "pitch": 0.011811118066574977,
          "rotation": 0,
          "target": "28-1st-floor-lobby"
        },
        {
          "yaw": 1.974152809084047,
          "pitch": -0.09655686792124385,
          "rotation": 1.5707963267948966,
          "target": "41-room-49"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-bluebell-corridor-near-lounge",
      "name": "Bluebell Corridor (near lounge)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.16248562742165085,
        "pitch": 0.04759485867218416,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.861796335613601,
          "pitch": 0.0657994547406453,
          "rotation": 0,
          "target": "46-bluebell-lounge"
        },
        {
          "yaw": 3.0089694484661447,
          "pitch": 0.02528093709453927,
          "rotation": 0,
          "target": "44-poppy-corridor-near-room-49"
        },
        {
          "yaw": -0.290265949720407,
          "pitch": 0.008975404383036789,
          "rotation": 0,
          "target": "47-bluebell-corridor-near-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-bluebell-lounge",
      "name": "Bluebell Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.5750744825427,
        "pitch": -0.06740359411042718,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -1.7382874295145658,
          "pitch": 0.03833043026256888,
          "rotation": 5.497787143782138,
          "target": "45-bluebell-corridor-near-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-bluebell-corridor-near-dining-area",
      "name": "Bluebell Corridor (near dining area)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8136961905024691,
        "pitch": 0.16043343757743855,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": -0.07162131222797363,
          "pitch": 0.015512963442729344,
          "rotation": 0,
          "target": "45-bluebell-corridor-near-lounge"
        },
        {
          "yaw": 1.7467172881466277,
          "pitch": 0.07578181982666798,
          "rotation": 0,
          "target": "48-bluebell-dining-area"
        },
        {
          "yaw": 0.09556833943159937,
          "pitch": -0.0530164899661969,
          "rotation": 0.7853981633974483,
          "target": "42-room-53"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-bluebell-dining-area",
      "name": "Bluebell Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.1030827193225807,
        "pitch": 0.08397484420224188,
        "fov": 1.8610468536509188
      },
      "linkHotspots": [
        {
          "yaw": 1.830577871158079,
          "pitch": 0.01582061700673343,
          "rotation": 0,
          "target": "47-bluebell-corridor-near-dining-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
