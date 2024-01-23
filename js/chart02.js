// 棒グラフの設定
let barCtx = document.getElementById("barChart");
let barConfig = {
  type: 'bar',
  data: {
    labels: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
    datasets: [{
      data: [10, 19, 6, 8, 2, 11],
      label: 'label',
      backgroundColor: [  // それぞれの棒の色を設定(dataの数だけ)
        'orange',
        'lightblue',
        '#ffff00',
        'lightgreen',
        '#800080',
        'yellow',
      ],
      borderWidth: 1,
    }]
  },
};
let barChart = new Chart(barCtx, barConfig);