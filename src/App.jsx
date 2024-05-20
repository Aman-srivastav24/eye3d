import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Eye from '../public/Eye.jsx'; // Correct path to Earth component
import { div } from 'three/examples/jsm/nodes/Nodes.js';

function App() {
  // const indiaPosition = [1, 1, -1]; // Replace with your desired coordinates

  return (
  <>    <Canvas>
      <ambientLight  />
      <OrbitControls />
      <Suspense fallback={null}>
        <Eye />
      </Suspense>      
    </Canvas>
    <h1>Eye 3D Model</h1>
    </>

  );
}

export default App;
