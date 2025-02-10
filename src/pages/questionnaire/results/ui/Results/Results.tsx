'use client';

import { useRouter } from 'next/navigation';

import { clearQuestionsAnswers } from '@/entities/questionsAnswers';
import { APP_ROUTES } from '@/shared/config';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Button } from '@/shared/ui';

import classes from './Results.module.scss';

export const Results = () => {
  const router = useRouter();
  const questionsAnswers = useAppSelector(
    ({ questionsAnswers }) => questionsAnswers.questionsAnswers
  );
  const dispatch = useAppDispatch();

  const handleRestart = () => {
    router.replace(APP_ROUTES.startQuestionnairePage);
    dispatch(clearQuestionsAnswers());
  };

  return (
    <div className={classes['results']}>
      <ol className={classes['results__list']}>
        {Object.values(questionsAnswers).map(({ text, id }) => (
          <li key={id} className={classes['results-list__item']}>
            {text}
          </li>
        ))}
      </ol>
      <Button onClick={handleRestart} className={classes['results__restart-button']}>
        Restart
      </Button>
    </div>
  );
};
