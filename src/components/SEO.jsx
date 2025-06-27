import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = '1MB Healthy - AI-Driven Personal Health Companion | ABHA Integration & Predictive Healthcare',
  description = '1MBHealthy is an AI-powered healthcare super app offering ABHA integration, personalized health profiles, clinical-grade insights, and predictive care.',
  keywords = 'AI in Health Care, Personal Health Profile, Health Calendar, Digital Health Locker, Family Health Management, Personalization of health, Digitization of Health, Health Diary, ABHA integration, Health Copilot, Health OCR, Generic EMR, Generic EHR, AI Driven Clinical Diagnosis, AI Driven Prescription, Clinical Chatbot, Bio-marker driven diagnosis, AI Doctor, Diagnose, 1MB Healthy, 1MBHealthy, doctor-patient interactions, AI-Driven Personalization, Integrated Health Ecosystem, Hyper-Personalized Wellness Plans, real-time physiological data, AI-driven health insights, personalized health recommendations, Clinical-Grade Insights, Healthcare Super App, Predictive Healthcare, Preventive Healthcare, Health Profile, Health Marketplace, ABHA Creation, Ayushman Bharat, Drug Drug Interaction, Personal Health care',
  image = 'https://1mbhealthy.com/mainlogo.png',
  url = 'https://1mbhealthy.com',
  type = 'website',
}) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/svg+xml" href="/mainlogo.png" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="1MB Healthy" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type,
          name: title,
          description: description,
          url: url,
          image: image,
          publisher: {
            '@type': 'Organization',
            name: '1MB Healthy',
            logo: {
              '@type': 'ImageObject',
              url: 'https://1mbhealthy.com/mainlogo.png',
            },
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;