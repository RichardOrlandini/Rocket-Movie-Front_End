import { Container, Form } from "./styles";

import { TextArea} from "../../components/TextArea";
import { NoteItem} from "../../components/NoteItem";
import { Section} from "../../components/Section";
import { Button } from "../../components/Button";
import { Header} from "../../components/Header";
import { Input} from "../../components/Input";
import { Link } from "react-router-dom";



export function New(){

    return (
        <Container>
            <Header/>
            <main>

           

            <Form>
                <header>
                    <Link to="/">Voltar</Link>
                    <h1>Novo Filme</h1>
                </header>
                
                <Input placeholder="Título" />
                <Input placeholder="Sua nota de 0 a 5"/>

                <TextArea placeholder="Observações" />

                <Section title="Marcadores">
                    <div  className="tags"> 
                         <NoteItem value="React.JS" />
                        <NoteItem isNew placeholder="Nova tag" />
                    </div>

                </Section>

                <Button title="Salvar"  />
            </Form>
            </main>
        </Container>
    )
}