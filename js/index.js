$(document).ready(function () {
  trafficVolumeChart();
  vehicleTrafficChart();
  tollBoothRecord();
  alertNumber();//中上告警資訊
  animatedMap();//中央地圖
  district();//中下區域連動-dist.
  divClick();
  //realTimeChargeChart(divId,roundTitle,data, startColor, endColor)
  realTimeChargeChart(
    'pieChart1',
    '車輛總數',
    realTimeCharge[0].totalCar,
    '#1E56F7',
    '#64E2F9'
  );//中下區域連動-chart
  realTimeChargeChart(
    'pieChart2',
    '今日上線',
    realTimeCharge[0].onlineToday,
    '#03DE96',
    '#25D4CC'
  );//中下區域連動-chart
  realTimeChargeChart(
    'pieChart3',
    '今日警報',
    realTimeCharge[0].alertToday,
    '#E84202',
    '#D2970D'
  );//中下區域連動-chart
  monthEventChart1();
  monthEventChart2();
  monthEventFlex();
  slideX();//左右滑動
  chargesChart();
  chargesTable();
  chargesRankedChart();
});

//left
// function trafficVolumeChart() {
//   // Create root element
//   const root = am5.Root.new("trafficVolumeChart");

//   // Set themes
//   root.setThemes([am5themes_Animated.new(root)]);

//   // Create chart
//   const chart = root.container.children.push(
//     am5xy.XYChart.new(root, {
//       panX: false,
//       panY: false,
//       wheelX: "none",
//       wheelY: "none",
//       layout: root.verticalLayout,
//     })
//   );

//   // Add legend
//   const legend = chart.children.unshift(
//     am5.Legend.new(root, {
//       centerX: am5.percent(100),
//       x: am5.percent(100),
//       layout: root.horizontalLayout
//     })
//   );

//   legend.labels.template.set("fill", '#ffffff');
//   legend.labels.template.set("width", 3);

//   root._logo.dispose(); //消除Logo

//   // Create axes
//   const xAxis = chart.xAxes.push(
//     am5xy.CategoryAxis.new(root, {
//       categoryField: "year",
//       renderer: am5xy.AxisRendererX.new(root, {
//         cellStartLocation: 0.3,
//         cellEndLocation: 0.7,
//       }),
//       tooltip: am5.Tooltip.new(root, {}),
//     })
//   );

//   const xRenderer = xAxis.get("renderer");
//   xRenderer.grid.template.set("forceHidden", true); //隱藏X軸
//   xRenderer.labels.template.set("fill", '#ffffff');
//   xRenderer.labels.template.set("centerX", '100%');

//   xAxis.data.setAll(trafficVolumeData);

//   const yAxis = chart.yAxes.push(
//     am5xy.ValueAxis.new(root, {
//       renderer: am5xy.AxisRendererY.new(root, {}),
//     })
//   );

//   const yRenderer = yAxis.get("renderer");
//   yRenderer.labels.template.set("forceHidden", true);
//   yRenderer.grid.template.set("stroke", "#ffffff");

//   // Add series
//   function makeSeries(name, fieldName) {
//     const series = chart.series.push(
//       am5xy.ColumnSeries.new(root, {
//         name: name,
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: fieldName,
//         categoryXField: "year",
//       })
//     );

//     series.columns.template.setAll({
//       tooltipText: "{name}, {categoryX}:{valueY}",
//       width: am5.percent(90),
//       tooltipY: 0,
//     });

//     series.data.setAll(trafficVolumeData);

//     // Make stuff animate on load
//     series.appear();

//     series.bullets.push(function () {
//       return am5.Bullet.new(root, {
//         locationY: 0,
//         sprite: am5.Label.new(root, {
//           text: "{valueY}",
//           fill: root.interfaceColors.get("alternativeText"),
//           centerY: 0,
//           centerX: am5.percent(50),
//           populateText: true,
//         }),
//       });
//     });

//     legend.data.push(series);
//   }

//   function makeLines(name, fieldName, categoryX) {
//     const linesSeries = chart.series.push(
//       am5xy.LineSeries.new(root, {
//         name: name,
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: fieldName,
//         categoryXField: categoryX,
//         tooltip: am5.Tooltip.new(root, {
//           labelText: "[bold]{name}: {valueY}",
//         }),
//       })
//     );

//     linesSeries.data.setAll(trafficVolumeData);

//     // Make stuff animate on load
//     linesSeries.appear();

