import { Container, Profile, Search, Logout } from "./styled";

import { useAuth } from "../../hooks/auth";

import { Input} from "../Input";

import {RiShutDownLine} from "react-icons/ri"


export function Header(){

    const {signOut} = useAuth();

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
                <strong>Richard Orlandini</strong>

               

                </div>

                <img 
                src="https://github.com/RichardORlandini.png"
                alt="Foto do usuario" 
                />
               
            </Profile>

        </Container>
    )
}