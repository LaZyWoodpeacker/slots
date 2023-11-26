import React from 'react'

export default function Loading() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#232323',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
      <h1>Loading...</h1>
    </div>
  )
}
