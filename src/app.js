import React, { useState, useEffect } from 'react'
import isEqual from 'lodash.isequal'
import LevelSizeDropdown from './level-size-dropdown'
import gridBuilder from './grid-builder'
import Grid from './grid'
import GridRawInput from './grid-raw-input'

const App = () => {
  const [height, setHeight] = useState(2)
  const [width, setWidth] = useState(2)
  const [grid, setGrid] = useState([[]])

  useEffect(() => {
    // the raw grid input will set it to the correct height and this will override the grids inner settings
    if (height !== grid.length || width !== grid[0].length) {
      setGrid(gridBuilder(height, width))
    }
  }, [grid, height, width])
  return (
    <div>
      <LevelSizeDropdown
        height={height}
        setHeight={(e) => {
          setHeight(parseInt(e.target.value))
        }}
        width={width}
        setWidth={(e) => {
          setWidth(parseInt(e.target.value))
        }}
      />
      <Grid
        grid={grid}
        setSquare={(value, id) => {
          const row = id.match(/row(\d+)/)[1]
          const square = id.match(/column(\d+)/)[1]
          const newGrid = [...grid]
          const newRow = [...newGrid[row]]
          newRow[square] = { ...newGrid[row][square], type: value }
          newGrid[row] = newRow
          setGrid(newGrid)
        }}
      />
      <GridRawInput
        rawGridValue={JSON.stringify(
          {
            height,
            width,
            grid
          },
          null,
          2
        )}
        setRawGrid={(rawValue) => {
          // JSON.parse can throw
          try {
            const { height: rawHeight = 1, width: rawWidth = 1, grid: rawGrid = [] } = JSON.parse(rawValue)
            if (height !== parseInt(rawHeight)) {
              setHeight(parseInt(rawHeight))
            }
            if (width !== parseInt(rawWidth)) {
              setWidth(parseInt(rawWidth))
            }
            if (!isEqual(grid, rawGrid)) {
              setGrid(rawGrid)
            }
          } catch (error) {
            console.log(error)
          }
        }}
      />
    </div>
  )
}

export default App
