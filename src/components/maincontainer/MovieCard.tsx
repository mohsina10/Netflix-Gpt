import React, { FC } from 'react'
import { MovieCardProps } from '../../utils/TypeScrptProps'
import { IMG_CDN_URL } from '../../utils/Constant';

const MovieCard:FC<MovieCardProps> = ({path}) => {
  return (
    <div className='w-48'>
       <img alt='Movie Image' src={`${IMG_CDN_URL}${path}`}/>
    </div>
  )
}

export default MovieCard;