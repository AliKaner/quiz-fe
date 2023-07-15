import Layout from "@/App";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { Question } from "@/components/Question";
import { PathButton } from "@/components/RouterButton";
import { QuestionType } from "@/shared/types";
import { useEffect, useState } from "react";

export default function Play() {
    const [currentQuestion, setCurrentQuestion] = useState<QuestionType>({text:"",answers:[],});

    const getQuestion = () => {

    }

    return (
        <Layout>
            <Header>
            </Header>
            <Body>
                <Question question={currentQuestion}/>
            </Body>

        </Layout>
    )
}