'use client';

import { useRouter } from 'next/navigation';

import { Option, Question, QuestionCard } from '@/entities/question';
import { useAppSelector } from '@/shared/lib';

import { getNextQuestionId } from '../../lib/getNextQuestionId';
import classes from './DisclaimerCard.module.scss';

interface Props extends Pick<Question, 'questionText' | 'statement' | 'options'> {}

export const DisclaimerCard = ({ questionText, statement, options }: Props) => {
  const router = useRouter();
  const questionsAnswers = useAppSelector((state) => state.questionsAnswers.questionsAnswers);

  const handleSelectOption = (option: Option) => {
    const nextQuestionId = getNextQuestionId(option.next, questionsAnswers);

    if (nextQuestionId) {
      router.push(nextQuestionId, { scroll: false });
    }
  };

  return (
    <QuestionCard
      title={questionText}
      className={classes['disclaimer-card']}
      titleClassName={classes['disclaimer-card__title']}
      options={options}
      onSelectOption={handleSelectOption}>
      <p className={classes['disclaimer-card__statement']}>{statement}</p>
    </QuestionCard>
  );
};
