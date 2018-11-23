import Vue from 'vue';
import './vue';

export function install(vue: typeof Vue): void;

export declare interface VueCookies {
  /**
   * Set global config
   */
  config(expireTimes: string | number | Date, path?: string): void;

  /**
   * Set a cookie
   */
  set(keyName: string, value: any, expireTimes?: string | number | Date,
    path?: string, domain?: string, secure?: boolean): this;

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
