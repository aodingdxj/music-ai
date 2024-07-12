import { GlobEnvConfig, GlobConfig, MenuModule, Menu } from '@celeris/types';
import dayjs from 'dayjs';
import { ResultConstants, OS } from '@celeris/constants';
import { RouteRecordRaw, RouteLocationNormalized } from 'vue-router';
import { ComponentPublicInstance, InjectionKey, VNodeChild, VNode, Plugin, AppContext, Directive, Component } from 'vue';
export { field, logger } from '@kirklin/logger';
export { isClient, isMobile, isServer, isTouchSupported } from 'detect-mobile';
export * from 'lodash-es';
export { isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isLength, isMap, isMatch, isMatchWith, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol, isTypedArray, isUndefined, isWeakMap, isWeakSet } from 'lodash-es';
export { generateColorPalette, generateColorPalettes } from '@kirklin/palette';
import { RgbaColor } from 'colord/types';

declare function openWindow(url: string, { target, features }?: {
    target?: "_blank" | "_self" | "_parent" | "_top";
    features?: string;
}): void;
declare function copyToClipboard(text: string, onSuccess?: (text?: any) => void, onError?: (error?: any) => void): void;

interface Encryption {
    encrypt: (plainText: string) => string;
    decrypt: (cipherText: string) => string;
}
interface Hashing {
    hash: (data: string) => string;
}
interface EncryptionParams {
    key: string;
    iv: string;
}
declare class EncryptionFactory {
    static createAesEncryption(params: EncryptionParams): Encryption;
    static createBase64Encryption(): Encryption;
}
declare class HashingFactory {
    static createMD5Hashing(): Hashing;
    static createSHA256Hashing(): Hashing;
    static createSHA512Hashing(): Hashing;
}

declare function isWhiteColor(color: string): boolean;
declare function isColor(color: string): boolean;
declare function isBlackColor(color: string): boolean;
declare function colorToRgb(color: string): RgbaColor;
declare function convertColorToRgbString(color: string): string;
declare function convertColorToRgbValues(color: string): string;

declare const presetPrimaryColors: Record<string, string>;
declare const presetPalettes: PalettesProps;
declare const presetDarkPalettes: PalettesProps;
declare const red: string[] & {
    primary?: string;
};
declare const orangered: string[] & {
    primary?: string;
};
declare const gold: string[] & {
    primary?: string;
};
declare const orange: string[] & {
    primary?: string;
};
declare const yellow: string[] & {
    primary?: string;
};
declare const lime: string[] & {
    primary?: string;
};
declare const green: string[] & {
    primary?: string;
};
declare const cyan: string[] & {
    primary?: string;
};
declare const blue: string[] & {
    primary?: string;
};
declare const celerisBlue: string[] & {
    primary?: string;
};
declare const purple: string[] & {
    primary?: string;
};
declare const pinkpurple: string[] & {
    primary?: string;
};
declare const magenta: string[] & {
    primary?: string;
};
declare const black: string[] & {
    primary?: string;
};
declare const white: string[] & {
    primary?: string;
};
declare const gray: string[] & {
    primary?: string;
};
declare const grey: string[] & {
    primary?: string;
};
type PalettesProps = Record<string, string[] & {
    primary?: string;
}>;

declare function getAppConfigFileName(env: GlobEnvConfig): string;
declare function getAppGlobalConfig(env: GlobEnvConfig): GlobConfig;
declare function createStorageName(env: GlobEnvConfig): string;

declare function formatToDateTime(date?: dayjs.ConfigType, format?: string): string;
declare function formatToDate(date?: dayjs.ConfigType, format?: string): string;
declare const dateUtil: typeof dayjs;

declare function toggleCssClass(enableClass: boolean, className: string, element?: HTMLElement): void;
declare function setCssVariable(property: string, value: string | null, element?: HTMLElement): void;
declare function setCssVariables(variables: Record<string, string | null>, element?: HTMLElement): void;
declare function parseCSS(cssStr: string): Record<string, string>;
declare function serializeCSS(cssObj: Record<string, string>): string;
declare const on: <K extends keyof HTMLElementEventMap>(element: HTMLElement | Window, event: K, handler: (ev: HTMLElementEventMap[K]) => void, options?: boolean | AddEventListenerOptions) => void;
declare const off: <K extends keyof HTMLElementEventMap>(element: HTMLElement | Window, type: K, handler: (ev: HTMLElementEventMap[K]) => void, options?: boolean | EventListenerOptions) => void;
declare function querySelector(selectors: string, container?: Document | HTMLElement): HTMLElement | undefined;
declare function getElement(target: string | HTMLElement | undefined, container?: Document | HTMLElement): HTMLElement | undefined;

