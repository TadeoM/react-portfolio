import React, {useState} from 'react'
import classNames from 'classnames';

const CarouselItem = (item, buttonsClickable, imgSize) => {
  const [active, setActive] = useState(false)
  let imageSize = item.imgSize

  return (
    <div className={`m-5 h-[${imageSize}px] w-72 bg-white rounded-lg overflow-hidden relative`} onMouseEnter={() =>setActive(true)} onMouseLeave={()=>setActive(false)}>
      <button className={`h-full ${buttonsClickable == 'false'? 'pointer-events-none' : ''}`} onClick={console.log("click")}>
        <img className='h-full' src={item.item.images[0]} />
      <div className={classNames('carousel-item-text text-sm bottom-1 py-2 px-0 whitespace-normal text-black absolute left-4 bg-blue-500 rounded-sm w-24 h-16 transition-all duration-1000', {
        "opacity-0": !active,
        "bottom-[-100px]": !active
      })}>{item.item.summary}</div>
      </button>
    </div>
  )
}

export default CarouselItem
