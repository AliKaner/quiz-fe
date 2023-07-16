import RootLayout from "@/app/_app";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { PathButton } from "@/components/RouterButton";
import { Title } from "@/components/Title";

export default function Home() {
    return (
        <RootLayout>
            <Header>
                <HomeButton/>
            </Header>
            <Body>
                <Title text="Welcome to Traviatom worlds largest bullshit"/>
                <div className="flex flex-row items-center w-full items-center text-center gap-4 items-between">
                    <PathButton
                        path="quiz"
                        text="ANSWER"
                    />
                    <PathButton
                        path="create"
                        text="ASK"
                    />
                </div>
            </Body>

        </RootLayout>
    )
}