export function getCookieClientSide(name: string): string | undefined {
  if (typeof window !== 'undefined') {
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${name}=`));

    if (cookie) {
      const cookieValue = cookie.split('=')[1];

      if (cookieValue === 'undefined') {
        return;
      }

      return decodeURIComponent(cookieValue);
    } else {
      return;
    }
  } else {
    return;
  }
}
