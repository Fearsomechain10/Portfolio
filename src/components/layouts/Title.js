import React from 'react'

const Ttile = ({title, des}) => {
  return (
    <div className="flex justify-center font-titleFont mb-14">
        <h1 className="text-5xl text-gray-300 font-bold capitalize">
          {" "}
          {title}{" "}
          <span className="text-designColor">{des}</span>
        </h1>
      </div>
  )
}

export default Ttile