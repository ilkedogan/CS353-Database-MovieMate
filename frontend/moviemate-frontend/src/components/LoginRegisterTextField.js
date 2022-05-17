
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Constants from '../utils/Constants';

/**
 * Hacı Çakın
 * 14.04.2022
 * LoginRegisterTextField
 */
export default function LoginRegisterTextField(props){
    const [value,setValue] = React.useState("")
    const [visible,setVisible] = React.useState(false)

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return <FormControl sx={{ m: 1, borderRadius:'10px', width: '24vw',background:Constants.MOVIEMATE_TEXTFIELD }} variant="filled" >
    <InputLabel htmlFor="filled-adornment-password" style={{color:Constants.WHITE}}>{props.label}</InputLabel>
    <FilledInput
    autoComplete='off'
      type={!props.isPassword ? "email" : visible ? 'text' : 'password'}
      style={{color:Constants.WHITE, paddingLeft:20,paddingRight:20}}
      value={props.value}
      onChange={(event)=>{props.setValue(event.target.value)}}
      endAdornment={
          props.isPassword &&
        <InputAdornment style={{color:Constants.WHITE}} position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={()=>setVisible(!visible)}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {!visible ? <VisibilityOff style={{color:Constants.WHITE}} /> : <Visibility style={{color:Constants.WHITE}}/>}
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
}