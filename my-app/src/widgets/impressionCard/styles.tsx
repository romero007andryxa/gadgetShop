import { IStyle } from "../../entities/sharedTypes";

const CardStyle: IStyle = {
    width: "280px",
    height: "100px",
    mx: 5.7,
    my: 2,
    boxShadow: "0px 0px 28px 0px rgba(3, 0, 71, 0.15)",
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
