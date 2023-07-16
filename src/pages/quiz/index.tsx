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

export default function Quiz() {
  const router = useRouter();
  const { slug } = router.query;
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchQuestionPrivate({ slug: String(slug) });
    } else {
      fetchQuestionAll();
    }
  }, [slug]);

  const fetchQuestionAll = async () => {
    try {
      const response = await getQuestionAll();
      setCurrentQuestion(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchQuestionPrivate = async ({slug,}:{slug:string}) => {
    try {
      const response = await getQuestionPrivate({ slug });
      setCurrentQuestion(response.data);
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

export async function getServerSideProps({ query,}:{query:ParsedUrlQuery}) {
  const { slug } = query;

  if (slug) {
    try {
      console.log(slug);
      const response = await fetch(`http://localhost:3000/${{slug: String(slug)}}`)
      console.log(response);
      const initialQuestion = response.json();
      return {
        props: { initialQuestion },
      };
    } catch (error) {
      console.error(error);
      return {
        props: { initialQuestion: null },
      };
    }
  } else {
    try {
      const response = await getQuestionAll();
      const initialQuestion = response.data;
      return {
        props: { initialQuestion },
      };
    } catch (error) {
      console.error(error);
      return {
        props: { initialQuestion: null },
      };
    }
  }
}