import React from 'react'
import useCanvas from './useCanvas.jsx'
import predraw from './predraw'
import postdraw from './postdraw.js'

const Canvas = props => {

  const { draw, options, ...rest } = props
  const { context, ...moreConfig } = options
  const canvasRef = useCanvas(draw, {context}, {predraw,postdraw})
  
  return <canvas className='fixed top-0 left-0 z-[-1]' ref={canvasRef} {...rest}/>
}

export default Canvas