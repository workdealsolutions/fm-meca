import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model from '../../Model';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Innovation = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      navigate('/' + href);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative',
      top: 0
    }}>
      <Navbar onNavigate={handleNavigation} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="innovation-showcase"
        style={{
          flex: 1,
          width: '100%',
          position: 'relative',
          background: isDark ? '#000000' : '#ffffff',
        }}
      >
        <div style={{ 
          width: '100%', 
          height: isMobile ? 'calc(100vh - 200px)' : 'calc(100vh - 140px)',
          position: 'relative'
        }}>
          <Canvas
            camera={{ 
              position: isMobile ? [7, 7, 7] : [5, 5, 5], 
              fov: isMobile ? 60 : 45 
            }}
            style={{ 
              background: isDark ? '#000000' : '#ffffff',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            shadows
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} /> {/* Reduced ambient light */}
              <pointLight 
                position={[10, 10, 10]} 
                intensity={2}
                castShadow
              />
              <spotLight
                position={[-10, 15, -10]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
              />
              <Model 
                scale={isMobile ? [3, 3, 3] : [5, 5, 5]}
                position={isMobile ? [0, -1, 0] : [0, 0, 0]}
                rotation={[0, Math.PI / 4, 0]}
              />
              <OrbitControls 
                autoRotate
                enableZoom={true}
                enablePan={isMobile ? false : true}
                minDistance={isMobile ? 4 : 2}
                maxDistance={isMobile ? 10 : 15}
              />
              <Environment preset="warehouse" intensity={1.5} />
              <gridHelper args={[20, 40]} position={[0, -0.01, 0]} />
            </Suspense>
          </Canvas>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Innovation;
