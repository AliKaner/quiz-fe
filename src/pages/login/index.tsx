import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { LoginForm } from "@/components/LoginForm";
import { Title } from "@/components/Title";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Auth() {
    return (
        <div>
            <Header>
                <HomeButton/>
                <FontAwesomeIcon icon={faCoffee} />
            </Header>
            <Body>
                <Title
                    text="LOGIN" />
                <LoginForm/>
            </Body>
        </div>
    );

}