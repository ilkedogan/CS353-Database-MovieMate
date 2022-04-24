import Grid from "@mui/material/Grid";
import { useState } from "react";
import Constants from "../../utils/Constants";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
export default function CartScreen(props) {

    const [isLogged, setIsLogged] = useState(false);
    return <div style={{ background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" }}>
        <Grid container direction={"column"}> 
            <Table table striped bordered hover condensed size="md">
                <thead>
                    <tr style={{ paddingTop: "15vh", fontSize: 30, fontWeight: "bold", paddingBottom: 20 , color: "white"}}>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ paddingTop: "15vh", fontSize: 30, fontWeight: "bold",paddingBottom: 20, color: "white"}}>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr style={{  paddingTop: "15vh", fontSize: 30, fontWeight: "bold", paddingBottom: 20, color: "white"}}>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr style={{ paddingTop: "15vh", fontSize: 30, fontWeight: "bold", paddingBottom: 20, color: "white"}}>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td colSpan={4}>@twitter</td>
                    </tr>
                </tbody>
            </Table>

        </Grid>

    </div>
}