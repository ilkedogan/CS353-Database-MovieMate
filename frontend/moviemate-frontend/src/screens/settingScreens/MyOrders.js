import Grid from "@mui/material/Grid";
import Constants from "../../utils/Constants";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import IconButton from '@mui/material/IconButton';
import CustomerOrderCard from "../../components/CustomerOrderCard";

/**
 * Metehan Sacakci
 * 30.04.2022
 * MyOrders
 */

const MyOrders = (props) => {

    return (
        <div style={{   background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" }}>
            <Grid container sx={{
                bgcolor: Constants.MOVIEMATE_BACKGROUND,
                width: "100%",
                marginTop: "10px"
            }}>
                <Grid container xs={12} sx={{ 
                                        height: 50,
                                        alignItems: "left",
                                        justifyContent: "left",
                                        marginLeft: "25px",
                    }}>
                    <IconButton onClick={() => props.goBack()} style={{color: Constants.WHITE}} aria-label="arrowBack">
                        <ArrowBackIosOutlinedIcon />
                    </IconButton>
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
                    }}>
                    My Orders
                </Grid>

                <Grid container style={ {maxheight: 600, overflowX: "scroll", marginLeft: "15px", marginRight: "15px"} }>
                    <CustomerOrderCard/>
                    <CustomerOrderCard/>
                    <CustomerOrderCard/>
                    <CustomerOrderCard/>
                </Grid>
                
            </Grid>
        </div>
    );

};

export default MyOrders;
