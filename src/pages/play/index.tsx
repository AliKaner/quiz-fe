import { getQuestion } from "@/api/routes";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { Question } from "@/components/Question";
import { QuestionType } from "@/shared/types";
import { useState, useEffect } from "react";
import HomeButton from "@/components/HomeButton";

export default function Play() {
    const [currentQuestion, setCurrentQuestion] = useState<QuestionType>({
        text: "Kimin ayağını yalardın?",
        answers: ["Hadise", "Mine Tugay"],
    });

    useEffect(() => {
        fetchQuestion();
    }, []);

    const fetchQuestion = async () => {
        try {
            const response = await getQuestion();
            setCurrentQuestion(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Header>
                <HomeButton />
            </Header>
            <Body>
                <Question question={currentQuestion} />
            </Body>
        </div>
    );
}
