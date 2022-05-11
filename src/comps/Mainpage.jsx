import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Favorites from "./Favorites";
import Page404 from "./Page404";
import SearchPage from "./SearchPage";

export default function Mainpage() {
    return (
        <div className="mainpage">
            <Routes>
                <Route path="/" element={<Navigate replace to={"/searchPage"} />} />
                <Route path="searchPage" element={<SearchPage />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
