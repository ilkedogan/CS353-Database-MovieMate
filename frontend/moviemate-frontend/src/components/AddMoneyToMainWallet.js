import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";

/**
 * İlke Doğan
 * 13.04.2022
 * Add Money to Main Wallet
 */
 export default function AddMoneyToMainWallet(props) {
    return <Dialog open={true} onClose={() => props.onOpen(false)} fullWidth maxWidth={"md"}>
        <Grid container style={{ display: "flex", justifyContent: "center", background: Constants.MOVIEMATE_BACKGROUND, color: Constants.WHITE, padding: '40px', paddingTop: '70px', paddingBottom: '70px' }}>
            <Grid container>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={8}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: 40,
                        fontSize: 30
                    }}>
                    Add Money To Main Wallet
                </Grid>

                <Grid item xs={2} style={{ display: "flex", justifyContent: "center", paddingBottom: 40, fontSize: 30, fontWeight: "bold" }}>
                    <Button onClick={() => {
                        props.onOpen(false)
                    }}>
                        Exit
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <LoginRegisterTextField multiline rows ={20} label={"Amount:"} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                <Button style={{ background: Constants.MOVIEMATE_GREEN, width: "20vw", borderRadius: "10px" }} onClick={() => {
                    props.onOpen(false)
                }}>
                    <Typography style={{ color: Constants.WHITE }}>
                        Pay
                    </Typography>
                </Button>

            </Grid>
        </Grid>

    </Dialog>
}