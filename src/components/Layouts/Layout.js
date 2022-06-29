import Footer from "../Footer/Footer";
import Nav from "../Navigation/Nav";

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
} 