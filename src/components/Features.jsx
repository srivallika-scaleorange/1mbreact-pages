import React, { useContext } from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SecurityIcon from '@mui/icons-material/Security';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AppContext from '../context/AppContext';

const features = [
  {
    icon: <MonitorHeartIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Real-time Monitoring',
    description: 'Continuously tracks vital signs and activity metrics through wearables and sensors to catch early health changes.'
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Predictive Analytics',
    description: 'Advanced machine learning models forecast potential health issues and recommend preventive actions.'
  },
  {
    icon: <TrackChangesIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Personalized Guidance',
    description: 'Tailored lifestyle recommendations for nutrition, exercise, and sleep based on your unique data profile.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Comprehensive Care',
    description: 'Integrates preventive care, diagnostics, therapies, and telehealth for complete health management.'
  },
  {
    icon: <SmartphoneIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Super App Experience',
    description: 'All your health needs in one intuitive app—from monitoring to care coordination.'
  },
  {
    icon: <FlashOnIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Hyper-personalized',
    description: 'AI-driven customization that adapts to your unique health patterns and lifestyle.'
  }
];

const Features = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 10, sm: 16 },
        bgcolor: isDarkMode ? '#101F3C' : '#fff'
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 4, lg: 6 } }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: isDarkMode ? '#fff' : '#22223b',
              fontSize: { xs: '2rem', sm: '2.5rem' },
              mb: 2
            }}
          >
            Powerful Features for Complete Wellness
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: isDarkMode ? '#fff' : '#475569',
              maxWidth: 600,
              mx: 'auto',
              fontWeight: 400,
              fontSize: { xs: 16, sm: 18 }
            }}
          >
            From real-time monitoring to predictive insights, 1MBHealthy provides everything you need to stay ahead of your health.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {features.map((feature) => (
            <Grid
              item
              xs={10}
              md={6}
              lg={4}
              key={feature.title}
              sx={{ display: 'flex' }}
            >
              <Card
                elevation={3}
                sx={{
                  borderRadius: 3,
                  bgcolor: isDarkMode ? '#1A202C' : '#fff',
                  boxShadow: '0 4px 24px 0 rgba(59,130,246,0.08)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  '&:hover': {
                    boxShadow: '0 8px 32px 0 rgba(16,185,129,0.14)',
                    transform: 'translateY(-6px) scale(1.03)'
                  }
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    flexGrow: 1
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      mb: 3,
                      mx: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #3b82f6 0%, #10b981 100%)',
                      transition: 'transform 0.3s'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: isDarkMode ? '#fff' : '#22223b',
                      mb: 1.5
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDarkMode ? '#fff' : '#475569',
                      lineHeight: 1.7
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;

