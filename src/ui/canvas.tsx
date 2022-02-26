import Box from "@mui/material/Box";

export default function Canvas() {
    return (
        <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 480, width: 640 }}
    >
            <canvas />
        </Box>
    );
}