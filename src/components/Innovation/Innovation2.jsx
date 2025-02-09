import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Model2 from '../../Model2';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Innovation2 = () => {
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

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      navigate('/' + href);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
              position: isMobile ? [-4, 5, 4] : [-3, 4, 3], 
              fov: isMobile ? 60 : 50 
            }}
            style={{ background: isDark ? '#000000' : '#ffffff' }}
            shadows
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.3} />
              <pointLight 
                position={[10, 10, 10]} 
                intensity={2.5}
                castShadow
              />
              <spotLight
                position={[-10, 15, -10]}
                angle={0.3}
                penumbra={1}
                intensity={1.5}
                castShadow
              />
              <Model2 
                scale={isMobile ? [2.5, 2.5, 2.5] : [4, 4, 4]}
                position={isMobile ? [-3, 0.1, 0] : [-5, 0.1, 0]}
              />
              <OrbitControls 
                autoRotate
                enableZoom={true}
                enablePan={isMobile ? false : true}
                minDistance={isMobile ? 3 : 2}
                maxDistance={isMobile ? 8 : 10}
              />
              <Environment preset="studio" intensity={2.0} />
              <gridHelper args={[20, 40]} position={[0, -0.01, 0]} />
            </Suspense>
          </Canvas>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Innovation2;
