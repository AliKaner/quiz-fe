import { api } from ".."

export const register = async (
    username: string,
    password: string,
) => {
   api.post('auth/register',{
    username,
    password,
   })
}

export const login = async (
    username: string,
    password: string,
  ): Promise<string> => {
    const response = await api.post('auth/login', {
      username,
      password,
    });
  
    const token = response.data.access_token;

    return token;
  };
  

export const createQuestion = async (
    text:string,
    answerOne:string,
    answerTwo:string,
) => {
    api.post('/quiz',{
        text,
        answerOne,
        answerTwo,
    });
}

export const getQuestionPrivate = async ({slug,
} : {
  slug:string
}) => {
    const response = await api.get(`/quiz/${slug}`);
    return response;
}

export const getQuestionAll = async () => {
    const response = await api.get(`/quiz`);
    return response.data;
}

export const getAllQuizes = async () => {
  const response = await api.get('/quiz/all')
  return response.data
}

export const answerQuestion = async (
  quizId:number|undefined,
  userId:number|undefined,
  answers:{question:string|undefined,answer:string|undefined}[]|undefined
) => {
  api.post('/response',{
    answers,
    quizId,
    userId,
  })
} 