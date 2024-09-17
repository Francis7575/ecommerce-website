import { Header, NewProduct, ShopItems, ViewProduct, Announcement, Footer } from '../components';
import { Headphones, Speakers, Earphones } from '../utils/constants';

const Home = () => {
    const newProductItem = Headphones.find(item => item.new);
    const firstSpeaker = Speakers[0]
    const secondSpeaker = Speakers[1]
    const earphones = Earphones[0]

    return (
        <>
            {newProductItem && (
                <NewProduct
                    new={newProductItem.new}
                    name={newProductItem.name}
                    to={newProductItem.to}
                />
            )}
            <ShopItems padding="pb-[96px]" />
            {firstSpeaker && secondSpeaker && earphones && (
                <ViewProduct
                    thirdTo={earphones.to}
                    firstTo={firstSpeaker.to}
                    secondTo={secondSpeaker.to}
                />
            )}
            <Announcement />
        </>
    )
}

export default Home;
