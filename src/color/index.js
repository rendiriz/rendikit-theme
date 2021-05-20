import { getCode } from '../_core/helpers/color';

const normal = (code) => {
  return getCode('normal', code);
}

const bootstrap = (code) => {
  return getCode('bootstrap', code);
}

export const Normal = normal;
export const Bootstrap = bootstrap;
