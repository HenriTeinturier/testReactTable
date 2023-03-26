import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import { useEffect, useState } from 'react';
import TanstackTable from '@/components/TanstackTable/TanstackTable';

export type ShowResponseType = {
  genres: string[];
  id: number;
  name: string,
  type: string,
  runtime: any,
  language: string,
  status: string,
  netWork: {
    country: {code: string, name: string, officialSite: string};
    id: number;
    name: string;
  }
}[];

export type Column = {
  Header: string, 
  accessor: string,
};

const ReactTable = () => {

  const [data, setData] = useState<ShowResponseType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const columns: Column[] = [

          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
          {
            Header: "Language",
            accessor: "show.language",
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres",
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
    ] 
  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.tvmaze.com/search/shows?q=snow")
      .then(res => res.json())
      .then(data => {
        setData(data.map((item:any) => item.show));
      })  
    setIsLoading(false);
  }, [])

  console.log(data);

  


  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>ReactTable Tanstack</h1>
      {
        isLoading && <h1>Loading...</h1>
      }
      {
        !isLoading && <TanstackTable columns={columns} data={data} />
      }
    </div>
  )
}

export default ReactTable