import { IStyle } from "../../entities/sharedTypes";

const TypographyStyle: IStyle = {
    color: "#2B3445",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: 700,
};

const SearchBarStyle: IStyle = {
    margin: "0 auto",
    marginTop: 5,
};

const BoxStyle: IStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
};

const imgHeadphonesStyle: IStyle = {
    width: "360px",
    height: "424px",
    objectFit: "fill",
    marginBottom: "-75px",
};

const imgPhonesStyle: IStyle = {
    width: "530px",
    height: "404px",
    objectFit: "fill",
    marginBottom: "-75px",
};

export {
    TypographyStyle,
    SearchBarStyle,
    BoxStyle,
    imgHeadphonesStyle,
    imgPhonesStyle,
};
