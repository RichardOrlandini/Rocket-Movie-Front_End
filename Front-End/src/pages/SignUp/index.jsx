
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom";


import { Container, Form, Background} from './styles';

export function SignUp(){

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
                >
                </Input>

                <Input
                placeholder="Email"
                type="text"
                icon={FiMail}
                >
                </Input>

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                >
                </Input>


                <Button
                    title="Cadastrar" >
                </Button>

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

            <Background/> 

        </Container>
    );
}