export interface ToastInterface {
    getId(): string;
    getFullId(): string;
    getFullContainerId(): string;
    getElement(): HTMLElement | null;
    getParent(): HTMLElement | null;
    close(): Promise<boolean>;
    getObject(): object;
    set message(message: string);
    get message(): string;
    set type(type: string);
    get type(): string;
    set duration(duration: number);
    get duration(): number;
    set position(position: string);
    get position(): string;
    set icon(icon: null | string);
    get icon(): null | string;
    set template(template: string);
    get template(): string;
    set closeOnClick(closeOnClick: boolean);
    get closeOnClick(): boolean;
    set theme(theme: string);
    get theme(): string;
    set showProgressBar(showProgressBar: boolean);
    get showProgressBar(): boolean;
    set closeByTimer(closeByTimer: boolean);
    get closeByTimer(): boolean;
}
//# sourceMappingURL=ToastInterface.d.ts.map