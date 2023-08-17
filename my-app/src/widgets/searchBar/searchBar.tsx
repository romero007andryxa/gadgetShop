import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

import {
    BoxStyle,
    BoxIconWrapperStyle,
    InputBaseStyle,
    ButtonStyle,
} from "./styles";

const SearchBar = () => {
    return (
        <>
            <Box sx={BoxStyle}>
                <Box sx={BoxIconWrapperStyle}>
                    <SearchIcon />
                </Box>
                <InputBase
                    sx={InputBaseStyle}
                    placeholder="Search any gadget you want"
                    inputProps={{ "aria-label": "search" }}
                />
                <Button sx={ButtonStyle} variant="contained">
                    Search
                </Button>
            </Box>
        </>
    );
};

export default SearchBar;