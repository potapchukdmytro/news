import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import { loadList } from "../../store/reducers/newsReducer/actions"
import { connect } from "react-redux";

const MainPage = ({news, loadList}) => {
    useEffect(() => {
        loadList();
        const now = new Date().toDateString();

        const nowLocal = localStorage.getItem('now');
        if(nowLocal != null) {
            if(nowLocal != now) {
                localStorage.setItem('now', JSON.stringify(now));
            }
        }
    }, [loadList]);

    return (
        <Grid sx={{ mt: 2 }} maxWidth={"xl"} container spacing={4}>
            {news.map((item, index) => (
                <Grid sx={{ mx: "auto" }} key={item.publishedAt} item xs={6} md={6}>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                                {item.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {item.publishedAt}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {item.description}
                            </Typography>
                            <Link to={`news/${index}`}>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            </Link>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                            image={item.urlToImage}
                            alt="image"
                        />
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    news: state.news.list,
    load: state.news.load
});

const mapDispatchToProps = {
    loadList  
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);