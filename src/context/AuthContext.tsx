'use client';
import { createContext, ReactNode, useContext } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { server } from '@/config';

import { destroyCookieClientSide, setCookieClientSide } from '@/utils';

interface AuthContextData {
  handleLogin: (email: string, password: string) => Promise<boolean>;
  handleLogout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Login
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await server.post('customer/auth/login', {
        email,
        password,
      });

      if (response.status !== 200) {
        return false;
      }

      setCookieClientSide('cid', response.data.customerId);
      setCookieClientSide('cdn', response.data.customerName);

      if (response.data.cartId) {
        setCookieClientSide('cartId', response.data.cartId);
        setCookieClientSide('cartIdCount', response.data.cartId);
      }

      const redirect = searchParams.get('redirect');

      if (redirect) {
        router.push(redirect);
      } else {
        router.push('/');
      }

      return true;
    } catch (error) {
      console.error(`Error to handle customer login.`, error);
      return false;
    }
  };

  // Logout
  const handleLogout = async () => {
    destroyCookieClientSide('cid');
    destroyCookieClientSide('cdn');
    destroyCookieClientSide('cartId');
    destroyCookieClientSide('cartIdCount');

    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
