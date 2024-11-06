import React, { useContext } from 'react';
import { MyContext } from '../../context/Mystate';
import BarChart from '../../Components/Charts/BarCharts';
import LineChart from '../../Components/Charts/lineCharts';
import DoughnutChart from '../../Components/Charts/DoughnutChart';
import RadarChart from '../../Components/Charts/RadarChart'; // استيراد الرسم البياني المنطقي
import PolarAreaChart from '../../Components/Charts/PolarAreaChart'; // استيراد الرسم البياني الشمسي
import WaveCharts from '../../Components/Charts/WaveCharts'; // استيراد الرسم البياني الشمسي

const ChartsPage = () => {
    const context = useContext(MyContext);
    const { DarkMode } = context;

    return (
        <div>
            <div className="title py-2"><h1 className='my-2'>Charts</h1></div>

            <div className="row">
                <div className="col-lg-6 col-12 mb-4">
                    <BarChart mode={DarkMode} />
                </div>
                <div className="col-lg-6 col-12 mb-4">
                    <LineChart mode={DarkMode} />
                </div>
                <div className="col-lg-6 col-12 mb-4">
                    <DoughnutChart mode={DarkMode} />
                </div>
                <div className="col-lg-6 col-12 mb-4">
                    <RadarChart mode={DarkMode} /> {/* إضافة الرسم البياني المنطقي */}
                </div>
                <div className="col-lg-6 col-12 mb-4">
                    <PolarAreaChart mode={DarkMode} /> {/* إضافة الرسم البياني الشمسي */}
                </div>
                <div className="col-lg-6 col-12 mb-4">
                    <WaveCharts mode={DarkMode} /> {/* إضافة الرسم البياني الشمسي */}
                </div>
                {/* يمكنك إضافة المزيد من الرسوم البيانية هنا */}
            </div>
        </div>
    );
};

export default ChartsPage;
