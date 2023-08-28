import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import PropTypes from 'prop-types';

const Graphs = ({ optio }) => {
  const [categories, setCategories] = useState([]);
  const [colours, setColours] = useState([]);
  const [transactionSummaries, setTransactionSum] = useState([]);
  const username = localStorage.getItem('user');
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const labels = categories;

  const date = new Date();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/expCategory/${username}/${optio}`)
      .then((response) => {
        const categoriesArray = response.data.map((item) => item.category);
        const coloursArray = response.data.map((item) => item.color);
        setColours(coloursArray);
        setCategories(categoriesArray);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`http://localhost:3000/transaction/${username}/${optio}/${labels.join(',')}/sum`)
      .then((response) => {
        setTransactionSum(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [optio,labels]);  // Fetch data whenever optio changes

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    barThickness: 80,
    plugins: {
      legend: false,
      title: {
        display: true,
        text: months[date.getMonth()] + " " +optio,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        barPercentage: 0.5,
      },
      y: {
        barPercentage: 0.5,
      },
    },
  };

  const data = {
    labels,
    datasets: [{
      label:"Amount",
        data: transactionSummaries,
        backgroundColor: colours,
       } ]
        
      ,
    
    
  };
  return <div><Bar style={{ width: '100%', height: '80vh' }} options={options} data={data} /></div>;
};

Graphs.propTypes = {
  optio: PropTypes.string,
};

export default Graphs;
