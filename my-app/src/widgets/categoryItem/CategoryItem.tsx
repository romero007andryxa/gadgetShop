import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    List,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import { ICategory } from "../../entities/sharedTypes";

interface Props extends ICategory {
    renderNestedItems?: (nestedItems: Array<ICategory>) => JSX.Element[];
}

const CategoryItem: React.FC<Props> = (props) => {
    const [open, setOpen] = useState(false);

    const { Icon, name, nestedCategories } = props;

    const handleClick = () => {
        if (nestedCategories) {
            setOpen(!open);
        }
    };

    const nestedItems = useMemo(() => {
        if (nestedCategories && props.renderNestedItems) {
            return props.renderNestedItems(nestedCategories);
        }
        return null;
    }, [nestedCategories]);

    return (
        <>
            <ListItemButton onClick={handleClick} sx={{ px: 0 }}>
                <ListItemIcon sx={{ justifyContent: "center" }}>
                    <Icon color="primary" sx={{ fontSize: "32px" }} />
                </ListItemIcon>
                <ListItemText primary={name} />
                {nestedItems ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItemButton>
            {nestedItems ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {nestedItems}
                    </List>
                </Collapse>
            ) : null}
        </>
    );
};

export default CategoryItem;
