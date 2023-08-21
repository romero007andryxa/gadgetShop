import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SecurityIcon from "@mui/icons-material/Security";
import { IImpressionCard } from "../../entities/sharedTypes";

const cards: Array<IImpressionCard> = [
    { Icon: WidgetsIcon, subtitle: "Packaging", description: "97% positive" },
    {
        Icon: LocalShippingIcon,
        subtitle: "Fast Delivery",
        description: "Start from $10",
    },
    {
        Icon: ThumbUpIcon,
        subtitle: "Great Feedback",
        description: "95% positive",
    },
    {
        Icon: SecurityIcon,
        subtitle: "Secure Payment",
        description: "100% secured",
    },
];

export default cards;
