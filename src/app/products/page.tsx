import Link from 'next/link';
import React from 'react'

const ProductList = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product list</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3">Product 3</Link>
      </h2>
    </>
  )
}

export default ProductList;