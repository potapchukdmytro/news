import React, { useEffect } from "react";
import MainPage from "./pages/mainPage/MainPage";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import DefaultLayout from "./components/layout/defaultLayout/DefaultLayout";
import NewsPage from "./pages/newsPage";
import UkrainePage from "./pages/ukrainePage";
import ItPage from "./pages/itPage";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAction } from "./hooks/useAction";
import UsersPage from "./pages/users/UsersPage";

const App = () => {
    const { isAuth, role } = useSelector((store) => store.auth);
    const { signInByToken } = useAction();

    useEffect(() => {
        const token = localStorage.getItem("auth");

        if (token != null) {
            signInByToken(token);
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<MainPage />} />
                <Route path="ukraine" element={<UkrainePage />} />
                <Route path="it" element={<ItPage />} />
                
                {(isAuth && role === "admin") && (
                    <Route path="users" element={<UsersPage />} />
                )}
                {!isAuth && (
                    <>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </>
                )}
                <Route path="news/:index" element={<NewsPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
