import { getCode } from '../_core/helpers/color';

const normal = (code: string) => {
  return getCode('normal', code);
}

const bootstrap = (code: string) => {
  return getCode('bootstrap', code);
}

export const Normal = normal;
export const Bootstrap = bootstrap;
