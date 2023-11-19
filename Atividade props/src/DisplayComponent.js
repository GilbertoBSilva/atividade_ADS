import React from 'react';
import { motion } from 'framer-motion';

const DisplayComponent = ({ inputData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Dados Recebidos:</h2>
      <p>{inputData}</p>
    </motion.div>
  );
};

export default DisplayComponent;
