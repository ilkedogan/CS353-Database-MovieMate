import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import MovieDetailCardDetail from "./MovieDetailCardDetail";

const MovieCards = () => {

    return (
        <div style={{   background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" }}>
            <Grid container direction={"column"} >
                <Grid item xs={6} >
                    <Grid container direction={"row"} >
                        <Grid item xs={6}>
                            <MovieDetailCardDetail />
                        </Grid>
                        <Grid item xs={6} style={{
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            color: Constants.WHITE,
                            fontSize: "24px",
                            textAlign: "justify",
                            paddingRight: "5%",
                            marginTop: "5rem",
                        }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic repudiandae repellendus, eos incidunt aperiam veniam officiis inventore quo quos impedit assumenda neque totam saepe? Sunt deserunt quos, laborum, ducimus nam reiciendis rem rerum ad alias aut officia. Architecto error voluptatibus, quae, repudiandae veniam perspiciatis non a placeat ut asperiores ipsam enim, temporibus fugit unde et expedita recusandae officiis quasi corporis quo optio. Vel illum pariatur voluptas totam nobis! Veniam cumque impedit corporis quas est delectus pariatur quibusdam sapiente commodi consectetur nobis labore obcaecati sed incidunt temporibus earum nesciunt hic, adipisci qui, laboriosam minima non. Molestiae exercitationem rem consequatur quaerat excepturi cumque itaque nostrum suscipit inventore neque officiis accusamus vitae eius a esse architecto ut est consequuntur quos quo, necessitatibus culpa quod modi autem. Repudiandae porro eaque sint ullam dolore soluta eligendi placeat possimus, doloremque culpa molestias unde dolores consectetur? 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} style={{
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            color: Constants.WHITE,
                            fontSize: "24px",
                            textAlign: "justify",
                            paddingRight: "5%",

                            paddingLeft: "5%",
                            marginTop: "5rem",
                        }}>
                   Star <hr/>
                </Grid>
                <Grid item xs={3} style={{
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            color: Constants.WHITE,
                            fontSize: "24px",
                            textAlign: "justify",
                            paddingRight: "5%",
                            paddingLeft: "5%",
                            marginTop: "5rem",
                        }}>
                Reviews <hr/>
                </Grid>
            </Grid>
        </div>
    );

};

export default MovieCards;