//     linesSeries.strokes.template.setAll({ strokeWidth: 2 });

//     linesSeries.bullets.push(function () {
//       var graphics = am5.Circle.new(root, {
//         strokeWidth: 1,
//         radius: 5,
//         stroke: linesSeries.get("stroke"),
//         fill: linesSeries.get("stroke"),
//       });

//       graphics.adapters.add("radius", function (radius, target) {
//         let dataContext;
//         if (fieldName == "line1") {
//           dataContext = target.dataItem.dataContext.line1;
//         } else if (fieldName == "line2") {
//           dataContext = target.dataItem.dataContext.line2;
//         } else {
//           console.log("dataContext-other");
//         }
//         return dataContext;
//       });

//       return am5.Bullet.new(root, {
//         sprite: graphics,
//       });
//     });

//     legend.data.push(linesSeries);
//   }

//   makeSeries("Column1", "column1");
//   makeSeries("Column2", "column2");
//   makeLines("Line1", "line1", "year");
//   makeLines("Line2", "line2", "year");

//   chart.set(
//     "cursor",
//     am5xy.XYCursor.new(root, {
//       xAxis: xAxis,
//       yAxis: yAxis,
//     })
//   );

//   // Make stuff animate on load
//   chart.appear(1000, 100);
// }

//交通流量chart
function trafficVolumeChart() {
  Highcharts.chart('trafficVolumeChart', {
    chart: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    legend: {
      floating: true,
      align: 'right',
      verticalAlign: 'top',
      x: 0,
      y: 0,
      itemStyle: {
        color: '#ffffff',
      },
    },
    xAxis: {
      categories: xCategoriesData,
      labels: {
        style: {
          color: '#ffffff',
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
      gridLineColor: '#ffffff',
    },
    tooltip: {
      valueSuffix: ' million liters',
    },
    series: [
      {
        type: 'column',
        name: 'column1',
        data: column1Data,
      },
      {
        type: 'column',
        name: 'column2',
        data: column2Data,
      },
      {
        type: 'spline',
        name: 'line1',
        data: line1Data,
        marker: {
          symbol: 'circle',
        },
      },
      {
        type: 'spline',
        name: 'line2',
        data: line2Data,
        marker: {
          symbol: 'circle',
        },
      },
    ],
  });
}

//交通工具流量chart
function vehicleTrafficChart() {
  Highcharts.chart('vehicleTrafficChart', {
    chart: {
      type: 'areaspline',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    credits: {
      enabled: false,
    },
    title: null,
    legend: {
      floating: true,
      align: 'right',
      verticalAlign: 'top',
      x: 0,
      y: 0,
      itemStyle: {
        color: '#ffffff',
      },
    },
    xAxis: {
      type: 'category',
      labels: {
        format: '{text} 月',
        style: {
          color: '#ffffff',
        },
      },
    },
    yAxis: {
      title: null,
      labels: {
        style: {
          color: '#ffffff',
        },
      },
    },
    tooltip: {
      shared: true,
      headerFormat: '<b>Month {point.x}</b><br>',
      valueSuffix: ' 輛', //後綴
    },
    plotOptions: {
      series: {
        pointStart: 1,
      },
    },
    series: [
      {
        name: '小型車',
        data: smallCarTrafficData,
        lineColor: 'rgba(10, 193, 199, 1)',
        fillColor: {
          linearGradient: {
            x1: 1, //漸變的起始水平位置(0左,1右)
            x2: 1, //漸變的結束水平位置(0左,1右)
            y1: 0, //漸變的開始垂直位置(0頂,1底)
            y2: 1, //漸變的開始垂直位置(0頂,1底)
          },
          stops: [
            [0, 'rgba(10, 193, 199, 0.15)'], //開始
            [1, 'rgba(10, 193, 199, 0)'], //結束
          ],
        },
        marker: {
          symbol: 'circle',
          fillColor: 'rgba(10, 193, 199, 1)',
        },
      },
      {
        name: '中型車',
        data: middleCarTrafficData,
        lineColor: 'rgba(255, 0, 0, 1)',
        fillColor: {
          linearGradient: {
            x1: 1, //漸變的起始水平位置(0左,1右)
            x2: 1, //漸變的結束水平位置(0左,1右)
            y1: 0, //漸變的開始垂直位置(0頂,1底)
            y2: 1, //漸變的開始垂直位置(0頂,1底)
          },
          stops: [
            [0, 'rgba(255, 0, 0, 0.15)'], //開始
            [1, 'rgba(255, 0, 0, 0)'], //結束
          ],
        },
        marker: {
          symbol: 'circle',
          fillColor: 'rgba(255, 0, 0, 1)',
        },
      },
      {
        name: '大型車',
        data: bigCarTrafficData,
        lineColor: 'rgba(0, 255, 0, 1)',
        fillColor: {
          linearGradient: {
            x1: 1, //漸變的起始水平位置(0左,1右)
            x2: 1, //漸變的結束水平位置(0左,1右)
            y1: 0, //漸變的開始垂直位置(0頂,1底)
            y2: 1, //漸變的開始垂直位置(0頂,1底)
          },
          stops: [
            [0, 'rgba(0, 255, 0, 0.15)'], //開始
            [1, 'rgba(0, 255, 0, 0)'], //結束
          ],
        },
        marker: {
          symbol: 'circle',
          fillColor: 'rgba(0, 255, 0, 1)',
        },
      },
    ],
  });
}

//動態長出record、塞入資料
function tollBoothRecord() {
  for (let i = 0; i < tollBoothRecordData.length - 1; i++) {
    $('.tollBoothContent > .tollBoothRecord')
      .eq(0)
      .clone()
      .appendTo($('.tollBoothContent'));
  }
  for (let j = 0; j < tollBoothRecordData.length; j++) {
    $('.modeTransport').eq(j).html(tollBoothRecordData[j].modeTransport);
    $('.tollBoothMiddle > .cellText')
      .eq(j)
      .html(tollBoothRecordData[j].tollBoothMiddle);
    $('.tollBoothLeft  > .cellText')
      .eq(j)
      .html(tollBoothRecordData[j].tollBoothLeft);
  }
}

//middle
//告警
function alertNumber() {
  for (let i = 0; i < alertData.length; i++) {
    $(`.card${i + 1}`)
      .children()
      .eq(1)
      .children()
      .eq(0)
      .html(alertData[i].mainNum);
    const cardNum = $(`.card${i + 1}`)
      .children()
      .eq(1)
      .children()
      .eq(1)
      .children();

    if (i == 1) {
      cardNum.eq(0).html(alertData[i].state ? alertData[i].state : '');
      cardNum
        .eq(1)
        .html(
          alertData[i].averageSpeed
            ? `平均車速 ${alertData[i].averageSpeed} KM/H`
            : `平均車速 0 KM/H`
        );
    } else {
      let dayRatio = '';
      let weekRatio = '';
      // console.log("alertData[i].dayRatio =", alertData[i].dayRatio)
      if (!alertData[i].dayRatio) {
        // console.log("alertData[i].dayRatio =", alertData[i].dayRatio)
        dayRatio = '';
      } else if (alertData[i].dayRatio >= 0) {
        dayRatio = `日環比：+${alertData[i].dayRatio}%`;
      } else {
        dayRatio = `日環比：${alertData[i].dayRatio}%`;
      }

      if (!alertData[i].weekRatio) {
        weekRatio = '';
      } else if (alertData[i].weekRatio >= 0) {
        weekRatio = `週環比：+${alertData[i].weekRatio}%`;
      } else {
        weekRatio = `週環比：${alertData[i].weekRatio}%`;
      }

      cardNum.eq(0).html(dayRatio);
      cardNum.eq(1).html(weekRatio);
    }
  }
}

//map
async function animatedMap() {
  const topology = await fetch(
    'https://code.highcharts.com/mapdata/countries/tw/tw-all.topo.json'
  ).then((response) => response.json());

  // Initialize the chart
  Highcharts.mapChart('TWMap', {
    chart: {
      map: topology,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      height: '75%'
    },
    credits: {
      enabled: false,
    },
    title: null,
    legend: {
      enabled: false,
    },
    tooltip: {
      useHTML: true,
      headerFormat: '',
      pointFormat: '<b>{point.name}：</b>{point.custom.arrival}',
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom"
      },
      enableButtons: false
    },
    series: [
      {
        type: 'map',
        name: 'Countries',
        data: mainMap,
        color: 'rgba(7,21,57,0.5)',
        borderColor: '#0177ff',
        enableMouseTracking: false,
      },
      {
        type: 'mapline',
        data: mapLine,
        lineWidth: 1,
        enableMouseTracking: false,
        
        // opacity: 0.2,
      },
      {
        type: 'mapline',
        data: mapAnimatedLine,
        lineWidth: 1,
        enableMouseTracking: false,
        color: '#ff0000'
        // color: {
        //   linearGradient: {
        //     x1: 0, //漸變的起始水平位置(0左,1右)
        //     x2: 0, //漸變的結束水平位置(0左,1右)
        //     y1: 0, //漸變的開始垂直位置(0頂,1底)
        //     y2: 1, //漸變的開始垂直位置(0頂,1底)
        //   },
        //   stops: [
        //     [0, "#58B3CC"],//開始
        //     [1, "#F58158"],//結束
        //   ],
        // },
        // opacity: 0.2,
      },
      {
        type: 'mappoint',
        color: '#333',
        dataLabels: {
          format:
            '<b>{point.name}</b><br><span style="font-weight: normal; opacity: 0.5">{point.custom.arrival}</span>',
          align: 'left',
          verticalAlign: 'middle',
        },
        data: mappoint,
        enableMouseTracking: true,
      },
    ],
  });
}

//各地區
function district() {
  let count = 2; //三個為一組
  let row = 0; //給areaDate個別名稱以區分該塞在哪一row

  for (let i = 0; i < districtData.length; i++) {
    if (count == 2) {
      $('.areaData0')
        .eq(0)
        .clone()
        .removeClass('areaData0')
        .addClass(`areaData${row + 1} d-flex`)
        .empty()
        .appendTo($('.areaContent'));

      $('#tw')
        .eq(0)
        .clone()
        .removeClass('twData')
        .addClass('distData')
        .removeAttr('id')
        .attr('id', districtData[i][0])
        .appendTo($(`.areaData${row + 1}`));

      count = 0;
      row++;
    } else {
      $('#tw')
        .eq(0)
        .clone()
        .removeClass('twData')
        .addClass('distData')
        .removeAttr('id')
        .attr('id', districtData[i][0])
        .appendTo($(`.areaData${row}`));

      count++;
    }

    $(`#${districtData[i][0]}`).html(districtData[i][1]);
  }
}

//點擊觸發
function divClick() {
  $('.twData').click(function (e) {
    // console.log("e ", e)
    const clickId = e.target.id;
    console.log('clickId ', clickId);

    const areaContentChildren = $('.areaContent').children();
    for (let i = 0; i < areaContentChildren.length; i++) {
      const areaChildChild = areaContentChildren.eq(i).children();
      for (let j = 0; j < areaChildChild.length; j++) {
        areaChildChild.eq(j).removeClass('active');
      }
    }

    $(`#${clickId}`).addClass('active');
  });

  $('.distData').click(function (e) {
    // console.log("e ", e)
    const clickId = e.target.id;
    console.log('clickId ', clickId);

    const areaContentChildren = $('.areaContent').children();
    for (let i = 0; i < areaContentChildren.length; i++) {
      const areaChildChild = areaContentChildren.eq(i).children();
      for (let j = 0; j < areaChildChild.length; j++) {
        areaChildChild.eq(j).removeClass('active');
      }
    }

    $(`#${clickId}`).addClass('active');
  });
}

//實時收費roundChart (todo tooltip未調整)
function realTimeChargeChart(divId, roundTitle, data, startColor, endColor) {
  Highcharts.chart(divId, {
    chart: {
      type: 'solidgauge',
      // height: "100%",
      className: 'roundProgressBar',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: roundTitle,
      style: {
        color: '#ffffff',
      },
      floating: true,
      verticalAlign: 'middle',
    },

    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '16px',
        color: '#ffffff',
      },
      valueSuffix: '%',
      pointFormat:
        '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
      // positioner: function (labelWidth) {
      //   return {
      //     x: (this.chart.chartWidth - labelWidth) / 2,
      //     y: (this.chart.plotHeight / 2) + 15
      //   };
      // }
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: null,
      // background: [//下層圓盤的參數
      //   {
      //     // Track for Move
      //     outerRadius: "100%",
      //     innerRadius: "78%",
      //     backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
      //       .setOpacity(0)
      //       .get(),
      //     borderWidth: 0,
      //   },
      // ],
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false,
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true,
      },
    },

    series: [
      {
        name: 'Move',
        data: [
          {
            color: {
              linearGradient: {
                x1: 0, //漸變的起始水平位置(0左,1右)
                x2: 1, //漸變的結束水平位置(0左,1右)
                y1: 0, //漸變的開始垂直位置(0頂,1底)
                y2: 0, //漸變的開始垂直位置(0頂,1底)
              },
              stops: [
                [0, startColor], //開始
                [1, endColor], //結束
              ],
            },
            radius: '100%',
            innerRadius: '78%',
            y: data, //進度條的值
          },
        ],
      },
    ],
  });
}

