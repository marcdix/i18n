import type { I18nOptions } from 'vue-i18n';
declare const _default: import("h3").EventHandler<unknown>;
export default _default;
export declare function getNeedPrecompileMessages(messages: NonNullable<I18nOptions['messages']>): {
    [x: string]: import("@intlify/core-base").LocaleMessage<import("vue-i18n").VueMessageType>;
};
