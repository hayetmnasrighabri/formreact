import React, { useState } from 'react'
import Input from './components/Input'
import Checkbox from './components/Checkbox'
import ProductCategoryRow from './products/ProductCategoryRow'
import ProductRow from './products/ProductRow'
const PRODUCTS=[
  {category: "Fruits", price: "$1", stocked: true, name:"Apple"},
  {category: "Fruits", price: "$1", stocked: true, name:"Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name:"Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name:"Spinach"},
  {category: "Vegetables", price: "$4", stocked: true, name:"PumpKin"},
  {category: "Vegetables", price: "$1", stocked: true, name:"Peas"},
 ]
function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch]=useState('')
  
   const visibleProducts = PRODUCTS.filter(product=>{
    if (showStockedOnly && !product.stocked) {
      return false
    }
    if (search && !product.name.includes(search)){
      return false
    }
     return true
   })
  return (
    <div className='container my-3'>
      <Searchbar
          search={search}
          onSearchChange={setSearch}
          onStockedOnlyChange={setShowStockedOnly}
          showStockedOnly={showStockedOnly}/>
      <ProductTable products={visibleProducts}/>
    </div>
  )
}
function Searchbar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}){
  
  return(
    <div className=' mb-3'>
      <div >
      <Input 
         placeholder="Rechercher..." 
         value={search} 
         onChange={onSearchChange} 
      />
      <Checkbox 
        id="stocked" 
        checked={showStockedOnly} 
        onChange={onStockedOnlyChange} 
        label="N'afficher que les produits en stock"
        />
    </div>
    </div>
  )
}
function ProductTable({products}){
   const rows=[]
   let lastCategory = null
   for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name}/>)
   }
  return(
    <table className="table">
      <thead>
        <tr>
      <th>Nom</th>
      <th>Prix</th>
      </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
export default App
