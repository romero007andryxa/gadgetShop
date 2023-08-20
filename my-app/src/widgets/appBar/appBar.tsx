import { AppBar,
  Toolbar, 
  Typography, 
  Grid, 
  Link, 
  Stack,  
  Button,
  Menu,
  MenuItem,
  IconButton
} 
from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export const MuiNavBar = () => {
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState<null | HTMLElement>(null);
  const resourcesMenuOpen = Boolean(resourcesAnchorEl);
  const [accountAnchorEl, setAccountAnchorEl] = useState<null | HTMLElement>(null);
  const accountMenuOpen = Boolean(accountAnchorEl);
  
  const handleResourcesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setResourcesAnchorEl(event.currentTarget);
  };

  const handleAccountClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setResourcesAnchorEl(null);
    setAccountAnchorEl(null);
  }
  return (
    <AppBar position="static">
      <Toolbar sx={{height: '80px'}}>
        <Grid container justifyContent={'space-between'}>
          <Grid container alignItems={'center'} justifyContent={'space-between'} width={'185px'}>
            <StorefrontIcon aria-label='logo' color='inherit'/>
            <Link href="#" underline='none' sx={{color: 'white'}}>
            <Typography variant="h6" component="div" sx={{fontSize: '26px', flexGrow: 1}}>
            Gadget Shop
            </Typography>
          </Link>        
        </Grid>
          <Stack direction={'row'} spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit" 
            id="resources-button" 
            onClick={handleResourcesClick} 
            aria-controls={resourcesMenuOpen ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={resourcesMenuOpen ? 'true' : undefined}
            >Resources
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Button>
          </Stack>
          <Menu id="resources-menu" 
          anchorEl={resourcesAnchorEl} 
          open={resourcesMenuOpen} 
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>

          <Stack direction={'row'} spacing={2}>
            <IconButton color="inherit">
              <ShoppingBagOutlinedIcon>

              </ShoppingBagOutlinedIcon>
            </IconButton>
            <IconButton color="inherit"
            id="account-button"
            onClick={handleAccountClick} 
            aria-controls={accountMenuOpen ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={accountMenuOpen ? 'true' : undefined}>
              <AccountCircleIcon>
              </AccountCircleIcon>
            </IconButton>
          </Stack>
          <Menu id="account-menu" 
          anchorEl={accountAnchorEl} 
          open={accountMenuOpen} 
          MenuListProps={{
            'aria-labelledby': 'account -button',
          }}
          onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>But</MenuItem>
            <MenuItem onClick={handleClose}>dasdt</MenuItem>
          </Menu>
        </Grid>
        
        
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavBar;