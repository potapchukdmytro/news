import axios from "axios";
import { useEffect, useState } from "react";
import http from "../../http_common";
import { Box, Typography } from "@mui/material";

const Weather = () => {
    const [data, setData] = useState({ city: "", temp: "0", wind: "0" });

    function geolocationSuccessHandler(location) {
        const lat = location.coords.latitude;
        const lon = location.coords.longitude;
        http.get(`apis/weather?latitude=${lat}&longitude=${lon}`).then(
            (response) => {
                setData(response.data);
            }
        );
    }

    function geolocationErrorHandler(error) {
        axios
            .get(
                "https://api.geoapify.com/v1/ipinfo?apiKey=5a99905f68e54e7fb672817b26689a02"
            )
            .then((response) => {
                const lat = response.data.location.latitude;
                const lon = response.data.location.longitude;
                http.get(`apis/weather?latitude=${lat}&longitude=${lon}`).then(
                    (response) => {
                        setData(response.data);
                    }
                );
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            geolocationSuccessHandler,
            geolocationErrorHandler
        );
    }, []);

    return (
        <>
            <Box><Typography fontSize={"1.3em"}>City: {data.city}</Typography></Box>
            <Box><Typography fontSize={"1.3em"}>Temperature: {data.temp}</Typography></Box>
            <Box><Typography fontSize={"1.3em"}>Wind: {data.wind} km/h</Typography></Box>
        </>
    );
};

export default Weather;
