import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";
import Icon from '@mui/material/Icon';
import { Container } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

/**
 * Aslı Dinç
 * 14.04.2022
 * FriendCard
 */

const FriendCard = () => {

    return (
        <div>

            <Grid
                container
                sx={{
                    bgcolor: Constants.MOVIEMATE_BACKGROUND,
                    height: 150,
                    width: '25vw',
                    //paddingTop: 2.5,
                    alignItems: 'center',
                    borderRadius: Constants.BORDER_RADIUS,
                    paddingLeft: 3,
                }}>


                <Grid
                    item xs={3}>
                    <Container
                        sx={{
                            bgcolor: Constants.MOVIEMATE_GREEN,
                            width: 110,
                            height: 110,
                            borderRadius: '100%',
                            alignItems: 'center',
                        }}>

                    </Container>
                </Grid>

                <Grid
                    item xs={7}
                    sx={{
                        color: Constants.WHITE,
                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                        fontSize: "36px",
                        textAlign: "left",
                        paddingLeft: 4,
                        fontWeight: 500,
                    }}>Aslı Dinç</Grid>


                <Grid item xs={2}>
                    <DeleteForeverOutlinedIcon item xs={12} sx={{ 
                    color: Constants.WHITE, 
                    paddingRight: 3,
                    fontSize: 40, 
                    alignItems: 'center',
                    }}/>
                </Grid>

            </Grid>

        </div>

    );

};

export default FriendCard;
