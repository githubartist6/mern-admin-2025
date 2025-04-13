import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import "./adminupdate.css"

export const Adminupdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });
    
    const navigate = useNavigate();
    const params = useParams();
    const { authorizationToken } = useAuth();


    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                })
            const data = await response.json();
            setData(data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        });
    };

    // to update the data dynamically
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                toast.success("Updated successfully")
                navigate("/admin/user");
            } else {
                toast.error("Not Updated")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registeration update-div">
                        <div className="container grid grid-tow-cols">
                            {/* let tackle registration from */}
                            <div className="registration-form">
                                <form onSubmit={handleSubmit}>
                                    <h1 className="main-heading update">Update User Data</h1>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete='off'
                                            value={data.username}
                                            onChange={handleInput}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete='off'
                                            value={data.email}
                                            onChange={handleInput}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="phone"
                                            autoComplete='off'
                                            value={data.phone}
                                            onChange={handleInput}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-submit update-btn"
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

