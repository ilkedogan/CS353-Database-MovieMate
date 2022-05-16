import { DialogContent, DialogTitle, Grid, Button, TextField, Typography, Container } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
/**
 * İlke Doğan & Aslı Dinç
 * 13.04.2022
 * ChangePassword
 */
export default function ChangePassword(props) {
    return  <Container sx={{minHeight: "100vh", minWidth: "100vw", background: Constants.MOVIEMATE_BACKGROUND}}>
    
        <Grid container style={{ display: "flex", justifyContent: "center", background: Constants.MOVIEMATE_BACKGROUND, color: Constants.WHITE, padding: '40px', paddingTop: '70px', paddingBottom: '70px' }}>
            <Grid container>
            <Grid item xs={1}>
                    <IconButton onClick={() => props.goBack()} style={{ color: Constants.WHITE }}
                        aria-label="arrowBack">
                        <ArrowBackIosOutlinedIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={8}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: 40,
                        fontSize: 40
                    }}>
                    Change Password
                </Grid>

                <Grid item xs={2} style={{ display: "flex", justifyContent: "center", paddingBottom: 20, fontSize: 30, fontWeight: "bold" }}>
                </Grid>
            </Grid>
            <Grid container style={{display:"flex", justifyContent:"center", width: "60rem" }}>
                <LoginRegisterTextField label={"Old Password"} isPassword={true}/>
                
            </Grid>
            <Grid container style={{display:"flex", justifyContent:"center", width: "60rem" }}>
                <LoginRegisterTextField label={"New Password"} isPassword={true}/>
                
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                <Button style={{ background: Constants.MOVIEMATE_GREEN, width: "10vw", borderRadius: "10px" }} onClick={() => {
                    props.onOpen(false)
                }}>
                    <Typography style={{ color: Constants.WHITE }}>
                        Change
                    </Typography>
                </Button>

            </Grid>
        </Grid>

        </Container>
}