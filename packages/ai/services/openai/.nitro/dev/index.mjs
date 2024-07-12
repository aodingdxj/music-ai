import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import './timing.js';globalThis.__timing__.logStart('Nitro Start');import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/std-env@3.7.0/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, createError, getRouterParam, getQuery as getQuery$1, readBody, defineLazyEventHandler } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { klona } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/ufo@1.5.3/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { OpenAIStream, StreamingTextResponse } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/ai@3.2.19_openai@4.52.5_react@18.3.1_svelte@4.2.18_vue@3.4.31_zod@3.23.8/node_modules/ai/dist/index.mjs';
import process$1 from 'node:process';
import OpenAI, { OpenAI as OpenAI$1 } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/openai@4.52.5/node_modules/openai/index.mjs';
import urlJoin from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/url-join@5.0.0/node_modules/url-join/lib/url-join.js';
import { logger } from 'file://D:/Download/celeris-web-master/celeris-web-master/packages/web/utils/dist/index.js';
import { OpenAIClient, AzureKeyCredential } from 'file://D:/Download/celeris-web-master/celeris-web-master/node_modules/.pnpm/@azure+openai@1.0.0-beta.12/node_modules/@azure/openai/dist-esm/src/index.js';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  },
  "proxyApiUrl": "http://localhost:9000"
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/Download/celeris-web-master/celeris-web-master/packages/ai/services/openai/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Download\\celeris-web-master\\celeris-web-master\\packages\\ai\\services\\openai","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Download\\celeris-web-master\\celeris-web-master\\packages\\ai\\services\\openai","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Download\\celeris-web-master\\celeris-web-master\\packages\\ai\\services\\openai\\.nitro","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Download\\celeris-web-master\\celeris-web-master\\packages\\ai\\services\\openai\\.nitro\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\Download\\celeris-web-master\\celeris-web-master\\packages\\ai\\services\\openai\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function defineNitroPlugin(def) {
  return def;
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.node.res.end;
  event.node.res.end = function(chunk, encoding, cb) {
    const metrics = [
      ["Generate", globalTiming.end(start)],
      ...globalTiming.metrics
    ];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.node.res.headersSent) {
      event.node.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.node.res, chunk, encoding, cb);
    return this;
  }.bind(event.node.res);
});
const _2TPEFfpOle = defineNitroPlugin((nitro) => {
  nitro.h3App.stack.unshift({
    route: "/",
    handler: timingMiddleware
  });
});

