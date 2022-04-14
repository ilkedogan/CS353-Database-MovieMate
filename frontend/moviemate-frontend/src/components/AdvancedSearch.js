import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";

/**
 * İlke Doğan
 * 13.04.2022
 * Advanced Search card
 */
export default function AdvancedSearch(props) {
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
                    Advanced Search
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
                <LoginRegisterTextField label={"Director"} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <LoginRegisterTextField label={"Star"} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <LoginRegisterTextField label={"Genre"} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <LoginRegisterTextField label={"Movie Title"} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "30rem" }}>
                <Grid item xs={4} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "24px",
                }}>
                    <LoginRegisterTextField label={"Year first half"} />
                </Grid>

                <Grid item xs={4} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "24px",
                }}>
                    <Typography style={{ color: Constants.WHITE, fontWeight: "bold" }}>
                        -
                    </Typography>
                </Grid>

                <Grid item xs={4} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "24px",
                }}>
                    <LoginRegisterTextField label={"Year Second half"} />
                </Grid>
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "30rem" }}>
                <Grid item xs={4} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "24px",
                }}>
                    <LoginRegisterTextField label={"Rating first half"} />
                </Grid>

                <Grid item xs={4} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "24px",
                }}>
                    <Typography style={{ color: Constants.WHITE, fontWeight: "bold" }}>
                        -
                    </Typography>
                </Grid>

                <Grid item xs={4} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "24px",
                }}>
                    <LoginRegisterTextField label={"Rating Second half"} />
                </Grid>
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                <Button style={{ background: Constants.MOVIEMATE_GREEN, width: "10vw", borderRadius: "10px" }} onClick={() => {
                    props.onOpen(false)
                }}>
                    <Typography style={{ color: Constants.WHITE }}>
                        Register
                    </Typography>
                </Button>

            </Grid>
        </Grid>

    </Dialog>
}