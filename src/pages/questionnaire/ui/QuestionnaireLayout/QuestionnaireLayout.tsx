import classNames from 'classnames';
import { ComponentProps } from 'react';

import { Question } from '@/entities/question';

import { QuestionnaireHeader } from './QuestionnaireHeader';
import classes from './QuestionnaireLayout.module.scss';

interface Props extends ComponentProps<'body'>, Pick<Question, 'previous'> {
  isDarkTheme: boolean;
}

export const QuestionnaireLayout = ({ children, previous, isDarkTheme }: Props) => {
  const themeClassNames = { 'theme-dark': isDarkTheme };

  return (
    <div className={classNames(classes['questionnaire-layout'], themeClassNames)}>
      <QuestionnaireHeader previous={previous} />
      <main className={classes['questionnaire-layout__main']}>{children}</main>
    </div>
  );
};
