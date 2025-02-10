import { PlaceholderValues } from '@/entities/question';
import { QuestionsAnswers } from '@/entities/questionsAnswers';

export const replacePlaceholdersWithAnswers = (
  questionText: string,
  placeholderValues: PlaceholderValues,
  questionAnswers: QuestionsAnswers
): string => {
  if (!placeholderValues || !questionAnswers) return questionText;

  return Object.entries(placeholderValues).reduce(
    (result, [placeholder, { mapping, sourceQuestionId }]) => {
      const answer = questionAnswers[sourceQuestionId];

      if (!answer || !mapping) return result;

      const mappedAnswer = mapping[answer.id] ?? placeholder;

      return result.replaceAll(placeholder, mappedAnswer);
    },
    questionText
  );
};
