import { ToastInterface } from "./ToastInterface.ts";
import './css/style.css';
export declare class Toast implements ToastInterface {
    #private;
    constructor(obj?: null | object | string, type?: string, duration?: number);
    toString(): string;
    show(obj?: null | object | string, type?: string, duration?: number): void;
    getObject(): {
        message: string;
        title: string | null;
        media: string | null;
        type: string;
        duration: number;
        position: string;
        icon: string | null;
        template: string;
        closeOnClick: boolean;
        onClick: CallableFunction | null;
        theme: string;
        showProgressBar: boolean;
        closeByTimer: boolean;
        limitToast: number;
    };
    on(name: string, callback: EventListenerOrEventListenerObject): void;
    static getCurrentToasts(): object;
    close(): Promise<boolean>;
    getId(): string;
    getFullId(): string;
    getFullContainerId(): string;
    getElement(): HTMLElement | null;
    getParent(): HTMLElement | null;
    set title(title: string | null);
    get title(): string | null;
    set message(message: string);
    get message(): string;
    set media(media: string | null);
    get media(): string | null;
    set type(type: string);
    get type(): string;
    set duration(duration: number);
    get duration(): number;
    set closeByTimer(closeByTimer: boolean);
    get closeByTimer(): boolean;
    set closeOnClick(closeOnClick: boolean);
    get closeOnClick(): boolean;
    set icon(icon: null | string);
    get icon(): null | string;
    static set limitToast(limitToast: number);
    get limitToast(): number;
    static get limitToast(): number;
    set position(position: string);
    get position(): string;
    set showProgressBar(showProgressBar: boolean);
    get showProgressBar(): boolean;
    set template(template: string);
    get template(): string;
    set theme(theme: string);
    get theme(): string;
}
export declare function toast(obj?: null | object | string, type?: string, duration?: number): Toast;
//# sourceMappingURL=Toast.d.ts.map