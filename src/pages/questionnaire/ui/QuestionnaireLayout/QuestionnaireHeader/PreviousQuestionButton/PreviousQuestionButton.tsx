'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { clearQuestionAnswer } from '@/entities/questionsAnswers';
import { useAppDispatch } from '@/shared/lib';

import classes from './PreviousQuestionButton.module.scss';

interface Props {
  previous: string;
}

export const PreviousQuestionButton = ({ previous }: Props) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handlePreviousQuestion = () => {
    dispatch(clearQuestionAnswer(previous));
    router.back();
  };

  return (
    <button className={classes['previous-question-button']} onClick={handlePreviousQuestion}>
      <Image src="/chevron.svg" width={24} height={24} alt="Back" className="svg" />
    </button>
  );
};
