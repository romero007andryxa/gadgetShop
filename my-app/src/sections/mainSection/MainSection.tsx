import { Container, Grid } from "@mui/material";
import ImpressionCard from "../../widgets/impressionCard/impressionCard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SecurityIcon from "@mui/icons-material/Security";

const MainSection = () => {
    return (
        <Container maxWidth={"xl"}>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{ marginTop: "80px" }}
            >
                <ImpressionCard
                    icon={WidgetsIcon}
                    subtitle="Packaging"
                    description="97% positive"
                />
                <ImpressionCard
                    icon={LocalShippingIcon}
                    subtitle="Fast Delivery"
                    description="Start from $10"
                />
                <ImpressionCard
                    icon={ThumbUpIcon}
                    subtitle="Great Feedback"
                    description="97% positive"
                />
                <ImpressionCard
                    icon={SecurityIcon}
                    subtitle="Secure Payment"
                    description="100% secured"
                />
            </Grid>
        </Container>
    );
};

export default MainSection;
