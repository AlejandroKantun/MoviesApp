import getColors from 'react-native-image-colors';

export const getArrayColor = async (fullPosterUri:string )=>{

    let primary:string='#084F6A';
    let secondary:string='#75CEDB';

      const colorsresponse =   await getColors.getColors(fullPosterUri, {
          fallback: '#228B22',
          cache: true,
          key: fullPosterUri,
          });

      
      if (colorsresponse.platform==='android')
      {
        primary =colorsresponse.dominant!.toString();
        secondary=colorsresponse.vibrant!.toString();
      }
      else if(colorsresponse.platform==='ios') {
        primary =colorsresponse.primary!.toString();
        secondary=colorsresponse.secondary!.toString();
      }
      console.log('primary ' +primary + ' , secondary: '+ secondary)

      return[primary,secondary]
  }