import React, { useState, useContext } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AppContext } from '../context/AppContext';

const solutions = [
  {
    title: "Digital Health Locker",
    description: "Secure, cloud-based platform integrated with ABHA to store, manage, and share health records, enabling anytime, anywhere access for patients and providers to drive seamless care and data-driven decisions.",
    icon: "/icons/health-locker.jpeg",
    image: "/images/reports.png"
  },
  {
    title: "AI-Driven Personalization",
    description: "Tailored health insights based on real-time vitals, health history, symptoms, lifestyle patterns, and genetic predisposition.",
    icon: "/icons/ai-personalization.jpeg",
    image: "/images/myhealth.png"
  },
  {
    title: "1MBHealthy Copilot",
    description: "AI-powered digital assistant designed to provide hyper-personalized health recommendations, track user health metrics, and assist in proactive healthcare management.",
    icon: "/icons/copilot.jpeg",
    image: "/images/copilot_dark.png"
  },
  {
    title: "360-degree Health Ecosystem",
    description: "Seamless integration with wearables, diagnostic labs, pharmacies, wellness providers, and insurance providers as a unified marketplace.",
    icon: "/icons/health-ecosystem.jpeg",
    image: "/images/home.png"
  },
  {
    title: "One Stop Health Solution",
    description: "Manage the healthcare needs of an entire family in a single place—tracking histories, prescriptions, appointments, and preventive actions.",
    icon: "/icons/family-health.jpeg",
    image: "/images/family-health.png"
  }
];

const SolutionsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { isDarkMode } = useContext(AppContext);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const { title, description, icon, image } = solutions[current];

  return (
    <Box
      id="solutions"
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: '100vh',
        background: isDarkMode ? '#1f2937' : '#f9fafb'
      }}
    >
      <Box maxWidth="lg" mx="auto" px={2}>
        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          className="section-title"
          sx={{
            mb: 6,
            color: isDarkMode ? '#fff' : '#22223b',
            fontSize: { xs: '2rem', sm: '2.5rem' },
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '50%',
              height: 4,
              background: isDarkMode ? '#6366f1' : 'linear-gradient(to right, #6366f1, #34d399)',
              borderRadius: 2
            }
          }}
        >
          Major Solutions of 1MBHealthy
        </Typography>
        <Box
          sx={{
            position: 'relative',
            maxWidth: 1100,
            mx: 'auto',
            mt: 4
          }}
        >
          <Card
            className="glow-card"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              overflow: 'hidden',
              borderRadius: 4,
              background: isDarkMode ? '#374151' : '#fff',
              color: isDarkMode ? '#fff' : '#22223b',
              border: isDarkMode ? '1px solid #6b7280' : 'none',
              boxShadow: isDarkMode ? '0 4px 24px 0 rgba(99,102,241,0.2), 0 1.5px 8px 0 rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              minHeight: 340
            }}
          >
            <CardContent
              sx={{
                width: { xs: '100%', lg: '50%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: { xs: 4, md: 6 }
              }}
            >
              <Box display="flex" alignItems="center" mb={3}>
                <Box
                  component="img"
                  src={icon}
                  alt={`${title} Icon`}
                  sx={{
                    width: 48,
                    height: 48,
                    mr: 2,
                    borderRadius: '50%',
                    border: isDarkMode ? '2px solid #6b7280' : 'none',
                    filter: isDarkMode ? 'brightness(1.5)' : 'none',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'rotate(360deg)' }
                  }}
                  className="solution-icon"
                />
                <Typography variant="h5" fontWeight={600}>
                  {title}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: isDarkMode ? '#d1d5db' : '#22223b' }}>
                {description}
              </Typography>
            </CardContent>
            <Box
              sx={{
                width: { xs: '100%', lg: '50%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDarkMode ? '#1f2937' : '#fff',
                p: 3,
                cursor: 'pointer'
              }}
              onClick={handleOpenModal}
            >
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  maxWidth: '100%',
                  maxHeight: 320,
                  borderRadius: 4,
                  boxShadow: isDarkMode ? '0 2px 16px rgba(59,130,246,0.08)' : 'none',
                  filter: isDarkMode ? 'brightness(1.2)' : 'none',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
                className="carousel-image"
              />
            </Box>
          </Card>
          <IconButton
            aria-label="Previous"
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: 48,
              height: 48,
              bgcolor: isDarkMode ? '#374151' : '#fff',
              border: isDarkMode ? '1px solid #6b7280' : 'none',
              color: isDarkMode ? '#fff' : '#22223b',
              borderRadius: '50%',
              boxShadow: isDarkMode ? '0 2px 8px rgba(99,102,241,0.12)' : 'none',
              transition: 'all 0.3s',
              backdropFilter: 'blur(8px)',
              '&:hover': {
                bgcolor: isDarkMode ? '#6366f1' : '#6366f1',
                color: '#fff',
                transform: 'scale(1.1) translateY(-50%)'
              }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            aria-label="Next"
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: 48,
              height: 48,
              bgcolor: isDarkMode ? '#374151' : '#fff',
              border: isDarkMode ? '1px solid #6b7280' : 'none',
              color: isDarkMode ? '#fff' : '#22223b',
              borderRadius: '50%',
              boxShadow: isDarkMode ? '0 2px 8px rgba(99,102,241,0.12)' : 'none',
              transition: 'all 0.3s',
              backdropFilter: 'blur(8px)',
              '&:hover': {
                bgcolor: isDarkMode ? '#6366f1' : '#6366f1',
                color: '#fff',
                transform: 'scale(1.1) translateY(-50%)'
              }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <Modal
            open={modalOpen}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalOpen}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: 600,
                  width: '100%',
                  bgcolor: isDarkMode ? '#374151' : '#fff',
                  color: isDarkMode ? '#fff' : '#22223b',
                  border: isDarkMode ? '1px solid #6b7280' : 'none',
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: isDarkMode ? '0 2px 16px rgba(59,130,246,0.08)' : 'none',
                  }}
                />
              </Box>
            </Fade>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default SolutionsCarousel;
