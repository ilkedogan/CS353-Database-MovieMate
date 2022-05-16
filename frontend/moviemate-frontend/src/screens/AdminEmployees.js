import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import { Button, CircularProgress, Snackbar } from "@mui/material";
import MovieRequestCard from "../components/MovieRequestCard";
import EmployeeCard from "../components/EmployeeCard";
import AddEmployee from "../components/AddEmployee";
import React from 'react'
import { Alert } from "@mui/lab";

/**
 * Metehan Sacakci
 * 03.05.2022
 * AdminEmployees
 */

export default function AdminEmployees( props ) {
    const [ openDialog, setOpenDialog ] = React.useState( "" )
    const [ error, setError ] = React.useState( "" )
    const [ employees, setEmployees ] = React.useState( [] )
    const [ loading, setLoading ] = React.useState( false )
    const [ dataFetched, setDataFetched ] = React.useState( false )

    if ( !dataFetched ) {
        setDataFetched( true )
        setLoading( true )
        getEmployees()
            .then( () => setLoading( false ) )
    }

    async function getEmployees() {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "employee/all"
        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setEmployees( data )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    async function removeEmployee( employeeId ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "employee?employeeId=" + employeeId
        await fetch( url, {
            method: 'DELETE', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setDataFetched( false )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    return (
        <div style={ { background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" } }>
            <Grid container sx={ {
                bgcolor: Constants.MOVIEMATE_BACKGROUND,
                width: "100%",
                marginTop: "10px"
            } }>
                <Grid container xs={ 12 } sx={ {
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "25px",
                } }>
                    <Grid item xs={ 4 } sx={ { height: 70 } }/>
                    <Grid item xs={ 4 } sx={ {
                        height: 50,
                        borderRadius: 15,
                        alignItems: "center",
                        justifyContent: "center",
                    } }>

                        <Button
                            onClick={ () => setOpenDialog( "addEmployee" ) }
                            variant="contained" style={ {
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
                        } }>
                            Add an Employee
                        </Button>
                    </Grid>
                    <Grid item xs={ 4 } sx={ { height: 70 } }/>
                </Grid>

                <Grid container xs={ 12 } sx={ {
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
                } }>
                    Employees
                </Grid>

                { loading ? <CircularProgress/> : <Grid container style={ {
                    maxheight: 600,
                    overflowX: "scroll",
                    marginLeft: "15px",
                    marginRight: "15px"
                } }>
                    { employees.map( e => {
                        return <EmployeeCard
                            removeEmployee={ async () => {
                                await removeEmployee( e.id )
                            } }
                            email={ e.email } nameSurname={ e.name + " " + e.surname } id={ e.id }
                            socialInsuranceNo={ e.socialInsuranceNo }/>
                    } ) }
                </Grid> }
            </Grid>

            { openDialog === "addEmployee" ? <AddEmployee

                fetchAgain={ () => setDataFetched( false ) }
                userData={ props.userData } open={ true } onClose={ () => setOpenDialog( "" ) }/> : null }

            <Snackbar open={ error.length > 2 }
                      autoHideDuration={ 2000 }
                      onClose={ () => setError( "" ) }
            >
                <Alert onClose={ () => setError( "" ) }
                       severity={ "error" }
                >
                    { error }
                </Alert>
            </Snackbar>
        </div>
    );

};

