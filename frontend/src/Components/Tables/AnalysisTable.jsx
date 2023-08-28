import { useEffect, useState } from 'react';
import { Table} from 'antd';
import './Table.css';
import axios from 'axios';

const AnalysisTable = () => {
  const { Column, ColumnGroup } = Table;
  const [data, setData] = useState([]);
  
  const fetchData = (username) => {
    return axios.get(`http://localhost:3000/transaction/${username}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        return [];
      });
  };
  
  useEffect(() => {
    const username = localStorage.getItem('user');
    if (username) {
      fetchData(username)
        .then((fetchedData) => {
          setData(fetchedData);
        });
    }
  }, []);

  return (
    <Table pagination={{ pageSize: 7}} dataSource={data} rowClassName='tableRow' style={{background:"#202125"}} key={data._id}>
      <ColumnGroup title="All Transactions"key={data._id}>
      <Column title="Transaction" dataIndex="option" key="option" />
      <Column title="Amount" dataIndex="amount" key="amount" />
      <Column title="Category" dataIndex="selectedcategory" key="selectedcategory" />

      </ColumnGroup>

    </Table>
  );
};

export default AnalysisTable;
