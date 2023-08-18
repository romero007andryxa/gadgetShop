import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    List,
} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { IMaterialIcon } from "../../entities/Stylization";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
    text: string;
    icon: React.ElementType;
    nestedIcon: React.ElementType;
    nestedText: string;
}

const CategoryItemNested: React.FC<Props> = (props) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const { icon: Icon, nestedIcon: NestedIcon, text, nestedText } = props;

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <Icon color="primary" sx={{ fontSize: "32px" }} />
                </ListItemIcon>
                <ListItemText primary={text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ArrowForwardIosIcon
                                color="primary"
                                sx={{ fontSize: "22px" }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={nestedText} sx={{ pl: -3 }} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 6 }}>
                        <ListItemText primary="Android" />
                        <ListItemIcon>
                            <ArrowForwardIosIcon
                                sx={{ fontSize: "16px", color: "black" }}
                            />
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
};

export default CategoryItemNested;
