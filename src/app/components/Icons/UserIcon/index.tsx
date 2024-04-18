'use client';

import { User } from 'phosphor-react';

export function UserIcon({ ...props }: React.ComponentProps<typeof User>) {
  return <User {...props} />;
}
