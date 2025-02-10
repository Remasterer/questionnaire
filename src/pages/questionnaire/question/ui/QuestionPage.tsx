import { redirect } from 'next/navigation';

import { ScreenType } from '@/entities/question';
import { questionsApiServiceInstance } from '@/entities/question/api/questionsApiService';
import { DisclaimerCard, SingleChoiceCard } from '@/features/questions';
import { APP_ROUTES } from '@/shared/config';

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

  if (!question) {
    redirect(APP_ROUTES.startQuestionnairePage);
  }

  const { questionText, options, id, previous, placeholderValues, screenType, statement } =
    question;

  const isDisclaimer = screenType === ScreenType.DISCLAIMER;

  return (
    <QuestionnaireLayout isDarkTheme={isDisclaimer} previous={previous}>
      {screenType === ScreenType.SINGLE_CHOICE ? (
        <SingleChoiceCard
          id={id}
          questionText={questionText}
          placeholderValues={placeholderValues}
          options={options}
          statement={statement}
        />
      ) : (
        <DisclaimerCard questionText={questionText} statement={statement} options={options} />
      )}
    </QuestionnaireLayout>
  );
};
