import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardProps {
    imageSrc: string;
    alt?: string;
    description?: string;
}

const ImageCard: React.FC<CardProps> = ({ imageSrc, alt = '', description }) => (
    <Card>
        <CardMedia
            component="img"
            height="200"
            image={imageSrc}
            alt={alt}
            sx={{ objectFit: 'cover' }}
        />
        {description && (
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        )}
    </Card>
);

export default ImageCard;