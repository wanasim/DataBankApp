import React, { Component } from 'react'; 
import { WebView,AppRegistry } from 'react-native'; 

export default class LineChart extends Component { 

  constructor(props){
    super(props);
    this.state=({
      data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    })
  }

  render() { 

   let htmlTest = `
             
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Line Chart Test</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
  <script language="JavaScript">
  function displayLineChart() {
    var data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                label: "Prime and Fibonacci",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
            },
            
        ]
    };
    var ctx = document.getElementById("lineChart").getContext("2d");
    var options = {
      scaleShowLabels: false,
     };
    var lineChart = new Chart(ctx).Line(data, options);
  }
  </script>
</head>
<body onload="displayLineChart();">
  <div class="box">
    <canvas id="lineChart" height="200" width="400"></canvas>
  </div>
</body>
</html>
  `
    



    return ( 
      <WebView 
      source={{html: htmlTest}} 
      style={{marginTop: 20}} /> ); 
  } 
}



