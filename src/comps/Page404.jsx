import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div className="Page404Div">
            <Typography variant="h4">
                We have no idea how you got here but...
                <br />
                we can help you find the weather for any city you'd like!
                <br />
                <br />
                Click here to find the weather for your city
                <br />
                ↓
                <br />
                <Link to={"/searchPage"}>Move to weather tab</Link>
            </Typography>
        </div>
    );
}
