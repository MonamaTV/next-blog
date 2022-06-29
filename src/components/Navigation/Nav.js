import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                <h3><Link href="/">  TadBlog</Link></h3>
                </div>
                <ul className={styles.menu}>
                        <li className={styles.menu_item}><Link href={"/"}>Blog</Link></li>
                    <li className={styles.menu_item}><Link href={"/about"}>About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;