import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

  const DoughnutChart = () => {
    const [transactionSummaries, setTransactionSum] = useState([]);
    const username = localStorage.getItem('user');
    const options = ['Savings', 'Debt', 'Income', 'Expenses']; // Array of options
  
    const data = {
      labels: options,
      datasets: [
        {
          label: 'Amount',
          data: transactionSummaries, // Update this to an array of data values
          backgroundColor: [
            '#3598da33', // Transparent blue
            'rgba(255, 165, 0, 0.2)',  // Transparent orange
            'rgba(0, 128, 0, 0.2)',    // Transparent green
            'rgba(255, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)', // Blue border
            'rgba(255, 165, 0, 1)',  // Orange border
            'rgba(0, 128, 0, 1)',    // Green border
            'rgba(255, 0, 0, 1)' 
          ],
          borderWidth: 2,
          Legend: {
            display: true,
            position: "bottom",
          },
          },
          
        
      ],
      
    };
    const opt = { 
      width:"100%",
      hoverOffset: 10,
      responsive:true,
      maintainAspectRatio:false,
      defaultFontSize:"14px",
      size:"4000",
      height:"400",
      plugins: {
        tooltip: {
          titleFont: {
            size: 13
          },
          bodyFont: {
            size: 13
          },
       },
      legend: {
        display: true,
        responsive: true,
        position: "right",
        labels: {
          boxWidth: 30,
          padding: 10,
          font: {
            size: 16
          },
        },
        align: "center",
      },
    }}
    const fetchData = (option)=>{
        axios.post(`http://localhost:3000/transaction/${username}/sum`, { option: option })
        .then((response) => {
          setTransactionSum(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
        
      }
  
    useEffect(() => {
     fetchData(options)
  }); // Fetch data whenever username or options change
    ChartJS.register(ArcElement, Tooltip, Legend);
    return <Doughnut style={{ width: '100%'}} data={data} options={opt} width={100}/>;
  };
  
  export default DoughnutChart;
  