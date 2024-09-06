import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'Expert Vedic Knowledge',
        description:
            'Shastri Ji offers profound wisdom in Vedic rituals, ensuring accurate and meaningful ceremonies.',
    },
    {
        icon: <ConstructionRoundedIcon />,
        title: 'Structured Rituals',
        description:
            'Every puja is conducted with careful planning and precision, creating a structured and sacred environment.',
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'Positive Outcomes',
        description:
            'Shastri Ji’s rituals bring peace, prosperity, and harmony, positively impacting all who participate.',
    },
    {
        icon: <AutoFixHighRoundedIcon />,
        title: 'Innovative Approach',
        description:
            'Combining traditional knowledge with a modern understanding, Shastri Ji provides a unique approach to spiritual practices.',
    },
    {
        icon: <SupportAgentRoundedIcon />,
        title: 'Personalized Guidance',
        description:
            'Receive individual attention and tailored advice to suit your spiritual needs during every ritual.',
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'Precise Mantras & Procedures',
        description:
            'With exact pronunciation and procedure, Shastri Ji ensures that every mantra and ritual step is perfect.',
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090a',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4">
                        Highlights
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        Discover the key aspects of Shastri Ji's services: deep Vedic knowledge, precise rituals, positive spiritual outcomes, and a modern approach to traditional ceremonies.
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Stack
                                direction="column"
                                color="inherit"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'grey.800',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography fontWeight="medium" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
