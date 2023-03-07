import { Input } from "../../components/Input";
import {Button} from "../../components/Button";

import { Container,Form, Background } from "./styles";

export function SignIn(){

    return (

        <Container>

            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"                
                    type="text"
                >
                </Input>

                <Input
                    type="password"
                    placeholder="Senha"
                >
                </Input>

                <Button 
                    title="Entrar"
                    >
                </Button>

                <a href="/">
                    Criar conta
                </a>

            </Form>

                <Background/>
        </Container>
    )
}