//right
//本月發生事件chart1
function monthEventChart1() {
  Highcharts.chart('monthEventChart1', {
    chart: {
      polar: true,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: 'category',
      tickmarkPlacement: 'on',
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '1rem',
        },
      },
    },
    yAxis: {
      min: 0,
      labels: {
        style: {
          color: '#ffffff',
        },
      },
    },

    series: [
      {
        type: 'area',
        data: monthEventChart1Data,
      },
    ],
  });

  const highchartsRoot = $(
    '#monthEventChart1 > .highcharts-container > .highcharts-root'
  );
  const hpbHeight = highchartsRoot
    .find('.highcharts-plot-background')
    .attr('height');

  $(
    "#monthEventChart1 > .highcharts-container > .highcharts-root > g > text[text-anchor='middle']"
  ).attr('y', Number(hpbHeight) + 20);
}

//本月發生事件chart2
function monthEventChart2() {
  Highcharts.chart('monthEventChart2', {
    chart: {
      polar: true,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: 'category',
      tickmarkPlacement: 'on',
      labels: {
        style: {
          color: '#ffffff',
          fontSize: '1rem',
        },
      },
    },
    yAxis: {
      min: 0,
      labels: {
        style: {
          color: '#ffffff',
        },
      },
    },

    series: [
      {
        type: 'area',
        data: monthEventChart2Data,
      },
    ],
  });

  const highchartsRoot = $(
    '#monthEventChart2 > .highcharts-container > .highcharts-root'
  );
  const hpbHeight = highchartsRoot
    .find('.highcharts-plot-background')
    .attr('height');

  $(
    "#monthEventChart2 > .highcharts-container > .highcharts-root > g > text[text-anchor='middle']"
  ).attr('y', Number(hpbHeight) + 20);
}

