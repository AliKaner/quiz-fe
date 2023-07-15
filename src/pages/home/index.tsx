import Layout from "@/App";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { PathButton } from "@/components/RouterButton";

export default function Home() {
    return (
        <Layout>
            <Header>
            </Header>
            <Body>
                <div className="flex flex-row items-center">
                    <PathButton 
                        path="play"
                        text="answer"
                    />
                    <PathButton
                        path="create"
                        text="ask"
                    />
                </div>
            </Body>

        </Layout>
    )
}