import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
    List,
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Divider,
    Grid,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StarIcon from "@mui/icons-material/Star";
import HomeIcon from "@mui/icons-material/Home";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MonitorIcon from "@mui/icons-material/Monitor";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MouseIcon from "@mui/icons-material/Mouse";
import CategoryItemNested from "../categoryItemNested/CategoryItemNested";

const SidebarCategories = () => {
    return (
        <Grid>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    m: 4,
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        sx={{ fontSize: 17 }}
                        component="div"
                        id="nested-list-subheader"
                    >
                        Top Categories
                    </ListSubheader>
                }
            >
                <Divider />

                <ListItemButton>
                    <ListItemIcon>
                        <StarIcon color="primary" sx={{ fontSize: "32px" }} />
                    </ListItemIcon>
                    <ListItemText primary="Popular Products" />
                </ListItemButton>
                <ListItemButton
                // onClick={handleClick}
                >
                    <ListItemIcon>
                        <AutoAwesomeIcon
                            color="primary"
                            sx={{ fontSize: "32px" }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Trending Products" />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                <Collapse
                    //  in={open}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton
                // onClick={handleClick}
                >
                    <ListItemIcon>
                        <PhonelinkIcon
                            color="primary"
                            sx={{ fontSize: "32px" }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="All Products" />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
            </List>

            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    m: 4,
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        sx={{ fontSize: 17 }}
                        component="div"
                        id="nested-list-subheader"
                    >
                        Categories
                    </ListSubheader>
                }
            >
                <Divider />
                <ListItemButton
                // onClick={handleClick}
                >
                    <ListItemIcon>
                        <HeadphonesIcon
                            color="primary"
                            sx={{ fontSize: "32px" }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Headphones" />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                <Collapse
                    //  in={open}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton
                // onClick={handleClick}
                >
                    <ListItemIcon>
                        <PhoneIphoneIcon
                            color="primary"
                            sx={{ fontSize: "32px" }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Phones" />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                <Collapse
                    //  in={open}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton
                // onClick={handleClick}
                >
                    <ListItemIcon>
                        <LaptopMacIcon
                            color="primary"
                            sx={{ fontSize: "32px" }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Laptops" />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                <Collapse
                    //  in={open}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton
                // onClick={handleClick}
                >
                    <ListItemIcon>
                        <MonitorIcon
                            color="primary"
                            sx={{ fontSize: "32px" }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Monitors" />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                <Collapse
                    //  in={open}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton
                // onClick={handleClick}
                >
                    <ListItemIcon>
                        <KeyboardIcon
                            color="primary"
                            sx={{ fontSize: "32px" }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Keyboards" />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                <Collapse
                    //  in={open}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton
                // onClick={handleClick}
                >
                    <ListItemIcon>
                        <MouseIcon color="primary" sx={{ fontSize: "32px" }} />
                    </ListItemIcon>
                    <ListItemText primary="Mice" />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                <Collapse
                    //  in={open}
                    timeout="auto"
                    unmountOnExit
                >
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <CategoryItemNested
                    icon={PhoneIphoneIcon}
                    text="Iphone"
                    nestedIcon={PhoneIphoneIcon}
                    nestedText="Phone"
                />
            </List>
        </Grid>
    );
};

export default SidebarCategories;
