const trafficVolumeData = [
  {
    year: '2019',
    column1: 2.5,
    column2: 3,
    line1: 2.2,
    line2: 2,
  },
  {
    year: '2020',
    column1: 3,
    column2: 2.5,
    line1: 2.2,
    line2: 2,
  },
  {
    year: '2021',
    column1: 2.5,
    column2: 2.5,
    line1: 2.2,
    line2: 2,
  },
  {
    year: '2022',
    column1: 2.6,
    column2: 3,
    line1: 1,
    line2: 1.5,
  },
  {
    year: '2023',
    column1: 2.8,
    column2: 2.9,
    line1: 2,
    line2: 2.5,
  },
];

const xCategoriesData = ['2019', '2020', '2021', '2022', '2023'];

const column1Data = [59, 83, 65, 228, 184];

const column2Data = [24, 79, 72, 240, 167];

const line1Data = [47, 83.33, 239.33, 70.66, 175.66];

const line2Data = [80, 73, 70, 250, 150];

const smallCarTrafficData = [
  { x: 1, y: 38000 },
  { x: 2, y: 37300 },
  { x: 3, y: 37892 },
  { x: 4, y: 38564 },
  { x: 5, y: 36770 },
  { x: 6, y: 36026 },
  { x: 7, y: 34978 },
  { x: 8, y: 35657 },
  { x: 9, y: 30562 },
  { x: 10, y: 34956 },
  { x: 11, y: 33199 },
  { x: 12, y: 31766 },
];

const middleCarTrafficData = [
  { x: 1, y: 22534 },
  { x: 2, y: 23599 },
  { x: 3, y: 24533 },
  { x: 4, y: 25195 },
  { x: 5, y: 36770 },
  { x: 6, y: 25896 },
  { x: 7, y: 27635 },
  { x: 8, y: 29173 },
  { x: 9, y: 30562 },
  { x: 10, y: 32646 },
  { x: 11, y: 35686 },
  { x: 12, y: 37709 },
];

const bigCarTrafficData = [
  { x: 1, y: 39143 },
  { x: 2, y: 36829 },
  { x: 3, y: 35031 },
  { x: 4, y: 36202 },
  { x: 5, y: 33718 },
  { x: 6, y: 37773 },
  { x: 7, y: 42556 },
  { x: 8, y: 43820 },
  { x: 9, y: 50048 },
  { x: 10, y: 46445 },
  { x: 11, y: 30686 },
  { x: 12, y: 27709 },
];

const tollBoothRecordData = [
  {
    modeTransport: '公路運輸',
    tollBoothMiddle: '4347.3',
    tollBoothLeft: '4105',
  },
  {
    modeTransport: '公路運輸',
    tollBoothMiddle: '3054',
    tollBoothLeft: '5105',
  },
  {
    modeTransport: '公路運輸',
    tollBoothMiddle: '4047.3',
    tollBoothLeft: '4110',
  },
];

const alertData = [
  {
    mainNum: 67,
    dayRatio: 3,
    weekRatio: -2,
  },
  {
    mainNum: 1.4,
    state: '緩行',
    averageSpeed: 120,
  },
  {
    mainNum: 99,
    dayRatio: 3,
    weekRatio: -2,
  },
  {
    mainNum: 7421,
    dayRatio: '',
    weekRatio: -2,
  },
];

const mainMap = [
  ['tw-pt', 1, '屏東縣'],
  ['tw-tn', 1, '台南市'],
  ['tw-il', 1, '宜蘭縣'],
  ['tw-ch', 1, '嘉義縣'],
  ['tw-tt', 1, '台東縣'],
  ['tw-ph', 1, '澎湖縣'],
  ['tw-km', 1, '金門縣'],
  ['tw-lk', 1, '連江縣'],
  ['tw-tw', 1, '台北市'],
  ['tw-cs', 1, '嘉義市'],
  ['tw-th', 1, '台中市'],
  ['tw-yl', 1, '雲林縣'],
  ['tw-kh', 1, '高雄市'],
  ['tw-tp', 1, '新北市'],
  ['tw-hs', 1, '新竹市'],
  ['tw-hh', 1, '新竹縣'],
  ['tw-cl', 1, '基隆市'],
  ['tw-ml', 1, '苗栗縣'],
  ['tw-ty', 1, '桃園市'],
  ['tw-cg', 1, '彰化縣'],
  ['tw-hl', 1, '花蓮縣'],
  ['tw-nt', 1, '南投縣'],
];

