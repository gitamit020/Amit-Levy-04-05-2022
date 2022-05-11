import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Paper, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./comps/Header";
import Mainpage from "./comps/Mainpage";
import { INITIAL_CITY_KEY, INITIAL_CITY_NAME, SNACKBAR_DURATION } from "./consts";
import { setCurrentCity, setCurrentCityForecast, setCurrentCityWeather } from "./redux/Actions/currentCityActions";
import { clearErrorMsg, setGEOdata } from "./redux/Actions/generalActions";
import { getCurrentGEO } from "./utillities";

export default function App() {
    const { errorMsg, currentLocation } = useSelector((state) => state.generalReducer);
    const { currentCity } = useSelector((state) => state.currentCityReducer);
    const { themeMode } = useSelector((state) => state.preferencesReducer);
    const [isErrOpen, setIsErrOpen] = useState(false);
    const dispatch = useDispatch();

    const closeErrorMsg = () => {
        setTimeout(() => {
            dispatch(clearErrorMsg());
        }, SNACKBAR_DURATION);
        setIsErrOpen(false);
    };

    useEffect(() => {
        if (errorMsg.length) {
            setIsErrOpen(true);
        }
    }, [errorMsg]);
    useEffect(() => {
        getCurrentGEO()
            .then(({ longitude, latitude }) => {
                dispatch(setGEOdata(longitude, latitude));
            })
            .catch(() => {
                dispatch(setCurrentCity(INITIAL_CITY_NAME));
                dispatch(setCurrentCityForecast(INITIAL_CITY_KEY));
                dispatch(setCurrentCityWeather(INITIAL_CITY_KEY));
            });
    }, [dispatch]);

    useEffect(() => {
        if (currentLocation.length) dispatch(setCurrentCity(currentLocation));
    }, [dispatch, currentLocation]);

    useEffect(() => {
        if ("Key" in currentCity) {
            dispatch(setCurrentCityForecast(currentCity.Key));
            dispatch(setCurrentCityWeather(currentCity.Key));
        }
    }, [dispatch, currentCity]);

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode: themeMode,
            },
        });
    }, [themeMode]);

    return (
        <ThemeProvider theme={theme}>
            <Paper className="main">
                <Header />
                <Mainpage />
                <Snackbar open={isErrOpen} autoHideDuration={SNACKBAR_DURATION} onClose={closeErrorMsg} action={<CloseIcon />}>
                    <Alert sx={{ width: "300px" }} severity="error">
                        {errorMsg}
                    </Alert>
                </Snackbar>
            </Paper>
        </ThemeProvider>
    );
}
