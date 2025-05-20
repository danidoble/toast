export interface ToastInterface {
    getId(): string;

    getFullId(): string;

    getFullContainerId(): string;

    getElement(): HTMLElement | null;

    getParent(): HTMLElement | null;

    close(): Promise<boolean>;

    getObject(): object;

    set message(message: string);

    get message();

    set type(type: string);

    get type();

    set duration(duration: number);

    get duration();

    set position(position: string);

    get position();

    set icon(icon: null | string);

    get icon();

    set template(template: string);

    get template();

    set closeOnClick(closeOnClick: boolean);

    get closeOnClick();

    set theme(theme: string);

    get theme();

    set showProgressBar(showProgressBar: boolean);

    get showProgressBar();

    set closeByTimer(closeByTimer: boolean);

    get closeByTimer();
}