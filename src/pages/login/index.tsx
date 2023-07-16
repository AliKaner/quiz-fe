import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { LoginForm } from "@/components/LoginForm";
import { Title } from "@/components/Title";
import RootLayout from "@/app/_app";

export default function Login() {
    return (
        <RootLayout>
            <Header>
                <HomeButton/>
            </Header>
            <Body>
                <Title
                    text="LOGIN" />
                <LoginForm/>
            </Body>
        </RootLayout>
    );

}