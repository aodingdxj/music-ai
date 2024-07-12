import * as vue from 'vue';
import { ComponentPublicInstance, ComputedRef, Ref } from 'vue';
import * as _vueuse_core from '@vueuse/core';
export * from '@vueuse/core';
export { useNProgress } from '@vueuse/integrations/useNProgress';

declare function useComponentRef(name: string): {
    componentRef: vue.Ref<HTMLElement | ComponentPublicInstance | undefined>;
    elementRef: vue.Ref<any>;
};

declare function useMergeState<T, E = T | undefined>(defaultValue: T, props: {
    value: E;
}): [ComputedRef<T>, (val: E) => void, Ref<T>];

declare const breakpoints: Record<"sm" | "md" | "lg" | "xl" | "2xl", vue.Ref<boolean>> & {
    greaterOrEqual: (k: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">) => vue.Ref<boolean>;
    smallerOrEqual: (k: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">) => vue.Ref<boolean>;
    greater(k: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): vue.Ref<boolean>;
    smaller(k: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): vue.Ref<boolean>;
    between(a: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">, b: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): vue.Ref<boolean>;
    isGreater(k: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    isGreaterOrEqual(k: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    isSmaller(k: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    isSmallerOrEqual(k: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    isInBetween(a: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">, b: _vueuse_core.MaybeRefOrGetter<"sm" | "md" | "lg" | "xl" | "2xl">): boolean;
    current: () => vue.ComputedRef<string[]>;
    active(): vue.ComputedRef<string | undefined>;
};
declare const isMediumOrLargeScreen: vue.Ref<boolean>;
declare const isExtraLargeScreen: vue.Ref<boolean>;
declare const isSmallerOrEqualSm: vue.Ref<boolean>;
declare const isSmallerOrEqualMd: vue.Ref<boolean>;
declare const isSmallerOrEqualLg: vue.Ref<boolean>;
declare const isSmallerOrEqualXl: vue.Ref<boolean>;
declare const isSmallerOrEqual2xl: vue.Ref<boolean>;
declare const isGreaterOrEqualSm: vue.Ref<boolean>;
declare const isGreaterOrEqualMd: vue.Ref<boolean>;
declare const isGreaterOrEqualLg: vue.Ref<boolean>;
declare const isGreaterOrEqualXl: vue.Ref<boolean>;
declare const isGreaterOrEqual2xl: vue.Ref<boolean>;

type BasicStateAction<S> = ((state: S) => S) | S;
type Dispatch<A> = (action: A) => void;

declare function useState<S>(initialState?: (() => S) | S): [Ref<S>, Dispatch<BasicStateAction<S>>];

export { breakpoints, isExtraLargeScreen, isGreaterOrEqual2xl, isGreaterOrEqualLg, isGreaterOrEqualMd, isGreaterOrEqualSm, isGreaterOrEqualXl, isMediumOrLargeScreen, isSmallerOrEqual2xl, isSmallerOrEqualLg, isSmallerOrEqualMd, isSmallerOrEqualSm, isSmallerOrEqualXl, useComponentRef, useMergeState, useState };
