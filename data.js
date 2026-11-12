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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1225592136698985,
          "pitch": 0.06405464933661698,
          "rotation": 0,
          "target": "2-dinning-l"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.085513497229294,
        "pitch": 0.003062523680274154,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -2.4467483131236527,
          "pitch": 0.08690132405040174,
          "rotation": 0,
          "target": "3-dinning-r"
        },
        {
          "yaw": 2.3924277268045566,
          "pitch": 0.0692281744194041,
          "rotation": 0,
          "target": "2-dinning-l"
        },
        {
          "yaw": 3.1145258012006742,
          "pitch": 0.04765330673496315,
          "rotation": 0,
          "target": "4-dinning-m"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dinning-l",
      "name": "Dinning (L)",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-dinning-r",
      "name": "Dinning (R)",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0690827192526573,
          "pitch": -0.028939026928696876,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -1.363552524835816,
          "pitch": 0.1749201579549453,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dinning-m",
      "name": "Dinning (M)",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7334995807487577,
          "pitch": -0.03235913457248074,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.036643244949333464,
          "pitch": -0.026506892002162274,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen-r",
      "name": "Kitchen R",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4648312060680144,
          "pitch": 0.024285554518407082,
          "rotation": 0,
          "target": "3-dinning-r"
        },
        {
          "yaw": -2.6283150342174455,
          "pitch": 0.39209696891305157,
          "rotation": 3.9269908169872414,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen-l",
      "name": "Kitchen L",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.726073520552525,
          "pitch": 0.17315336460345776,
          "rotation": 0,
          "target": "5-kitchen-r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen-m",
      "name": "Kitchen M",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9222022682168358,
          "pitch": 0.14292344243852284,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 1.3651099954673853,
          "pitch": 0.0837604186590788,
          "rotation": 0,
          "target": "3-dinning-r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-mb-room-",
      "name": "MB Room ",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.684187448208249,
          "pitch": 0.4977618544318698,
          "rotation": 0,
          "target": "9-working"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-working",
      "name": "Working",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.812250738761012,
          "pitch": 0.15881557311030647,
          "rotation": 1.5707963267948966,
          "target": "1-living"
        },
        {
          "yaw": -3.132265234555005,
          "pitch": 0.5576918943353562,
          "rotation": 0,
          "target": "8-mb-room-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-mb-room",
      "name": "MB Room",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1350059744272674,
          "pitch": 0.458630007399222,
          "rotation": 0,
          "target": "9-working"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cm-bathroom",
      "name": "CM Bathroom",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9191562756808764,
          "pitch": 0.40380930704234785,
          "rotation": 0,
          "target": "12-cm-vanity"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cm-vanity",
      "name": "CM Vanity",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4632612871105923,
          "pitch": 0.468809501131604,
          "rotation": 0,
          "target": "11-cm-bathroom"
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
