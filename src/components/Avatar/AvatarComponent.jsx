import React, { useEffect, useRef } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const Avater = () => {
  const group = useRef();
  let animation = '.Angry.fbx'
  const { scene } = useGLTF('https://models.readyplayer.me/681853b9f81efbcb1fd2ebf9.glb');
  let targetColor = new THREE.Color();
  let currentColor = new THREE.Color();

  useEffect(() => {
    if (!scene) return;

    scene.scale.set(2, 2, 2);
    scene.position.set(0, -2, 0);

    scene.traverse((child) => {
      if (child.isMesh) {
        const name = child.userData.name || child.name;
        if (name?.includes('Wolf3D_Outfit_Top')) {
          setInterval(() => {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            targetColor.set(randomColor);
            const transitionSpeed = 0.1;

            const lerpedColor = currentColor.clone().lerp(targetColor, transitionSpeed);
            child.material.color.set(lerpedColor);
            currentColor = lerpedColor;
          }, 2000);
        }
      }
    });
  }, [scene]);

  return <primitive ref={group} object={scene} />;
};

const AvatarComponent = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Avater />
    </Canvas>
  );
};

export default AvatarComponent;
