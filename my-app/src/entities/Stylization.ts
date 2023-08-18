import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IStyle {
    [property: string]: string | number | object;
}

interface IMaterialIcon {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
}

export type { IStyle, IMaterialIcon };
