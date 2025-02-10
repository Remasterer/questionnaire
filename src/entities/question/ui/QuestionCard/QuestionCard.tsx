import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { Options, Props as OptionsProps } from '../Options';
import classes from './QuestionCard.module.scss';

interface Props extends ComponentPropsWithoutRef<'div'>, OptionsProps {
  title: string;
  titleClassName?: string;
  classNames?: string;
}

export const QuestionCard = ({
  title,
  children,
  titleClassName,
  className,
  options,
  onSelectOption
}: Props) => {
  return (
    <div className={classNames(classes['question-card'], className)}>
      <div className={classNames(classes['question-card__title'], titleClassName)}>{title}</div>
      <div>
        {children}
        <Options options={options} onSelectOption={onSelectOption} />
      </div>
    </div>
  );
};
