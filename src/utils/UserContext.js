import { createContext } from "react";

const UserContext = createContext({
    user: {
        username: "Dummy",
        name: "Dummy Name",
        email: "dummyname@gmail.com"
    }
});

export default UserContext;