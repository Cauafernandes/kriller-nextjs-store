import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export function getCookieServerSide(
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
  cookie: string,
): string | null {
  const { req } = ctx;

  const cookieHeader = req.headers.cookie;
  const cookies = parseCookies(cookieHeader);

  const cookieValue = cookies[cookie];

  if (cookieValue === 'undefined') {
    return null;
  }

  return cookieValue || null;
}

function parseCookies(cookieHeader: string | undefined) {
  const cookies: { [key: string]: string } = {};

  cookieHeader?.split(';').forEach((cookie) => {
    const [name, ...rest] = cookie.split('=');
    cookies[name.trim()] = rest.join('=').trim();
  });

  return cookies;
}
