import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const PageNotFound=()=>
{
    return (
        <Box>
        <Typography variant='h6' color="red">404 Error </Typography>
        <Typography variant='h6' color="red">Page Not Found </Typography>
        </Box>
    );
};

export default PageNotFound;