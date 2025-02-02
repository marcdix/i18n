import * as _nuxt_schema from '@nuxt/schema';
import { LocaleObject, I18nRoutingOptions, Strategies } from 'vue-i18n-routing';
import { Locale, LocaleMessages, DefineLocaleMessage } from 'vue-i18n';
export { I18nOptions } from 'vue-i18n';

type RedirectOnOptions = 'all' | 'root' | 'no prefix';
interface DetectBrowserLanguageOptions {
    alwaysRedirect?: boolean;
    cookieCrossOrigin?: boolean;
    cookieDomain?: string | null;
    cookieKey?: string;
    cookieSecure?: boolean;
    fallbackLocale?: Locale | null;
    redirectOn?: RedirectOnOptions;
    useCookie?: boolean;
}
type LocaleType = 'static' | 'dynamic' | 'unknown';
type LocaleInfo = {
    /**
     * NOTE:
     *  The following fields are for `file` in the nuxt i18n module `locales` option
     */
    path?: string;
    hash?: string;
    type?: LocaleType;
    /**
     * NOTE:
     *  The following fields are for `files` (excluds nuxt layers) in the nuxt i18n module `locales` option.
     */
    paths?: string[];
    hashes?: string[];
    types?: LocaleType[];
} & LocaleObject;
type VueI18nConfigPathInfo = {
    relative?: string;
    absolute?: string;
    hash?: string;
    type?: LocaleType;
    rootDir: string;
    relativeBase: string;
};
interface RootRedirectOptions {
    path: string;
    statusCode: number;
}
type CustomRoutePages = {
    [key: string]: false | {
        [key: string]: false | string;
    };
};
interface ExperimentalFeatures {
    jsTsFormatResource?: boolean;
}
interface LocaleMessagePrecompileOptions {
    strictMessage?: boolean;
    escapeHtml?: boolean;
}

type NuxtI18nOptions<Context = unknown> = {
    vueI18n?: string;
    experimental?: ExperimentalFeatures;
    precompile?: LocaleMessagePrecompileOptions;
    differentDomains?: boolean;
    detectBrowserLanguage?: DetectBrowserLanguageOptions | false;
    langDir?: string | null;
    lazy?: boolean;
    pages?: CustomRoutePages;
    customRoutes?: 'page' | 'config';
    /**
     * @internal
     */
    i18nModules?: {
        langDir?: string | null;
        locales?: I18nRoutingOptions<Context>['locales'];
    }[];
    /**
     * @deprecated `'parsePages' option is deprecated. Please use 'customRoutes' option instead. We will remove it in v8 official release.`
     */
    parsePages?: boolean;
    rootRedirect?: string | null | RootRedirectOptions;
    routesNameSeparator?: string;
    skipSettingLocaleOnNavigate?: boolean;
    strategy?: Strategies;
    types?: 'composition' | 'legacy';
    debug?: boolean;
    dynamicRouteParams?: boolean;
} & Pick<I18nRoutingOptions<Context>, 'baseUrl' | 'strategy' | 'defaultDirection' | 'defaultLocale' | 'defaultLocaleRouteNameSuffix' | 'locales' | 'routesNameSeparator' | 'trailingSlash'>;
type NuxtI18nInternalOptions = {
    __normalizedLocales?: LocaleObject[];
};

declare const _default: _nuxt_schema.NuxtModule<NuxtI18nOptions>;

type MaybePromise<T> = T | Promise<T>;
type LocaleSwitch<T extends string = string> = {
    oldLocale: T;
    newLocale: T;
};
type ModulePublicRuntimeConfig<Context = unknown> = Pick<NuxtI18nOptions<Context>, 'baseUrl' | 'experimental'>;
type ModulePrivateRuntimeConfig<Context = unknown> = Pick<NuxtI18nOptions<Context>, 'precompile'>;
declare module '@nuxt/schema' {
    interface NuxtConfig {
        i18n?: NuxtI18nOptions;
    }
    interface NuxtHooks {
        'i18n:extend-messages': (messages: LocaleMessages<DefineLocaleMessage>[], localeCodes: string[]) => Promise<void>;
        'i18n:registerModule': (registerModule: (config: Pick<NuxtI18nOptions, 'langDir' | 'locales'>) => void) => void;
    }
    interface ConfigSchema {
        runtimeConfig: {
            public?: {
                i18n?: ModulePublicRuntimeConfig;
            };
            private?: {
                i18n?: ModulePrivateRuntimeConfig;
            };
        };
    }
}
declare module '#app' {
    interface RuntimeNuxtHooks {
        'i18n:beforeLocaleSwitch': <Context = unknown>(params: LocaleSwitch & {
            initialSetup: boolean;
            context: Context;
        }) => MaybePromise<void>;
        'i18n:localeSwitched': (params: LocaleSwitch) => MaybePromise<void>;
    }
}

export { CustomRoutePages, DetectBrowserLanguageOptions, ExperimentalFeatures, LocaleInfo, LocaleMessagePrecompileOptions, LocaleType, NuxtI18nInternalOptions, NuxtI18nOptions, RedirectOnOptions, RootRedirectOptions, VueI18nConfigPathInfo, _default as default };
