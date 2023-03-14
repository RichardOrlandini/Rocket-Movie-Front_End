import { useState } from "react";
import { useAuth} from "../../hooks/auth";

import { Container, Form, Avatar} from "./styles";
import { FiArrowLeft , FiMail, FiUser, FiLock} from "react-icons/fi"
import { Input} from "../../components/Input";
import { Button} from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile(){
    const { user, updateProfile} = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();


    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        await updateProfile({user});
    }
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
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="E-mail"
                    incon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha Atual"
                    incon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Nova Atual"
                    incon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                /> 

                <Button 
                title="Salvar"
                onCLick={handleUpdate}
                />
                
                

                
            </Form>
        </Container>
    )
}