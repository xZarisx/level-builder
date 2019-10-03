import React from 'react'
import styled from 'styled-components'
import { terrainObject, terrainList } from './terrain-types'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Square = styled.label`
  border: solid black 1px;
  width: 25px;
  height: 25px;
  background-color: ${({ type }) => terrainObject[type].color};
`

const Dropdown = styled.select`
  height: 0;
  width: 0;

  &:focus {
    height: auto;
    width: auto;
  }
`

const Grid = ({ grid, setSquare }) => (
  <Wrapper>
    {grid.map((row, ri) => (
      <Row key={ri}>
        {row.map((square, si) => (
          <Square key={square.id} htmlFor={square.id} type={square.type}>
            <Dropdown onChange={(e) => setSquare(e.target.value, square.id)} id={square.id} value={square.type}>
              {terrainList.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Dropdown>
          </Square>
        ))}
      </Row>
    ))}
  </Wrapper>
)

export default Grid
