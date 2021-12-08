import cn from 'classnames';
import classes from 'src/components/Button/Button.module.scss';
import { ButtonProps } from 'src/components/Button/Button.types';

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    onClick,
    disabled,
    href = undefined,
    target = undefined,
    icon = undefined,
  } = props;

  const rootClasses = cn(classes.root, {
    [classes.disabled]: disabled,
  }, className);

  const renderIcon = () => {
    if (icon) {
      return <div className={classes.icon}>{icon}</div>;
    }
    return null;
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={rootClasses}
      >
        {renderIcon()}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={rootClasses}
      onClick={onClick}
    >
      {renderIcon()}
      {children}
    </button>
  );
};

export default Button;
