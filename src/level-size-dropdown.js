import React from 'react'

const possibleSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const LevelSizeDropdown = ({ height, setHeight, width, setWidth }) => (
  <div>
    <h3>Width</h3>
    <select onChange={setWidth} value={width}>
      {possibleSizes.map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
    <h3>Height</h3>
    <select onChange={setHeight} value={height}>
      {possibleSizes.map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
  </div>
)

export default LevelSizeDropdown
