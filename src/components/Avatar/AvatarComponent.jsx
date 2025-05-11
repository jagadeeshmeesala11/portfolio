import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Avatar = () => {
  const group = useRef();

  // Load avatar from CDN
  const { scene: avatarScene, nodes, materials } = useGLTF('https://models.readyplayer.me/681853b9f81efbcb1fd2ebf9.glb');

  // Load animation from public folder
  const { animations } = useGLTF('/one.glb');

  // Bind animation to avatar's skeleton
  const { actions } = useAnimations(animations, group);

  const clock = useRef(new THREE.Clock());

  useEffect(() => {
    // Attach the avatar to the group
    if (avatarScene) {
      avatarScene.scale.set(1.5, 1.5, 1.5);
      avatarScene.position.set(0, -1, 0);
      group.current.add(avatarScene);
    }

    // Play animation
    if (actions && animations.length > 0) {
      const action = actions[animations[0].name];
      action?.reset().fadeIn(0.5).play();
    }
  }, [avatarScene, actions, animations]);

  // Add idle float
  useFrame(() => {
    const t = clock.current.getElapsedTime();
    if (group.current) {
      group.current.position.y = -2 + Math.sin(t * 2) * 0.1;
      group.current.rotation.y = Math.sin(t) * 0.1;
    }
  });

  return <group ref={group} />;
};

const AvatarComponent = () => (
  <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[4, 3, 3]} intensity={3} />
    <OrbitControls enableZoom={false} />
    <Avatar />
  </Canvas>
);

export default AvatarComponent;
