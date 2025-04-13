import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const URL = "http://localhost:5000/api/auth/login"
import { toast } from 'react-toastify';

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
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
                toast.success("Success! You're now logged in.");
                // stored the token in localhost
                storeTokenInLS(res_data.token);
                setUser({
                    email: "",
                    password: "",
                });
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("Invalid credentail");
            };
        } catch (error) {
            console.log("login form", error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registeration">
                        <div className="container grid grid-tow-cols">
                            <div className="registration-image">
                                <img src="https://www.shakebugs.com/wp-content/uploads/2022/05/What-is-collaborative-coding.png"
                                    alt="let's fill the login form"
                                    width="500"
                                    height="400"
                                />
                            </div>

                            {/* let tackle registration from */}
                            <div className="registration-form">
                                <form onSubmit={handleSubmit}>
                                    <h1 className="main-heading mb-3">Login form</h1>

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
                                        login Now
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