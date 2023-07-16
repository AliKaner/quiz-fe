import RootLayout from "@/app/_app";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { RegisterForm } from "@/components/RegisterForm";
import { Title } from "@/components/Title";

export default function Auth() {
    return (
        <RootLayout>
            <Header>
                <HomeButton />
            </Header>
            <Body>
                <Title
                    text="REGISTER" />
                <RegisterForm />
            </Body>
        </RootLayout>
    );

}