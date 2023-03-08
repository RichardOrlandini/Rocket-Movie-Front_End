import { Container, Profile, Search, Logout } from "./styled";

import { Input} from "../Input";

import {RiShutDownLine} from "react-icons/ri"


export function Header(){

    return (
        <Container>
            
            <h1>RocketMovies</h1>

            <Search>
            <Input 
            placeholder= "Pesquisar pelo título" 
            />
          </Search>

            <Profile to="/profile">

                <div>
                <strong>Richard Orlandini</strong>

                <Logout>
                    sair
                </Logout>

                </div>

                <img 
                src="https://github.com/RichardORlandini.png"
                alt="Foto do usuario" 
                />
               
            </Profile>

        </Container>
    )
}