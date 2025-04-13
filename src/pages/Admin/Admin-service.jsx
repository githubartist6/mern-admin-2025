import { FaEdit, FaTrash } from "react-icons/fa";
const URL = "http://localhost:5000/api/admin/services";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import "./user.css"
import { Link } from "react-router-dom";

export const AdminService = () => {
    const [service, setService] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllServiceData = async () => {
        try {
            const response = await fetch(URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            setService(data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllServiceData();
    }, []);

    return (
        <section className="admin-user-section">
            <div className="container">
                <h1>Admin Service Panel</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>service-name</th>
                            <th>description</th>
                            <th>price</th>
                            <th>provider</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {service.map((curService, index) => {
                            const { _id, serviceName, description, price, provider } = curService;
                            return (
                                <tr key={_id}>
                                    <td
                                        data-label="service-name">
                                        {serviceName}
                                    </td>
                                    <td
                                        data-label="description">
                                        {description}
                                    </td>
                                    <td
                                        data-label="price">
                                        {price}
                                    </td>
                                    <td
                                        data-label="provider">
                                        {provider}
                                    </td>
                                    <td data-label="Edit">
                                        <Link className="action-btn edit">
                                            <FaEdit /> Edit
                                        </Link>
                                    </td>
                                    <td data-label="Delete">
                                        <Link className="action-btn delete">
                                            <FaTrash /> Delete
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
