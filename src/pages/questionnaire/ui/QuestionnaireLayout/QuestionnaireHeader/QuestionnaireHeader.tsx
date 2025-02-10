import classNames from 'classnames';
import Image from 'next/image';
import { ComponentProps } from 'react';

import { Question } from '@/entities/question';

import { PreviousQuestionButton } from './PreviousQuestionButton';
import classes from './QuestionnaireHeader.module.scss';

interface Props extends ComponentProps<'div'>, Pick<Question, 'previous'> {}

export const QuestionnaireHeader = ({ previous, className }: Props) => {
  return (
    <div className={classNames(classes['questionnaire-header'], className)}>
      <div className={classes['questionnaire-header__container']}>
        {previous && <PreviousQuestionButton previous={previous} />}
        <Image
          src="/nebula-logo.svg"
          alt="Nebula logo"
          className={classNames(classes['questionnaire-header__logo'], 'svg')}
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
