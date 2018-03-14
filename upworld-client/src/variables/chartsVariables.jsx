var React = require('react');

// // ##############################
// // // // 24 Hours Performance
// // #############################
// const hoursChart = {
//     type: "Line",
//     data: {
//         labels: ['6pm','9pm','11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
//         series: [
//             [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14]
//         ]
//     },
//     options: {
//         showPoint: false,
//         lineSmooth: true,
//         height: "260px",
//         axisX: {
//             showGrid: false,
//             showLabel: true
//         },
//         axisY: {
//             offset: 40,
//         },
//         low: 0,
//         high: 16,
//         chartPadding: {
//             right: -18
//         }
//     }
// }

// // ##############################
// // // // NASDAQ: AAPL
// // #############################
// const nasdaqChart = {
//     type: "Line",
//     data: {
//         labels: ['\'07','\'08','\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
//         series: [
//             [22.20, 34.90, 42.28, 51.93, 62.21, 80.23, 82.12, 102.50, 107.23]
//         ]
//     },
//     options: {
//         lineSmooth: false,
//         height: "260px",
//         axisY: {
//             offset: 40,
//             labelInterpolationFnc: function(value) {
//                 return '$' + value;
//             }

//         },
//         low: 10,
//         high: 110,
//         classNames: {
//             point: 'ct-point ct-green',
//             line: 'ct-line ct-green'
//         },
//         chartPadding: {
//           right: -25
//         }
//     }
// }

// ##############################
// // // Current quarter grades
// #############################
const gradesChart = {
    type: "Line",
    data: {
        labels: ['Wk 1','Wk 2','Wk 3','Wk 4', 'Wk 5', 'Wk 6', 'Wk 7', 'Wk 8', 'Wk 9','Wk 10'],
        series: [
          [67, 85, 72, 80, 86, 98, 75, 88, 86, 94],
          [68, 62, 63,  87, 75, 80, 89, 82, 94, 97],
          [73, 80, 87, 90, 92, 91, 98, 100, 94, 99]
        ]
    },
    options: {
        low: 0,
        high: 110,
        showArea: false,
        height: '235px',
        axisX: {
          showGrid: true,
        },
        lineSmooth: true,
        showLine: true,
        showPoint: true,
        chartPadding: {
            right: -25
        }
    },
    responsiveOptions: [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
    ]
}

// // ##############################
// // // // Public Preferences
// // #############################
// const publicChart = {
//     type: "Pie",
//     data: {
//         labels: ['62%', '32%', '6%'],
//         series: [62, 32, 6]
//     }
// }

// // ##############################
// // // // Views
// // #############################
// const viewsChart = {
//     type: "Bar",
//     data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         series: [
//             [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
//         ]
//     },
//     options: {
//         seriesBarDistance: 10,
//         classNames: {
//             bar: 'ct-bar ct-azure'
//         },
//         axisX: {
//             showGrid: false
//         }
//     },
//     responsiveOptions: [
//         ['screen and (max-width: 640px)', {
//             seriesBarDistance: 5,
//             axisX: {
//                 labelInterpolationFnc: function (value) {
//                     return value[0];
//                 }
//             }
//         }]
//     ]
// }

// // ##############################
// // // // Activity
// // #############################
// const activityChart = {
//     type: "Bar",
//     data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         series: [
//           [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
//           [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
//         ]
//     },
//     options: {
//         seriesBarDistance: 10,
//         axisX: {
//             showGrid: false
//         },
//         height: "245px"
//     },
//     responsiveOptions: [
//         ['screen and (max-width: 640px)', {
//           seriesBarDistance: 5,
//           axisX: {
//             labelInterpolationFnc: function (value) {
//               return value[0];
//             }
//           }
//         }]
//     ]
// }

// ##############################
// // // All charts
// #############################

const charts = [
    // {chart: {
    //     title: "NASDAQ: AAPL",
    //     category: "Line Chart with Points",
    //     chart: nasdaqChart
    // }},
    // {chart: {
    //     title: "24 Hours Performance",
    //     category: "Line Chart",
    //     chart: hoursChart
    // }},
    {chart: {
        title: "Current quarter grades",
    //    category: "Multiple Line Charts",
        chart: gradesChart,
        legend: (
            <div>
                <span>
                    <i className="fa fa-circle text-info"></i> Math
                </span><span>
                    <i className="fa fa-circle text-danger"></i> ELA (English)
                </span><span>
                    <i className="fa fa-circle text-warning"></i> Career Prep
                </span>
            </div>
        )
    }},
    // {chart: {
    //     title: "Public Preferences",
    //     category: "Pie Chart",
    //     chart: publicChart,
    //     legend: (
    //         <div>
    //             <span>
    //                 <i className="fa fa-circle text-info"></i> Apple
    //             </span><span>
    //                 <i className="fa fa-circle text-danger"></i> Samsung
    //             </span><span>
    //                 <i className="fa fa-circle text-warning"></i> Windows Phone
    //             </span>
    //         </div>
    //     )
    // }},
    // {chart: {
    //     title: "Views",
    //     category: "Bar Chart",
    //     chart: viewsChart
    // }},
    // {chart: {
    //     title: "Activity",
    //     category: "Multiple Bars Chart",
    //     chart: activityChart
    // }}
];

module.exports = {
    // nasdaqChart,
    // hoursChart,
    gradesChart,
    // publicChart,
    // viewsChart,
    // activityChart,
    charts
}
