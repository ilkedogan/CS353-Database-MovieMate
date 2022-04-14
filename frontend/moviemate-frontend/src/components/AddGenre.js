import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";

/**
 * İlke Doğan
 * 13.04.2022
 * Add Genre
 */
export default function AddGenre(props) {
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
                    Add Genre
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
                <LoginRegisterTextField label={"Name"} />
            </Grid>
            
            <Grid container style={{ display: "flex", justifyContent: "center", paddingTop: "20vh" }}>
                <Button style={{ background: Constants.MOVIEMATE_GREEN, width: "10vw", borderRadius: "10px" }} onClick={() => {
                    props.onOpen(false)
                }}>
                    <Typography style={{ color: Constants.WHITE }}>
                        Add
                    </Typography>
                </Button>

            </Grid>
        </Grid>

    </Dialog>
}