import { Header, NewProduct, ShopItems, ViewProduct, Announcement, Footer } from '../components'

const Home = () => {
    return (
        <>
            <Header />
            <NewProduct />
            <ShopItems padding="pb-[120px]" />
            <ViewProduct />
            <Announcement />
            <Footer />
        </>
    )
}

export default Home