import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ToggleTemp from "./ToggleTemp";
import ToggleTheme from "./ToggleTheme";

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
      <Stack className="togglesDiv" direction="row" spacing={2} alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Light</Typography>
          <ToggleTheme />
          <Typography>Dark</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>C°</Typography>
          <ToggleTemp />
          <Typography>F°</Typography>
        </Stack>
      </Stack>
    </div>
  );
}
