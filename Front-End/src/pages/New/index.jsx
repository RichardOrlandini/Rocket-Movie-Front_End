import { Container, Form } from "./styles";
import { TextArea} from "../../components/TextArea";
import { NoteItem} from "../../components/NoteItem";
import { Section} from "../../components/Section";
import { Button } from "../../components/Button";
import { Header} from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Input} from "../../components/Input";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";



export function New(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState([]);

    const [tags, setTag] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag(){
        setTag(prevState => [...prevState, setTag ]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTag(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote(){
        await api.post("/notes", {
            title,
            description,
            tags
        });

        alert("Nota criada com sucesso!")

        navigate("/");
    }

    return (
        <Container>
            <Header/>
            <main>

            <Form>
                <header>
                    <Link to="/">Voltar</Link>
                    <h1>Novo Filme</h1>
                </header>
                
                <Input 
                placeholder="Título" 
                onChange={e => setTitle(e.target.value)}
                />


                <Input placeholder="Sua nota de 0 a 5"/>

                <TextArea 
                placeholder="Observações" 
                onChange={e => setDescription(e.target.value)}
                />

                <Section title="Marcadores">
                    <div className="tags"> 
                    {
                        tags.map((tag, index) => (
                            <NoteItem 
                                 key= {String(index)} // sempre um componente renderizado por uma lista, temos que utilziar key
                                 value={tag}
                                 onClick={() => handleRemoveTag(tag) }
                            />
                        ))
                    }
                        <NoteItem 
                            isNew 
                            placeholder="Nova tag" 
                            value={newTag}
                            onChange={ e => setNewTag(e.target.value)}
                            onClick={handleAddTag} 
                        />
                    </div>
                </Section>

                <Button 
                title="Salvar"  
                onClick={handleNewNote} 
                />
            </Form>
            </main>
        </Container>
    )
}