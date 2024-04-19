export function NotificationBar() {
  return (
    <div className='hidden bg-secondary text-black lg:py-3 lg:px-10 lg:flex lg:items-center lg:justify-center lg:gap-5'>
      <p className='text-[11px] tracking-[1.4px]'>
        Tudo em até <span className='text-primary'>12x</span> | Envio em até{' '}
        <span className='text-primary'>24h*</span> |
        <span className='text-primary'> 5% de desconto</span> nas compras à
        vista
      </p>
    </div>
  );
}
