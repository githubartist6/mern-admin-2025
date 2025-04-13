import { createContext, useContext, useEffect, useState } from "react";

export const AuthContex = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    // token
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;

    // tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // jwt authentication to get currently loggedIN user data
    const userAuthentication = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching user data");
            setIsLoading(false);
        }
    };

    // jwt authentication to get currently loggedIN user data
    const contactsAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("contacts data", data.contactsData);
                setUser(data.contactsData);
            }
        } catch (error) {
            console.error("Error fetching contacts data")
        }
    };

    // to fetch the services data from the database
    const getServices = async (req, res) => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                setServices(data.message)
            }
        } catch (error) {
            console.log(`services frontend error: ${error}`);

        }
    }


    useEffect(() => {
        if (token) {
            getServices();
            userAuthentication();
        } else {
            setUser(""); // ✅ user blank jab token hata
        }
    }, [token]); // ✅ watch token only



    return (
        <AuthContex.Provider value={{
            isLoggedIn,
            storeTokenInLS,
            LogoutUser,
            user,
            contactsAuthentication,
            services,
            authorizationToken,
            isLoading
        }}>
            {children}
        </AuthContex.Provider>
    )
};

export const useAuth = () => {
    const authContexValue = useContext(AuthContex);

    if (!authContexValue) {
        throw new Error("useAuth used outside of the Provider");
    }

    return authContexValue;
};