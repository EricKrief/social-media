import React, { useState } from "react";
import { User } from "../models/user";

export interface UserContextType {
    loggedInUser: User | null | undefined;
};

const UserContext = React.createContext<UserContextType>({
    loggedInUser: null
});

export const UserContextProvider = (props: any) => {
    const [loggedInUser, setLoggedInUser] = useState({
        id: '6d4a5574-76d5-427e-8945-7fd752615733',
        firstName: 'Emily',
        lastName: 'Singh',
        email: 'emily.singh@example.com',
        pictureUrl: 'https://randomuser.me/api/portraits/thumb/women/34.jpg'
        
    });

    return (
        <UserContext.Provider value={{ loggedInUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;