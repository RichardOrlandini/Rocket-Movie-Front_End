
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section} from "../../components/Section";
import { Note} from "../../components/Note";



import { Container ,Content , NewNote} from "./styled";


export function Home(){

    return (
          <Container>

            <Header/>

            <NewNote>
            <h1>Meus filmes</h1>
              
              <Button title="+ Adicionar Filme">
              </Button>
            </NewNote>
            
            <Content>

              <Section >
                <Note 
                  data={{
                    title: 'Interestellar',
                    tags: [
                      {id: '1', name: 'react'},
                      {id: '2', name: 'node'},
                    ]
                  }}
                />
              </Section>


            </Content>

           </Container>
      
    )
}