const mapLine = [
  {
    color: {
      linearGradient: {
        x1: 0, //漸變的起始水平位置(0左,1右)
        x2: 0, //漸變的結束水平位置(0左,1右)
        y1: 1, //漸變的開始垂直位置(0頂,1底)
        y2: 0, //漸變的開始垂直位置(0頂,1底)
      },
      stops: [
        [0, "#58B3CC"],//開始
        [1, "#F58158"],//結束
      ],
    },
    geometry: {
      type: 'LineString',
      coordinates: [
        [121.45718572201898, 25.05304469857229],
        [120.97241403287659, 24.805222074713743],
      ],
    },
  },
  {
    color: {
      linearGradient: {
        x1: 0, //漸變的起始水平位置(0左,1右)
        x2: 0, //漸變的結束水平位置(0左,1右)
        y1: 1, //漸變的開始垂直位置(0頂,1底)
        y2: 0, //漸變的開始垂直位置(0頂,1底)
      },
      stops: [
        [0, "#58B3CC"],//開始
        [1, "#F58158"],//結束
      ],
    },
    geometry: {
      type: 'LineString',
      coordinates: [
        [121.45718572201898, 25.05304469857229],
        [121.2580585409265, 24.651796810894933],
      ],
    },
  },
  {
    color: {
      linearGradient: {
        x1: 0, //漸變的起始水平位置(0左,1右)
        x2: 0, //漸變的結束水平位置(0左,1右)
        y1: 1, //漸變的開始垂直位置(0頂,1底)
        y2: 0, //漸變的開始垂直位置(0頂,1底)
      },
      stops: [
        [0, "#58B3CC"],//開始
        [1, "#F58158"],//結束
      ],
    },
    geometry: {
      type: 'LineString',
      coordinates: [
        [121.45718572201898, 25.05304469857229],
        [121.73596377554846, 24.69547366012891],
      ],
    },
  },
  {
    color: {
      linearGradient: {
        x1: 0, //漸變的起始水平位置(0左,1右)
        x2: 0, //漸變的結束水平位置(0左,1右)
        y1: 1, //漸變的開始垂直位置(0頂,1底)
        y2: 0, //漸變的開始垂直位置(0頂,1底)
      },
      stops: [
        [0, "#58B3CC"],//開始
        [1, "#F58158"],//結束
      ],
    },
    geometry: {
      type: 'LineString',
      coordinates: [
        [121.45718572201898, 25.05304469857229],
        [118.3718653815786, 24.448804782854843],
      ],
    },
  },
  {
    color: {
      linearGradient: {
        x1: 0, //漸變的起始水平位置(0左,1右)
        x2: 0, //漸變的結束水平位置(0左,1右)
        y1: 1, //漸變的開始垂直位置(0頂,1底)
        y2: 0, //漸變的開始垂直位置(0頂,1底)
      },
      stops: [
        [0, "#58B3CC"],//開始
        [1, "#F58158"],//結束
      ],
    },
    geometry: {
      type: 'LineString',
      coordinates: [
        [120.99128833387581, 23.954824661740343],
        [121.37937248316567, 23.500181798048757],
      ],
    },
  },
]

const mapAnimatedLine = [
  {
    geometry: {
      type: 'LineString',
      coordinates: [
        [121.45718572201898, 25.05304469857229],
        [120.97241403287659, 24.805222074713743],
      ],
    },
    className: 'animatedLine',
  },
  {
    geometry: {
      type: 'LineString',
      coordinates: [
        [121.45718572201898, 25.05304469857229],
        [121.2580585409265, 24.651796810894933],
      ],
    },
    className: 'animatedLine',
  },
  {
    geometry: {
      type: 'LineString',
      coordinates: [
        [121.45718572201898, 25.05304469857229],
        [121.73596377554846, 24.69547366012891],
      ],
    },
    className: 'animatedLine',
  },
  {
    geometry: {
      type: 'LineString',
      coordinates: [
        [121.45718572201898, 25.05304469857229],
        [118.3718653815786, 24.448804782854843],
      ],
    },
    className: 'animatedLine',
  },
  {
    geometry: {
      type: 'LineString',
      coordinates: [
        [120.99128833387581, 23.954824661740343],
        [121.37937248316567, 23.500181798048757],
      ],
    },
    className: 'animatedLine',
  },
  {
    geometry: {
      type: 'LineString',
      coordinates: [
        [120.2010888874598, 23.000525285413712],
        [121.59554544009566, 23.98765458734664],
      ],
    },
    className: 'animatedLine',
  },
  {
    geometry: {
      type: 'LineString',
      coordinates: [
        [120.32170613509167, 22.616777129109433],
        [121.5596166391853, 22.054837769773258],
      ],
    },
    className: 'animatedLine',
  },
];

