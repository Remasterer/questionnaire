import { combineReducers } from '@reduxjs/toolkit';

import { questionsAnswersReducer } from '@/entities/questionsAnswers';

export const rootReducer = combineReducers({
  questionsAnswers: questionsAnswersReducer
});
