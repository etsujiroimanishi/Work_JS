var ctx = document.getElementById('ChartID').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',                 // 折れ線グラフを指定
      data: {
        labels: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        datasets: [{
            label: '札幌',
            data: [-3.5,-2.3,2.1,7.8,14.9,16.3,20.7,23.9,19.4,10.6,2.1,-1],
            backgroundColor: "rgba(53,155,251,0.4)"
          }, {
            label: '東京',
            data: [6.1,7.2,10.1,15.4,20.2,22.4,25.4,27.1,24.4,18.7,11.4,8.9],
            backgroundColor: "rgba(55,153,0,0.4)"
          }, {
            label: '那覇',
            data: [17.4,16.9,18.7,23,25.7,28.4,29.8,29.5,28.4,27.7,23.2,20.5],
            backgroundColor: "rgba(255,153,0,0.4)"
        }]
      },
      options: {
        title: {
          display: true,
          fontSize: 18,
          text: '各地の気温 (2016)'
        },
        responsive: true,
        scales: {
            xAxes: [{
               display: true,
               stacked: false,
               gridLines: {
                  display: false
               }
            }],
            yAxes: [{
               display: true,
               scaleLabel: {
                  display: true,
                  labelString: '温度',
                  fontFamily: 'monospace',
                  fontSize: 14
               },
               ticks: {
                  callback: function(value){
                     return value+'℃';
                  }
               }
            }]
        }
      }
    });