import React from 'react'
import { Line, Doughnut } from 'react-chartjs-2'
import { CategoryScale,
     Chart as ChartJS,
     Tooltip,
     Filler,
     LinearScale,
     PointElement,
     LineElement,
     ArcElement,
    Legend, 
    scales} from 'chart.js/auto'
import { getLastsevendays } from '../../lib/features';

ChartJS.register(
CategoryScale,
    Tooltip,
     Filler,
     LinearScale,
     PointElement,
     LineElement,
     ArcElement,
    Legend
);
const last7days=getLastsevendays();
const lineChartoptions=
{
    responsive:true,
    plugins:{
        legend:{
            position:false,
        },
        title:{
            display:false,
        }
    },
    scales:{
        x:{
            grid:{
                display:false
            }
        },
        y:{
            beginAtZero:true,
            grid:{
                display:false
            }
        }
    }

}
const LineChart = ({value=[]}) => {
    const data={
        labels: last7days,
        datasets:[{
            data:value,
            label:"Revenue",
            borderColor:"rgb(255, 99, 132)",
            backgroundColor:"rgba(255, 99, 132, 0.5)",
            fill:false,
        },]
}
    return (
       <Line data={data} options={lineChartoptions} />
    )
}

const DoughnutChart = ({value=[]}) => {
    const data={
        labels: last7days,
        datasets:[{
            data:value,
            label:"Total Chats vs Group Chats",
            borderColor:"rgb(255, 99, 132)",
            backgroundColor:"rgba(255, 99, 132, 0.5)",
            fill:false,
        },]
}
    return (

        <Doughnut data={data} />
    )
}

export { LineChart, DoughnutChart }
