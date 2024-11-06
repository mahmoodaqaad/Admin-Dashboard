import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Filler,
    Tooltip,
    Legend,
    Title,
    RadialLinearScale, // Register radial scales
    BarElement // Register bar element
} from 'chart.js';
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar ,M, Scatter} from 'react-chartjs-2';

// Register elements and scales
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Filler,
    Tooltip,
    Legend,
    Title,
    RadialLinearScale, // Register radial scales
    BarElement // Register bar element
);


// بيانات رسم بياني من نوع Line
const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(75, 192, 192, 1)', // لون الحدود
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // لون الخلفية
            fill: true, // ملء المنطقة تحت الخط
        },
    ],
};

// بيانات رسم بياني من نوع Bar
const barData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [ // ألوان كل عمود
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [ // ألوان حدود كل عمود
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1, // عرض الحدود
        },
    ],
};

// بيانات رسم بياني من نوع Pie
const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: '# of Votes',
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

// بيانات رسم بياني من نوع Doughnut
const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: '# of Votes',
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

// بيانات رسم بياني من نوع Radar
const radarData = {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [
        {
            label: 'Person A',
            data: [20, 10, 4, 2],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: 'Person B',
            data: [10, 20, 6, 4],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
    ],
};

// بيانات رسم بياني من نوع Polar Area
const polarAreaData = {
    labels: ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [11, 16, 7, 3, 14, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
        },
    ],
};

// بيانات رسم بياني من نوع Bubble
const bubbleData = {
    datasets: [
        {
            label: 'Product 1',
            data: [
                { x: 1, y: 4000, r: 10 },
                { x: 2, y: 3000, r: 20 },
                { x: 3, y: 2000, r: 30 },
                { x: 4, y: 2780, r: 40 },
            ],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        {
            label: 'Product 2',
            data: [
                { x: 1, y: 2400, r: 15 },
                { x: 2, y: 2210, r: 25 },
                { x: 3, y: 2290, r: 35 },
                { x: 4, y: 2000, r: 45 },
            ],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
        },
    ],
};
const mixedData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            type: 'line',
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
        },
        {
            type: 'bar',
            label: 'Expenses',
            data: [45, 39, 60, 70, 40, 50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};
const scatterData = {
    datasets: [
        {
            label: 'Scatter Dataset',
            data: [
                { x: -10, y: 0 },
                { x: 0, y: 10 },
                { x: 10, y: 5 },
                { x: 5, y: 0 },
            ],
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};
// بيانات رسم بياني من نوع Area
const areaData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(75, 192, 192, 1)', // لون الحدود
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // لون الخلفية
            fill: true, // ملء المنطقة تحت الخط
        },
    ],
};
const waveData = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // محاور الزمن
    datasets: [
        {
            label: 'Wave',
            data: [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0], // بيانات الموجة
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4, // للانحناء في الخط
        },
    ],
};



const areaData2= {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Product Sales',
            data: [4000, 3000, 2000, 2780, 1890, 2390],
            borderColor: 'rgba(75, 192, 192, 1)', // لون الحدود
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // لون الخلفية
            fill: true, // ملء المنطقة تحت الخط
            tension: 0.4, // منحنيات الخط
        },
    ],
};

// مكون العرض الرئيسي
const Charts = () => {
    return (
        <div>
            <h2>Line Chart</h2>
            <Line data={lineData} />

            <h2>Bar Chart</h2>
            <Bar data={barData} />

            <h2>Pie Chart</h2>
            <Pie data={pieData} />

            <h2>Doughnut Chart</h2>
            <Doughnut data={doughnutData} />

            <h2>Radar Chart</h2>
            <Radar data={radarData} />

            <h2>Polar Area Chart</h2>
            <PolarArea data={polarAreaData} />

            <h2>Bubble Chart</h2>
            <Bubble data={bubbleData} />

            <h2>Mixed Chart</h2>
            <Line data={mixedData} />

            <h2>Scatter Chart</h2>
            <Scatter data={scatterData} />

            <h2>Area Chart</h2>
            <Line data={areaData} options={{
                plugins: {
                    legend: {
                        display: true,
                    },
                    title: {
                        display: true,
                        text: 'Sales Over Time',
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Months',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Sales',
                        },
                    },
                },
            }} />
            <h2>Wave Chart</h2>
            <Line data={waveData} options={{
                plugins: {
                    legend: {
                        display: true,
                    },
                    title: {
                        display: true,
                        text: 'Wave Representation',
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Amplitude',
                        },
                    },
                },
            }} />

            <h2>Area Chart</h2>
            <Line
                data={areaData2}
                options={{
                    plugins: {
                        legend: {
                            display: true,
                        },
                        title: {
                            display: true,
                            text: 'Product Sales Over Time',
                        },
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Months',
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Sales',
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default Charts;
