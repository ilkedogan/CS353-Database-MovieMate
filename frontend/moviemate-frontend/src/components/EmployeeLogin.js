import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";


/**
 * İlke Doğan
 * 13.04.2022
 * Employee Login Card
 */
export default function EmployeeLoginDialog(props) {
    return <Dialog open={true} onClose={() => props.onOpen(false)} fullWidth maxWidth={"md"}>
        <Grid container style={{ display: "flex", justifyContent: "center", background: Constants.MOVIEMATE_BACKGROUND, color: Constants.WHITE, padding: 40 }}>
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
                    Employee Login
                </Grid>

                <Grid item xs={2} style={{ display: "flex", justifyContent: "center", paddingBottom: 40, fontSize: 30, fontWeight: "bold" }}>
                    <Button onClick={() => {
                        props.onOpen(false)
                    }}>
                        Exit
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center" }}>
                <LoginRegisterTextField label={"Email"} isPassword={false} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center" }}>
                <LoginRegisterTextField label={"Password"} isPassword={true} />

            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "right", paddingRight: "20vh" }}>
                <Typography onClick={() => { }} style={{ cursor: "pointer", color: "#707070" }}>
                    Forget Password
                </Typography>

            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", paddingTop: "40px", marginBottom: "10vh" }}>
                <Button style={{ background: Constants.MOVIEMATE_GREEN, width: "8vw", borderRadius: "10px" }} onClick={() => { }}>
                    <Typography style={{ color: Constants.WHITE }}>
                        Login
                    </Typography>
                </Button>

            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "30rem" }}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={1} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography onClick={() => { }} style={{ cursor: "pointer", color: "#707070" }}>
                        Customer
                    </Typography>
                </Grid>

                <Grid item xs={2} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography style={{ cursor: "pointer", color: "#707070", fontWeight: "bold" }}>
                        |
                    </Typography>
                </Grid>

                <Grid item xs={1} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography onClick={() => { }} style={{ cursor: "pointer", color: "#707070" }}>
                        Admin
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </Grid>

    </Dialog>
}