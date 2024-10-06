import { Container, Typography, CardMedia, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const NewsPage = ({ news }) => {
    const { index } = useParams();
    const [selectedNews, setSelectedNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const indexNumber = parseInt(index);

        if (news.length > 0 && news[indexNumber]) {
            console.log(news[indexNumber]);
            setSelectedNews(news[indexNumber]);
            setLoading(false);
        }
    }, [news, index]);

    return (
        <Container>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Box my={4}>
                        <Typography variant="h4">
                            {selectedNews.title}
                        </Typography>
                        <Typography variant="h6">
                            {selectedNews.publishedAt}
                        </Typography>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ maxHeight: 450, display: { xs: 'none', sm: 'block' } }}
                        image={selectedNews.urlToImage}
                        alt="image"
                    />
                    <Box px={10} mt={2}>
                        <Typography fontSize={18} variant="p">
                            {selectedNews.title}
                        </Typography>
                    </Box>
                </>
            )}
        </Container>
    );
}

const mapStateToProps = (state) => ({
    news: state.news.list
});

export default connect(mapStateToProps)(NewsPage);