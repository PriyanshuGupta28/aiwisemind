import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
    {
        avatar: <Avatar alt="Shastri Ji" src="/static/images/avatar/shastri1.jpg" />,
        name: 'Pandit Shastri Ji',
        occupation: 'Expert in Vedic Rituals',
        testimonial:
            "The Puja ceremonies conducted by Shastri Ji have always brought immense peace and spiritual satisfaction. His knowledge and dedication to the Vedic rituals are truly remarkable.",
    },
    {
        avatar: <Avatar alt="Shastri Ji" src="/static/images/avatar/shastri2.jpg" />,
        name: 'Rajesh Kumar',
        occupation: 'Devotee',
        testimonial:
            "Shastri Ji's ability to perform complex rituals with such simplicity and devotion is inspiring. Every puja has been a divine experience that brings positivity and calmness to my family.",
    },
    {
        avatar: <Avatar alt="Shastri Ji" src="/static/images/avatar/shastri3.jpg" />,
        name: 'Anjali Sharma',
        occupation: 'Spiritual Seeker',
        testimonial:
            "I was amazed by Shastri Ji's detailed knowledge and how he explained each step of the rituals during our home Puja. His guidance has helped me feel more connected spiritually.",
    },
    {
        avatar: <Avatar alt="Shastri Ji" src="/static/images/avatar/shastri4.jpg" />,
        name: 'Vikas Patel',
        occupation: 'Businessman',
        testimonial:
            "After organizing a business Puja with Shastri Ji, I felt a significant change in the energy around my workplace. His rituals have brought prosperity and peace to our environment.",
    },
    {
        avatar: <Avatar alt="Shastri Ji" src="/static/images/avatar/shastri5.jpg" />,
        name: 'Sunita Rao',
        occupation: 'Homemaker',
        testimonial:
            "Shastri Ji's kindness and expertise during our family Puja made the experience unforgettable. The blessings and positive energy have stayed with us long after the ceremony.",
    },
    {
        avatar: <Avatar alt="Shastri Ji" src="/static/images/avatar/shastri6.jpg" />,
        name: 'Mukesh Verma',
        occupation: 'Temple Committee Member',
        testimonial:
            "We regularly invite Shastri Ji for temple functions, and each time, his deep understanding of the scriptures and devotion to the rituals leave a lasting impact on the entire community.",
    },
];

const whiteLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
    width: '64px',
    opacity: 0.3,
};

export default function Testimonials() {
    const theme = useTheme();
    const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

    return (
        <Container
            id="testimonials"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
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
                <Typography component="h2" variant="h4" color="text.primary">
                    Testimonials
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    See how Shastri Ji’s profound knowledge and dedication to Vedic rituals have impacted the lives of many. His Pujas bring peace, positivity, and blessings to everyone he serves.
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {userTestimonials.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                                p: 1,
                            }}
                        >
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {testimonial.testimonial}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    pr: 2,
                                }}
                            >
                                <CardHeader
                                    avatar={testimonial.avatar}
                                    title={testimonial.name}
                                    subheader={testimonial.occupation}
                                />
                                <img
                                    src={logos[index]}
                                    alt={`Logo ${index + 1}`}
                                    style={logoStyle}
                                />
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