type EventType = string | symbol;
type Handler<T = unknown> = (event: T) => void;
type WildcardHandler<T = Record<string, unknown>> = (type: keyof T, event: T[keyof T]) => void;
type EventHandlerList<T = unknown> = Array<Handler<T>>;
type WildCardEventHandlerList<T = Record<string, unknown>> = Array<WildcardHandler<T>>;
type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<keyof Events | "*", EventHandlerList<Events[keyof Events]> | WildCardEventHandlerList<Events>>;
interface Emitter<Events extends Record<EventType, unknown>> {
    all: EventHandlerMap<Events>;
    on: (<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>) => void) & ((type: "*", handler: WildcardHandler<Events>) => void);
    off: (<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>) => void) & ((type: "*", handler: WildcardHandler<Events>) => void);
    emit: (<Key extends keyof Events>(type: Key, event: Events[Key]) => void) & (<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never) => void);
    clear: () => void;
}
declare function mitt<Events extends Record<EventType, unknown>>(all?: EventHandlerMap<Events>): Emitter<Events>;

interface RequestParams<T = any, Q = Record<string, any>> {
    method: string;
    body: T;
    headers?: {
        authorization?: string;
    };
    query: Q;
}
interface SuccessResponse<T = any> {
    code: number;
    data: T;
    message: string;
    type: "success";
}
interface ErrorResponse<T = any> {
    code: number;
    data: T | null;
    message: string;
    type: "error";
}
declare function paginate<T = any>(pageNo: number, pageSize: number, array: T[]): T[];
declare function createSuccessResponse<T = any>(data: T, message?: string): SuccessResponse<T>;
declare function createPaginatedSuccessResponse<T = any>(page: number, pageSize: number, list: T[], message?: string): SuccessResponse<{
    items: T[];
    total: number;
}>;
declare function createErrorResponse<T = any>(message?: string, code?: ResultConstants, data?: T | null): ErrorResponse<T>;
declare function extractAuthorizationToken({ headers }: RequestParams): string | undefined;

declare function loadDataFromModules<T>(modules: Record<string, any>): T[];

declare function detectOperatingSystem(): OS;
declare function isWindows(): boolean;
declare function isMacOS(): boolean;
declare function isUnix(): boolean;
declare function isLinux(): boolean;

declare function loadMenusFromModules(modules: Record<string, {
    default: any;
}>): MenuModule[];
declare function transformMenuModule(menuModule: MenuModule): Menu;
declare function transformRouteToMenu(routeModList: RouteRecordRaw[], routerMapping?: boolean): Menu[];
declare function getAllParentPaths<T extends {
    path: string;
}>(treeData: T[], path: string): string[] | null;
declare function getFirstMatchingParent<T extends {
    path: string;
}>(treeData: T[], path: string): T[] | null;

declare function loadRoutesFromModules(modules: Record<string, {
    default: any;
}>): RouteRecordRaw[];
declare function getRawRoute(route: RouteLocationNormalized): RouteLocationNormalized;
declare function createPathMatcher(path: string): RegExp;
declare function flattenMultiLevelRoutes(routeModules: RouteRecordRaw[]): RouteRecordRaw[];

declare const isServerRendering: boolean;
declare function isHttpUrl(path: string): boolean;
declare function isComponentInstance(value: any): value is ComponentPublicInstance;

