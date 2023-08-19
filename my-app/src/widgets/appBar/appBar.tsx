import { styled, alpha } from '@mui/material/styles';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Link from '@mui/material/Link';
import IconButton from "@mui/material/IconButton";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';


const AppBarCustom = () => { 
    const array = ['First', 'Second', 'Third'];
    const [open, setOpen] = useState(false);
    return (
    <Grid container alignItems={'center'} sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{height: '80px', boxShadow: 'none'}}>

        <Toolbar sx={{height: '80px', width: '1200px', margin: '0 auto'}}>
          <Link href="#" underline='none' sx={{color: 'white'}}>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '26px'}}
          >
            Gadget Shop
          </Typography>
          </Link>

          {/* <Grid container spacing={0} sx={{minWidth: '300px', height: '80px', backgroundColor: 'black' }}>
            
          </Grid> */}
          <Box sx={{position: 'relative'}}>
            <List>
            <ListItem divider>
                <ListItemButton onClick={() => setOpen(true)}>
                  <ListItemText primary="Home"/>
                  <ListItemIcon>{ ">"}</ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <Collapse in={open}>
            <List sx={{width: '300px', backgroundColor: '#1976d2'}}>
              {array.map((listElm) => (
                <ListItem divider>
                <ListItemButton onClick={() => setOpen(false)}>
                  <ListItemText primary={listElm} />
                </ListItemButton>
              </ListItem>
              ))}
            </List>
            </Collapse>
          </Box>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton  size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={'0'} color="error">
                <ShoppingBagOutlinedIcon fontSize='large' />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize='large' />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
            //   aria-controls={mobileMenuId}
              aria-haspopup="true"
            //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Grid>
  );
}

export default AppBarCustom;