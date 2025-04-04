// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ContentResourceManagement from './pages/ContentResourceManagement';
import UsersAndSales from './pages/UsersAndSales';
import UserActivity from './pages/UserActivity';
import MutualTransfer from './pages/MutualTransfer';
import UserFeedback from './pages/UserFeedback';
import Experts from './pages/Experts';
import TransactionRecords from './pages/TransactionRecords';
import Scheduler from './pages/Scheduler';
import AvailableSchedules from './components/AvailableSchedules';
import EditShedular from './pages/EditShedular';
import Hiring from './pages/Hiring';
import Contactus from './pages/contactus';
import AdminStatistics from './pages/AdminStatistics';
import PromoCodesPage from './pages/PromoCodesPage';

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="content p-4">
          <Routes>
            <Route path="/content-resource-management" element={<ContentResourceManagement />} />
            <Route path="/users-sales" element={<UsersAndSales />} />
            <Route path="/user-activity" element={<UserActivity />} />
            <Route path="/mutual-transfer" element={<MutualTransfer />} />
            <Route path="/user-feedback" element={<UserFeedback />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/transaction-records" element={<TransactionRecords />} />
            <Route path="/scheduler" element={<Scheduler />} />
            <Route path="/available-schedules" element={<AvailableSchedules />} /> {/* New route */}
            <Route path="/Edit-schedules" element={<EditShedular />} /> {/* New route */}
            <Route path="/Hiring-records" element={<Hiring />} /> {/* New route */}
            <Route path="/Contactus" element={<Contactus />} /> {/* New route */}
            <Route path="/AdminStatistics" element={<AdminStatistics />} /> {/* New route */}
            <Route path="/Promocodes" element={<PromoCodesPage />} /> {/* New route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