//動態計算兩個 monthEventChart 並聯的寬度
function monthEventFlex() {
  // console.log("$('.monthEventItem > .highcharts-container ') =", $('.monthEventItem > .highcharts-container '))
  const monthEventItem = $('.monthEventItem > .highcharts-container ');
  let itemWidth = 0;
  for (let i = 0; i < monthEventItem.length; i++) {
    // console.log("monthEventItem.eq(i).css('width') =", Number(monthEventItem.eq(i).css('width').replace('px', '')))
    itemWidth += Number(monthEventItem.eq(i).css('width').replace('px', ''));
  }
  // console.log("itemWidth =", itemWidth)
  $('.slide').css('width', itemWidth);
}

//左右滑動
function slideX() {
  setInterval(function () {
    if ($('.slide').css('left') >= '0px') {
      // console.log("to left");
      // debugger
      $('.slide').animate({ left: '-500', right: '250' });
    } else {
      // console.log("to right");
      // debugger
      $('.slide').animate({ left: '0', right: '0' });
    }
  }, 3000);
}

//收費站收費量map
async function chargesChart() {
  const topology = await fetch(
    'https://code.highcharts.com/mapdata/countries/tw/tw-all.topo.json'
  ).then((response) => response.json());

  let dataColor = [];
  chargesChartData.forEach((e, i) => {
    // console.log("e =", e);
    if (e[1] <= 15) {
      dataColor.push(e.concat('#0000ff'));
    } else if (e[1] > 15 && e[1] <= 25) {
      dataColor.push(e.concat('#00ff00'));
    } else {
      dataColor.push(e.concat('#ff0000'));
    }
  });

  Highcharts.mapChart('tollBoothChargesChart', {
    chart: {
      map: topology,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },

    title: null,

    legend: {
      enabled: false,
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        type: 'map',
        name: 'Countries',
        data: chargesChartData,
        color: 'rgba(124, 181, 236, 0.3)',
        borderColor: 'rgba(204, 204, 204, 0.3)',
        enableMouseTracking: false,
      },
      {
        type: 'mapbubble',
        /* color: '#FF0088', */
        keys: ['hc-key', 'z', 'id', 'color'],
        joinBy: 'hc-key',
        data: dataColor,
        name: 'Population 2010',
        marker: {
          fillOpacity: 0.4,
          lineWidth: 0,
        },
        minSize: 4,
        maxSize: '12%',
        tooltip: {
          headerFormat: '',
          pointFormat: '{point.id}: {point.z} 千',
        },
      },
    ],
  });
}

