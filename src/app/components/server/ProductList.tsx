import './ProductList.scss'

export interface Product {
  productId: number
  name: string
  price: number
}

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="product-container">
      {products.map(product => (
        <div className="product-card" key={product.productId}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}