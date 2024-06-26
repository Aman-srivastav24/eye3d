import React, { useRef, useState } from 'react';
import { useGLTF, useAnimations,Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Eye.gltf');
  const { actions } = useAnimations(animations, group);
  const { gl, camera, scene } = useThree();
  const [intersectedPoint, setIntersectedPoint] = useState(null);
  const cornea =[0.5,0.5,-1];
  const retina = [0.8,-1,-1.9]

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const handleClick = (event) => {
    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(group.current, true);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0];
      const intersectedPosition = intersectedObject.point;
      setIntersectedPoint(intersectedPosition);
      console.log('Intersected position:', intersectedPosition);
    }
  };

  useFrame(() => {
    if (intersectedPoint) {
      // You can add any logic you need to update or highlight the intersected point
      console.log('Intersected point coordinates:', intersectedPoint);
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerDown={handleClick}
    >
      <group name="Scene">
        <group name="Empty" rotation={[Math.PI, 0, Math.PI]} scale={2.8} />
        <mesh name="object_0" geometry={nodes.object_0.geometry} material={materials.object_0} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_1" geometry={nodes.object_1.geometry} material={materials.object_1} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_2" geometry={nodes.object_2.geometry} material={materials.object_2} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_3" geometry={nodes.object_3.geometry} material={materials.object_3} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_4" geometry={nodes.object_4.geometry} material={materials.object_4} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_6" geometry={nodes.object_6.geometry} material={materials.object_6} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_7" geometry={nodes.object_7.geometry} material={materials['Procedural Glass for Windows']} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_8" geometry={nodes.object_8.geometry} material={materials.object_8} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_9" geometry={nodes.object_9.geometry} material={materials.object_9} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_10" geometry={nodes.object_10.geometry} material={materials.object_10} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_11" geometry={nodes.object_11.geometry} material={materials.object_11} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_12" geometry={nodes.object_12.geometry} material={materials.object_12} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_13" geometry={nodes.object_13.geometry} material={materials.object_13} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_14" geometry={nodes.object_14.geometry} material={materials.object_14} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="object_15" geometry={nodes.object_15.geometry} material={materials.object_15} rotation={[Math.PI / 2, 0, 0]} scale={1} />
        <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.008']} position={[0, 0.002, 0.009]} rotation={[1.505, 0, 0]} scale={0.8} />
        <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials.Head} position={[-0.002, -0.001, 0.01]} rotation={[1.505, 0, 0]} scale={0.8} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.003']} position={[0.008, 0.007, -0.004]} rotation={[Math.PI, 0, -2.823]} scale={[0.6, 1, 1]} />
      </group>
      <Html position={cornea} distanceFactor={10}>
        <div className="label" title='Cornea'>c</div>
      </Html>
      <Html position={retina} distanceFactor={10}>
        <div className="label" title='Retina' >r</div>
      </Html>
    </group>
  );
}

useGLTF.preload('/Eye.gltf');
