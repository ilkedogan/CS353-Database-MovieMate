import MovieCardMain from "../../components/MovieCardMain";
import React from 'react'
import { CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "@mui/lab";

export default function HomeScreen( props ) {
    const [ error, setError ] = React.useState( "" )
    const [ movies, setMovies ] = React.useState( [] )
    const [ loading, setLoading ] = React.useState( false )
    const [ dataFetched, setDataFetched ] = React.useState( false )

    if ( !dataFetched ) {
        setDataFetched( true )
        setLoading( true )
        getMovies( 1 )
            .then( () => setLoading( false ) )
    }

    async function getMovies( page ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "movie/home?page=" + page

        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setMovies( data )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    const allMovies = [
        {
            id: 1,
            image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
            title: "Spider-Man: No Way Home",
            director: "Jon Watts",
            productionyear: "2021",
            genre: "Action",
            price: "$3.99"
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            productionyear: "1994",
            genre: "Drama",
            price: "$3.99"
        },
        {
            id: 3,
            image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
            title: "Fight Club",
            director: "David Fincher",
            productionyear: "1999",
            genre: "Drama",
            price: "$3.99"
        },
        {
            id: 4,
            image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
            title: "The Godfather",
            director: "Francis Ford Coppola",
            productionYear: "1972",
            genre: "Crime",
            price: "$3.99"
        },
        {
            id: 5,
            image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
            title: "Inception",
            director: "Christopher Nolan",
            productionyear: "2010",
            genre: "Action",
            price: "$3.99"
        },
        {
            id: 6,
            image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
            title: "Matrix",
            director: "Lana&Lilly Wachowski",
            productionyear: "1999",
            genre: "Action",
            price: "$3.99"
        },
    ];

    const listItems = movies.map( ( m ) =>
        <MovieCardMain openLoginDialog={ () => props.openLoginDialog() } isLogged={ props.isLogged }
                       setCurrentPage={ ( val ) => props.setCurrentPage( val ) } id={ m.id } image={ m.image }
                       title={ m.title }
                       productionYear={ m.productionYear }
                       price={ m.price }
                       description={ m.description }
                       duration={ m.duration }

        /> );


    return <div>
        <div style={ { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 25 } }>
            { loading ? <CircularProgress/> : listItems }
        </div>

        <Snackbar open={ error.length > 2 }
                  autoHideDuration={ 2000 }
                  onClose={ () => setError( "" ) }
        >
            <Alert onClose={ () => setError( "" ) }
                   severity={ "error" }
            >
                { error }
            </Alert>
        </Snackbar>
    </div>
}