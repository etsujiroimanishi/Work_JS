let lineCtx = document.getElementById("lineChart");
        // 線グラフの設定
        let lineConfig = {
          type: 'line',
          data: {
            
            labels: ['0', '1', '2', '3', '4', '5', '6'],
            datasets: [{
              label: '1st',
              data: [20, 35, 40, 30, 45, 35, 40],
              borderColor: 'orange',
            }, {
              label: '2nd',
              data: [20, 15, 30, 25, 30, 40, 35],
              borderColor: 'green',
            }, {
              label: '3rd',
              data: [30, 25, 10, 5, 25, 30, 20],
              borderColor: 'blue',
            }],
          },
          options: {
            scales: {
              // Y軸の最大値・最小値、目盛りの範囲などを設定する            
              y: {
                suggestedMin: 0,
                suggestedMax: 60,
                ticks: {
                  stepSize: 20,
                }
              },
            },
          },
        };
        let lineChart = new Chart(lineCtx, lineConfig);