import { SvgIconComponent } from "@mui/icons-material";

interface IStyle {
    [property: string]: string | number | object;
}

interface ICategory {
    Icon: SvgIconComponent;
    name: string;
    nestedCategories?: Array<Omit<ICategory, "nestedCategories">>;
}

export type { IStyle, ICategory };
