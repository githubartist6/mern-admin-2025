import { useAuth } from "../store/auth";

export const Service = () => {
    const { services } = useAuth();

    return (
        <>
            <section className="section-services">
                <div className="container">
                    <h1 className="main-heading">Services</h1>
                </div>
                <div className="container grid grid-three-cols">
                    {
                        services.map((curElem, index) => {
                            const { image, provider, price, serviceName, description } = curElem;

                            return (
                                <div className="card" key={index}>
                                    <div className="card-img">
                                        <img
                                            src="/Web-Development.png"
                                            alt="Web-Development"
                                            width={200}
                                        />
                                    </div>

                                    <div className="card-details">
                                        <div className="grid-two-cols">
                                            <p>Provider: {provider}</p>
                                            <p>Price: ₹{price}</p>
                                        </div>
                                        <h2>ServiceName: {serviceName}</h2>
                                        <p>Description: {description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
};