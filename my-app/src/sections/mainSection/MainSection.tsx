import { Container } from "@mui/material";
import SidebarCategories from "../../widgets/sidebarCategories/SidebarCategories";
import ImpressionCards from "../../widgets/impressionCards/ImpressionCards";

const MainSection = () => {
    return (
        <Container maxWidth={"xl"}>
            <ImpressionCards />
            <SidebarCategories />
        </Container>
    );
};

export default MainSection;
