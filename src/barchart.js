import React, { Component } from 'react'; 
import { WebView,AppRegistry } from 'react-native'; 

export default class BarChart extends Component { 

  constructor(props){
    super(props);
    this.state=({
      data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    })
  }

  render() { 

   let htmlTest = `
             

<html >

<body>

    <canvas id="myChart"></canvas>
  </div>
</div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>

    <script  type="text/javascript">
      
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    datasets: [{
      label: 'Male',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "#ff512f"
    }, {
      label: 'Female',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "#dd2476"
    }]
  },

});

    </script>

</body>
</html>

  `
 console.log(htmlTest);
    return ( 
      <WebView 
      source={{html: htmlTest}} 
      style={{marginTop: 10, height:220}} /> ); 
  } 
}



