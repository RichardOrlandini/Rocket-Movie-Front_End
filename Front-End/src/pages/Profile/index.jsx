import { Container, Form, Avatar} from "./styles";
import { FiArrowLeft , FiMail, FiUser, FiLock} from "react-icons/fi"
import { Input} from "../../components/Input";
import { Button} from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile(){
    return (
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft/>
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img 
                    src="https://github.com/RichardOrlandini.png" 
                    alt="Foto do usuário"/>

                    <label htmlFor="avatar"> 

                        <input 
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>



                <Input
                    type="text"
                    placeholder="Nome"
                    incon={FiUser}
                />
                <Input
                    type="text"
                    placeholder="E-mail"
                    incon={FiMail}
                />
                <Input
                    type="password"
                    placeholder="Senha Atual"
                    incon={FiLock}
                />
                <Input
                    type="password"
                    placeholder="Nova Atual"
                    incon={FiLock}
                /> 

                <Button title="Salvar">
                </Button>
                

                
            </Form>
        </Container>
    )
}