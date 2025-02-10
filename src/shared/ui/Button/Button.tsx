import classNames from 'classnames';
import { ComponentProps } from 'react';

import classes from './Button.module.scss';

export const Button = ({ children, className, ...props }: ComponentProps<'button'>) => {
  return (
    <button className={classNames(classes['button'], className)} {...props}>
      <span className={classes['button__text']}>{children}</span>
    </button>
  );
};
