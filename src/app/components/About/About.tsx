import React from 'react';
import { Container, Typography } from '@mui/material';
import '@fontsource/space-grotesk';

const About: React.FC = () => (
    <Container maxWidth="md" sx={{ py: 4 }}>
        {[
            {
                title1: 'About me',
                desc1: `Hi, I'm Dmytro, a 26-year-old Front-End Developer from Ukraine, currently living in Sweden. I have over 3 years of experience building modern, scalable, and high-performance web applications.
                        I’m passionate about writing clean, efficient code and crafting intuitive, responsive user interfaces. My expertise lies in JavaScript/TypeScript, React, Next.js, and SPA development with a strong focus on cross-browser compatibility and performance optimization.
                        At the moment, I’m actively seeking new job opportunities — whether it’s remote or full-time roles. While searching, I dedicate my time to developing personal projects that challenge me technically and bring me real enjoyment.
                        I'm a quick learner, driven by curiosity and continuous growth, always open to new technologies and creative ideas.`,
                image: '/img/46.jpg',
            },
            {
                title1: 'Skills and Technologies',
                desc1: `• Programming Languages: JavaScript (ES6+), TypeScript  
                        • Web Development: Cross-browser and responsive layout, HTML, CSS  
                        • Frameworks & Libraries: React, Redux, React Table, Formik, ReactDraft, QRCode  
                        • Application Development: Building multi-page SPA applications  
                        • Performance Optimization: Chrome DevTools (profiling, snapshots), WebWorkers, useMemo, lazy-loading components  
                        • Testing: Unit testing with React Testing Library  
                        • API: REST, JSON API  
                        • Build Tools: Vite, Next  
                        • Version Control: Git  
                        • Other: Web Accessibility (implemented an accessibility panel)
                        • UI/UX: Swiper.js customization, autoplay logic, conditional rendering, video playback control, responsive slider implementation`,
                image: '/img/47.jpg',
            },
            {
                title1: 'The Azores Journey',
                desc1: `In early 2025, I traveled to the Azores — a breathtaking group of islands in the middle of the Atlantic.  
                        There, I met inspiring people from all over Europe through the Erasmus program.  
                        We shared stories, explored volcanic lakes, hiked along dramatic cliffs, and swam in natural thermal pools.  
                        I was stunned by the raw beauty of the landscapes and the peaceful rhythm of island life.
                        The Azores changed me — they reminded me to slow down, look around, and capture the world as I feel it.`,
                image: '/img/45.avif',
            },
            {
                title1: 'Why I Created This Website',
                desc1: `This website was born from that experience.
                        After returning home with thousands of photos and videos, I wanted to create a place where I could share those moments —  
                        not just as files, but as a story, a memory, a feeling.  
                        This project is more than just a portfolio — it's a tribute to the people I met, the beauty I witnessed, and the inspiration that still drives me.`,
                image: '/img/42.avif',
            },
        ].map((block, idx) => {
            const isEven = idx % 2 === 1;
            return (
                <Container
                    key={idx}
                    disableGutters
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: isEven ? 'row-reverse' : 'row' },
                        gap: 3,
                        mb: 4,
                        alignItems: 'stretch',
                    }}
                >
                    <Container
                        disableGutters
                        sx={{
                            flex: 1,
                            minWidth: 240,
                            mb: { xs: 2, sm: 0 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={block.image}
                            alt={block.title1}
                            style={{
                                width: '100%',
                                maxWidth: 240,
                                borderRadius: 12,
                                objectFit: 'cover',
                            }}
                        />
                    </Container>
                    <Container
                        disableGutters
                        sx={{
                            flex: 2,
                            minWidth: 240,
                        }}
                    >
                        <Typography sx={{ color: '#fff', fontWeight: 500 }} variant="h4" fontFamily="Space Grotesk" gutterBottom>
                            {block.title1}
                        </Typography>
                        <Typography sx={{ color: '#fff', whiteSpace: 'pre-line' }} fontFamily="Space Grotesk">
                            {block.desc1}
                        </Typography>

                    </Container>
                </Container>
            );
        })}
    </Container>
);

export default About;