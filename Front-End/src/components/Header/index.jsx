import { Container, Profile, Search, Logout } from "./styled";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Input} from "../Input";

import {RiShutDownLine} from "react-icons/ri"


export function Header(){

    const {signOut, user} = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


    return (
        <Container>
            
            <h1>RocketMovies</h1>

            <Search>
            <Input 
            placeholder= "Pesquisar pelo título" 
            />
          </Search>

          <Logout onClick={signOut}>
                    sair
            </Logout>

            <Profile to="/profile">

                <div>
                <strong>{user.name}</strong>

               

                </div>

                <img 
                src={avatarUrl}
                alt={user.name}
                />
               
            </Profile>

        </Container>
    )
}