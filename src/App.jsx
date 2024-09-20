import React from 'react'
import { useState, useEffect } from 'react'
function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((res) => {return res.json()}).then((data)=>{setProducts(data)});
  }, [])

  return (
    products && (
      <div>
        {
          products.map((product)=>{
            <div>
              ANG UNANG ITEM AY { product.title }
            </div>
          })
        }
      </div>
    )
  )   
}
export default App