import './App.css';
import { BrowserRouter as Router, Route, Routeres, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import WebSite from './Pages/WebSite/WebSite';
import User from './Pages/Users/User';
import AddUser from './Pages/Users/AddUser/AddUser';
import Product from './Pages/Product/Products/Product';
import Form from './Pages/Forms/Form';
import Order from './Pages/Order/Order';
import CalendarPage from './Pages/Calender/Calender';
import ChartsPage from './Pages/Charts/Charts';
import Profile from './Pages/Profile/Profile';
import History from './Pages/History/History';
import ReportsPage from './Pages/Reports/Reports';
import NotFound from './IMG/NotFonud/NotFound';

function App() {
  return (

    <div className="App">

      <Router>
        <WebSite>
          <Routes>

            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/form' element={<Form />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/Charts' element={<ChartsPage />} />
            <Route path='/user' element={<User />} />
            <Route path='/adduser' element={<AddUser />} />
            <Route path='/product' element={<Product />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/history' element={<History />} />
            <Route path='/report' element={<ReportsPage />} />
          </Routes>

        </WebSite>
      </Router>
    </div >
  );
}

export default App;
