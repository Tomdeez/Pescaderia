'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedElementProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

const AnimatedElement = ({ 
  children, 
  delay = 0,
  ...props 
}: AnimatedElementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: 'easeOut'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;