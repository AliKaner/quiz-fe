import { getAllQuizes } from "@/api/routes";
import RootLayout from "@/app/_app";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import QuestionForm from "@/components/QuestionForm";
import { QuizShowcase } from "@/components/QuizShowcase";
import { Title } from "@/components/Title";
import { QuizType } from "@/shared/types";
import { useState } from "react";

export default function Home() {
    const [showQuizes, setShowQuizes] = useState<QuizType[]>([]);

    const getAllQuizesHandle = async () => {
        const response = await getAllQuizes();
        setShowQuizes(response);
    }

    return (
        <RootLayout>
            <Header>
                <HomeButton />
            </Header>
            <Body>
                <Title text="ASK QUESTIONS" />
                <QuestionForm />
            </Body>

        </RootLayout>
    )
}