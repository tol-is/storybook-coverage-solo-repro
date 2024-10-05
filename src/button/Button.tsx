import cx from 'classnames';
import React from 'react';

import styles from './Button.module.css';

export interface IButtonProps extends Omit<React.ComponentPropsWithRef<'button'>, 'color'> {
  children?: string;

  className?: string;
}

export const Button = (props: IButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button className={cx(styles.root, className)} {...rest}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';
