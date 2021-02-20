var swirlData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [40, 50, 20, 15,25, 10, 20, 30, 20, 10, 10, 5]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [4, 5, 0, 2, 1, 2, 2, 3, 1, 3, 1, 0]
        }
    ]
};
var highlightColor = {
    'A+': {
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "A+"
    },
    'A-': {
        color:"#212FDE",
        highlight: "#313BC1",
        label: "A-"
    },
    'B+': {
        color:"#086152",
        highlight: "#089079",
        label: "B+"
    },
    'B-': {
        color:"#8A0890",
        highlight: "#C612CE",
        label: "B-"
    },
    'AB+': {
        color:"#C5BC0E",
        highlight: "#F6ED4A",
        label: "AB+"
    },
    'AB-': {
        color:"#5F07B4",
        highlight: "#9C47EE",
        label: "AB-"
    },
    'O+': {
        color:"#96E7E3",
        highlight: "#D4DADA",
        label: "O+"
    },
    'O-': {
        color:"#0C0C00",
        highlight: "#3B3B26",
        label: "O-"
    }
}

var doughnutData = donutChartData2.map(function(d) {
    var returnData = highlightColor[d.BloodGroup];
    returnData.value = d.total;
    return returnData;
});
console.log({doughnutData})

// var radarData = {
//     labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.2)",
//             strokeColor: "rgba(220,220,220,1)",
//             pointColor: "rgba(220,220,220,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 90, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.2)",
//             strokeColor: "rgba(151,187,205,1)",
//             pointColor: "rgba(151,187,205,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 96, 27, 100]
//         }
//     ]
// };


var polarData = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }

];

// var barChartData = {
// 	labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.5)",
//             strokeColor: "rgba(220,220,220,0.8)",
//             highlightFill: "rgba(220,220,220,0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.5)",
//             strokeColor: "rgba(151,187,205,0.8)",
//             highlightFill: "rgba(151,187,205,0.75)",
//             highlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// }
