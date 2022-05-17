import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";
import Icon from '@mui/material/Icon';
import { Button, Container } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';



/**
 * Aslı Dinç
 * 14.04.2022
 * FriendCard
 */

const FriendCardRecommend = (props) => {

    function handleClick() {
        console.log("Bastınnnn");
    }


    return (
        <Grid
            container
            sx={{
                bgcolor: Constants.MOVIEMATE_BACKGROUND,
                height: 150,
                paddingLeft: 8,
                paddingRight: 8,

                alignItems: 'center',
                borderRadius: Constants.BORDER_RADIUS,
            }}>


            <Grid
                item xs={3}>
                <Container

                    sx={{

                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: 'center',
                    }}>

                    <Avatar
                        sx={{

                            bgcolor: Constants.MOVIEMATE_GREEN,
                            width: 70,
                            height: 70,
                        }}
                        alt={props.name}
                        src="/broken-image.jpg"
                    />
                </Container>
            </Grid>

            <Grid
                item xs={6}
                sx={{
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "left",
                    paddingLeft:2,
                    fontWeight: 500,
                }}> {" props.name"} </Grid>


            <Grid item xs={3} sx={{ bgcolor: Constants.MOVIEMATE_BACKGROUND, display: "flex", justifyContent: "flex-end" }}>
                <Button  style={{fontSize:12, color: Constants.WHITE, background: Constants.MOVIEMATE_GREEN, borderRadius: 10 }}  onClick={() => {

                }}>
                    Recommend
                </Button>
            </Grid>

        </Grid>

    );

};

export default FriendCardRecommend;
