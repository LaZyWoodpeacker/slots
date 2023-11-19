import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function Oclusion() {
  return <Environment preset="forest" background blur={0.5} />;
}