//收費站收費量table (動態新增欄位 + 塞資料)
function chargesTable() {
  for (let i = 0; i < chargesRecordData.length; i++) {
    $('.tollBoothChargesContent > .chargeTable > .tableTitle')
      .eq(0)
      .clone()
      .removeClass('tableTitle blue')
      .addClass(`tableNum${i} num`)
      .appendTo($('.chargeTable'));

    $(`.tableNum${i}`).children().eq(0).html(chargesRecordData[i].smallCar);
    $(`.tableNum${i}`).children().eq(1).html(chargesRecordData[i].middleCar);
    $(`.tableNum${i}`).children().eq(2).html(chargesRecordData[i].bigCar);
  }

  for (let i = 0; i < chargesTitleData.length; i++) {
    $('.tollBoothChargesContent > .chargeTable > .tableTitle')
      .children()
      .eq(i)
      .html(chargesTitleData[i]);
  }
}

//收費站收費排行chart
function chargesRankedChart() {
  const root = am5.Root.new('chargesRankedChart');

  // Set themes
  root.setThemes([am5themes_Animated.new(root)]);

  // Create chart
  const chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: 'none',
      wheelY: 'none',
      layout: root.horizontalLayout,
      arrangeTooltips: false,
    })
  );

  root._logo.dispose();

  // Create axes
  const yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: 'category',
      renderer: am5xy.AxisRendererY.new(root, {
        inversed: true,
        cellStartLocation: 0.1,
        cellEndLocation: 0.9,
      }),
    })
  );

  const yRenderer = yAxis.get('renderer');
  yRenderer.grid.template.set('forceHidden', true);
  yRenderer.labels.template.set('fill', '#ffffff');

  yAxis.data.setAll(chargesRankedData);

  const xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      calculateTotals: true,
      min: 0,
      max: 100,
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 80,
      }),
    })
  );

  const xRenderer = xAxis.get('renderer');
  xRenderer.grid.template.set('forceHidden', true);
  xRenderer.labels.template.set('forceHidden', true);

  // Add series
  function createSeries(field, name, color, icon, inlegend) {
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        name: name,
        valueXField: field,
        categoryYField: 'category',
        sequencedInterpolation: true,
        fill: color,
        stroke: color,
        clustered: false,
      })
    );

    series.columns.template.setAll({
      height: 40,
      fillOpacity: 0,
      strokeOpacity: 0,
    });

    if (icon) {
      series.columns.template.set(
        'fillPattern',
        am5.PathPattern.new(root, {
          color: color,
          repetition: 'repeat-x',
          width: 30,
          height: 40,
          fillOpacity: 0,
          svgPath: icon,
        })
      );
    }

    series.data.setAll(chargesRankedData);
    series.appear();

    return series;
  }

  const finishColor = am5.color('#0ac1c7');
  const placeholderColor = am5.color(0xeeeeee);

  const finishIcon =
    'M 22.303 16.044 L 21.286 19.024 c -0.142 0.946 0.828 0.946 1.278 0.024 l 1.017 -3.028 h 0.401 l -2.833 7.969 H 23.462 v 4.686 c -0.141 1.584 1.68 1.797 1.491 0.024 V 24.062 h 1.018 v 4.613 c -0.143 1.845 1.598 1.736 1.466 0.142 V 24.015 h 2.051 l -2.554 -7.924 h 0.55 l 1.011 2.909 c 0.3 1 1.395 0.994 1.253 -0.047 l -1.135 -2.933 c -0.642 -1.351 -0.592 -2.001 -2.72 -1.987 h -0.97 C 23.415 14.033 22.847 14.364 22.327 15.949 z M 26.974 11.633 c -0.057 -0.919 -0.416 -1.307 -1.551 -1.393 c -0.891 0.057 -1.451 0.632 -1.422 1.494 c 0.057 0.934 0.718 1.495 1.552 1.495 C 26.529 13.156 26.96 12.567 26.989 11.648 z';

  createSeries('finishMax', 'female', placeholderColor, finishIcon, false);
  createSeries('finish', 'female', finishColor, finishIcon, true);

  // Make stuff animate on load
  chart.appear(1000, 100); //appear(持續時間-毫秒, 延遲時間-毫秒)
}
