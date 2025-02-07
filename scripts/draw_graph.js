// import data from '../data/data.json' assert {type: 'json'};
// console.log(data);
// const dataPointsDefault = [
//     { x: 1, y: 0 },
//     { x: 2, y: 10 },
//     { x: 3, y: 20 },
//     { x: 4, y: 30 },
//     { x: 5, y: 40 },
//     { x: 6, y: 50 },
//     { x: 7, y: 60 }
// ];

const C_Plus_Plus = [
    { x: 2018, y: 10 },
    { x: 2019, y: 15 },
    { x: 2020, y: 7 },
    { x: 2021, y: 12 },
    { x: 2022, y: 20 },
    { x: 2024, y: 25 },
    { x: 2025, y: 18 }
];

const C_Sharp = [
    { x: 2018, y: 5 },
    { x: 2019, y: 20 },
    { x: 2020, y: 15 },
    { x: 2021, y: 8 },
    { x: 2022, y: 15 },
    { x: 2024, y: 50 },
    { x: 2025, y: 8 }
];

const Java = [
    { x: 2018, y: 56 },
    { x: 2019, y: 49 },
    { x: 2020, y: 67 },
    { x: 2021, y: 70 },
    { x: 2022, y: 30 },
    { x: 2024, y: 17 },
    { x: 2025, y: 60 }
];

const Python = [
    { x: 2018, y: 17 },
    { x: 2019, y: 48 },
    { x: 2020, y: 23 },
    { x: 2021, y: 27 },
    { x: 2022, y: 81 },
    { x: 2024, y: 31 },
    { x: 2025, y: 25 }
];

const Javascript = [
    { x: 2018, y: 48 },
    { x: 2019, y: 99 },
    { x: 2020, y: 61 },
    { x: 2021, y: 20 },
    { x: 2022, y: 7 },
    { x: 2024, y: 34 },
    { x: 2025, y: 59 }
];

let test = [
    { x: 2018, y: 15 },
    { x: 2019, y: 40 },
    { x: 2020, y: 80 },
    { x: 2021, y: 10 },
    { x: 2022, y: 25 },
    { x: 2024, y: 62 },
    // { x: 2025, y: 59 }
];

let datas = [C_Plus_Plus, C_Sharp, Python, Java, Javascript, test];
console.log("DATAS: ", datas);

let newdata;
let item;
console.log(test.length);
let date = new Date().getFullYear();
let initialDate = 2018;
console.log(date);
let deltaTime = date - initialDate;
console.log(deltaTime);
console.log("datas[0]", datas);

if (deltaTime > test.length) {
    newdata = { x: 2024, y: 0 };
    let testCopy = [...test, newdata];
    console.log("Testcopy: ", testCopy);
    test = testCopy;
}

function updateData(item, label, newdata) {
    item = test;
    console.log(item);
    test.data.labels.push(label);
    if (deltaTime > test.length) {
        newdata = { x: 2024, y: 0 };
        test.data.push(newdata);
        console.log(test);
    }
    test.update();
    return test;
}

const ctx = document.getElementById('line-graph-canvas').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [
            {
                label: 'test',
                data: test,
                borderColor: 'cyan',
                borderWidth: 2,
                fill: true,
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                pointRadius: 0,
                pointBackgroundColor: 'red',
                hidden: false,

            },
            {
                label: 'C++',
                data: C_Plus_Plus,
                borderColor: 'purple',
                borderWidth: 2,
                fill: true,
                backgroundColor: 'rgba(255, 0, 255, 0.2)',
                pointRadius: 0,
                pointBackgroundColor: 'red',
                hidden: false,

            },
            {
                label: 'C#',
                data: C_Sharp,
                borderColor: 'green',
                borderColor: 'blue',
                borderWidth: 2,
                fill: true,
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                pointRadius: 0,
                pointBackgroundColor: 'orange',
                hidden: false,
            },
            {
                label: 'Java',
                data: Java,
                borderColor: 'red',
                borderWidth: 2,
                fill: true,
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                pointRadius: 0,
                pointBackgroundColor: 'orange',
                hidden: false,
            },
            {
                label: 'Python',
                data: Python,
                borderColor: 'green',
                borderWidth: 2,
                fill: true,
                backgroundColor: 'rgba(0, 255, 0, 0.2)',
                pointRadius: 0,
                pointBackgroundColor: 'orange',
                hidden: false,
            },
            {
                label: 'Javascript',
                data: Javascript,
                borderColor: 'yellow',
                borderWidth: 2,
                fill: true,
                backgroundColor: 'rgba(255, 255, 0, 0.2)',
                pointRadius: 0,
                pointBackgroundColor: 'orange',
                hidden: false,
                decimation: false,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            decimation: {
                enabled: false,
                algorithm: 'lttb',
            },
            title: {
                display: true,
                text: 'Programming language usage over time',
                font: {
                    size: 20,
                    weight: 'bold'
                }
            }
        },
        // legend: {
        //     onClick: (e, legendItem, legend) => {
        //         e.preventDefault();
        //         // const test = legend;
        //         const index = legendItem.datasetIndex;
        //         lineChart.data.datasets[index].hidden = !lineChart.data.datasets[index].hidden;
        //         lineChart.update();
        //     }
        // },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                options: {
                    plugins: {
                        decimation: {
                            enabled: false,
                            algorithm: 'lttb',
                        },
                    },
                },
                title: {
                    display: true,
                    text: 'Years (a)',
                    font: {
                        weight: 'bold'
                    }
                },
                suggestedMin: 2018,
                suggestedMax: new Date().getFullYear()
            },
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Usage (%)',
                    font: {
                        weight: 'bold'
                    }
                }
            }
        }
    }
});

// function toggleDataset(index) {
//     lineChart.data.datasets[index].hidden = !lineChart.data.datasets[index].hidden;
//     lineChart.update();
// }

// function toggleDataset(index) {
//     lineChart.data.datasets[index].hidden = !lineChart.data.datasets[index].hidden;
//     lineChart.update();
// }

// function createButtons() {
//     const buttonContainer = document.getElementById('buttonContainer');
//     lineChart.data.datasets.forEach((dataset, index) => {
//         const button = document.createElement('button');
//         button.textContent = dataset.label;
//         button.onclick = () => toggleDataset(index);
//         buttonContainer.appendChild(button);
//     });
// }

// createButtons();