import { useState } from "react";
import { useAuth} from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Container, Form, Avatar} from "./styles";
import { FiArrowLeft , FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"

import { Input} from "../../components/Input";
import { Button} from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile(){
    const { user, updateProfile} = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);



    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: passwordNew ,
            old_password: passwordOld
        }

        const userUpdated = Object.assign(user, updated);

        await updateProfile({ user: userUpdated , avatarFile })
    }

    function handleChangeAvatar(e){
        const file = e.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);

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
                    <img src={avatar} alt="Foto do usuário"/>

                    <label htmlFor="avatar"> 
                        <FiCamera/>
                        <input 
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Input
                    type="text"
                    placeholder="Nome"
                   icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="E-mail"
                   icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha Atual"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Nova Atual"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                /> 

           

                <Button  
                title="Salvar"  
                onClick={handleUpdate}
                /> 

                
                

                
            </Form>
        </Container>
    )
}