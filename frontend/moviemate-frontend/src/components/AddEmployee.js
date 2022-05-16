import { DialogContent, DialogTitle, Grid, Button, TextField, Typography, CircularProgress, Snackbar, Alert } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import React from 'react'

/**
 * İlke Doğan
 * 13.04.2022
 * Add an Employee
 */

function createPassword() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export default function AddEmployee(props) {

    const [name, setName] = React.useState("")
    const [surname, setSurname] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [insurance, setInsurance] = React.useState("")
    const [loading, setLoading] = React.useState("")
    const [error, setError] = React.useState("")

    async function addEmployee(name, surname, email, insurance) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "employee?name=" + name + "&surname=" + surname + "&email=" + email + "&password=" + createPassword() + "&socialInsuranceNumber=" + insurance + "&adminId=" + props.userData.id

        await fetch(url, {
            method: 'POST', headers: headers
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    setError(data.message)
                } else {
                    setError("Successfully added!")
                    setName("")
                    setSurname("")
                    setEmail("")
                    setInsurance("")
                }
            })
            .catch(e => {
                setError(e)
            })
    }


    return <Dialog open={true} onClose={() => props.onClose()} fullWidth maxWidth={"md"}>
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
                    Add an Employee
                </Grid>

                <Grid item xs={2} style={{ display: "flex", justifyContent: "center", paddingBottom: 40, fontSize: 30, fontWeight: "bold" }}>
                    <Button onClick={() => {
                        props.onClose()
                    }}>
                        Exit
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <LoginRegisterTextField value={name} setValue={(val) => setName(val)} label={"Name"} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <LoginRegisterTextField value={surname} setValue={(val) => setSurname(val)} label={"Surname"} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <LoginRegisterTextField value={email} setValue={(val) => setEmail(val)} label={"Email"} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <LoginRegisterTextField value={insurance} setValue={(val) => setInsurance(val)} label={"Insurance"} />
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", paddingTop: "20vh" }}>
                {loading ? <CircularProgress /> : <Button style={{ background: Constants.MOVIEMATE_GREEN, width: "10vw", borderRadius: "10px" }}
                    onClick={() => {
                        if (name.trim().length > 0 && surname.trim().length > 0 && email.trim().length > 0 && insurance.trim().length > 0) {
                            setLoading(true)
                            addEmployee(name, surname, email, insurance)
                                .then(() => setLoading(false))
                        } else {
                            setError("Please fill all gaps!")
                        }

                    }}>

                    <Typography style={{ color: Constants.WHITE }}>
                        Create
                    </Typography>
                </Button>}

            </Grid>
        </Grid>
        <Snackbar open={error.length > 2}
            autoHideDuration={2000}
            onClose={() => setError("")}
        >
            <Alert onClose={() => setError("")}
                severity={"error"}
            >
                {error}
            </Alert>
        </Snackbar>
    </Dialog>
}