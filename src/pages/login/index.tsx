import Layout from "@/App";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { LoginForm } from "@/components/LoginForm";
import { Title } from "@/components/Title";

export default function Auth() {
    return (
        <Layout>
            <Header>
                <HomeButton/>
            </Header>
            <Body>
                <Title
                    text="LOGIN" />
                <LoginForm/>
            </Body>
        </Layout>
    );

}