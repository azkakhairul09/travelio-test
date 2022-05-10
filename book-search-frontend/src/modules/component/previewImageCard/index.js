import { Box, CardMedia } from "@mui/material"

function ImagePreviewCard(props) {
    return (
        <Box sx={{
            width: '160px',
            height: '230px',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center'
        }}>
            <CardMedia alt={props.title} component="img" src={props.thumbnail} sx={{
                maxHeight: '230px'
            }} />
        </Box>
    )
}

export default ImagePreviewCard