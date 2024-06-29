import { useEffect, useState } from 'react';
import './LineChart.css';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        if (historicalData.prices) {
            historicalData.prices.forEach(item => {
                const date = new Date(item[0]);
                const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`; // MM/DD format
                dataCopy.push([formattedDate, item[1]]);
            });
            setData(dataCopy);
        }
    }, [historicalData]);

    const options = {
        backgroundColor: '#dfcfbf',
        chartArea: {
            backgroundColor: '#d0a33b'
        },
    };

    return (
        <div className="chart">
            <Chart
                chartType="LineChart"
                data={data}
                options={options}
                height="100%"
                legendToggle
            />
        </div>
    );
};

export default LineChart;
