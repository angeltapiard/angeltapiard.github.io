var barData = {
    labels: ["México", "Brasil", "República Dominicana", "Argentina", "Costa Rica", "Colombia", "Chile", "Panamá", "Perú", "Cuba"],
    datasets: [
      {
        label: "Miles de millones de dólares",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#00BFFF", "#FFD700", "#800000", "#FF69B4", "#1E90FF"],
        data: [24.6, 6.7, 6.5, 5.4, 4.9, 4.5, 4.2, 3.7, 3.2, 2.9]
      }
    ]
  };
  
  new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: barData,
    options: {
      responsive: true,
      legend: { display: false },
      title: {
        display: true,
        text: 'Economía de los países latinoamericanos en 2023 (en miles de millones de dólares)'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  var pieData = [
    {
      label: "México",
      value: 38.7,
      color: "#3e95cd"
    },
    {
      label: "Brasil",
      value: 10.5,
      color: "#8e5ea2"
    },
    {
      label: "República Dominicana",
      value: 10.2,
      color: "#3cba9f"
    },
    {
      label: "Argentina",
      value: 8.6,
      color: "#e8c3b9"
    },
    {
      label: "Costa Rica",
      value: 7.7,
      color: "#c45850"
    },
    {
      label: "Colombia",
      value: 7.1,
      color: "#00BFFF"
    },
    {
      label: "Chile",
      value: 6.6,
      color: "#FFD700"
    },
    {
      label: "Panamá",
      value: 5.8,
      color: "#800000"
    },
    {
      label: "Perú",
      value: 5.0,
      color: "#FF69B4"
    },
    {
      label: "Cuba",
      value: 4.5,
      color: "#1E90FF"
    }
  ];
  
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: pieData.map(function(item){ return item.label }),
      datasets: [{
        data: pieData.map(function(item){ return item.value }),
        backgroundColor: pieData.map(function(item){ return item.color })
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Porcentaje de la economía de los países latinoamericanos en 2023'
      }
    }
  });
  