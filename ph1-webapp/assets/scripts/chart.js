'use strict';

let options = {
    series: [{
        name: '人数', // グラフにホバーした時に出る名前
        data: [3, 4, 5, 3, 0, 0, 4, 2, 2, 8, 8, 2, 2, 1, 7, 4, 4, 3, 3, 3, 2, 2, 6, 2, 2, 1, 1, 1, 7, 8]
            // 各グラフのデータ
    }],
    legend: // legend:出てくる文字のやつ
    {

        display: false
    },
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false // 自動で作られるハンバーガーメニューの生成を防ぐ

        }
    },


    plotOptions: {
        bar: {
            columnWidth: '40%', // グラフの太さ

            borderRadius: '3', // グラフの先っちょ丸くする
        }
    },

    dataLabels: {
        enabled: false // グラフ一本一本には数値書き込まなくていいよ
    },




    xaxis: {
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: function(value) {
            if (value != undefined) {

                let day = value.split(" ")
                return day % 2 == 1 ? "" : value;
            }
        },
            style: {
                colors: '#BDD3E1',
            }
        },
    },


    grid: {
        yaxis: {
            lines: {
                show: false // 横線いらない
            },
        },
    },

    yaxis: {
        labels: {
            formatter: function(value) {
                return value + "h";
            },
            style: {
                colors: '#BDD3E1',
            }
        },
    },

    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],


    fill: {

        colors: ["#0000FF"],
        type: 'gradient',
        gradient: {
            type: 'vertical',

            gradientToColors: ['#3ACBFC'],
        }
    },
    // 色指定

    responsive: [{
        breakpoint: 768,
        options: {

            chart: {
                height: 600,
            }
        },
    }]

};



let chart = new ApexCharts(document.querySelector("#bar-graph"), options);
chart.render();