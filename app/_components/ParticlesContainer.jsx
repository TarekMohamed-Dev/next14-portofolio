// ParticlesContainer.jsx
'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useTheme } from 'next-themes';

const ParticlesContainer = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [particleColor, setParticleColor] = useState('#284979');
  const [linkColor, setLinkColor] = useState('#587cB2');

  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  // Update colors based on the current theme
  useEffect(() => {
    if (theme === 'dark' || resolvedTheme === 'dark') {
      setParticleColor('#e68e2e');
      setLinkColor('#f5d393');
    } else {
      setParticleColor('#284979');
      setLinkColor('#587cB2');
    }
    setMounted(true);
  }, [theme, resolvedTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative w-full h-full">
      <Particles
        className="w-full h-full absolute translate-z-0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: '',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 90,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: particleColor,
            },
            links: {
              color: linkColor,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesContainer;
