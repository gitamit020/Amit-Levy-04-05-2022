import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Favorites from "./Favorites";
import SearchPage from "./SearchPage";

export default function Mainpage() {

    return (
        <div className="mainpage">
            <Routes>
                <Route path="/Amit-Levy-04-05-2022" element={<Navigate replace to={"/Amit-Levy-04-05-2022/searchPage"} />} />
                <Route path="/Amit-Levy-04-05-2022/searchPage" element={<SearchPage />} />
                <Route path="/Amit-Levy-04-05-2022/favorites" element={<Favorites />} />
            </Routes>
        </div>
    );
}
