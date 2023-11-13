'use client'
import Chart from "react-google-charts";

const Graph = () => {
    const data = [
        ["Month", "Product A Low", "Product A Open", "Product A Close", "Product A High", "Product B Low", "Product B Open", "Product B Close", "Product B High"],
        ["Jan", -28, -28, 38, 38, 25, 25, 40, 40],
        ["Feb", 38, 38, 55, 55, 40, 40, 55, 55],
        ["Mar", 55, 55, 80, 80, 60, 60, 78, 78],
        ["Apr", 50, 50, 77, 77, 70, 70, 85, 85],
        ["May", -75, -75, 22, 22, 30, 30, 50, 50],
    ];
    
    const options = {
        legend: 'none',
        colors: ['#436DC6', '#3492AC', '#FF5733', '#FFD700'],
        hAxis: {
            gridlines: {
                color: '#333', 
                minSpacing: 20,
            },
        },
        vAxis: {
            baselineColor: '#ECECEC',
            baseline: '#ECECEC',
        },
        chartArea: {
            borderColor: 'black', // Set the border color
            borderWidth: 1, // Set the border width
            left: 50,
            top: 50,
            width: '90%',
            height: '70%',
        },
    };
    return (
        <Chart
            chartType="CandlestickChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

export default Graph;