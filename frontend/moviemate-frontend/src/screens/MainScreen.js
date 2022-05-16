import Grid from "@mui/material/Grid";
import { useState } from "react";
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

export default function MainScreen() {
    const [ loggedIn, setLoggedIn ] = useState( false )
    const [ currentPage, setCurrentPage ] = useState( 0 )
    const [ loginDialog, setLoginDialog ] = useState( false )
    const [ registerDialog, setRegisterDialog ] = useState( false )
    const [ loggedUserType, setLoggedUserType ] = useState( "" )
    const [ userData, setUserData ] = useState( null )

    const classes = useStyles();
    return <div style={ { background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" } }>
        { loggedIn ?
            <MovieNavbarUser currentPage={ currentPage }
                             loggedUserType={ loggedUserType }
                             setCurrentPage={ ( val ) => setCurrentPage( val ) }
                             logout={ () => {
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
            <MovieRequests setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
            loggedUserType === "Employee" && currentPage === 1 ?
                <EmployeeDeletedUsers setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
                loggedUserType === "Admin" ? <AdminEmployees setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
                    currentPage === 0 ?
                        <HomeScreen openLoginDialog={ () => setLoginDialog( true ) } isLogged={ loggedIn }
                                    setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
                        currentPage === 1 ? <CartScreen/> :
                            currentPage === 2 ? <ProfileScreen userData={ userData }/> :
                                currentPage === 3 ? <SettingScreen/> :
                                    currentPage === 4 ?
                                        <MovieDetailScreen setCurrentPage={ ( val ) => setCurrentPage( val ) }/> :
                                        <SettingScreen/> }
        { loginDialog &&


        <LoginDialog setUserData={ ( val ) => setUserData( val ) } loggedUserType={ loggedUserType }
                     setLoggedUserType={ ( val ) => setLoggedUserType( val ) }
                     setLoggedIn={ ( val ) => setLoggedIn( val ) } open={ loginDialog }
                     onOpen={ ( val ) => setLoginDialog( val ) }/> }
        { registerDialog && <RegisterDialog open={ registerDialog } onOpen={ ( val ) => setRegisterDialog( val ) }/> }
    </div>
}
