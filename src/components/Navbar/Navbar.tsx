import Link from "next/link"

const Navbar = () => {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent:"center", alignItems: 'center'  }}>
        <div style={{padding: '8px 1rem', margin: '1rem'}}>
          <Link href="/">Table Component Test</Link>
        </div>
        <div>
          <Link href="/ReactTable">ReactTable Tanstack</Link>
        </div>
    </div>)
  }

export default Navbar