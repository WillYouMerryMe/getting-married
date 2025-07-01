import { Cookies } from 'react-cookie';

const cookie = new Cookies();

export class Cookie {
  static getItem(key: string) {
    return typeof window !== 'undefined' ? cookie.get(key) : null;
  }

  static setItem(key: string, value: string) {
    if (typeof window === 'undefined') return;

    cookie.set(key, value);
  }

  static removeItem(key: string) {
    if (typeof window === 'undefined') return;

    cookie.remove(key);
  }
}
