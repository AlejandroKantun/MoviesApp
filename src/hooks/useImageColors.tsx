import React, { useEffect, useState } from 'react'
import ImageColors  from 'react-native-image-colors'

export const useImageColors =  (url:string) => {

  const getColorsFromURL = async() =>{  

        const colorsresponse =   await ImageColors.getColors(url, {
            fallback: '#228B22',
            cache: true,
            key: url,
            });
        console.log(colorsresponse);
  }
  useEffect(() => {
    getColorsFromURL();
}, [])
  
  return{
    
  }
  
}