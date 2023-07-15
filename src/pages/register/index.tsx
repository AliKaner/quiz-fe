import Layout from "@/App";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { RegisterForm } from "@/components/RegisterForm";
import { Title } from "@/components/Title";

export default function Auth() {
    return (
        <Layout>
            <Header> 
                <HomeButton/>
            </Header>
            <Body>
                <Title
                    text="REGISTER" />
                <RegisterForm />
            </Body>
        </Layout>
    );

}