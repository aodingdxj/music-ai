declare const CELERIS_WEB_GITHUB_URL = "https://github.com/kirklin/celeris-web";
declare const VITE_DOCS_CN_URL = "https://cn.vitejs.dev/";
declare const VITE_DOCS_URL = "https://vitejs.dev/";
declare const VUE_DOCS_URL = "https://vuejs.org/";

declare function NOOP(): undefined;

declare enum PageConstants {
    BASE_LOGIN = "/login",
    BASE_HOME = "/dashboard",
    ERROR_PAGE = "/exception"
}

declare enum OperatingSystem {
    Windows = "Windows",
    MacOS = "MacOS",
    UNIX = "UNIX",
    Linux = "Linux",
    Unknown = "Unknown"
}
type OS = keyof typeof OperatingSystem;

declare const PROJECT_CONFIG_KEY = "PROJECT__CONFIG__KEY";
declare const LOCALES_STORE_KEY = "LOCALES__STORE__KEY";

declare enum RequestConstants {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
declare enum ResultConstants {
    SUCCESS = 0,
    ERROR = -1,
    TIMEOUT = 408
}
declare enum ContentTypeConstants {
    JSON = "application/json;charset=UTF-8",
    FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
    FORM_MULTIPART = "multipart/form-data;charset=UTF-8"
}
declare enum HttpStatusConstants {
    Processing = 102,
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    ResetContent = 205,
    PartialContent = 206,
    MovedPermanently = 301,
    Found = 302,
    SeeOther = 303,
    NotModified = 304,
    UseProxy = 305,
    TemporaryRedirect = 307,
    PermanentRedirect = 308,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    RequestTimeout = 408,
    InternalServerError = 500,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504
}

declare enum PermissionModeConstants {
    ROLE = "ROLE",
    BACKEND = "BACKEND",
    ROUTE_MAPPING = "ROUTE_MAPPING"
}
declare enum PermissionCacheTypeConstants {
    LOCAL_STORAGE = "LOCAL_STORAGE",
    SESSION_STORAGE = "SESSION_STORAGE"
}
declare enum SessionTimeoutProcessingConstants {
    ROUTE_JUMP = 0,
    PAGE_COVERAGE = 1
}

declare enum RouterTransitionConstants {
    ZOOM_FADE = "zoom-fade",
    ZOOM_OUT = "zoom-out",
    FADE_SLIDE = "fade-slide",
    FADE = "fade",
    FADE_BOTTOM = "fade-bottom",
    FADE_SCALE = "fade-scale"
}
declare enum SettingButtonPositionConstants {
    AUTO = "auto",
    HEADER = "header",
    FIXED = "fixed"
}

declare enum RoleConstants {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

type ValidKeys<T, K extends keyof T = keyof T> = K extends K ? T[K] extends PropertyKey ? K : never : never;
declare function defineConstants<T extends object, K extends keyof T>(items: T[], key: K): T[K][];
declare function defineConstants<T extends object, K extends ValidKeys<T>, V extends keyof T>(items: T[], key: K, values: V): Record<T[K] extends PropertyKey ? T[K] : never, T[V]>;
declare function defineConstants<T extends object, K extends ValidKeys<T>, V extends keyof T>(items: T[], key: K, values: V[]): Record<T[K] extends PropertyKey ? T[K] : never, Pick<T, V>>;

export { CELERIS_WEB_GITHUB_URL, ContentTypeConstants, HttpStatusConstants, LOCALES_STORE_KEY, NOOP, type OS, OperatingSystem, PROJECT_CONFIG_KEY, PageConstants, PermissionCacheTypeConstants, PermissionModeConstants, RequestConstants, ResultConstants, RoleConstants, RouterTransitionConstants, SessionTimeoutProcessingConstants, SettingButtonPositionConstants, VITE_DOCS_CN_URL, VITE_DOCS_URL, VUE_DOCS_URL, defineConstants };
