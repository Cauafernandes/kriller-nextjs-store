import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error = '', label = '', ...props }, ref) => {
    return (
      <div className='relative w-full margin-0 flex flex-col border-none'>
        <label className={'w-full mb-1'}>{label}</label>
        <input
          className={`w-full p-3 rounded-md text-base font-medium text-black border border-gray850 bg-transparent z-[2] disabled:cursor-not-allowed disabled:bg-gray800 outline-none peer ${
            error ? '!border-pink300' : ''
          }`}
          ref={ref}
          {...props}
        />

        <label className='w-full text-pink300 text-[14px] mt-1 pl-1'>
          {error}
        </label>
      </div>
    );
  }
);

Input.displayName = 'InputComponent';

export { Input };
