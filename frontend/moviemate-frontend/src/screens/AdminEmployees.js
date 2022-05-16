import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import { Button } from "@mui/material";
import MovieRequestCard from "../components/MovieRequestCard";
import EmployeeCard from "../components/EmployeeCard";
import AddEmployee from "../components/AddEmployee";
import React from 'react'

/**
 * Metehan Sacakci
 * 03.05.2022
 * AdminEmployees
 */

 export default function AdminEmployees(props) {

    const [ openDialog, setOpenDialog ] = React.useState("")

    return (
        <div style={{ background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" }}>
            <Grid container sx={{
                bgcolor: Constants.MOVIEMATE_BACKGROUND,
                width: "100%",
                marginTop: "10px"
            }}>
                <Grid container xs={12} sx={{
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "25px",
                }}>
                    <Grid item xs={4} sx={{ height: 70 }} />
                    <Grid item xs={4} sx={{
                        height: 50,
                        borderRadius: 15,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>

                        <Button 
                            onClick={() => setOpenDialog("addEmployee")}
                            variant="contained" style={{
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "50%",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "10px",
                            borderRadius: 15,
                            marginTop: "5px",
                        }}>
                            Add an Employee
                        </Button>
                    </Grid>
                    <Grid item xs={4} sx={{ height: 70 }} />
                </Grid>

                <Grid container xs={12} sx={{
                    height: 50,
                    width: "100%",
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "48px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                    marginTop: "25px",
                }}>
                    Employees
                </Grid>

                <Grid container style={{ maxheight: 600, overflowX: "scroll", marginLeft: "15px", marginRight: "15px" }}>
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                </Grid>
            </Grid>

            {openDialog === "addEmployee" ? <AddEmployee open={true} onClose={() => setOpenDialog("")}/> : null}
        </div>
    );

};

