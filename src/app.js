import React from 'react';
import MainPage from './pages/mainPage/MainPage';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import DefaultLayout from './components/layout/defaultLayout/DefaultLayout';
import NewsPage from './pages/newsPage';
import UkrainePage from './pages/ukrainePage';
import ItPage from './pages/itPage';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authUser } from './store/reducers/userReducer/actions';

const App = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    if(token != null) {
        dispatch(authUser(JSON.parse(token)));
    }

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<MainPage />} />
                <Route path="ukraine" element={<UkrainePage />} />
                <Route path="it" element={<ItPage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="news/:index" element={<NewsPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;