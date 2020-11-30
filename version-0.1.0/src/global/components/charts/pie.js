import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
  labels: ["Red", "Blue", "Yellow", "Black"],
  datasets: [
    {
      data: [300, 50, 100, 400],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#000000"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#000000"]
    }
  ]
};

export default class PieExample extends React.Component{

render(){
	return (
    <div>
      <h2>Pie Example</h2>
      <Pie  data={data} />
    </div>
  );
}
}
