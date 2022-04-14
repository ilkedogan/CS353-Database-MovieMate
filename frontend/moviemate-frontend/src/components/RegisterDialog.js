import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";

/**
 * Aslı Dinç
 * 14.04.2022
 * RegisterDialog
 */
export default function RegisterDialog(props) {
    return <Dialog open={props.open} onClose={()=>props.onOpen(false)} fullWidth maxWidth={"md"}>
         <Grid container style={{display:"flex", justifyContent:"center", background:Constants.MOVIEMATE_BACKGROUND, color:Constants.WHITE , padding:'40px', paddingTop: '70px', paddingBottom: '70px'}}>
            <Grid container>
                <Grid item xs={2}>
                    <Button onClick={()=>{
                        props.onOpen(false)
                    }}>
                        Çıkış iconu
                    </Button>
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={2} style={{display:"flex", justifyContent:"center", paddingBottom:40, fontSize:30}}>
                     Register
                </Grid>
                <Grid item xs={5}>

                </Grid> 
            </Grid>
            <Grid container style={{display:"flex", justifyContent:"center"}}>
                <LoginRegisterTextField label={"Email"} isPassword={false}/>
            </Grid>
            <Grid container style={{display:"flex", justifyContent:"center"}}>
                <LoginRegisterTextField label={"Password"} isPassword={true}/>
            </Grid>
            <Grid container style={{display:"flex", justifyContent:"center"}}>
                <LoginRegisterTextField label={"Confirm Password"} isPassword={true}/>
            </Grid>
            <Grid container style={{display:"flex", justifyContent:"center"}}>
                <LoginRegisterTextField label={"Name"} isPassword={false}/>
            </Grid>
            <Grid container style={{display:"flex", justifyContent:"center"}}>
                <LoginRegisterTextField label={"Surname"} isPassword={false}/>
            </Grid>
            <Grid container style={{display:"flex", justifyContent:"center", paddingTop:"40px"}}>
                        <Button style={{background:Constants.MOVIEMATE_GREEN, width:"8vw", borderRadius:"10px"}} onClick={()=>{}}>
                            <Typography style={{color:Constants.WHITE}}>
                                Register
                            </Typography>
                        </Button>

            </Grid>
        </Grid>

    </Dialog>
}