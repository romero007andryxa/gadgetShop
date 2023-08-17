import { Theme } from "@mui/material";

const BoxIconWrapperStyle = {
    padding: 2,
    height: "60px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const BoxStyle = {
    boxShadow: "0px 8px 45px 0px rgba(3, 0, 71, 0.09)",
    margin: 2,
    width: "648px",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: "#FFF",
    borderRadius: 2,
};

const InputBaseStyle = {
    height: "60px",
    width: "100%",
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: (theme: Theme) => theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: (theme: Theme) => `calc(1em + ${theme.spacing(4)})`,
        transition: (theme: Theme) => theme.transitions.create("width"),
        width: ["20ch", "100%"],
    },
};

const ButtonStyle = {
    borderRadius: "0px 8px 8px 0px",
    height: "60px",
    width: "130px",
    boxShadow: 0,
};

export { BoxIconWrapperStyle, BoxStyle, InputBaseStyle, ButtonStyle };
