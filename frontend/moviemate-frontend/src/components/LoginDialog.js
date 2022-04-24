import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import { ClosedCaption, CloseRounded } from "@mui/icons-material";


export default function LoginDialog( props ) {
    return <Dialog open={ props.open } onClose={ () => props.onOpen( false ) } fullWidth maxWidth={ "md" }>
        <Grid container style={ {
            display: "flex",
            justifyContent: "center",
            background: Constants.MOVIEMATE_BACKGROUND,
            color: Constants.WHITE,
            padding: 40
        } }>
            <Grid container>
                <Grid item xs={ 2 }>
                    <Button onClick={ () => {
                        props.onOpen( false )
                    } }>
                        <CloseRounded style={ { color: Constants.MOVIEMATE_RED } }/>
                    </Button>
                </Grid>
                <Grid item xs={ 3 }>

                </Grid>
                <Grid item xs={ 2 }
                      style={ { display: "flex", justifyContent: "center", paddingBottom: 40, fontSize: 30 } }>
                    Login
                </Grid>
                <Grid item xs={ 5 }>

                </Grid>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center" } }>
                <LoginRegisterTextField label={ "Email" } isPassword={ false }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center" } }>
                <LoginRegisterTextField label={ "Password" } isPassword={ true }/>

            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center" } }>
                <Typography onClick={ () => {
                } } style={ { cursor: "pointer", color: "#707070" } }>
                    Forget Password
                </Typography>

            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "40px" } }>
                <Button style={ { background: Constants.MOVIEMATE_GREEN, width: "8vw", borderRadius: "10px" } }
                        onClick={ () => {
                            props.setLoggedIn( true )
                            props.onOpen( false )
                        } }>
                    <Typography style={ { color: Constants.WHITE } }>
                        Login
                    </Typography>
                </Button>

            </Grid>
        </Grid>

    </Dialog>
}