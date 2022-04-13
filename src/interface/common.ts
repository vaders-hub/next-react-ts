import { ComponentType, LazyExoticComponent, ReactNode } from "react";

export type ReactComp = {
  component: () => React.ReactElement;
};

export type IdxSign = {
  [key: string | number]: unknown;
};

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  message?: string;
  payload?: any;
}

export interface IRoute {
  path: string;
  exact: boolean;
  fallback: NonNullable<ReactNode> | null;
  component?: LazyExoticComponent<ComponentType<any>>;
  routes?: IRoute[];
  redirect?: string;
  private?: boolean;
  location?: any;
}
