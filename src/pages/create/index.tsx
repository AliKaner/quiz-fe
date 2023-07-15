import Layout from "@/App";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import QuestionForm from "@/components/QuestionForm";
import { PathButton } from "@/components/RouterButton";

export default function Home() {

    const createQuestion = () => {

    }

    return (
        <Layout>
            <Header>
            </Header>
            <Body>
               <QuestionForm onSubmit={createQuestion} />
            </Body>

        </Layout>
    )
}