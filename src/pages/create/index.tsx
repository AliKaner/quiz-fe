import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import QuestionForm from "@/components/QuestionForm";
import { PathButton } from "@/components/RouterButton";
import { Title } from "@/components/Title";

export default function Home() {

    const createQuestion = () => {

    }

    return (
        <div>
            <Header>
                <HomeButton/>
            </Header>
            <Body>
                <Title text="ASK QUESTIONS"/>
               <QuestionForm onSubmit={createQuestion} />
            </Body>

        </div>
    )
}