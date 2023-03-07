
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link} from 'react-router-dom';

import { Container, Form, Background} from "./styles";

export function SignUp(){

    return (
        <Container>

            <Background/> 

            <Form>
                <h1>RocktMovies</h1>
                <p>Aplicação para registrar seus filmes preferidos!</p>

                <h2>Crie sua conta</h2>

                <Input
                placeholder="Nome"
                type="text"
                >
                </Input>

                <Input
                placeholder="Email"
                type="text"
                >
                </Input>

                <Input
                placeholder="Senha"
                type="password"
                >
                </Input>


                <Button
                    title="Cadastrar" >
                </Button>

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

        </Container>
    );
}