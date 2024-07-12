import * as vue from 'vue';
import { App } from 'vue';

declare const AllDirectives: {
    copy: vue.Directive;
    ripple: vue.Directive;
    anchor: vue.Directive;
};
declare function setupDirectives(app: App): void;

export { AllDirectives, setupDirectives };
