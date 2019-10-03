import React from 'react'

const GridRawInput = ({ rawGridValue, setRawGrid }) => (
  <div>
    <textarea rows="20" cols="80" onChange={(e) => setRawGrid(e.target.value)} value={rawGridValue} />
  </div>
)

export default GridRawInput
