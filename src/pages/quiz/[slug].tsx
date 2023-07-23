import { answerQuestion, getQuestionAll, getQuestionPrivate } from "@/api/routes";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import HomeButton from "@/components/HomeButton";
import RootLayout from "@/app/_app";
import { useRouter } from 'next/router';
import { QuizType } from "@/shared/types";

export default function Quiz({ initialQuestion, query }: any) {
  const router = useRouter();
  const { slug } = router.query;
  // const [currentQuestion, setCurrentQuestion] = useState<QuestionType>({ question: "", answers: [] });
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
      if (questionIndex+1 !== currentQuiz?.questions.length) {
        setQuestionIndex(questionIndex + 1)
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
          <div className="flex flex-col items-center bg-white rounded w-1/3 p-4 w-min-w-96">
            <div className="text-center p-2 bg-gray-100 rounded w-full">{`Question ${questionIndex + 1}/${currentQuiz?.questions.length
              }`}</div>
            <div className="">{currentQuiz?.questions[questionIndex].question}</div>
            <div className="flex flex-col sm:flex-row w-full gap-4 ">
              {currentQuiz.questions[questionIndex].options?.map((answer) => (
                <div className={`flex-1 text-center  hover:bg-secondary rounded ${answer == currentAnswer ? ("bg-secondary"):"bg-primary"}`} onClick={() => answerHandle(answer)}>
                  {answer}
                </div>
              ))}
            </div>
            
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <div className="flex items-reverse  w-full w-1/3 mt-2 w-min-w-96">
              {currentAnswer ? (
                <button className="bg-primary hover:bg-secondary w-24 rounded" onClick={postAnswer}>
                  Submit
                </button>
              ) : null}
            </div>
      </Body>
    </RootLayout>
  );
}
