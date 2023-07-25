import RootLayout from "@/app/_app";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { QuizShowcase } from "@/components/QuizShowcase";
import { PathButton } from "@/components/RouterButton";
import { SeeMore } from "@/components/SeeMore";
import { Title } from "@/components/Title";
import { useEffect, useState } from "react";

export default function Home() {
    const [topQuizes, setTopQuizes] = useState(null);

    const lastQuizes = [
        {
            name: "Quiz test title", slug: "test slug"
        },
        {
            name: "Quiz test title", slug: "test slug"
        },
        {
            name: "Quiz test title", slug: "test slug"
        },
        {
            name: "Quiz test title", slug: "test slug"
        },

    ]

    useEffect(() => {

    }, [topQuizes]);

    return (
        <RootLayout>
            <Header>
                <HomeButton />
            </Header>
            <Body>
                <div className="flex flex-col h-full w-full md:w-1/2 items-center m-10">

                    <div className="flex flex-row items-center w-full items-center text-center gap-4 items-between m-5 ">
                        <PathButton
                            path="quiz"
                            text="Answer Random Questions"
                        />
                        <PathButton
                            path="create"
                            text="Ask your questions to world"
                        />
                    </div>
                    {
                        topQuizes ?
                            <div>
                                <div className="flex flex-row">

                                    <label className="">
                                        Top Quizes
                                    </label>
                                    <SeeMore path="topQuizes" />
                                </div>
                                <QuizShowcase quizes={topQuizes} size={4} />
                            </div> : null
                    }
                    {
                        lastQuizes ?
                            <div>
                                <div className="flex flex-row">
                                    <label className="">
                                        Last Quizes
                                    </label>
                                    <SeeMore path="topQuizes" />
                                </div>
                                <QuizShowcase quizes={lastQuizes} size={4} />
                            </div> : null
                    }

                </div>

            </Body>

        </RootLayout>
    )
}