import React from 'react'
import { dummyProducts } from '@/dummyData';
import ProductCard from '@/components/ProductCard';

const Products = () => {
  return (
    <div className="flex flex-wrap gap-5 items-start mt-24 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full p-2 justify-center align-middle text-center">

        {
        dummyProducts.map((product) => (
            ProductCard(product)
        ))
        }

  
    </div>
  )
}

export default Products