const plugins = [
  _2TPEFfpOle
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const showDetails = statusCode !== 404;
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: showDetails ? stack.map((i) => i.text) : void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const _lazy_hvizGz = () => Promise.resolve().then(function () { return _provider_$1; });
const _lazy_4sMPCL = () => Promise.resolve().then(function () { return index$1; });

const handlers = [
  { route: '/api/chat/:provider', handler: _lazy_hvizGz, lazy: true, middleware: false, method: undefined },
  { route: '/', handler: _lazy_4sMPCL, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const AgentRuntimeError = {
  chat: (error) => error,
  createError: (errorType, error) => ({ error, errorType })
};

var ModelBrandProvider = /* @__PURE__ */ ((ModelBrandProvider2) => {
  ModelBrandProvider2["Azure"] = "azure";
  ModelBrandProvider2["ChatGLM"] = "chatglm";
  ModelBrandProvider2["Google"] = "google";
  ModelBrandProvider2["OpenAI"] = "openai";
  ModelBrandProvider2["Celeris"] = "celeris";
  return ModelBrandProvider2;
})(ModelBrandProvider || {});

class AbstractLanguageModel {
  /**
   * 模型的品牌标识符，应该是唯一的。
   * Brand id of the model, should be unique.
   */
  _brandId;
  /**
   * 基本URL
   * Base URL
   */
  _baseURL;
  /**
   * 模型参数
   * Model parameters
   */
  _modelParams;
  constructor(brandId = ModelBrandProvider.Celeris, baseURL, modelParams) {
    this._brandId = brandId;
    this._baseURL = baseURL;
    this._modelParams = modelParams;
  }
}

async function debugStream(stream) {
  let done = false;
  let chunk = 0;
  const decoder = new TextDecoder();
  const reader = stream.getReader();
  while (!done) {
    const { value, done: _done } = await reader.read();
    const chunkValue = decoder.decode(value, { stream: true });
    if (!_done) {
      logger.info(`debugStream- chunk ${chunk}: ${chunkValue}`);
    }
    done = _done;
    chunk++;
  }
}

const LanguageModelAgentRuntimeErrorType = {
  AgentRuntimeError: "AgentRuntimeError",
  // Agent Runtime 模块运行时错误
  LocationNotSupportedError: "LocationNotSupportedError",
  // 不支持的位置错误
  OpenAIBusinessError: "OpenAIBusinessError",
  // OpenAI 业务错误
  MockAIBusinessError: "MockAIBusinessError",
  // Mock 业务错误
  NoOpenAIAPIKey: "NoOpenAIAPIKey",
  // 缺少 OpenAI API 密钥
  InvalidAzureAPIKey: "InvalidAzureAPIKey",
  // 无效的 Azure API 密钥
  AzureBusinessError: "AzureBusinessError"
  // Azure 业务错误
};

function handleOpenAIError(error) {
  let errorResult;
  if (error instanceof OpenAI.APIError) {
    if (error.error) {
      errorResult = error.error;
    } else if (error.cause) {
      errorResult = error.cause;
    } else {
      errorResult = { headers: error.headers, stack: error.stack, status: error.status };
    }
    return {
      errorResult
    };
  } else {
    const err = error;
    errorResult = { cause: err.cause, message: err.message, name: err.name, stack: err.stack };
    return {
      RuntimeError: LanguageModelAgentRuntimeErrorType.AgentRuntimeError,
      errorResult
    };
  }
}

const DEBUG_CHAT_COMPLETION = process$1.env.DEBUG_CHAT_COMPLETION === "1";

function desensitizeUrl(url) {
  try {
    const urlObj = new URL(url);
    const hostnameParts = urlObj.hostname.split(".");
    const port = urlObj.port;
    if (hostnameParts.length > 1) {
      const secondLevelDomainIndex = hostnameParts.length - 2;
      if (hostnameParts[secondLevelDomainIndex].length < 5) {
        hostnameParts[secondLevelDomainIndex] = "***";
      } else {
        hostnameParts[secondLevelDomainIndex] = hostnameParts[secondLevelDomainIndex].replace(
          /^(.*?)(\w{2})(\w+)(\w{2})$/,
          (_, prefix, start, middle, end) => `${prefix}${start}****${end}`
        );
      }
    }
    const desensitizedHostname = hostnameParts.join(".");
    const desensitizedPort = port ? ":****" : "";
    return `${urlObj.protocol}//${desensitizedHostname}${desensitizedPort}${urlObj.pathname}${urlObj.search}`;
  } catch {
    return url;
  }
}

const DEFAULT_BASE_URL = "https://api.openai.com/v1";
class CelerisOpenAILanguageModel extends AbstractLanguageModel {
  client;
  _baseURL;
  constructor(options) {
    super(ModelBrandProvider.OpenAI);
    if (!options.apiKey) {
      throw AgentRuntimeError.createError(LanguageModelAgentRuntimeErrorType.NoOpenAIAPIKey);
    }
    if (options.useAzure) {
      this.client = CelerisOpenAILanguageModel.initWithAzureOpenAI(options);
    } else {
      this.client = new OpenAI$1(options);
    }
    this._baseURL = this.client.baseURL;
  }
  async chat(payload) {
    const { messages, ...params } = payload;
    try {
      const response = await this.client.chat.completions.create(
        {
          messages,
          ...params,
          stream: true
        },
        { headers: { Accept: "*/*" } }
      );
      const stream = OpenAIStream(response);
      const [debug, prod] = stream.tee();
      if (DEBUG_CHAT_COMPLETION) {
        debugStream(debug).catch(console.error);
      }
      return new StreamingTextResponse(prod);
    } catch (error) {
      const { errorResult, RuntimeError } = handleOpenAIError(error);
      const errorType = RuntimeError || LanguageModelAgentRuntimeErrorType.OpenAIBusinessError;
      let desensitizedEndpoint = this._baseURL;
      if (this._baseURL !== DEFAULT_BASE_URL) {
        desensitizedEndpoint = desensitizeUrl(this._baseURL);
      }
      throw AgentRuntimeError.chat({
        endpoint: desensitizedEndpoint,
        error: errorResult,
        errorType,
        provider: this._brandId
      });
    }
  }
  static initWithAzureOpenAI(options) {
    const endpoint = options.baseURL;
    const model = options.azureOptions?.model || "";
    const baseURL = urlJoin(endpoint, `/openai/deployments/${model.replace(".", "")}`);
    const apiVersion = options.azureOptions?.apiVersion || "2023-08-01-preview";
    const apiKey = options.apiKey;
    const config = {
      apiKey,
      baseURL,
      defaultHeaders: { "api-key": apiKey },
      defaultQuery: { "api-version": apiVersion }
    };
    return new OpenAI$1(config);
  }
}

class CelerisAzureOpenAI extends AbstractLanguageModel {
  _client;
  _baseURL;
  constructor(endpoint, apikey, apiVersion) {
    super(ModelBrandProvider.Azure);
    if (!apikey || !endpoint) {
      throw AgentRuntimeError.createError(LanguageModelAgentRuntimeErrorType.InvalidAzureAPIKey);
    }
    this._client = new OpenAIClient(endpoint, new AzureKeyCredential(apikey), { apiVersion });
    this._baseURL = endpoint;
  }
  async chat(payload) {
    const { messages, model, ...params } = payload;
    try {
      const response = await this._client.streamChatCompletions(
        model,
        messages,
        params
      );
      const stream = OpenAIStream(response);
      const [debug, prod] = stream.tee();
      if (DEBUG_CHAT_COMPLETION) {
        debugStream(debug).catch(console.error);
      }
      return new StreamingTextResponse(prod);
    } catch (e) {
      let error = e;
      switch (error.code) {
        case "DeploymentNotFound": {
          error = { ...error, deployId: model };
        }
      }
      const errorType = error.code ? LanguageModelAgentRuntimeErrorType.AzureBusinessError : LanguageModelAgentRuntimeErrorType.AgentRuntimeError;
      throw AgentRuntimeError.chat({
        error,
        errorType,
        provider: this._brandId
      });
    }
  }
}

class CelerisMockLanguageModel extends AbstractLanguageModel {
  constructor() {
    super(ModelBrandProvider.Celeris);
  }
  async streamChatCompletions(messages) {
    const stream = new ReadableStream({
      start(controller) {
        messages.map((message) => (
          // 模拟处理消息
          controller.enqueue(`Mock completion for ${message.content}`)
        ));
        controller.close();
      }
    });
    return stream;
  }
  async chat(payload) {
    const { messages } = payload;
    try {
      const response = await this.streamChatCompletions(
        messages
      );
      const [_debug, prod] = response.tee();
      return new StreamingTextResponse(prod);
    } catch (e) {
      const error = e;
      const errorType = error.code ? LanguageModelAgentRuntimeErrorType.MockAIBusinessError : LanguageModelAgentRuntimeErrorType.AgentRuntimeError;
      throw AgentRuntimeError.chat({
        error,
        errorType,
        provider: this._brandId
      });
    }
  }
}

function getProviderConfig() {
  if (typeof process$1 === "undefined") {
    throw new TypeError("[Server Config] you are importing a server-only module outside of server");
  }
  let regions = [];
  if (process$1.env.OPENAI_FUNCTION_REGIONS) {
    regions = process$1.env.OPENAI_FUNCTION_REGIONS.split(",");
  }
  return {
    CUSTOM_MODELS: process$1.env.CUSTOM_MODELS,
    OPENAI_API_KEY: process$1.env.OPENAI_API_KEY,
    OPENAI_PROXY_URL: process$1.env.OPENAI_PROXY_URL,
    OPENAI_FUNCTION_REGIONS: regions,
    AZURE_API_KEY: process$1.env.AZURE_API_KEY,
    AZURE_API_VERSION: process$1.env.AZURE_API_VERSION,
    AZURE_ENDPOINT: process$1.env.AZURE_ENDPOINT,
    USE_AZURE_OPENAI: process$1.env.USE_AZURE_OPENAI === "1",
    SERVICES_CIPHER_KEY: process$1.env.SERVICES_CIPHER_KEY,
    SERVICES_CIPHER_IV: process$1.env.SERVICES_CIPHER_IV,
    DEBUG_CHAT_COMPLETION: process$1.env.DEBUG_CHAT_COMPLETION === "1"
  };
}

function getServerConfig() {
  if (typeof process$1 === "undefined") {
    throw new TypeError("[Server Config] you are importing a server-only module outside of server");
  }
  const provider = getProviderConfig();
  return { ...provider };
}

class LanguageModelAgent {
  _runtime;
  constructor(runtime) {
    this._runtime = runtime;
  }
  async chat(payload) {
    return this._runtime.chat(payload);
  }
  static async initializeWithUserPayload(provider, payload, azureOpenAI) {
    let runtimeModel;
    switch (provider) {
      default:
      case ModelBrandProvider.OpenAI: {
        runtimeModel = this.initOpenAI(payload, azureOpenAI);
        break;
      }
      case ModelBrandProvider.Azure: {
        runtimeModel = this.initAzureOpenAI(payload);
        break;
      }
      case ModelBrandProvider.Celeris: {
        runtimeModel = this.initMockAI();
        break;
      }
    }
    return new LanguageModelAgent(runtimeModel);
  }
  static initOpenAI(payload, azureOpenAI) {
    const { OPENAI_API_KEY, OPENAI_PROXY_URL, AZURE_API_VERSION, AZURE_API_KEY, USE_AZURE_OPENAI } = getServerConfig();
    const apiKey = payload?.apiKey || OPENAI_API_KEY;
    const baseURL = payload?.endpoint || OPENAI_PROXY_URL;
    const azureApiKey = payload.apiKey || AZURE_API_KEY;
    const useAzure = azureOpenAI?.useAzure || USE_AZURE_OPENAI;
    const apiVersion = azureOpenAI?.apiVersion || AZURE_API_VERSION;
    return new CelerisOpenAILanguageModel({
      apiKey: azureOpenAI?.useAzure ? azureApiKey : apiKey,
      azureOptions: {
        apiVersion,
        model: azureOpenAI?.model
      },
      baseURL,
      useAzure
    });
  }
  static initMockAI() {
    return new CelerisMockLanguageModel();
  }
  static initAzureOpenAI(payload) {
    const { AZURE_API_KEY, AZURE_API_VERSION, AZURE_ENDPOINT } = getServerConfig();
    const apiKey = payload?.apiKey || AZURE_API_KEY;
    const endpoint = payload?.endpoint || AZURE_ENDPOINT;
    const apiVersion = payload?.azureApiVersion || AZURE_API_VERSION;
    return new CelerisAzureOpenAI(endpoint, apiKey, apiVersion);
  }
}

const CELERIS_CHAT_AUTH_HEADER = "x-celeris-chat-auth";

const ChatErrorType = {
  // ******* 业务错误语义 ******* //
  OpenAIBusinessError: "OpenAIBusinessError",
  // OpenAI 返回的业务错误
  NoOpenAIAPIKey: "NoOpenAIAPIKey",
  // 缺少 OpenAI API 密钥
  // ******* 客户端错误 ******* //
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  ContentNotFound: 404,
  MethodNotAllowed: 405,
  TooManyRequests: 429,
  // ******* 服务端错误 ******* //
  InternalServerError: 500,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504
};

const _provider_ = defineLazyEventHandler(async () => {
  let agentRuntime;
  const { OPENAI_API_KEY, OPENAI_PROXY_URL } = getServerConfig();
  if (!OPENAI_API_KEY) {
    throw new Error("Missing OpenAI API key");
  }
  return defineEventHandler(async (event) => {
    const provider = getRouterParam(event, "provider");
    const authorization = getRequestHeader(event, CELERIS_CHAT_AUTH_HEADER);
    if (!authorization) {
      throw AgentRuntimeError.createError(ChatErrorType.Unauthorized);
    }
    const openAIChatStreamPayload = await readBody(event);
    agentRuntime = await LanguageModelAgent.initializeWithUserPayload(provider, {
      apiKey: OPENAI_API_KEY,
      /**
       * Represents the endpoint of provider
       */
      endpoint: OPENAI_PROXY_URL
    });
    return await agentRuntime.chat(openAIChatStreamPayload);
  });
});

const _provider_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _provider_
});

const index = defineEventHandler(() => {
  return { hello: "@celeris/ai-services-openai" };
});

const index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index
});;globalThis.__timing__.logEnd('Nitro Start');
//# sourceMappingURL=index.mjs.map
