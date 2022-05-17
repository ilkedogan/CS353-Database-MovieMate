import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { Typography } from "@mui/material";
import Constants from "../../utils/Constants";
import MovieCardMain from "../../components/MovieCardMain";
import RentedMovieCard from "../../components/RentedMovieCard";
import MovieCard from "../../components/MovieCard";

/**
 * Aslı Dinç
 * 16.05.2022
 * MoviesRecommendedToMe
 */
export default function MoviesRecommendedToMe(props) {

    const recommended = [
        {
            id: 1,
            image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
            title: "Spider-Man: No Way Home",
            director: "Jon Watts",
            productionYear: "2021",
            genre: "Action",
            price: "3.99"
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            productionYear: "1994",
            genre: "Drama",
            price: "3.99"
        },
        {
            id: 1,
            image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
            title: "Spider-Man: No Way Home",
            director: "Jon Watts",
            productionYear: "2021",
            genre: "Action",
            price: "3.99",
            expdate: "12.05.2022"
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            productionYear: "1994",
            genre: "Drama",
            price: "3.99",
            expdate: "13.05.2022"
        },
    ];

    return (
        <div style={{ background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" }}>
            <Grid container spacing={2} sx={{
                bgcolor: Constants.MOVIEMATE_BACKGROUND,
                width: "100%",
                marginTop: "10px"
            }}>
                <Grid item xs={1}>
                    <IconButton onClick={() => props.goBack()} style={{ color: Constants.WHITE }}
                        aria-label="arrowBack">
                        <ArrowBackIosOutlinedIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={10} style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                    <Typography style={{
                        color: Constants.WHITE, display: "flex", justifyContent: "center", fontFamily: Constants.ROKKIT_FONT_FAMILY,
                        fontSize: "48px",
                    }}>
                        Movies Recommended to Me
                    </Typography>
                </Grid>
                <Grid item xs={1} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center" }}>
                {recommended.map((m) =>
                    <Grid item xs={6} >
                        <MovieCard id={m.id} image={m.image} title={m.title}
                            productionYear={m.productionYear} price={m.price} />
                    </Grid>)
                }
            </Grid>
        </div>
    );
}