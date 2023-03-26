import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'

const ReactTable = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>ReactTable Tanstack</h1>

    </div>
  )
}

export default ReactTable