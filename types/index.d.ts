// @ts-ignore
import _Vue, { App } from 'vue';
import './vue';

export declare function install(Vue: typeof _Vue | App, options?: CookiesConfig): void;

export interface VueCookies {
  /**
   * Set global config
   */
  config(expires?: string | number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: string): void;

  /**
   * Set global config
   */
  config(config: CookiesConfig): void;

  /**
   * Set a cookie
   */
  set(keyName: string, value: any, expires?: string | number | Date,
    path?: string, domain?: string, secure?: boolean, sameSite?: string): this;

  /**
   * Set a cookie
   */
  set(keyName: string, value: any, config: CookiesConfig): this;

  /**
   * Get a cookie
   */
  get(keyName: string): any;

  /**
   * Remove a cookie or more
   */
  remove(keyName: string | string[], path?: string, domain?: string): boolean;

  /**
   * Remove a cookie or more
   */
  remove(keyName: string | string[], removeConfig: CookiesRemoveConfig)

  /**
   * Exist a cookie name
   */
  isKey(keyName: string): boolean;

  /**
   * Get All cookie name
   */
  keys(): string[];
}

interface CookiesConfig {
  expires?: string | number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: string;
}

interface CookiesRemoveConfig {
  path?: string;
  domain?: string;
}

declare const _default : {
  VueCookies: VueCookies;
  install: typeof install;
};

export default _default;
