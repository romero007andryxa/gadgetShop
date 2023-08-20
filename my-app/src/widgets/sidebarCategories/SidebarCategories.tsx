import { useCallback, useMemo } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import {
    List,
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Grid,
} from "@mui/material";
import CategoryItem from "../categoryItem/CategoryItem";
import { ICategory } from "../../entities/sharedTypes";
import { topCategories, categories } from "./categories";
import { ListStyle, ListSubHeaderStyle, DividerStyle } from "./styles";

const SidebarCategories = () => {
    const renderNestedItems = useCallback((nestedItems: Array<ICategory>) => {
        return nestedItems.map(({ Icon, name }, index) => (
            <ListItemButton key={index} sx={{ px: 1 }}>
                <ListItemIcon sx={{ justifyContent: "end", pr: 1 }}>
                    <Icon color="primary" sx={{ fontSize: 10 }} />
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        ));
    }, []);

    const createCategoryItems = (categories: Array<ICategory>) => {
        return categories.map((category, index) => {
            if (category.nestedCategories) {
                return (
                    <CategoryItem
                        key={index}
                        Icon={category.Icon}
                        name={category.name}
                        nestedCategories={category.nestedCategories}
                        renderNestedItems={renderNestedItems}
                    />
                );
            }
            return (
                <CategoryItem
                    key={index}
                    Icon={category.Icon}
                    name={category.name}
                />
            );
        });
    };

    const topCategoryItems = useMemo(
        () => createCategoryItems(topCategories),
        []
    );

    const categoryItems = useMemo(() => createCategoryItems(categories), []);

    return (
        <Grid>
            <List
                sx={ListStyle}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        sx={ListSubHeaderStyle}
                        component="div"
                        id="nested-list-subheader"
                    >
                        Top Categories
                    </ListSubheader>
                }
            >
                <Divider variant="middle" sx={DividerStyle} />
                {topCategoryItems}
            </List>

            <List
                sx={ListStyle}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        sx={ListSubHeaderStyle}
                        component="div"
                        id="nested-list-subheader"
                    >
                        Categories
                    </ListSubheader>
                }
            >
                <Divider variant="middle" sx={DividerStyle} />
                {categoryItems}
            </List>
        </Grid>
    );
};

export default SidebarCategories;
