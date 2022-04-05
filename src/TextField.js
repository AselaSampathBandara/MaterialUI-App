import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const useStyles = makeStyles(theme => ({
  input1: {
    padding: 6,
    background: 'inherit',
  }
}));

export default function App() {
  const classes = useStyles()
  
  return (
    <div className="App">
      <Button
      style={{
        right: 460,
        left: "auto",
        marginTop: 2,
        marginBottom: 7,
      }}
        onClick={() => console.log('clicked')}
        type="submit"
        color="inherit"
        varient="contained"
        endIcon={<InsertDriveFileIcon/>}
        >
      </Button>
      <TextField
        style={{
          right: 465,
          left: "auto",
          marginTop: 2,
          marginBottom:3,
            }}
        variant="outlined"
        OutlinedInput placeholder="Untitled spreadsheet"
        InputProps={{ classes: { input: classes.input1 } }}
      />
      <Button
      style={{
        right: 480,
        left: "auto",
        marginTop: 2,
        marginBottom: 7,
      }}
        onClick={() => console.log('clicked')}
        type="submit"
        color="inherit"
        varient="contained"
        endIcon={<StarBorderIcon/>}
        >
      </Button>
      <Button
      style={{
        right: 515,
        left: "auto",
        marginTop: 2,
        marginBottom: 7,
      }}
        onClick={() => console.log('clicked')}
        type="submit"
        color="inherit"
        varient="contained"
        endIcon={<DriveFileMoveOutlinedIcon/>}
        >
      </Button>
      <Button
      style={{
        right: 550,
        left: "auto",
        marginTop: 2,
        marginBottom: 7,
      }}
        onClick={() => console.log('clicked')}
        type="submit"
        color="inherit"
        varient="contained"
        endIcon={<CloudDoneOutlinedIcon/>}
        >
      </Button>
    </div>
  );
}
