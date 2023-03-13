import { Container } from "../Home/styled";

import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";

export function Details(){
    
    return(
        <Container>
            <Header/>

            <Button 
                title="Voltar"
            />

            <Section
                title="Interestellar">
                
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Section>
            

        </Container>
    )
}

