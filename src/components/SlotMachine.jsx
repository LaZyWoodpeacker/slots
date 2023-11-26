import React, { useRef, useState, memo } from 'react'
import SpinLine from './SpinLine'
import Box from './Box'
import Glass from './Glass'
import LeverArm from './LeverArm'

export default function SlotMachine({ nodes, set, OnSpinReady, OnSpin, busy }) {
  return (
    <>
      <Box position={nodes.Box.position} />
      <SpinLine
        cylinderModel={nodes.Cylinder}
        position={nodes.Cylinder.position}
        set={set}
        OnSpinReady={OnSpinReady}
        rounds={5}
      />
      <Glass position={nodes.Glass.position} />
      <LeverArm objects={nodes} OnSpin={OnSpin} busy={busy} />
    </>
  )
}
