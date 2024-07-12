import { App } from 'vue';
import { createI18n, I18nOptions } from 'vue-i18n';
export { useI18n } from 'vue-i18n';

declare let i18n: ReturnType<typeof createI18n>;
declare function setupI18n(app: App): Promise<void>;

declare const languagesNameList: {
    code: string;
    nativeName: string;
    name: string;
}[];

interface LocalesOptions {
    locale: string;
    fallbackLocale: string;
    messagesHandler: AnyFn;
    otherOptions?: Partial<I18nOptions>;
}
declare class LocalesConfiguration {
    private static options;
    static configure(options: Partial<LocalesOptions>): void;
    static getOptions(): LocalesOptions;
    static get locale(): string;
    static get fallbackLocale(): string;
    static get messagesHandler(): AnyFn;
    static get otherOptions(): Partial<I18nOptions> | undefined;
}
declare class LocalesEngine {
    static initLocales(configureFunction: () => Partial<LocalesOptions>): void;
    static setMessagesHandler(messagesHandler: AnyFn): void;
    static setLocale(locale: string): void;
    static setFallbackLocale(fallbackLocale: string): void;
    static setOtherOptions(otherOptions: Partial<I18nOptions>): void;
}

export { LocalesConfiguration, LocalesEngine, type LocalesOptions, i18n, languagesNameList, setupI18n };
