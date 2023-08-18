import Card from "@mui/material/Card";
import { IMaterialIcon, IStyle } from "../../entities/Stylization";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import {
    CardStyle,
    TypographyDescriptionStyle,
    TypographySubTitleStyle,
} from "./styles";

interface Props extends IMaterialIcon {
    style?: IStyle;
    subtitle: string;
    description: string;
}

const ImpressionCard: React.FC<Props> = (props) => {
    return (
        <Card sx={[CardStyle, { ...props.style }]}>
            <Grid container sx={{ height: "100%" }} justifyContent="start">
                <Grid item>
                    <CardContent sx={{ pl: 3, pr: 0 }}>
                        <props.icon sx={{ fontSize: 60 }} color="primary" />
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={TypographySubTitleStyle}
                        >
                            {props.subtitle}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={[
                                TypographyDescriptionStyle,
                                { marginTop: "4px" },
                            ]}
                        >
                            {props.description}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ImpressionCard;
