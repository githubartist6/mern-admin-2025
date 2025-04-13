import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const URL = "http://localhost:5000/api/auth/register"
import { toast } from 'react-toastify';

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Back end connected
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();

            if (response.ok) {
                toast.success("Success! You're now registered.");
                // stored the token in localhost
                storeTokenInLS(res_data.token);
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("Invalid credentail");
            };
        } catch (error) {
            console.log("register form", error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registeration">
                        <div className="container grid grid-tow-cols">
                            <div className="registration-image">
                                <img src="https://media.licdn.com/dms/image/v2/D4D12AQFfgoB-B2nWUA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707137752069?e=2147483647&v=beta&t=B7NBAml_62S8gyCXBxseoDc8NpV4lsCjFsq3yyIRKVQ"
                                    alt="a girl is trying to do register"
                                    width="500"
                                    height="400"
                                />
                            </div>

                            {/* let tackle registration from */}
                            <div className="registration-form">
                                <form onSubmit={handleSubmit}>
                                    <h1 className="main-heading mb-3">Registration form</h1>
                                    <div className="form-child">
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
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
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="form-child">
                                        <label htmlFor="phone">phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="phone"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="form-child">
                                        <label htmlFor="password">password</label>
                                        <input type="password"
                                            name="password"
                                            placeholder="password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button
                                        type="submit"
                                        className="btn btn-submit"
                                    >
                                        register Now
                                    </button>


                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
};