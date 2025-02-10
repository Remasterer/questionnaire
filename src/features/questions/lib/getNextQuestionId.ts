import { ForwardNext, Next } from '@/entities/question';
import { QuestionsAnswers } from '@/entities/questionsAnswers';

const isForwardNext = (next: Next): next is ForwardNext => typeof next === 'string';

export const getNextQuestionId = (next: Next, questionAnswers: QuestionsAnswers): string | null => {
  if (isForwardNext(next)) return next;

  if (!questionAnswers) return null;

  for (const {
    condition: { basedOn, equals },
    next: conditionNext
  } of next) {
    if (questionAnswers[basedOn]?.id === equals) return conditionNext;
  }

  return null;
};
