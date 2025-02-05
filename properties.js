const properties = {
  propertyGroup: {
    name: "Peak Accommodation",
    metrics: {
      revenue: {
        monthly: [85000, 89000, 92000, 96000, 100000],
        quarterly: [266000, 280000, 290000],
        annually: [1052000],
      },
      cost: {
        monthly: [27000, 28500, 29500, 31000, 32500],
        quarterly: [85000, 89000, 93000],
        annually: [342000],
      },
      netIncome: {
        monthly: [58000, 60500, 62500, 65000, 67500],
        quarterly: [181000, 191000, 197000],
        annually: [710000],
      },
      occupancy: {
        monthly: [80, 83, 85, 87, 88],
        quarterly: [84, 85, 88],
        annually: [86],
      },
    },
    properties: [
      {
        id: "Krook",
        name: "The Krook",
        address: "119 Upton Street, Wānaka 9305, New Zealand",
        type: "House",
        units: 1,
        bedrooms: 5,
        beds: 7,
        bathrooms: 4,
        sleeps: 14,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: "3 double 4 single",
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/the-krook-wanaka-holiday-house-SD026.jpg",
        metrics: {
          revenue: {
            monthly: [1500, 1800, 2000, 2200, 2400],
            quarterly: [5800, 6400, 7000],
            annually: [26000],
          },
          cost: {
            monthly: [500, 600, 650, 700, 750],
            quarterly: [1800, 1900, 2000],
            annually: [7400],
          },
          netIncome: {
            monthly: [1000, 1200, 1350, 1500, 1650],
            quarterly: [4000, 4500, 5000],
            annually: [18600],
          },
          occupancy: {
            monthly: [80, 85, 87, 90, 88],
            quarterly: [85, 88, 89],
            annually: [87],
          },
        },
      },
      {
        id: "Tenby Apartments",
        name: "Tenby Apartments",
        address: "125 Tenby Street, Wānaka 9305, New Zealand",
        type: "Apartments",
        units: 4,
        bedrooms: 6,
        beds: 12,
        bathrooms: 6,
        sleeps: null,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: null,
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/peak-apartments-web-whitebg-wanaka-accommodation.jpg",
        metrics: {
          revenue: {
            monthly: [6000, 6500, 7000, 7500, 8000],
            quarterly: [19500, 21000, 22500],
            annually: [85000],
          },
          cost: {
            monthly: [2000, 2200, 2300, 2400, 2500],
            quarterly: [6500, 6900, 7100],
            annually: [26500],
          },
          netIncome: {
            monthly: [4000, 4300, 4700, 5100, 5500],
            quarterly: [13000, 14100, 15400],
            annually: [58500],
          },
          occupancy: {
            monthly: [78, 82, 85, 89, 90],
            quarterly: [81, 85, 88],
            annually: [85],
          },
        },
      },
      {
        id: "Dragonfly",
        name: "Dragonfly",
        address: "41 McDougall Street, Wānaka 9305, New Zealand",
        type: "House",
        units: 1,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,
        sleeps: 6,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: null,
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/dragonfly_cottage_12-800x600.jpg",
        metrics: {
          revenue: {
            monthly: [1000, 1100, 1200, 1300, 1400],
            quarterly: [3300, 3600, 3900],
            annually: [15000],
          },
          cost: {
            monthly: [300, 350, 400, 450, 500],
            quarterly: [1050, 1150, 1250],
            annually: [5100],
          },
          netIncome: {
            monthly: [700, 750, 800, 850, 900],
            quarterly: [2250, 2450, 2650],
            annually: [9900],
          },
          occupancy: {
            monthly: [70, 75, 80, 85, 87],
            quarterly: [75, 82, 85],
            annually: [80],
          },
        },
      },
      {
        id: "Dungarvon Apartments",
        name: "Dungarvon Apartments",
        address: "45 Dungarvon Street, Wānaka 9305, New Zealand",
        type: "Apartments",
        units: 8,
        bedrooms: 27,
        beds: 54,
        bathrooms: null,
        sleeps: null,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: null,
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/upton-house-holiday-accommodation-wanaka-LD8_8734-1024x582.jpg",
        metrics: {
          revenue: {
            monthly: [12000, 12500, 13000, 14000, 15000],
            quarterly: [37500, 40000, 43000],
            annually: [155000],
          },
          cost: {
            monthly: [4000, 4200, 4400, 4600, 4800],
            quarterly: [12600, 13200, 13800],
            annually: [52000],
          },
          netIncome: {
            monthly: [8000, 8300, 8600, 9400, 10200],
            quarterly: [24900, 26800, 29200],
            annually: [103000],
          },
          occupancy: {
            monthly: [88, 90, 92, 95, 94],
            quarterly: [90, 94, 93],
            annually: [92],
          },
        },
      },
      {
        id: "Ahurei",
        name: "Ahurei",
        address: "208 Brownston Street, 9305 Wānaka, New Zealand",
        type: "Apartments",
        units: 7,
        bedrooms: 13,
        beds: 26,
        bathrooms: null,
        sleeps: null,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: null,
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/peak-accommodation-web-wanaka-accommodation.jpg",
        metrics: {
          revenue: {
            monthly: [9000, 9500, 10000, 10500, 11000],
            quarterly: [28500, 29500, 31000],
            annually: [114000],
          },
          cost: {
            monthly: [3000, 3100, 3200, 3300, 3400],
            quarterly: [9500, 9700, 9900],
            annually: [39000],
          },
          netIncome: {
            monthly: [6000, 6400, 6800, 7200, 7600],
            quarterly: [19000, 19800, 21100],
            annually: [75000],
          },
          occupancy: {
            monthly: [76, 80, 83, 85, 86],
            quarterly: [80, 83, 85],
            annually: [82],
          },
        },
      },
      {
        id: "Pembroke - Lodge",
        name: "Pembroke - Lodge",
        address: "200 Brownston Street, 9305 Wānaka, New Zealand",
        type: "House",
        units: 1,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,
        sleeps: 6,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: "2 double 2 single",
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/pembroke-lodge_06.jpg",
        metrics: {
          revenue: {
            monthly: [1000, 1200, 1300, 1400, 1500],
            quarterly: [3600, 4000, 4200],
            annually: [15500],
          },
          cost: {
            monthly: [300, 320, 350, 370, 390],
            quarterly: [970, 1040, 1110],
            annually: [4400],
          },
          netIncome: {
            monthly: [700, 880, 950, 1030, 1110],
            quarterly: [2630, 2960, 3090],
            annually: [11100],
          },
          occupancy: {
            monthly: [80, 83, 85, 86, 87],
            quarterly: [83, 86, 87],
            annually: [85],
          },
        },
      },
      {
        id: "Pembroke - Villa",
        name: "Pembroke - Villa",
        address: "200 Brownston Street, 9305 Wānaka, New Zealand",
        type: "House",
        units: 1,
        bedrooms: 2,
        beds: 3,
        bathrooms: 1,
        sleeps: 4,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: "1 double 2 single",
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/pembroke-villa-0615.jpg",
        metrics: {
          revenue: {
            monthly: [1200, 1300, 1350, 1400, 1450],
            quarterly: [3850, 4050, 4200],
            annually: [16000],
          },
          cost: {
            monthly: [400, 420, 440, 460, 480],
            quarterly: [1260, 1320, 1380],
            annually: [5200],
          },
          netIncome: {
            monthly: [800, 880, 910, 940, 970],
            quarterly: [2590, 2730, 2820],
            annually: [10800],
          },
          occupancy: {
            monthly: [78, 82, 85, 88, 90],
            quarterly: [82, 85, 88],
            annually: [85],
          },
        },
      },
      {
        id: "Pinot Cottage",
        name: "Pinot Cottage",
        address: "131 Warren Street, 9305 Wānaka, New Zealand",
        type: "House",
        units: 1,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        sleeps: 4,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: "1 double 2 single",
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/pinot_cottage_141.jpg",
        metrics: {
          revenue: {
            monthly: [1100, 1150, 1200, 1250, 1300],
            quarterly: [3500, 3600, 3700],
            annually: [14500],
          },
          cost: {
            monthly: [350, 370, 390, 410, 430],
            quarterly: [1130, 1170, 1210],
            annually: [4600],
          },
          netIncome: {
            monthly: [750, 780, 810, 840, 870],
            quarterly: [2370, 2430, 2490],
            annually: [9900],
          },
          occupancy: {
            monthly: [79, 83, 87, 89, 91],
            quarterly: [83, 87, 89],
            annually: [86],
          },
        },
      },
      {
        id: "Kylies Castle",
        name: "Kylies Castle",
        address: "35 Youghal Street, Wānaka 9305, New Zealand",
        type: "House",
        units: 1,
        bedrooms: 5,
        beds: 7,
        bathrooms: 4,
        sleeps: 14,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: "5 double 2 single",
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/wanaka-holiday-home-accommodation-Kylies-SD011.jpg",
        metrics: {
          revenue: {
            monthly: [3000, 3200, 3400, 3600, 3800],
            quarterly: [9400, 9800, 10200],
            annually: [38000],
          },
          cost: {
            monthly: [900, 950, 1000, 1050, 1100],
            quarterly: [2850, 2950, 3050],
            annually: [11700],
          },
          netIncome: {
            monthly: [2100, 2250, 2400, 2550, 2700],
            quarterly: [6550, 6850, 7150],
            annually: [26300],
          },
          occupancy: {
            monthly: [78, 82, 84, 85, 87],
            quarterly: [81, 84, 85],
            annually: [84],
          },
        },
      },
      {
        id: "McDougall Cottage",
        name: "McDougall Cottage",
        address: "37 McDougall Street, Wānaka 9305, New Zealand",
        type: "House",
        units: 1,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,
        sleeps: 6,
        leaseType: "Short Term Accommodation",
        agent: "Wanaka Selection",
        comments: "2 double 2 single",
        imageUrl: "https://www.peakaccommodation.co.nz/wp-content/uploads/2019/02/wanaka-holiday-house-mcdougalls_cottage_6.jpg",
        metrics: {
          revenue: {
            monthly: [1200, 1300, 1400, 1500, 1600],
            quarterly: [3900, 4200, 4500],
            annually: [17000],
          },
          cost: {
            monthly: [400, 450, 500, 550, 600],
            quarterly: [1350, 1450, 1550],
            annually: [5600],
          },
          netIncome: {
            monthly: [800, 850, 900, 950, 1000],
            quarterly: [2550, 2750, 2950],
            annually: [11400],
          },
          occupancy: {
            monthly: [80, 85, 90, 92, 94],
            quarterly: [85, 89, 92],
            annually: [88],
          },
        },
      },
    ],
  },
};
