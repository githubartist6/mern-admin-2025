import { Link } from "react-router-dom"
import { Analytics } from "../components/UI/Analytics";
export const Home = () => {
    return (
        <>
            {/* 1 section code */}
            <main>
                <section className="section-hero">
                    <div className="container grid grid-tow-cols">
                        <div className="hero-container">
                            <p>We are the World Best IT Company</p>
                            <h1>Welcom to JKCODER01</h1>
                            <p>
                                Are you ready to tak eyour business to the next level with cutting-edge IT solutionS? Look no further! At Jkcoder01, we specialixe in providing innovativ It services and solutions tailored to meet your unique need.
                            </p>
                            <div className="btn btn-group">
                                <Link to="/contact">
                                    <button className="btn">connect Now</button>
                                </Link>
                                <Link to="/service">
                                    <button className="btn secondary-btn">learn more</button>
                                </Link>
                            </div>
                        </div>

                        {/* hero images */}
                        <div className="hero-image">
                            <img src="https://www.shakebugs.com/wp-content/uploads/2022/05/Collaborative-coding-tools-for-remote-pair-programming.png" alt="coding together" width={800} height={500} />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section */}
            <Analytics />

            {/* 3rd section */}
            <section className="section-hero">
                <div className="container grid grid-tow-cols">

                    {/* hero images */}
                    <div className="hero-image">
                        <img src="https://www.shakebugs.com/wp-content/uploads/2022/05/Collaborative-coding-tools-for-remote-pair-programming.png" alt="coding together" width={400} height={500} />
                    </div>
                    <div className="hero-container">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                            Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consulation and let's discuss how Jkcoder01 can help your business thrive in the digital age.
                        </p>
                        <div className="btn btn-group">
                            <Link to="/contact">
                                <button className="btn secondary-btn3">connect Now</button>
                            </Link>
                            <Link to="/service">
                                <button className="btn">learn more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};