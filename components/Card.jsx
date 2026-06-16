import React from 'react'

function Card({ title, desc }) {
  return (
    <div style={{ border: '1px solid #e5e4e7', borderRadius: 8, padding: 12, margin: 8 }}>
      <h3 style={{ margin: 0, marginBottom: 8 }}>{title}</h3>
      <p style={{ margin: 0 }}>{desc}</p>
    </div>
  )
}

export default Card
