import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const links = [
        <Link key={1} to={"/searchPage"}>
            Look for a city!
        </Link>,
        <Link key={2} to={"/favorites"}>
            Favorites
        </Link>,
    ];

    return (
        <div className="header">
            <div className="logoDiv">logo</div>
            <div className="linksDiv">{links.map((link) => link)}</div>
        </div>
    );
}
