import React, { useEffect, useRef, useState } from "react";
import { normalize } from "./tools";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useSpring, easings } from "@react-spring/three";
import texture from "./textures/mainspin.png";

export default function OneSpin({
  set = [1, 0],
  animationSpeed = 1000,
  position = [0, 0, 0],
  onReady = () => {},
}) {
  const objRef = useRef();
  const textureMap = useLoader(TextureLoader, texture);
  const [spinning, setSpinning] = useState(false);

  const springProps = useSpring({
    config: { duration: animationSpeed, easing: easings.easeInOutSine },
    to: {
      rotation: normalize(set[0]) + Math.PI * 2 * set[1],
    },
    from: {
      rotation: 0,
    },
    onRest: () => {
      setSpinning(false);
      onReady();
    },
  });

  useEffect(() => {
    setSpinning(true);
  }, [set]);

  useEffect(() => {
    objRef.current.rotation.z = Math.PI / 2;
  }, []);

  useFrame((state, delta) => {
    if (spinning) {
      objRef.current.rotation.x =
        springProps.rotation.animation.values[0]._value;
    } else {
      springProps.rotation.reset();
      objRef.current.rotation.x = normalize(set[0]);
    }
  });

  return (
    <group ref={objRef}>
      <mesh position={position}>
        <cylinderGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial map={textureMap} />
      </mesh>
    </group>
  );
}
