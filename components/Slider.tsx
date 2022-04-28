const slide1 = require("../public/slider/slide-1.jpeg").default.src
const slide2 = require("../public/slider/slide-2.jpeg").default.src
const slide3 = require("../public/slider/slide-3.jpeg").default.src

export default function Slider() {
    return(
        <div className="slider rigth">
            <div className="slide open">
                <div className="content">
                    <h2 className="title">Dog<br/>collars</h2>
                    <div className="count">
                        <p className="number">3</p>
                        <p className="text">models</p>
                    </div>
                </div>
                <img src={slide1} alt="test" />
            </div>
            <div className="slide">
                <div className="content">
                    <h2 className="title">Harnesses</h2>
                    <div className="count">
                        <p className="number">3</p>
                        <p className="text">models</p>
                    </div>
                </div>
                <img src={slide2} alt="test" />
            </div>
            <div className="slide">
                <div className="content">
                    <h2 className="title">Accessories</h2>
                    <div className="count">
                        <p className="number">3</p>
                        <p className="text">models</p>
                    </div>
                </div>
                <img src={slide3} alt="test" />
            </div>
        </div>
    )
}