interface TreeHelperConfig<T = any> {
    idKey: keyof T;
    childrenKey: keyof T;
    parentKey: keyof T;
}
declare function flattenToTree<T>(list: T[], config?: Partial<TreeHelperConfig>): T[];
declare function flattenTree<T>(tree: T[], config?: Partial<TreeHelperConfig>): T[];
declare function findTreeNode<T>(treeData: T[], predicate: (node: T) => boolean, config?: Partial<TreeHelperConfig>): T | null;
declare function findTreeNodes<T>(treeData: T[], predicate: (node: T) => boolean, config?: Partial<TreeHelperConfig>): T[];
declare function findFirstNodePath<T>(treeData: T[], predicate: (node: T) => boolean, config?: Partial<TreeHelperConfig>): T[] | null;
declare function findAllNodePaths<T>(treeData: T[], predicate: (node: T) => boolean, config?: Partial<TreeHelperConfig>): T[][];
declare function filterTree<T>(treeNodes: T[], predicate: (node: T) => boolean, config?: Partial<TreeHelperConfig>): T[];
declare function traverseTreeRecursive<T>(treeData: T[], callback: (node: T) => void, config?: Partial<TreeHelperConfig>): void;
declare function traverseTreeIterative<T>(treeData: T[], callback: (node: T) => void, config?: Partial<TreeHelperConfig>): void;
declare function traverseTreeIterativeWithParent<T>(treeData: T[], callback: (node: T, parent?: T) => void, config?: Partial<TreeHelperConfig>): void;
declare function mapTreeStructure<T = any, R = any>(treeData: T[], convertNodeToStructure: (node: T) => Partial<R> & {
    [key: TreeHelperConfig["childrenKey"]]: any;
}, config?: Partial<TreeHelperConfig>): (Partial<R> & {
    [key: string]: any;
    [key: number]: any;
    [key: symbol]: any;
})[];
declare function mapTreeNodeStructure<T = any, R = any>(node: T, convertNodeToStructure: (node: T) => Partial<R> & {
    [key: TreeHelperConfig["childrenKey"]]: any;
}, config?: Partial<TreeHelperConfig>): Partial<R> & {
    [key: string]: any;
    [key: number]: any;
    [key: symbol]: any;
};

declare function deepMerge<T extends object | null | undefined, U extends object | null | undefined>(source: T, target: U, mergeArrays?: "union" | "intersection" | "concat" | "replace"): T & U;
declare function memo<TDeps extends readonly any[], TResult>(getDependencies: () => [...TDeps], fn: (...args: NoInfer<[...TDeps]>) => TResult, options: {
    key: any;
    debug?: () => any;
    onChange?: (result: TResult) => void;
}): () => TResult;
declare function getErrorMessage(error: Error | {
    message: string;
} | string): string;
declare function NOOP(): undefined;

declare function buildUUID(): string;
declare function buildShortUUID(prefix?: string): string;

declare function createInjectionKey<T>(key: string): InjectionKey<T>;

declare function flattenVNodes(vNodes: VNodeChild[], filterCommentNode?: boolean, result?: VNode[]): VNode[];

type SFCWithInstall<T> = T & Plugin;
type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};
declare function withInstall<T, E extends Record<string, any>>(main: T, extra?: E): SFCWithInstall<T> & E;
declare function withInstallFunction<T>(fn: T, name: string): SFCInstallWithContext<T>;
declare function withInstallDirective<T extends Directive>(directive: T, name: string): SFCWithInstall<T>;
declare function withNoopInstall<T>(component: T): SFCWithInstall<T>;

declare function forwardRefComponent(component: Component): Component;

export { type Emitter, type Encryption, EncryptionFactory, type EncryptionParams, type ErrorResponse, type EventHandlerList, type EventHandlerMap, type EventType, type Handler, type Hashing, HashingFactory, NOOP, type PalettesProps, type RequestParams, type SFCInstallWithContext, type SFCWithInstall, type SuccessResponse, type WildCardEventHandlerList, type WildcardHandler, black, blue, buildShortUUID, buildUUID, celerisBlue, colorToRgb, convertColorToRgbString, convertColorToRgbValues, copyToClipboard, createErrorResponse, createInjectionKey, createPaginatedSuccessResponse, createPathMatcher, createStorageName, createSuccessResponse, cyan, dateUtil, deepMerge, detectOperatingSystem, extractAuthorizationToken, filterTree, findAllNodePaths, findFirstNodePath, findTreeNode, findTreeNodes, flattenMultiLevelRoutes, flattenToTree, flattenTree, flattenVNodes, formatToDate, formatToDateTime, forwardRefComponent, getAllParentPaths, getAppConfigFileName, getAppGlobalConfig, getElement, getErrorMessage, getFirstMatchingParent, getRawRoute, gold, gray, green, grey, isBlackColor, isColor, isComponentInstance, isHttpUrl, isLinux, isMacOS, isServerRendering, isUnix, isWhiteColor, isWindows, lime, loadDataFromModules, loadMenusFromModules, loadRoutesFromModules, magenta, mapTreeNodeStructure, mapTreeStructure, memo, mitt, off, on, openWindow, orange, orangered, paginate, parseCSS, pinkpurple, presetDarkPalettes, presetPalettes, presetPrimaryColors, purple, querySelector, red, serializeCSS, setCssVariable, setCssVariables, toggleCssClass, transformMenuModule, transformRouteToMenu, traverseTreeIterative, traverseTreeIterativeWithParent, traverseTreeRecursive, white, withInstall, withInstallDirective, withInstallFunction, withNoopInstall, yellow };
