import React, { useState } from 'react'
import cats from '../data/categories.json'

function Categories() {
  const [dropdownArr, setDropdownArr] = useState(new Array(cats.length).fill('none'))

  const handleMouseOver = (ind) => {
    const newDropdownArr = [...dropdownArr]
    newDropdownArr[ind] = 'block'
    setDropdownArr(newDropdownArr)
  };

  const handleMouseLeave = (ind) => {
    const newDropdownArr = [...dropdownArr]
    newDropdownArr[ind] = 'none'
    setDropdownArr(newDropdownArr)
  };

  return (
    <>
      <div className='categories'>
        {
          cats.map((cat, index) => {
            return (
              <>
                <div
                  className="cat"
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseLeave(index)}
                >{cat.name}</div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories
