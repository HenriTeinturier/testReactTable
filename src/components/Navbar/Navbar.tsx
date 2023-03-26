import Link from "next/link"
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter();
  
  return (
    <div style={{width: '100%', display: 'flex', justifyContent:"center", alignItems: 'center'  }}>
        <div style={{padding: '8px 1rem', margin: '1rem'}}>
          <Link className={`${styles.link} ${router.asPath === '/' ? styles.active : ''}`} href="/">Table Component Test</Link>
        </div>
        <div>
          <Link className={`${styles.link} ${router.asPath === '/ReactTable' ? styles.active : ''}`}  href="/ReactTable">ReactTable Tanstack</Link>
        </div>
    </div>)
  }

export default Navbar