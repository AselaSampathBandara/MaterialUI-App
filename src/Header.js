import React,{useState} from "react";
import { AppBar, Toolbar, Tab, Tabs} from "@mui/material";
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const [value, setValue] = useState();
    return (
        <React.Fragment>
            <AppBar sx={{background: 'inherit', margin: '15px'}}>
                <Toolbar>
                <Tabs 
                textColor="primary" 
                value={value} 
                onChange={(e, value)=> setValue(value) } 
                indicatorColor="#bdbdbd"
                >
                    <Tab sx={{marginLeft: "30px"}} label="File" />
                    <Tab sx={{marginLeft: "-40px"}} label="Edit" />
                    <Tab sx={{marginLeft: "-40px"}} label="View" />
                    <Tab sx={{marginLeft: "-30px"}} label="Insert" />
                    <Tab sx={{marginLeft: "-20px"}} label="Format" />
                    <Tab sx={{marginLeft: "-30px"}} label="Data" />
                    <Tab sx={{marginLeft: "-30px"}} label="Tools" />
                    <Tab sx={{marginLeft: "-22px"}} label="Extensions" />
                    <Tab sx={{marginLeft: "-22px"}} label="Help" />
                </Tabs>
                <Button sx={{ marginLeft: "auto" }} size= "small" color="primary">
                    <CommentIcon fontSize="large" />
                </Button>
                <Button sx={{ marginLeft: "10px" }} varient= "filled" size= "small" color="primary">
                    <LockIcon fontSize="large" />
                    Share
                </Button>
                <IconButton sx={{ marginLeft: "10px" }} size= "small" color="primary">
                    <AccountCircleIcon fontSize="large" />
                </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;