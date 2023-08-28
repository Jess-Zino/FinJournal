import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import PropTypes from 'prop-types';


const DoughnutChartCategory = ({options}) => {
  const fetchCategoriesByType = (username, type) => {
    axios.get(`http://localhost:3000/expCategory/${username}/${type}`)
      .then((response) => {
        const categoriesArray = response.data.map(item => item.category);
        const byColour = response.data.map(item => item.color);
        setColour(byColour)
        setCategories(categoriesArray);})
      .catch((error) => {
        console.error(error);
      });
  };
  const [categories, setCategories] = useState([]);
  const [colour, setColour] = useState()
  const [transactionSummaries, setTransactionSum] = useState([]);
  const username = localStorage.getItem('user');
  const opt = categories; // Array of options

  const data = {
    labels: opt,
    datasets: [
      {
        label: 'Amount',
        data: transactionSummaries,
        backgroundColor: 
        colour  // Transparent orange

        ,
        borderColor: colour,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    radius: '100%',
    width: '100%',
    hoverOffset: 4,
    responsive: true,
    maintainAspectRatio: false,
    defaultFontSize: '14px',
    size: '4000',
    height: '400',
    plugins: {
      tooltip: {
        titleFont: {
          size: 13,
        },
        bodyFont: {
          size: 13,
        },
      },
      legend: {
        display: true,
        responsive: true,
        position: 'right',
        labels: {
          boxWidth: 30,
          padding: 10,
          font: {
            size: 16,
          },
        },
        align: 'center',
      },
    },
  };

  const fetchData = (username, option, selectedcategory) => {
    fetchCategoriesByType(username, option);
    axios.get(`http://localhost:3000/transaction/${username}/${option}/${selectedcategory}/sum`)
      .then((response) => {
        const categorySumArray = Object.values(response.data); // Assuming the response is an array
        setTransactionSum(categorySumArray);// Assuming the response is an object with category sums
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData(username, options, opt);
  }); // Fetch data whenever username changes


  ChartJS.register(ArcElement, Tooltip, Legend);


  return <Doughnut style={{ width: '100%' }} data={data} options={chartOptions} />;

};

export default DoughnutChartCategory;
DoughnutChartCategory.propTypes = {
  options: PropTypes.string
}