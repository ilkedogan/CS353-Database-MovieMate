import { Grid } from "@mui/material";
import React from 'react'
import RentedMovieCard from "../../components/RentedMovieCard";
import Constants from "../../utils/Constants";

/**
 * Aslı Dinç
 * 09.05.2022
 * RentedMovies
 */
export default function RentedMovies(props) {

    const rentedMovies = [
        {
            id: 3,
            image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
            title: "Fight Club",
            director: "David Fincher",
            productionyear: "1999",
            genre: "Drama",
            price: "$3.99",
            duedate: "17.05.2022"
        },
        {
            id: 6,
            image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
            title: "Matrix",
            director: "Lana&Lilly Wachowski",
            productionyear: "1999",
            genre: "Action",
            price: "$3.99",
            duedate: "18.05.2022"
        },
        
    ];

    const listItems = rentedMovies.map((m) => 
        <RentedMovieCard id={m.id} image={m.image} title={m.title} director={m.director} productionyear={m.productionyear} genre={m.genre} price={m.price} duedate={m.duedate}></RentedMovieCard>);

        return <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 10 }}>
            {listItems}
        </div>
    </div>
}