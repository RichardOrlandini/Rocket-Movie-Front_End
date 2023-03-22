import { api } from "../../services/api";

import { useState } from "react";


import { useNavigate } from "react-router-dom";


import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom";


import { Container, Form, Background} from './styles';

export function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    function handleSignUP(){

        if (!name || !email || !password ){
            alert("Preencha todos os campos");
            return;
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch((e) => {
            if (e.response){
                alert(e.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        });

    }

    return (
        <Container>

            <Form>k
                <h1>RocktMovies</h1>
                <p>Aplicação para registrar seus filmes preferidos!</p>

                <h2>Crie sua conta</h2>

                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                >
                </Input>

                <Input
                placeholder="Email"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                >
                </Input>

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                >
                </Input>


                <Button
                    title="Cadastrar" 
                    onClick={handleSignUP}
                />
               

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

            <Background/> 

        </Container>
    );
}