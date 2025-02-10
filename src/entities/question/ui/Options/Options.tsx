'use client';

import { Option, Question } from '@/entities/question';
import { Button } from '@/shared/ui';

import classes from './Options.module.scss';

export interface Props extends Pick<Question, 'options'> {
  onSelectOption: (option: Option) => void;
}

export const Options = ({ options, onSelectOption }: Props) => {
  return (
    <div className={classes['options']}>
      {options.map((option) => (
        <Button key={option.id} onClick={() => onSelectOption(option)}>
          {option.text}
        </Button>
      ))}
    </div>
  );
};
