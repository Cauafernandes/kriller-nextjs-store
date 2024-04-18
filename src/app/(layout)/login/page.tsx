import { Input } from '@/app/components';

export default function Login() {
  return (
    <div className='min-h-screen'>
      <h2>Identificação</h2>
      <div className='w-full flex flex-row'>
        <div>
          <h3>Já sou cadastrado</h3>
          <div className='w-full max-w-[100rem] flex'>
            <Input label='E-mail' placeholder='Digite seu e-mail' />
          </div>
        </div>
      </div>
    </div>
  );
}
