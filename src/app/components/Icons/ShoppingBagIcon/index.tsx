'use client';

import { ShoppingBag } from 'phosphor-react';

export function ShoppingBagIcon({
  ...props
}: React.ComponentProps<typeof ShoppingBag>) {
  return <ShoppingBag {...props} />;
}
