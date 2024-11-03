import React from "react";
import Navbar from "../../navbar";
import { Outlet } from "react-router-dom";
import { Container, Box, Grid, useTheme } from "@mui/material";
import Loader from "../../loader";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import RightPanel from "../../rightPanel/RightPanel";

const DefaultLayout = ({ load }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(load);
    }, []);

    const theme = useTheme();

    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item xs={10}>
                    <Container sx={{ pt: 3 }} fixed maxWidth="xl">
                        {!loading ? <Outlet /> : <Loader />}
                    </Container>
                </Grid>
                <Grid item xs={2} sx={{mt: 1}}>
                    <Box
                        sx={{
                            display: "inline-block",
                            height: "100%",
                            width: "100%",
                            backgroundColor: theme.palette.secondary.main,
                        }}
                    >
                        <RightPanel />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

const mapStateToProps = (state) => ({
    load: state.news.load,
});

export default connect(mapStateToProps)(DefaultLayout);
