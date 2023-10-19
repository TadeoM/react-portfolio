import React, {useState} from 'react'
import CarouselItem from './CarouselItem'
import {ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/solid'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Carousel = (items, imgSize) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let itemList = items.items
  let imageSize = items.imgSize
  let carouselIndexMax = itemList.length - 1
  // how can I get width of a div? I want to dynamically decide how many indices there will be in the

  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
      newIndex = carouselIndexMax - 1;
    }
    else if (newIndex >= carouselIndexMax){
      newIndex = 0;
    }
    //console.log(newIndex)
    setActiveIndex(newIndex);
  }
  
  const getActiveIndicator = (index) => {
    if (index == activeIndex)
    {
      return <RadioButtonCheckedIcon className='material-symbols-outlined p-1' />;
    }
    return<RadioButtonUncheckedIcon className='material-symbols-outlined p-1' />;
  }

  const carouselPages = () => {
    let content = []
    for (let index = 0; index < carouselIndexMax; index++) {
      content.push
      (
        <button key={index} className={`indicator-button ${activeIndex == index % carouselIndexMax ? 'underline' : ''}`} onClick={() =>setActiveIndex(index)}>
          { getActiveIndicator(index) }
        </button>
      )
    }
    return content
  }

  return (
    <div className='h-screen'>
      <div className='overflow-hidden'>
        <div 
          className='flex justify-center items-center duration-75 shadow-lg shadow-black transition-all '
          style={{
            transform: `translate(-${(activeIndex * imageSize)}px)`,
            width: imageSize*itemList.length
          }}
        >
          {
            itemList.map((item, index) => {
              return <CarouselItem key={index} item={item} width={"100%"} imgSize={imageSize}/>;
            })
          }
        </div>
      </div>
      {/*
        each time button clicked, translate by amount equal to each item's width (384px)
      */}
      <div className='carousel-buttons flex'>
        <button className='w-10'
          onClick={()=>{
            updateIndex(activeIndex - 1)
          }}> <ChevronLeftIcon/>
        </button>
        <div className='indicators m-auto'>
            { carouselPages() }
        </div>
        <button 
        className='w-10'
        onClick={()=>{
          updateIndex(activeIndex + 1)
        }}><ChevronRightIcon /></button>
      </div>
    </div>
  )
}

export default Carousel