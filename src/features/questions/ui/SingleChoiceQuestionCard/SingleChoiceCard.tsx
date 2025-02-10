'use client';

import { useRouter } from 'next/navigation';

import { Option, Question, QuestionCard } from '@/entities/question';
import { setQuestionAnswer } from '@/entities/questionsAnswers';
import { useAppDispatch, useAppSelector } from '@/shared/lib';

import { getNextQuestionId } from '../../lib/getNextQuestionId';
import { replacePlaceholdersWithAnswers } from './lib/replacePlaceholdersWithAnswers';
import classes from './SingleChoiceQuestionCard.module.scss';

interface Props extends Pick<Question, 'questionText' | 'placeholderValues' | 'id' | 'options'> {}

export const SingleChoiceQuestionCard = ({
  questionText,
  placeholderValues,
  options,
  id
}: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const questionsAnswers = useAppSelector((state) => state.questionsAnswers.questionsAnswers);

  const formattedQuestionText = replacePlaceholdersWithAnswers(
    questionText,
    placeholderValues,
    questionsAnswers
  );

  const handleSelectOption = (option: Option) => {
    dispatch(setQuestionAnswer({ id, answer: option }));

    const nextQuestionId = getNextQuestionId(option.next, questionsAnswers);

    if (nextQuestionId) {
      router.push(nextQuestionId, { scroll: false });
    }
  };

  return (
    <QuestionCard
      title={formattedQuestionText}
      className={classes['single-choice-question-card']}
      options={options}
      onSelectOption={handleSelectOption}
    />
  );
};
