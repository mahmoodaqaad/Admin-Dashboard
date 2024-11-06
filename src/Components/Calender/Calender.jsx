// CalendarForm.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calender.css'; // يمكنك إضافة بعض التنسيقات لجعل النموذج جانبي

const CalendarForm = () => {
    const [selectedDate, setSelectedDate] = useState(null); // لتخزين التاريخ المختار
    const [showForm, setShowForm] = useState(false); // لعرض النموذج الجانبي أو إخفائه
    const [task, setTask] = useState(''); // لتخزين المهمة المدخلة

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowForm(true); // عرض النموذج عند اختيار تاريخ
    };

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        console.log(`Task: ${task} on ${selectedDate}`);
        setTask('');
        setShowForm(false); // إخفاء النموذج بعد الإرسال
    };

    return (
        <div className="calendar-container d-flex mt-5">
            <Calendar onChange={handleDateChange} />

            {showForm && (
                <div className="side-form">
            <h3>Selected Date: {selectedDate.toDateString()}</h3>
            <form onSubmit={handleTaskSubmit}>
                <label>
                    Task:
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
        </div >
    );
};

export default CalendarForm;
