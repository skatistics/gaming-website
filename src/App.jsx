import React from 'react'
import { useState, useEffect } from 'react'
function App() {
  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.igdb.com/v4/artworks').then((res) => {return res.json();}).then((data)=>{console.log(data); setImages(data);});
  // }, []);

  useEffect(() => {
    fetch('https://api.igdb.com/v4/artworks', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
      

      },
    body: "fields image_id"
    }).then((res) => {return res.json();}).then((data)=>setImages(data))
  }, []);
      

  return (
    images && (
      <div>
        {
          images.map((image)=>{ 
            return (
              <div key={ image.id } className='flex' >
                <h1 >
                  ANG UNANG ITEM AY { image.game }
                </h1>
                
                
          
              
              
                <img src={image.url} alt="wala" className='size-[200px] border-2 border-black'/>

            </div>
            )
          })
        }
      </div>
    )
  )   
}
export default App