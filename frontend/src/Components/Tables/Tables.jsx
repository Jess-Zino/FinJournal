import { useEffect, useState } from 'react';
import { Table} from 'antd';
import './Table.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const Tables = ({options}) => {
  const { Column, ColumnGroup } = Table;
  const [data, setData] = useState([]);
  
  const fetchData = (username, option) => {
    return axios.get(`http://localhost:3000/transactions/${username}/${option}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        return [];
      });
  };
  
  useEffect(() => {
    const username = localStorage.getItem('user');
    if (username) {
      fetchData(username, options)
        .then((fetchedData) => {
          setData(fetchedData);
        });
    }
  });

  return (
    <Table pagination={false}  pageSize={2}  dataSource={data} rowClassName='tableRow' style={{background:"#202125"}} key="_id">
      <ColumnGroup title="Recent Transactions" key="_id">
      <Column title="Amount" dataIndex="amount" key="amount" />
      <Column title="Category" dataIndex="selectedcategory" key="selectedcategory" />

      </ColumnGroup>

    </Table>
  );
};

export default Tables;
Tables.propTypes = {
    options: PropTypes.string
}