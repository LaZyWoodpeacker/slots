import React, { useCallback, useState } from 'react'

export default function Overlay({ text }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        color: 'white'
      }}>
      <h1>{JSON.stringify(text)}</h1>
    </div>
  )
}
