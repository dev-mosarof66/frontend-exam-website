// Router.jsx or main router component
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
import Loader from './components/Loader'
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'));
const TeacherDashboard = lazy(() => import('./pages/Teacher/TeacherDashboard'));
const Dashboard = lazy(() => import('./pages/Teacher/Dashboard'));
const Profile = lazy(() => import('./pages/Teacher/Profile'));
const CreateExam = lazy(() => import('./pages/Teacher/CreateExam'));
const Publish = lazy(() => import('./pages/Teacher/Publish'));
const Report = lazy(() => import('./pages/Teacher/Report'));
const Settings = lazy(() => import('./pages/Teacher/Settings'));
const History = lazy(() => import('./pages/Teacher/History'));
const Notifications = lazy(() => import('./pages/Teacher/Notifications'));
function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/teacher/dashboard' element={<TeacherDashboard />} >
                        <Route path='/teacher/dashboard' element={<Dashboard />} />
                        <Route path='/teacher/dashboard/profile' element={<Profile />} />
                        <Route path='/teacher/dashboard/create-test' element={<CreateExam />} />
                        <Route path='/teacher/dashboard/publish' element={<Publish />} />
                        <Route path='/teacher/dashboard/report' element={<Report />} />
                        <Route path='/teacher/dashboard/settings' element={<Settings />} />
                        <Route path='/teacher/dashboard/history' element={<History />} />
                        <Route path='/teacher/dashboard/notifications' element={<Notifications />} />

                    </Route>
                    <Route path='/student/dashboard/:id' element={<StudentDashboard />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;
