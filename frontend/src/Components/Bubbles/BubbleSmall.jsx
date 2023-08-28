import './bubbles.css'
import { Statistic } from 'antd'
import CountUp from 'react-countup';
import axios from 'axios';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types'
const BubbleSmall = ({content, prefix,item}) => {
  const [transactionSummaries, setTransactionSum] = useState([]);
  const username = localStorage.getItem('user')
const option= item
  useEffect(() => {
    axios.get(`http://localhost:3000/transaction/${username}/${option}/sum`)
      .then((response) => {
        setTransactionSum(response.data.totalAmount);
        console.log(response.data.totalAmount)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username,option]);
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (

    <div className='bubble small'><Statistic value={transactionSummaries} valueStyle={{color:"white"}} title={content}  prefix={prefix} precision={2} formatter={formatter} /></div>
  )
}

export default BubbleSmall
BubbleSmall.propTypes={
  content:PropTypes.element.isRequired, 
  prefix:PropTypes.element.isRequired,
  item:PropTypes.string.isRequired, //required
}
