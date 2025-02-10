import { PayloadAction } from '@reduxjs/toolkit';

export type QuestionId = string;

export type Answer = {
  id: string;
  text: string;
};

export type QuestionsAnswers = Record<QuestionId, Answer>;

export interface QuestionsAnswersState {
  questionsAnswers: QuestionsAnswers;
}

export interface SetQuestionAnswerAction
  extends PayloadAction<{ id: QuestionId; answer: Answer }> {}

export interface clearQuestionAnswerAction extends PayloadAction<QuestionId> {}
