import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
	sku: string;
	name: string;
	price: number;
};

const initState: ProductType[] = [
	{
		 "sku": "item0001",
		 "name": "Lesser key of Solomon Book",
		 "price": 9.99
	},
	{
		 "sku": "item0002",
		 "name": "American Tourister",
		 "price": 19.99
	},
	{
		 "sku": "item0003",
		 "name": "Wireless keyboard and mouse combo",
		 "price": 29.99
	}
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
	const [products, setProducts] = useState<ProductType[]>(initState);

   // const fetchProducts = async (): Promise<ProductType[]> => {
   //    const data = await fetch("http://localhost:3500/products")
   //       .then((res) => {
   //          return res.json();
   //       })
   //       .catch((err) => {
   //          if (err instanceof Error) console.error(err.message);
   //       });
   //    return data;
   // };
   
	// useEffect(() => {
	// 	fetchProducts().then((products) => setProducts(products));
	// }, []);

	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContext;
