import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        //เอาไว้สำหรับ check ว่า login อยู่หรือไม่ หากใช้ jwt

        //fake ข้อมูล
        // setCurrentUser({name:'test'})
    }, [])



    return (
        <AuthContext.Provider
            value={{
                currentUser, setCurrentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
