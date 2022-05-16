import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useStyles } from "../utils/AppStyles.js";
import MovieNavbar from "../components/MovieNavbar";
import Constants from "../utils/Constants";
import MovieNavbarUser from "../components/MovieNavbarUser";
import CartScreen from "./cartScreens/CartScreen";
import ProfileScreen from "./profileScreens/ProfileScreen";
import SettingScreen from "./settingScreens/SettingScreen";
import HomeScreen from "./homeSceens/HomeScreen";
import LoginDialog from "../components/LoginDialog";
import RegisterDialog from "../components/RegisterDialog";
import MovieDetailScreen from "./MovieDetailScreen";
import MovieRequests from "./MovieRequests";
import EmployeeDeletedUsers from "./EmployeeDeletedUsers";
import AdminEmployees from "./AdminEmployees";
import { Alert } from "@mui/lab";
import { Snackbar } from "@mui/material";

export default function MainScreen() {
    const [ loggedIn, setLoggedIn ] = useState( false )
    const [ currentPage, setCurrentPage ] = useState( 0 )
    const [ loginDialog, setLoginDialog ] = useState( false )
    const [ registerDialog, setRegisterDialog ] = useState( false )
    const [ loggedUserType, setLoggedUserType ] = useState( "" )
    const [ userData, setUserData ] = useState( null )
    const [ error, setError ] = useState( "" )
    const [ movieId, setMovieId ] = useState( 0 )

    async function getUser() {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL

        if ( localStorage.getItem( "userType" ) === "Customer" ) {
            url = url + "customer" + '?email=' + localStorage.getItem( "userEmail" )
        } else if ( localStorage.getItem( "userType" ) === "Admin" ) {
            url = url + "admin" + '?email=' + localStorage.getItem( "userEmail" )
        } else if ( localStorage.getItem( "userType" ) === "Employee" ) {
            url = url + "employee" + '?email=' + localStorage.getItem( "userEmail" )
        }

        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                    localStorage.clear()
                } else {
                    localStorage.setItem( "userId", data.id )
                    localStorage.setItem( "userEmail", data.email )

                    setUserData( data )
                    setLoggedIn( true )
                    setLoggedUserType( localStorage.getItem( "userType" ) )

                }
            } )
            .catch( e => {
                setError( e )
                localStorage.clear()

            } )
    }

    if ( !loggedIn && localStorage.getItem( "userEmail" ) ) {
        getUser()
    }

    const classes = useStyles();
    return <div style={ { background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" } }>
        { loggedIn ?
            <MovieNavbarUser currentPage={ currentPage }
                             loggedUserType={ loggedUserType }
                             setCurrentPage={ ( val ) => setCurrentPage( val ) }
                             logout={ () => {
                                 localStorage.clear()
                                 setLoggedIn( false )
                                 setLoggedUserType( "" )
                                 setCurrentPage( 0 )
                             } }
            /> :
            <MovieNavbar
                setCurrentPage={ ( val ) => setCurrentPage( val ) }
                openLoginDialog={ () => setLoginDialog( true ) }
                openRegisterDialog={ () => setRegisterDialog( true ) }
            /> }
        { loggedUserType === "Employee" && currentPage === 0 ?
            <MovieRequests userData={ userData } setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
            loggedUserType === "Employee" && currentPage === 1 ?
                <EmployeeDeletedUsers userData={ userData } setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
                loggedUserType === "Admin" ?
                    <AdminEmployees userData={ userData } setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
                    currentPage === 0 ?
                        <HomeScreen setMovieId={ ( val ) => setMovieId( val ) }
                                    openLoginDialog={ () => setLoginDialog( true ) } isLogged={ loggedIn }
                                    setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
                        currentPage === 1 ? <CartScreen/> :
                            currentPage === 2 ?
                                <ProfileScreen setMovieId={ ( val ) => setMovieId( val ) } userData={ userData }/> :
                                currentPage === 3 ? <SettingScreen setMovieId={ ( val ) => setMovieId( val ) }/> :
                                    currentPage === 4 ?
                                        <MovieDetailScreen userData={ userData } movieId={ movieId }
                                                           setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
                                        <SettingScreen/> }
        { loginDialog &&


        <LoginDialog setUserData={ ( val ) => setUserData( val ) } loggedUserType={ loggedUserType }
                     setLoggedUserType={ ( val ) => setLoggedUserType( val ) }
                     setLoggedIn={ ( val ) => setLoggedIn( val ) } open={ loginDialog }
                     onOpen={ ( val ) => setLoginDialog( val ) }/> }
        { registerDialog && <RegisterDialog open={ registerDialog } onOpen={ ( val ) => setRegisterDialog( val ) }/> }
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
