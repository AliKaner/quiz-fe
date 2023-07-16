import { getQuestionAll, getQuestionPrivate } from "@/api/routes";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { Question } from "@/components/Question";
import { useState, useEffect } from "react";
import HomeButton from "@/components/HomeButton";
import RootLayout from "@/app/_app";
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from "querystring";
import axios from "axios";

export default function Quiz({ initialQuestion, query }: any) {
  const router = useRouter();
  const { slug } = router.query;
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchQuestionPrivate();
    } else {
      fetchQuestionAll();
    }
  }, [slug]);

  const fetchQuestionAll = async () => {
    try {
      const response = await getQuestionAll();
      setCurrentQuestion(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  const fetchQuestionPrivate = async () => {
    try {
      if (typeof slug === 'string') {
        
        const response = await getQuestionPrivate({ slug });
        console.log(response.data);
        setCurrentQuestion(response.data.questions[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootLayout>
      <Header>
        <HomeButton />
      </Header>
      <Body>
        {currentQuestion ? (
          <Question question={currentQuestion} />
        ) : (
          <p>Loading...</p>
        )}
      </Body>
    </RootLayout>
  );
}
