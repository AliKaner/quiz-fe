import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { RegisterForm } from "@/components/RegisterForm";

export default function Auth() {
    return (
        <Layout>
            <Header>

            </Header>
            <Body>
                    <RegisterForm/>
            </Body>
        </Layout>
    );

}