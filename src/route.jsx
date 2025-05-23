// Router.jsx or main router component
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/public/Home'));
const NotFound = lazy(() => import('./pages/public/404'));
import Loader from './components/Loader'
const TeacherDashboard = lazy(() => import('./pages/Teacher/TeacherDashboard'));
const Dashboard = lazy(() => import('./pages/Teacher/Dashboard'));
const Profile = lazy(() => import('./pages/Teacher/Profile'));
const CreateExam = lazy(() => import('./pages/Teacher/CreateExam'));
const Publish = lazy(() => import('./pages/Teacher/Publish'));
const Report = lazy(() => import('./pages/Teacher/Report'));
const Settings = lazy(() => import('./pages/Teacher/Settings'));
const History = lazy(() => import('./pages/Teacher/History'));
const Notifications = lazy(() => import('./pages/Teacher/Notifications'));
const TeacherLogin = lazy(() => import('./pages/Teacher/Login'));
const TeacherSignup = lazy(() => import('./pages/Teacher/Signup'));

//student

const StudentHome = lazy(() => import('./pages/Student/Home'));
const StudentDashboard = lazy(() => import('./pages/Student/Dashboard'));
const StudentLogin = lazy(() => import('./pages/Student/Login'));
const StudentSignup = lazy(() => import('./pages/Student/Signup'));
const StudentProfile = lazy(() => import('./pages/Student/Profile'));
const StudentReport = lazy(() => import('./pages/Student/Report'));
const ParticipateExam = lazy(() => import('./pages/Student/Exam'));

function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/teacher/login' element={<TeacherLogin />} />
                    <Route path='/teacher/signup' element={<TeacherSignup />} />
                    <Route path='/teacher' element={<TeacherDashboard />} >
                        <Route path='/teacher/dashboard' element={<Dashboard />} />
                        <Route path='/teacher/dashboard/profile' element={<Profile />} />
                        <Route path='/teacher/dashboard/create-test' element={<CreateExam />} />
                        <Route path='/teacher/dashboard/publish' element={<Publish />} />
                        <Route path='/teacher/dashboard/report' element={<Report />} />
                        <Route path='/teacher/dashboard/settings' element={<Settings />} />
                        <Route path='/teacher/dashboard/history' element={<History />} />
                        <Route path='/teacher/dashboard/notifications' element={<Notifications />} />

                    </Route>
                    <Route path='/student/login' element={<StudentLogin />} />
                    <Route path='/student/signup' element={<StudentSignup />} />
                    <Route path='/student/dashboard' element={<StudentHome />} >
                        <Route index element={<StudentDashboard />} />
                        <Route path='/student/dashboard/profile' element={<StudentProfile />} />
                        <Route path='/student/dashboard/report' element={<StudentReport />} />

                    </Route>
                    <Route path='/student/exam' element={<ParticipateExam />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;
