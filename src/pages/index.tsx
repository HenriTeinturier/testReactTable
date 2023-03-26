import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Table from '@/components/Table/Table'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  brand: string;
  description: string,
}
export type Columns = {header: string, key: keyof Product, compose?: Function}[];

const columns: Columns = [
  {
    header: 'Id',
    key: 'id',
    compose: (value:Product) => <span style={{fontWeight: '800'}}>{`${value.id}`}</span>
  },
  {
    header: 'Title',
    key: 'title'
  },
  {
    header: 'Price',
    key: 'price',
    compose: (value:Product) => <span style={{fontWeight: '700', color: value.price > 100 ? "green" : "blue"}}>{`${value.price}`}</span>
  },
  {
    header: 'Rating',
    key: 'rating',
    compose: (value:Product) => <span style={{fontWeight: '700'}}>{`${value.rating}`}</span>
  },
  {
    header: 'Brand',
    key: 'brand'
  }
];

export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setIsLoading(false);
      })
  }, [])
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>Table component Test</h1>
      {
        isLoading && <h1>Loading...</h1>
      }
      {
        !isLoading && <Table data={products} columns={columns} />
      }
    </div>
  )
 
  
}