const mappoint = [
  {
    name: '蘭嶼',
    geometry: {
      type: 'Point',
      coordinates: [121.5596166391853, 22.054837769773258],
    },
    custom: {
      arrival: 1414,
    },
    dataLabels: {
      align: 'right',
    },
  },
  {
    name: '高雄',
    geometry: {
      type: 'Point',
      coordinates: [120.32170613509167, 22.616777129109433],
    },
    custom: {
      arrival: 1696,
    },
  },
  {
    name: '花蓮',
    geometry: {
      type: 'Point',
      coordinates: [121.59554544009566, 23.98765458734664],
    },
    custom: {
      arrival: 1708,
    },
  },
  {
    name: '台南市',
    geometry: {
      type: 'Point',
      coordinates: [120.2010888874598, 23.000525285413712],
    },
    custom: {
      arrival: 1770,
    },
    dataLabels: {
      align: 'right',
    },
  },
  {
    name: '瑞穗',
    geometry: {
      type: 'Point',
      coordinates: [121.37937248316567, 23.500181798048757],
    },
    custom: {
      arrival: 1670,
    },
  },
  {
    name: '南投',
    geometry: {
      type: 'Point',
      coordinates: [120.99128833387581, 23.954824661740343],
    },
    custom: {
      arrival: 1696,
    },
  },
  {
    name: '金門',
    geometry: {
      type: 'Point',
      coordinates: [118.3718653815786, 24.448804782854843],
    },
    custom: {
      arrival: 1714,
    },
    dataLabels: {
      align: 'right',
    },
  },
  {
    name: '台北',
    geometry: {
      type: 'Point',
      coordinates: [121.45718572201898, 25.05304469857229],
    },
    custom: {
      arrival: 1714,
    },
    dataLabels: {
      align: 'right',
    },
  },
];

const districtData = [
  ['tp', '台北'],
  ['ntp', '新北'],
  ['kl', '基隆'],
  ['ty', '桃園'],
  ['hc', '新竹'],
  ['ml', '苗栗'],
  ['tc', '台中'],
  ['ch', '彰化'],
  ['yl', '雲林'],
  ['cy', '嘉義'],
  ['tn', '台南'],
  ['kh', '高雄'],
  ['pt', '屏東'],
  ['il', '宜蘭'],
  ['hl', '花蓮'],
  ['tt', '台東'],
  ['nt', '南投'],
  ['ph', '澎湖'],
  ['km', '金門'],
  ['lk', '連江'],
];

const realTimeCharge = [
  {
    totalCar: 80,
    onlineToday: 90,
    alertToday: 40,
  },
];

const monthEventChart1Data = [
  { name: '闖紅燈', y: 2 },
  { name: '超速', y: 1 },
  { name: '逆向', y: 7 },
  { name: '違停', y: 4 },
  { name: '闖禁行', y: 5 },
];

const monthEventChart2Data = [
  { name: '闖紅燈', y: 2 },
  { name: '超速', y: 5 },
  { name: '逆向', y: 11 },
  { name: '違停', y: 4 },
  { name: '闖禁行', y: 5 },
];

const chargesChartData = [
  ['tw-pt', 10, '屏東縣'],
  ['tw-tn', 11, '台南市'],
  ['tw-il', 12, '宜蘭縣'],
  ['tw-ch', 13, '嘉義縣'],
  ['tw-tt', 14, '台東縣'],
  ['tw-ph', 15, '澎湖縣'],
  ['tw-km', 16, '金門縣'],
  ['tw-lk', 17, '連江縣'],
  ['tw-tw', 18, '台北市'],
  ['tw-cs', 19, '嘉義市'],
  ['tw-th', 20, '台中市'],
  ['tw-yl', 21, '雲林縣'],
  ['tw-kh', 22, '高雄市'],
  ['tw-tp', 23, '新北市'],
  ['tw-hs', 24, '新竹市'],
  ['tw-hh', 25, '新竹縣'],
  ['tw-cl', 26, '基隆市'],
  ['tw-ml', 27, '苗栗縣'],
  ['tw-ty', 28, '桃園市'],
  ['tw-cg', 29, '彰化縣'],
  ['tw-hl', 30, '花蓮縣'],
  ['tw-nt', 31, '南投縣'],
];

const chargesTitleData = ['小型車', '中型車', '大型車'];

const chargesRecordData = [
  {
    smallCar: '5000',
    middleCar: '4347',
    bigCar: '4105',
  },
  {
    smallCar: '6218',
    middleCar: '3054',
    bigCar: '5105',
  },
  {
    smallCar: '6851',
    middleCar: '4047',
    bigCar: '4110',
  },
  {
    smallCar: '9471',
    middleCar: '3645',
    bigCar: '4812',
  },
];

const chargesRankedData = [
  {
    category: '台北',
    finish: 60,
    finishMax: 100,
  },
  {
    category: '桃園',
    finish: 25,
    finishMax: 100,
  },
  {
    category: '台中',
    finish: 75,
    finishMax: 100,
  },
  {
    category: '台南',
    finish: 50,
    finishMax: 100,
  },
];
