import RootLayout from "@/app/_app";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { QuizShowcase } from "@/components/QuizShowcase";
import { PathButton } from "@/components/RouterButton";
import { Title } from "@/components/Title";
import { useEffect, useState } from "react";

export default function Home() {
    const [topQuizes, setTopQuizes] = useState([]);
    const [lastQuizes, setLastQuizes] = useState([]);

    useEffect(() => {

    }, [topQuizes,lastQuizes]);

    return (
        <RootLayout>
            <Header>
                <HomeButton />
            </Header>
            <Body>
                <div className="flex flex-col h-full w-96 items-center">

                    <div className="flex flex-row items-center w-full items-center text-center gap-4 items-between">
                        <PathButton
                            path="quiz"
                            text="Answer Random Questions"
                        />
                        <PathButton
                            path="create"
                            text="Ask your questions to world"
                        />
                    </div>
                    <div>
                        <label className="">
                            Top Quizes
                        </label>
                        <QuizShowcase quizes={topQuizes} size={4}/>
                    </div>
                    <div>
                        <label className="">
                            Last Quizes
                        </label>
                        <QuizShowcase quizes={topQuizes} size={4} />
                    </div>
                </div>

            </Body>

        </RootLayout>
    )
}