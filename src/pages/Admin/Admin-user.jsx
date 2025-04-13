import "./user.css"
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const URL = "http://localhost:5000/api/admin/users";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

export const AdminUser = () => {
    const [users, setUsers] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllUserData = async () => {
        try {
            const response = await fetch(URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    };

    // delete user data 
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "delete",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            const res_data = await response.json();

            if (response.ok) {
                getAllUserData()
                toast.success(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            };
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUserData();
    }, []);

    return (
        <section className="admin-user-section">
            <div className="container">
                <h1>Admin User Panel</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curUser) => {
                            const { _id, username, email, phone } = curUser;
                            return (
                                <tr key={_id}>
                                    <td
                                        data-label="Name">
                                        {username}

                                    </td>
                                    <td
                                        data-label="Email">
                                        {email}

                                    </td>
                                    <td
                                        data-label="Phone">
                                        {phone}

                                    </td>
                                    <td data-label="Edit">
                                        <Link to={`/admin/user/${_id}`} className="action-btn edit">
                                            <FaEdit /> Edit
                                        </Link>
                                    </td>
                                    <td data-label="Delete">
                                        <Link className="action-btn delete" onClick={() => deleteUser(_id)}>
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
