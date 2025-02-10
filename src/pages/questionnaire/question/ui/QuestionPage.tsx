import { ScreenType } from '@/entities/question';
import { questionsApiServiceInstance } from '@/entities/question/api/questionsApiService';
import { QuestionCardResolver } from '@/features/questions';

import { QuestionnaireLayout } from '../../ui/QuestionnaireLayout';
import { Params } from './types';

interface Props {
  params: Promise<Params>;
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const params = await questionsApiServiceInstance.getAllQuestionsIds();

  return params;
};

export const QuestionPage = async ({ params }: Props) => {
  const readyParams = await params;

  const question = await questionsApiServiceInstance.getQuestion(readyParams);

  const { questionText, options, id, previous, placeholderValues, screenType, statement } =
    question;
  const isDarkTheme = screenType === ScreenType.DISCLAIMER;

  return (
    <QuestionnaireLayout isDarkTheme={isDarkTheme} previous={previous}>
      <QuestionCardResolver
        id={id}
        options={options}
        placeholderValues={placeholderValues}
        questionText={questionText}
        statement={statement}
        screenType={screenType}
      />
    </QuestionnaireLayout>
  );
};
