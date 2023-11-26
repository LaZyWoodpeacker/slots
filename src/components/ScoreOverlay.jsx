import React, { useCallback, useState } from 'react'

export default function ScoreOverlay({ coins }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        color: 'white',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <pre
        style={{
          fontSize: '2rem'
        }}>
        {JSON.stringify(coins, null, 2)}
      </pre>
    </div>
  )
}
