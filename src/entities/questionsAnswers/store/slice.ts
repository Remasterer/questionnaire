import { createSlice } from '@reduxjs/toolkit';

import { clearQuestionAnswerAction, QuestionsAnswersState, SetQuestionAnswerAction } from './types';

const initialState: QuestionsAnswersState = {
  questionsAnswers: {}
};

const questionsAnswersSlice = createSlice({
  name: 'questionsAnswers',
  initialState,
  reducers: {
    setQuestionAnswer: (state, { payload: { answer, id } }: SetQuestionAnswerAction) => {
      state.questionsAnswers[id] = answer;
    },
    clearQuestionAnswer: (state, { payload: questionId }: clearQuestionAnswerAction) => {
      delete state.questionsAnswers[questionId];
    },
    clearQuestionsAnswers: (state) => {
      state.questionsAnswers = {};
    }
  }
});

export const { setQuestionAnswer, clearQuestionAnswer, clearQuestionsAnswers } =
  questionsAnswersSlice.actions;
export const questionsAnswersReducer = questionsAnswersSlice.reducer;
