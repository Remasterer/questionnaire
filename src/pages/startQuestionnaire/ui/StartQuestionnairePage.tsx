import { redirect } from 'next/navigation';

import { questionsApiServiceInstance } from '@/entities/question/api/questionsApiService';
import { APP_ROUTES } from '@/shared/config';

export const StartQuestionnairePage = async () => {
  const { questionId, questionnaireId } = await questionsApiServiceInstance.getFirstQuestionId();
  const firstQuestionPath = APP_ROUTES.question(questionnaireId, questionId);

  redirect(firstQuestionPath);
};
