import _Vue from 'vue';
import './vue';

export declare function install(Vue: typeof _Vue): void;

export interface VueCookies {
  /**
   * Set global config
   */
  config(expireTimes: string | number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: string, encodeValue?: boolean): void;

  /**
   * Set encodeValue
   */
  encodeValue(encodeValue?: boolean): void;

  /**
   * Set a cookie
   */
  set(keyName: string, value: any, expireTimes?: string | number | Date,
    path?: string, domain?: string, secure?: boolean, sameSite?: string, encode?: boolean): this;

  /**
   * Get a cookie
   */
  get(keyName: string): any;

  /**
   * Remove a cookie
   */
  remove(keyName: string, path?: string, domain?: string): this;

  /**
   * Exist a cookie name
   */
  isKey(keyName: string): boolean;

  /**
   * Get All cookie name
   */
  keys(): string[];
}

declare const _default : {
  VueCookies: VueCookies;
  install: typeof install;
};

export default _default;
