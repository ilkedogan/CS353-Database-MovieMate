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

export default function MainScreen() {

    const [ isLogged, setIsLogged ] = useState( false );
    const [ loggedIn, setLoggedIn ] = useState( false )
    const [ currentPage, setCurrentPage ] = useState( 0 )
    const [ loginDialog, setLoginDialog ] = useState( false )
    const [ registerDialog, setRegisterDialog ] = useState( false )


    const classes = useStyles();
    return <div style={ { background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" } }>
        { !loggedIn ?
            <MovieNavbarUser currentPage={ currentPage } setCurrentPage={ ( val ) => setCurrentPage( val ) }
                             logout={ () => {
                                 setLoggedIn( false )
                                 setCurrentPage( 0 )
                             } }
            /> :
            <MovieNavbar openLoginDialog={ () => setLoginDialog( true ) }
                         openRegisterDialog={ () => setRegisterDialog( true ) }
            /> }
        { currentPage === 0 ? <HomeScreen/> :
            currentPage === 1 ? <CartScreen/> :
                currentPage === 2 ? <ProfileScreen/> :
                    currentPage === 3 ? <SettingScreen/> : <SettingScreen/> }
        { loginDialog && <LoginDialog setLoggedIn={ ( val ) => setLoggedIn( val ) } open={ loginDialog }
                                      onOpen={ ( val ) => setLoginDialog( val ) }/> }
        { registerDialog && <RegisterDialog open={ registerDialog } onOpen={ ( val ) => setRegisterDialog( val ) }/> }
    </div>
}
