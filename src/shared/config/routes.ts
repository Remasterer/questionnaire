export const APP_ROUTES = {
  startQuestionnairePage: '/',
  question: (questionnaireId: string, questionId: string) =>
    `/questionnaire/${questionnaireId}/${questionId}`
};
