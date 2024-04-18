'use client';

import { Heart } from 'phosphor-react';

export function HeartIcon({ ...props }: React.ComponentProps<typeof Heart>) {
  return <Heart {...props} />;
}
