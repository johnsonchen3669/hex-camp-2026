type ButtonVariant = 'primary' | 'outline';

type BaseProps = {
  label: string;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
};

type LinkProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  disabled?: never;
  type?: never;
};

type ButtonProps = BaseProps & {
  href?: never;
  target?: never;
  rel?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

type AppButtonProps = LinkProps | ButtonProps;

const baseClasses =
  'inline-flex w-fit items-center py-3 px-5 justify-center rounded-full text-sm/normal  font-bold transition-all duration-300 sm:text-base sm:px-6';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'min-h-11  bg-neutral-700 text-neutral-0 hover:bg-primary-500 hover:text-neutral-900 hover:shadow-[0_4px_14px_rgba(245,184,123,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none',
  outline:
    'min-h-11 border border-neutral-700 text-neutral-700 hover:bg-neutral-700 hover:text-neutral-0 hover:-translate-y-0.5 active:translate-y-0',
};

export default function AppButton({
  label,
  variant = 'primary',
  className = '',
  ariaLabel,
  href,
  target,
  rel,
  onClick,
  disabled,
  type = 'button',
}: AppButtonProps) {
  const classes =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    const resolvedHref =
      href.startsWith('/') && !href.startsWith('//')
        ? `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${href.replace(/^\//, '')}`
        : href;

    return (
      <a
        href={resolvedHref}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        className={classes}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {label}
    </button>
  );
}
