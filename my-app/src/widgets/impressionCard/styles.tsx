import { IStyle } from "../../entities/Stylization";

const CardStyle: IStyle = {
    width: "280px",
    height: "100px",
    m: 2,
};

const TypographySubTitleStyle: IStyle = {
    color: "#2B3445",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 700,
    textAlign: "start",
};

const TypographyDescriptionStyle: IStyle = {
    color: "#7D879C",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "start",
};

export { CardStyle, TypographySubTitleStyle, TypographyDescriptionStyle };
