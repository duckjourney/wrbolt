// eslint-disable-next-line no-unused-vars
import navStyles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav >
      <ul className={navStyles.container}>
        <li className= {navStyles.list}>
          <a href="/" className={navStyles.link}>CHAMPIONS</a>
        </li>
        <li className= {navStyles.list}>
          <a href="/tierlist" className={navStyles.link}>TIER LIST</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
