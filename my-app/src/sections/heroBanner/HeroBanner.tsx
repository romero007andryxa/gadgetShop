import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import SearchBar from "../../widgets/searchBar/searchBar";

import { IStyle } from "../../entities/IStyle";
import {
    TypographyStyle,
    SearchBarStyle,
    BoxStyle,
    imgHeadphonesStyle,
    imgPhonesStyle,
} from "./styles";

const HeroBanner: React.FC<IStyle> = (props) => {
    return (
        <Container maxWidth={"xl"} sx={{ height: "714px" }}>
            <Box sx={{ marginTop: "120px" }}>
                <Typography sx={TypographyStyle} variant="h3" component="h1">
                    Fashion is like eating <br /> shouldn't stick the same menu
                </Typography>
                <SearchBar style={SearchBarStyle} />
                <Box sx={BoxStyle}>
                    <img
                        style={imgHeadphonesStyle}
                        src="/hero-image-1.png"
                        alt="Headphones"
                    />
                    <img
                        style={imgPhonesStyle}
                        src="/hero-image-2.png"
                        alt="Phones"
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default HeroBanner;
