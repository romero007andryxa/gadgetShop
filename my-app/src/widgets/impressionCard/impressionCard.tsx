import Card from "@mui/material/Card";
import { IImpressionCard, IStyle } from "../../entities/sharedTypes";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import {
    CardStyle,
    TypographyDescriptionStyle,
    TypographySubTitleStyle,
} from "./styles";

interface Props extends IImpressionCard {}

const ImpressionCard: React.FC<Props> = (props) => {
    const { Icon, subtitle, description, style } = props;

    return (
        <Card sx={[CardStyle, { ...style }]}>
            <Grid container sx={{ height: "100%" }} justifyContent="start">
                <Grid item>
                    <CardContent sx={{ pl: 3, pr: 0 }}>
                        <Icon sx={{ fontSize: 60 }} color="primary" />
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={TypographySubTitleStyle}
                        >
                            {subtitle}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={[
                                TypographyDescriptionStyle,
                                { marginTop: "4px" },
                            ]}
                        >
                            {description}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ImpressionCard;
