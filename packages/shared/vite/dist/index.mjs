import jiti from "file:///D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/jiti@1.21.6/node_modules/jiti/lib/index.js";

/** @type {import("D:/Download/celeris-web-master/celeris-web-master/packages/shared/vite/src/index")} */
const _module = jiti(null, {
  "esmResolve": true,
  "interopDefault": true,
  "alias": {
    "@celeris/vite": "D:/Download/celeris-web-master/celeris-web-master/packages/shared/vite"
  }
})("D:/Download/celeris-web-master/celeris-web-master/packages/shared/vite/src/index.ts");

export const createViteConfig = _module.createViteConfig;
export const mergeConfigs = _module.mergeConfigs;
export const any = _module.any;