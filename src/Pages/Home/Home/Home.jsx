import About from "../About/About";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import Card from "../Services/Card";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Card></Card>
            <Services></Services>
            <Portfolio></Portfolio>
            <Reviews></Reviews>
            <Counter></Counter>
        </div>
    );
};

export default Home;