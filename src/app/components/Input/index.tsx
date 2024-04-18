import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  format?: string;
  cpfCnpjValue?: string;
  cpfCnpjState?: any;
  registerState?: any;

  inputContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error = '',
      label = '',
      placeholder = '-empty',
      inputContainerProps,
      inputProps,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className='relative w-full margin-0 flex flex-col border-none'
        {...inputContainerProps}
      >
        <input
          className={`w-full h-12 text-base font-medium text-black border-b border-b-gray850 bg-transparent z-[2]
        disabled:cursor-not-allowed disabled:bg-gray800 outline-none peer ${
          label
            ? 'mt-6 [&:not(:placeholder-shown)]:border-b [&:not(:placeholder-shown)]:border-b-cyan500'
            : ''
        } ${placeholder === '-empty' ? 'placeholder:text-transparent' : ''} ${
          error ? '!border-b-pink300 mb-6' : ''
        }`}
          placeholder={placeholder}
          ref={ref}
          {...props}
          {...inputProps}
        />
        <label
          className='pointer-events-none w-full absolute top-[40%] left-0 text-sm text-gray200 overflow-hidden whitespace-nowrap 
        duration-200 -translate-y-6  origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6'
        >
          {label}
        </label>
        <label
          className='w-full absolute bottom-0 left-0 text-xs font-bold leading-4 text-pink300 overflow-hidden whitespace-nowrap
        text-ellipsis origin-top duration-300 ease-inOut'
        >
          {error}
        </label>
      </div>
    );
  },
);

Input.displayName = 'InputComponent';

export { Input };
