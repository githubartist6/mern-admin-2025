import { useState } from "react";
import { useAuth } from "../store/auth";
const URL = "http://localhost:5000/api/form/contact";
import { toast } from 'react-toastify';

export const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        phone: "",
        email: "",
        message: "",
    });

    const [userData, setUserData] = useState(true);
    const { user } = useAuth();
    if (userData && user) {
        setContact({
            username: user.username,
            phone:user.phone,
            email: user.email,
            message: "",
        });
        setUserData(false);
    };

    // lets tackle our handleInput
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact)
            });

            if (response.ok) {
                toast.success("Thank you! We'll get back to you soon.");
                setContact((prev) => ({ ...prev, message: "" }));
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            };
        } catch (error) {
            console.log("contacts form", error);
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registeration">
                        <div className="container grid grid-tow-cols">
                            <div className="registration-image">
                                <img src="/contacts.png"
                                    alt="Contact Illustration"
                                    width="500"
                                    height="400"
                                />
                            </div>

                            {/* let tackle registration from */}
                            <div className="registration-form">
                                <form onSubmit={handleSubmit}>
                                    <h1 className="main-heading mb-3">Contact Us</h1>
                                    <div className="form-child">
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="enter your username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={contact.username}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div className="form-child">
                                        <label htmlFor="phone">phone</label>
                                        <input
                                            type="phone"
                                            name="phone"
                                            placeholder="enter your phone"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={contact.phone}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div className="form-child">
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="enter your email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={contact.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="form-child">
                                        <label htmlFor="message">message</label>
                                        <textarea
                                            name="message"
                                            placeholder="enter your message"
                                            id="message"
                                            required
                                            autoComplete="off"
                                            color="30"
                                            rows="5"
                                            value={contact.message}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button
                                        type="submit"
                                        className="btn btn-submit"
                                    >
                                        submit
                                    </button>


                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

            {/* 2nd section */}
            <section className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7160.968719850609!2d86.24743263895975!3d26.1809176365153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edd801e9b0b37f%3A0x1dc90e7d8f671f48!2sSakatraipur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1743614584508!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "0", width: "100%", height: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>


        </>
    )
};