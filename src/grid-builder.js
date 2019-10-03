import { GRASS } from './terrain-types'

const defaultSquare = {
  type: GRASS
}

const gridBuilder = (height, width) => {
  return [...Array(parseInt(height))].map((row, rowId) =>
    [...Array(parseInt(width))].map((square, columnId) => ({ ...defaultSquare, id: `row${rowId}column${columnId}` }))
  )
}

export default gridBuilder
