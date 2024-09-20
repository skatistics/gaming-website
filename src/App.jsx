import React from 'react'
import { useState, useEffect } from 'react'
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((res) => {return res.json();}).then((data)=>{console.log(data); setProducts(data);});
  }, []);

  return (
    products && (
      <div>
        {
          products.map((product)=>{ return (<h1 key={ product.id }>
            ANG UNANG ITEM AY { product.title }
          </h1>)
            
          })
        }
      </div>
    )
  )   
}
export default App