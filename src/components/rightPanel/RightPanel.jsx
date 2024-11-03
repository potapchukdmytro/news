import { Box } from "@mui/material";
import Weather from "../weather/Weather";

const RightPanel = () => {
    return (
        <Box sx={{p:2}}>
            <Weather />
        </Box>
    );
};

export default RightPanel;
