import { createContext, ReactElement, useEffect, useState } from 'react';

export type ProductType = {
  name: string,
  type: string,
  storage: number,
  id: string
}

const initState: ProductType[] = [];

export type useProductsContextType = { products: ProductType[] }

const initContextState: useProductsContextType = { products: [] }

const ProductsContext = createContext<useProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);
  
  // npx json-server -w data/products.json -p 3500
  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch('http://localhost:3500/products')
      .then(res => {
        return res.json()
      })
      .catch(err => {
        if (err instanceof Error) console.log(err.message)
      })
      return data
    }
    fetchProducts().then(products => setProducts(products))
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
};

export default ProductsContext;