import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get('locale')?.value;
  const acceptLanguage = request.headers.get('accept-language');

  const supportedLocales = ['en', 'fr'];
  const defaultLocale = 'en';

  let locale = defaultLocale;

  if (cookieLocale && supportedLocales.includes(cookieLocale)) {
    locale = cookieLocale;
  } else if (acceptLanguage) {
    const browserLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().substring(0, 2))
      .filter(lang => supportedLocales.includes(lang));

    if (browserLocales.length > 0) {
      locale = browserLocales[0];
    }
  }

  const response = NextResponse.next();

  if (!cookieLocale || cookieLocale !== locale) {
    response.cookies.set('locale', locale, {
      maxAge: 365 * 24 * 60 * 60,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
