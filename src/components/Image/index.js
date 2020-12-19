import React from 'react'
import NextImage from 'next/image'

const Image = ({ circle = false, ...props }) => {
  let ImageClass = 'Image'
  // custom class
  if (props.className) {
    ImageClass += ` ${props.className}`
    delete props.className
  }
  if (circle) ImageClass += ' Image_Circle'

  return (<div className={ImageClass}>
    <NextImage
      unoptimized={true}
      {...props}/>
  </div>)
}

export default Image
