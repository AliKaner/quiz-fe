import { answerQuestion, getQuestionAll, getQuestionPrivate } from "@/api/routes";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import HomeButton from "@/components/HomeButton";
import RootLayout from "@/app/_app";
import { useRouter } from 'next/router';
import { QuizType } from "@/shared/types";
import { useToast } from "@/hooks/useToast";

export default function Quiz({ initialQuestion, query }: any) {
  const router = useRouter();
  const { slug } = router.query;
  const { showToast } = useToast();
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [userId, setUserId] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState<QuizType>();
  const [questionIndex, setQuestionIndex] = useState<number>(0);

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
      setCurrentQuiz(response.data);
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
        setCurrentQuiz(response.data);
      }
    } catch (error) {

    }
  }

  const answerHandle = (answer: string) => {
    setCurrentAnswer(answer);
  }

  const postAnswer = async () => {
    try {
      const answers = [{ question: currentQuiz?.questions[questionIndex]?.question, answer: currentAnswer }];
      answerQuestion(currentQuiz?.id, userId, answers);
      if (questionIndex + 1 !== currentQuiz?.questions.length) {
        setQuestionIndex(questionIndex + 1)
        
      } else {
        router.push("/home")
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
        {currentQuiz ? (
          <div className="flex flex-col items-center bg-white rounded w-full md:w-1/2 p-4 justify-center mt-40">
            <div className="text-center p1 bg-gray-100 rounded w-full">{`Question ${questionIndex + 1}/${currentQuiz?.questions.length
              }`}</div>
            <div className="bg-stone-300 p-2 m-2 text-xl rounded w-full text-center">{currentQuiz?.questions[questionIndex].question}</div>
            <div className="flex flex-col sm:flex-row w-full gap-4 ">
              {currentQuiz.questions[questionIndex].options?.map((answer) => (
                <div className={`flex-1 text-xl p-2 text-center  hover:bg-secondary rounded ${answer == currentAnswer ? ("bg-secondary") : "bg-primary"}`} onClick={() => answerHandle(answer)}>
                  {answer}
                </div>
              ))}
            </div>

          </div>
        ) : (
          <div>Loading...</div>
        )}
        <div className="flex flex-row-reverse w-full md:w-1/2 p- mt-2">
          {currentAnswer ? (
            <button className="bg-secondary text-white  hover:bg-secondary w-24 text-xl p-2 rounded" onClick={postAnswer}>
              Submit
            </button>
          ) : null}
        </div>
      </Body>
    </RootLayout>
  );
}
