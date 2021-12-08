import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> {
  children: ReactNode;
  href?: string;
  target?: '_blank';
  icon?: ReactNode;
}
