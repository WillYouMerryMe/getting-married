import { Cookies } from 'react-cookie';

const cookie = new Cookies();

export class Cookie {
  static getItem(key: string) {
    return typeof window !== 'undefined' ? cookie.get(key) : null;
  }

  static setItem(key: string, value: string) {
    if (typeof window === 'undefined') return;

    cookie.set(key, value, { path: '/' });
  }

  static removeItem(key: string) {
    if (typeof window === 'undefined') return;

    cookie.remove(key, { path: '/' });
  }

  static removeAll() {
    if (typeof window === 'undefined') return;

    Object.keys(cookie.getAll()).forEach((key) => {
      cookie.remove(key, { path: '/' });
    });
  }
}
