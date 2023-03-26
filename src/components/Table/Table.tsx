import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

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

export default function Table({data, columns}: {data: Product[], columns: Columns}) {



  return (
      <table style={{ width: '90%', margin: 'auto', border: '1px solid black', backgroundColor: '#fafafa', borderRadius: '10px'}}>
        <thead style={{backgroundColor: 'lightgrey'}} >
          <tr >
            {
              columns.map((column) => {
                return (
                  <th key={column.header} style={{padding: '8px 16px'}}>{column.header}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((product) => {
              return (
                <tr key={product.id}>
                  {
                    columns.map((column) => {
                      if (column.compose) {
                        return (
                          <td key={column.key} style={{textAlign: 'center'}}>
                            {column.compose(product)}
                          </td>
                        )
                      } else {
                        return (
                          <td key={column.key}>
                            {product[column.key]}
                          </td>
                        )
                      }
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>

      </table>


  )
}