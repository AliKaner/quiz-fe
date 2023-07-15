import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";

export default function Auth() {
    return (
        <Layout>
            <Header>

            </Header>
            <Body>
                    <LoginForm />
            </Body>
        </Layout>
    );

}