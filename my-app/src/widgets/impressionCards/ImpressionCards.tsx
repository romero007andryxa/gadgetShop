import { useMemo } from "react";
import { Grid } from "@mui/material";
import ImpressionCard from "../impressionCard/impressionCard";
import { IImpressionCard } from "../../entities/sharedTypes";
import cards from "./cards";

const ImpressionCards = () => {
    const createImpressionCardItems = (cards: Array<IImpressionCard>) => {
        return cards.map((card, index) => {
            return (
                <ImpressionCard key={`${card.subtitle}-${index}`} {...card} />
            );
        });
    };

    const impressionCardItems: JSX.Element[] = useMemo(
        () => createImpressionCardItems(cards),
        []
    );

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop: "80px" }}
        >
            {impressionCardItems}
        </Grid>
    );
};

export default ImpressionCards;
