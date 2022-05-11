import { Switch } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DARK_MODE } from "../consts";
import { toggleThemeMode } from "../redux/Actions/preferencesActions";

export default function ToggleTheme() {
  const { themeMode } = useSelector((state) => state.preferencesReducer);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  return <Switch checked={themeMode === DARK_MODE} onChange={toggleTheme} />;
}
