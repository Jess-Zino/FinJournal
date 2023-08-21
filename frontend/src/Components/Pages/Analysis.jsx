import Header from "../Header/Header"
import BubbleContain from '../Bubbles/BubbleContain'
import FadeIn from "../PageContent/Fadein"
//import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import { Doughnut } from 'react-chartjs-2';

const Analysis = () => {
 /* const data = {
    labels: ['Savings', 'Debt', 'Income', 'Expenses'],
    datasets: [
      {
        label: '# of Votes',
        data: [1, 1, 1, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };
  ChartJS.register(ArcElement, Tooltip, Legend);
*/
  return (
    
    <div>
      <Header name="Analysis" />
      <FadeIn>
      <div className="analysis">
        <BubbleContain />
     {/* <Doughnut style={{width: '100%', height: '80vh'}} data={data}/>*/}
      </div>
      </FadeIn>
    </div>
      )
}

export default Analysis