import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../../context/Mystate';
import TableShow from '../../Components/Table/Table'; // استيراد جدول البيانات
import LineChart from '../../Components/Charts/lineCharts';
import BarChart from '../../Components/Charts/BarCharts';
import { Report } from '../../Data/Report';



const initData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
        {
            label: 'Sales',
            data: [3000, 2000, 4000, 5000],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
    ],
}
const ReportsPage = () => {
    const { DarkMode } = useContext(MyContext);
    const [filter, setFilter] = useState('All'); // لتطبيق الفلاتر
    const [chartData, setChartData] = useState(initData);
    const color = { color: DarkMode ? "white" : "black" }
    // الفلتر الخاص بالتقارير
    const handleFilter = (status) => {
        setFilter(status);
        updateChartData(status); // تأكد من أن هذه الدالة تقوم بتحديث بيانات الرسم البياني
    };

    // تأكد من أن updateChartData تعمل بشكل صحيح
    const updateChartData = (filter) => {
        if (filter === 'Completed') {
            setChartData({
                labels: ['April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Completed Sales',
                        data: [5000, 6000, 7000],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    },
                ],
            });
        } else if (filter === 'Pending') {
            setChartData({
                labels: ['July', 'August', 'September'],
                datasets: [
                    {
                        label: 'Pending Sales',
                        data: [3000, 2500, 3500],
                        borderColor: 'rgba(255, 206, 86, 1)',
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    },
                ],
            });
        } else {
            // بيانات افتراضية
            setChartData(initData);
        }
    };


    // استدعاء تحديث البيانات عند تغيير الفلتر
    const filteredReports = Report.filter(report =>
        filter === 'All' || report.status === filter
    );

    const reportsTable = filteredReports.map((report, key) => (
        <tr key={report.id}>

            <td style={color} scope="col"><input className="ref " type="checkbox" name="" id="" /></td>
            <td style={color}>{key + 1}</td>
            <td style={color}>{report.reportName}</td>
            <td style={color}>{report.date}</td>
            <td style={color}>{report.status}</td>
            <td style={color}>{report.details}</td>
            <td style={color}>
                <button className="btn btn-sm btn-info me-2">
                    <FontAwesomeIcon icon={faDownload} /> Download
                </button>
            </td>
        </tr>
    ));

    const header = [
        { key: "Report Name", name: 'Report Name' },
        { key: "Date", name: 'Date' },
        { key: "Status", name: 'Status' },
        { key: "Details", name: 'Details' },
    ];

    return (
        <div>
            {/* العنوان وأزرار الإدارة */}
            <div className="d-flex py-2 justify-content-between align-items-center">
                <h1 className="my-2">Reports</h1>
                <div>
                    <button className="btn btn-primary me-2">
                        <FontAwesomeIcon icon={faPlus} /> Add Report
                    </button>

                </div>
            </div>
            {/* قسم الفلاتر */}

            <div className="row justify-content-start mt-4">
                <div className='col-12  col-lg-auto '>
                    <button className="  btn btn-secondary" disabled>
                        <FontAwesomeIcon icon={faFilter} /> Filter
                    </button>
                </div>
                <div className='col-12 col-sm-6 col-md-3 col-lg-auto  mt-2'>

                    <div className="w-100 btn btn-outline-primary " onClick={() => { handleFilter('All'); updateChartData('All'); }}>All</div>
                </div>

                <div className='col-12 col-sm-6 col-md-3 col-lg-auto mt-2'>

                    <div className="w-100 btn btn-outline-success " onClick={() => { handleFilter('Completed'); updateChartData('Completed'); }}>Completed</div>
                </div>

                <div className='col-12 col-sm-6 col-md-3 col-lg-auto mt-2'>

                    <div className="w-100 btn btn-outline-warning " onClick={() => { handleFilter('Pending'); updateChartData('Pending'); }}>Pending</div>
                </div>

                <div className='col-12 col-sm-6 col-md-3 col-lg-auto mt-2'>

                    <div className="w-100 btn btn-outline-info " onClick={() => { handleFilter('In Progress'); updateChartData('In Progress'); }}>In Progress</div>
                </div>

            </div>

            {/* جدول التقارير */}
            <div className="border-top mt-3 overflow-x-auto">
                <TableShow usersShow={reportsTable} Header={header} />
            </div>



            {/* الرسوم البيانية */}
            <div className="row mt-4 g-2">
                <div className="col-12 col-lg-6">
                    <LineChart data={chartData} mode={DarkMode} />
                </div>
                <div className="col-12 col-lg-6">
                    <BarChart data={chartData} mode={DarkMode} />
                </div>
            </div>
        </div >
    );
};

export default ReportsPage;
