import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

type SwiperCardProps = {
  image: string;
  title: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  videoRef?: (el: HTMLVideoElement | null) => void;
};

const SwiperCard: React.FC<SwiperCardProps> = ({
  image,
  title,
  onClick,
  videoRef,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        overflow: 'hidden',
        height: '68vh',
      }}
    >
      <CardActionArea onClick={onClick} disabled={!onClick}>
        <CardMedia
          component="video"
          ref={videoRef}
          src={image}
          muted
          playsInline
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          title={title}
          style={{
            outline: 'none',
            objectFit: 'cover',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            
          }}
        />
      </CardActionArea>
    </Card>
  );
};


export default SwiperCard;
