import { FunctionComponent, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getUserById } from "../services/userService";
import { User } from "../interfaces/User";

interface ProfileProps {
    
}
 
const Profile: FunctionComponent<ProfileProps> = () => {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        password: "",
        isAdmin: false,
      });
    useEffect(() => {
        getUserById().then((res) => {
            setUser(res.data)
        }).catch((err) => console.log(err));
    },[])
    return <>
    <Navbar />
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    {user.isAdmin && <p>You are an admin</p>}
    </>;
}
 
export default Profile;