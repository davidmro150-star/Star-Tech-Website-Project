import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={` mx-auto max-w-352.5 ${className}`}>{children}


    </div>
  )
}

export default Container