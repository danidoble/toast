// @ts-ignore
import {v4 as uuidv4} from 'uuid';
import {ToastInterface} from "./ToastInterface.ts";

export default class Toast implements ToastInterface {
    /**
     * Success icon
     * @private
     */
    #_icon_success: string = `<svg class="dd-toast-icon-success" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>`;
    /**
     * Error icon
     * @private
     */
    #_icon_error: string = `<svg class="dd-toast-icon-error" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
    /**
     * Information icon
     * @private
     */
    #_icon_info: string = `<svg class="dd-toast-icon-info" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>`;
    /**
     * Warning icon
     * @private
     */
    #_icon_warning: string = `<svg class="dd-toast-icon-warning" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>`;
    /**
     * Default icon
     * @private
     */
    #_icon_default: string = `<svg class="dd-toast-icon-default" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>`;
    /**
     * Default template for toast
     * @private
     */
    #_template: string = `<div class="{{color}}" role="alert"><div class="dd-toast-flex-template"><div class="dd-toast-flex-template-shrink-0">{{icon}}</div><div class="dd-toast-ml-3"><div class="dd-toast-text-message">{{message}}</div></div></div>{{timer}}</div>`;
    /**
     * Default template for timer
     * @private
     */
    #_template_timer: string = `<div class="dd-toast-timer {{color-timer}}" {{id-timer}}></div>`;
    /**
     * Message to show in toast
     * @private
     */
    #_message: string = "";
    /**
     * Type of toast
     * ```success```,```error```,```warning```,```info```,```default```,
     * @private
     */
    #_type: string = "default";
    /**
     * Duration of toast
     * @private
     */
    #_duration: number = 5e3;
    /**
     * Save current intervals to clear after and not accumulate infinite intervals or make a infinite loop
     * @private
     */
    #intervals: any[string] = [];
    /**
     * Save current timers until close each toast
     * @private
     */
    #timers: any[string] = [];
    /**
     * Save queue of each type
     * @private
     */
    //#_queue: Map<any, any> = new Map;
    /**
     * Position of toast
     * ```top-start```,```top-end```,```bottom-start```,```bottom-end```
     * @private
     */
    #_position: string = "top-end";
    /**
     * Close on click? default is ```true```
     * @private
     */
    #_closeOnClick: boolean = true;
    /**
     * Show progress bar or no, default ```true```
     * @private
     */
    #_showProgressBar: boolean = true;
    /**
     * Close toast by timer?
     * @private
     */
    #_closeByTimer: boolean = true;
    /**
     * If user overwrite onclick function
     * @private
     */
    #onClickOverwrite: null | CallableFunction = null;
    /**
     * onClick function to execute
     * @param args
     * @private
     */
    #onClick = (...args: any[]): any | null => {
        if (typeof this.#onClickOverwrite === 'function') {
            return this.#onClickOverwrite(...args);
        } else {
            console.log(args);
            return null;
        }
    };
    /**
     * If user overwrite icon this is used
     * @private
     */
    #_icon: null | string = null;
    /**
     * id of toast
     * @private
     */
    #id_toast: string = 'dt-0';
    /**
     * prefix of elements id
     * @private
     */
    #danidoble_id = 'danidoble-toast';
    /**
     * default theme
     * @private
     */
    #_theme = 'default';
    /**
     * styles of toast
     * @private
     */
    #_classes = '';
    /**
     * styles of timer toast
     * @private
     */
    #_timer_classes = '';
    /**
     * default classes of default toast
     * @private
     */
    #_default_classes = 'dd-toast theme default';
    /**
     * default timer classes of default toast
     * @private
     */
    #_default_timer_classes = 'dd-toast theme default-timer';
    /**
     * default success of default toast
     * @private
     */
    #_success_classes = 'dd-toast theme success';
    /**
     * default classes timer of success toast
     * @private
     */
    #_success_timer_classes = 'dd-toast theme success-timer';
    /**
     * default classes of warning toast
     * @private
     */
    #_warning_classes = 'dd-toast theme warning';
    /**
     * default classes timer of warning toast
     * @private
     */
    #_warning_timer_classes = 'dd-toast theme warning-timer';
    /**
     * default classes of error toast
     * @private
     */
    #_error_classes = 'dd-toast theme error';
    /**
     * default classes timer of error toast
     * @private
     */
    #_error_timer_classes = 'dd-toast theme error-timer';
    /**
     * default classes of info toast
     * @private
     */
    #_info_classes = 'dd-toast theme info';
    /**
     * default classes timer of info toast
     * @private
     */
    #_info_timer_classes = 'dd-toast theme info-timer';
    /**
     * Limit of toast to show at same time
     * @private
     */
    static #_limit_toasts = 5;
    /**
     * save current toast ids
     * @private
     */
    static #current_toast: Map<string, string> = new Map();
    /**
     * save next toast ids
     * @private
     */
    static #next_toast: Map<string, string> = new Map();

    constructor(obj: null | object | string = null, type: string = "success", duration: number = 5e3) {
        this.#id_toast = 'dt-' + uuidv4();
        if (obj === null) {
            return this;
        }
        this.show(obj, type, duration)
    }

    toString() {
        return JSON.stringify(this.getObject());
    }

    show(obj: null | object | string = null, type: string = "success", duration: number = 5e3) {
        if (obj === null) {
            this.#_show().then(() => {
            });
            return;
        } else if (typeof obj === 'object') {
            this.#assignObject(obj);
        } else {
            this.#assignObject({
                message: obj,
                type: type,
                duration: duration,
            });
        }
        this.#_show().then(() => {
        });
    }

    /**
     *
     * @param {string} message
     * @param {string} type
     * @param {number} duration
     * @param {string} position
     * @param {string|null} icon
     * @param {string|null} template
     * @param {boolean} closeOnClick
     * @param {CallableFunction|null} onClick
     * @param {null|string} theme
     * @param {boolean} showProgressBar
     * @param {boolean} closeByTimer
     * @param {number} limitToast
     * @private
     */
    #assignObject(
        {
            message = '',
            type = 'default',
            duration = 5e3,
            position = 'top-end',
            icon = null,
            template = null,
            closeOnClick = true,
            onClick = null,
            theme = null,
            showProgressBar = true,
            closeByTimer = true,
        }
    ) {
        this.#_message = message;
        this.#_type = type;
        this.#_duration = duration;
        this.#_position = position;
        if (template !== null && template !== '') {
            this.#_template = template ?? this.#_template;
        }
        if (icon !== null) {
            this.#_icon = icon;
        }
        this.#_closeOnClick = closeOnClick;
        this.#onClickOverwrite = onClick;
        if (theme) {
            this.#_theme = theme;
        } else {
            this.#_theme = type;
        }
        this.#_showProgressBar = showProgressBar;
        this.#_closeByTimer = closeByTimer;
    }

    getObject() {
        return {
            message: this.#_message,
            type: this.#_type,
            duration: this.#_duration,
            position: this.#_position,
            icon: this.#_icon,
            template: this.#_template,
            closeOnClick: this.#_closeOnClick,
            onClick: this.#onClickOverwrite,
            theme: this.#_theme,
            showProgressBar: this.#_showProgressBar,
            closeByTimer: this.#_closeByTimer,
            limitToast: Toast.#_limit_toasts,
        };
    }

    #setIcon() {
        if (this.#_icon !== null) {
            return this.#_icon;
        }
        let icon: string;
        switch (this.#_type) {
            case 'success':
                icon = this.#_icon_success
                break;
            case 'error':
                icon = this.#_icon_error
                break;
            case 'info':
                icon = this.#_icon_info
                break;
            case 'warning':
                icon = this.#_icon_warning
                break;
            default:
                icon = this.#_icon_default;
                break;
        }
        return icon;
    }

    #setTemplate() {
        let template = this.#_template;
        this.#setClassColor();
        if (this.#_showProgressBar) {
            template = template.replace("{{timer}}", this.#_template_timer);
        } else {
            template = template.replace("{{timer}}", '');
        }
        template = template
            .replace("{{icon}}", this.#setIcon())
            .replace("{{message}}", this.#_message)
            .replace("{{color}}", this.#_classes)
            .replace("{{color-timer}}", this.#_timer_classes)
            .replace("{{id-timer}}", `id="${this.#danidoble_id}-timer-${this.#id_toast}"`);
        return template;
    }

    #setClassColor() {
        switch (this.#_theme) {
            case 'success':
                this.#_classes = this.#_success_classes;
                this.#_timer_classes = this.#_success_timer_classes;
                break;
            case 'error':
                this.#_classes = this.#_error_classes;
                this.#_timer_classes = this.#_error_timer_classes;
                break;
            case 'warning':
                this.#_classes = this.#_warning_classes;
                this.#_timer_classes = this.#_warning_timer_classes;
                break;
            case 'info':
                this.#_classes = this.#_info_classes;
                this.#_timer_classes = this.#_info_timer_classes;
                break;
            // case 'default':
            default:
                this.#_classes = this.#_default_classes;
                this.#_timer_classes = this.#_default_timer_classes;
                break;
        }
    }

    #getClassPosition() {
        return ['dd-toast-position', this.#_position];
    }

    #makeParentHTML() {
        let div_id = `${this.#danidoble_id}-container-${this.#_position}`;
        let parent = document.getElementById(div_id);
        if (!parent) {
            let div = document.createElement("div");
            div.id = div_id;
            div.classList.add(...this.#getClassPosition());
            div.style.zIndex = '1600';
            div.style.transition = 'all 0.6s ease-in-out';
            document.body.append(div);
            parent = div;
        }
        if (parent.clientHeight > window.innerHeight - 100) {
            do {
                parent.childNodes[0].remove();
            } while (parent.clientHeight > window.innerHeight - 100);
        }
        return parent;
    }

    async #animateEntrance() {
        let div = document.getElementById(`${this.#danidoble_id}-${this.#id_toast}`);
        return new Promise<void>(resolve => {
            setTimeout(() => {
                if (div) {
                    div.style.translate = '0%';
                }
                resolve();
            }, 600);
        });
    }

    async #animateExit() {
        let div = document.getElementById(`${this.#danidoble_id}-${this.#id_toast}`);
        if (div) {
            if (this.#_position.includes('end')) {
                div.style.translate = '110%';
            } else {
                div.style.translate = '-110%';
            }
        }
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, 600);
        });
    }

    async #killToast(div: HTMLElement) {
        await this.#animateExit();
        div.remove();
        if (Toast.#current_toast.has(this.#id_toast)) {
            Toast.#current_toast.delete(this.#id_toast);
        }
        delete this.#timers[this.#id_toast];
        if (this.#intervals[this.#id_toast]) {
            clearInterval(this.#intervals[this.#id_toast]);
        }
        delete this.#intervals[this.#id_toast];
        //this.#checkNextToast();
    }

    #makeToastHTML() {
        let template = this.#setTemplate();
        let div = document.createElement("div");
        div.id = `${this.#danidoble_id}-${this.#id_toast}`;
        div.innerHTML = template;
        div.classList.add(this.#danidoble_id);
        div.style.transition = 'all 0.5s ease-in-out';
        if (this.#_position.includes('end')) {
            div.style.translate = '110%';
        } else {
            div.style.translate = '-110%';
        }
        if (this.#_closeByTimer) {
            this.#addListenerMouseOver(div);
            this.#addListenerMouseOut(div);
        }
        this.#addListenerClick(div);
        return div;
    }

    #addListenerMouseOver(div: HTMLDivElement) {
        div.addEventListener('mouseover', () => {
            if (this.#intervals[this.#id_toast]) {
                clearInterval(this.#intervals[this.#id_toast]);
            }
        });
    }

    #makeInterval(div: HTMLDivElement, timer: null | HTMLElement = null) {
        if (!timer) {
            timer = document.getElementById(`${this.#danidoble_id}-timer-${this.#id_toast}`);
        }
        this.#intervals[this.#id_toast] = setInterval(() => {
            if (this.#timers[this.#id_toast] <= 0) {
                clearInterval(this.#intervals[this.#id_toast]);
                delete this.#intervals[this.#id_toast];
                this.#killToast(div).then(() => {
                    let parent = this.getParent();
                    if (parent && parent.innerHTML === '' && Toast.#current_toast.size === 0 && Toast.#next_toast.size === 0) {
                        parent.remove();
                    }
                });
            } else {
                if (!timer) {
                    timer = document.getElementById(`${this.#danidoble_id}-timer-${this.#id_toast}`);
                }
                if (timer) {
                    timer.style.width = 100 - ((this.#_duration - this.#timers[this.#id_toast]) * 100 / this.#_duration) + '%';
                }
                this.#timers[this.#id_toast] -= 10;
            }
        }, 10);
    }

    #addListenerMouseOut(div: HTMLDivElement) {
        div.addEventListener('mouseout', () => {
            this.#makeInterval(div);
        });
    }

    #addListenerClick(div: HTMLElement) {
        if (this.#onClick !== null && this.#onClick !== undefined && typeof this.#onClick === 'function') {
            div.classList.add('dd-toast-pointer');
            let this1 = this;
            div.addEventListener('click', async (...args) => {
                if (this1.#_closeOnClick) {
                    await this1.close();
                }
                this1.#onClick(this1, ...args);
            });
        } else if (this.#_closeOnClick) {
            div.classList.add('dd-toast-pointer');
            let this1 = this;
            div.addEventListener('click', async () => {
                await this1.close();
            });
        }
    }

    async #_show() {
        let parent = this.#makeParentHTML();
        await this.#append(this.#id_toast);
        let div = this.#makeToastHTML();
        parent.append(div);
        await this.#animateEntrance();
        this.#timers[this.#id_toast] = this.#_duration;
        if (this.#_closeByTimer) {
            this.#makeInterval(div, document.getElementById(`${this.#danidoble_id}-timer-${this.#id_toast}`));
        }
    }

    async #append(id: string) {
        let parent: HTMLElement | null = this.getParent();
        if (Toast.#current_toast.size < Toast.#_limit_toasts) {
            Toast.#current_toast.set(id, id);
            return new Promise<boolean>(resolve => {
                resolve(false);
            })
        }

        Toast.#next_toast.set(id, id);
        return new Promise<boolean>(resolve => {
            let x = setInterval(async () => {
                if (!parent) {
                    parent = this.#makeParentHTML();
                }
                if (parent && Toast.#current_toast.size < Toast.#_limit_toasts && Toast.#next_toast.has(id)) {
                    Toast.#current_toast.set(id, id);
                    Toast.#next_toast.delete(id);
                    clearInterval(x);
                    resolve(true);
                }
            }, 50);
        });
    }

    static getCurrentToasts(): object {
        return {
            current: Toast.#current_toast.size,
            next: Toast.#next_toast.size,
        };
    }

    async close(): Promise<boolean> {
        let el: HTMLElement | null = this.getElement();
        if (!el) {
            return new Promise<boolean>(resolve => {
                resolve(false);
            });
        }
        this.#killToast(el).then(() => {
            let parent = this.getParent();
            if (!parent) {
                return;
            }
            if (parent.innerHTML === '' && Toast.#current_toast.size === 0 && Toast.#next_toast.size === 0) {
                parent.remove();
            }
        });
        return new Promise<boolean>(resolve => {
            resolve(true);
        });
    }

    getId() {
        return this.#id_toast;
    }

    getFullId() {
        return `${this.#danidoble_id}-${this.#id_toast}`;
    }

    getFullContainerId() {
        return `${this.#danidoble_id}-container-${this.#_position}`;
    }

    getElement(): HTMLElement | null {
        return document.getElementById(this.getFullId());
    }

    getParent(): HTMLElement | null {
        return document.getElementById(this.getFullContainerId());
    }

    set message(message: string) {
        this.#_message = message;
    }

    get message() {
        return this.#_message;
    }

    set type(type: string) {
        this.#_type = type;
    }

    get type() {
        return this.#_type;
    }

    set duration(duration: number) {
        this.#_duration = duration;
    }

    get duration() {
        return this.#_duration;
    }

    set closeByTimer(closeByTimer: boolean) {
        this.#_closeByTimer = closeByTimer;
    }

    get closeByTimer() {
        return this.#_closeByTimer;
    }

    set closeOnClick(closeOnClick: boolean) {
        this.#_closeOnClick = closeOnClick;
    }

    get closeOnClick() {
        return this.#_closeOnClick;
    }

    set icon(icon: null | string) {
        this.#_icon = icon;
    }

    get icon() {
        return this.#_icon;
    }

    static set limitToast(limitToast: number) {
        Toast.#_limit_toasts = limitToast
    }

    get limitToast() {
        return Toast.#_limit_toasts;
    }

    static get limitToast() {
        return Toast.#_limit_toasts;
    }

    set position(position: string) {
        this.#_position = position;
    }

    get position() {
        return this.#_position;
    }

    set showProgressBar(showProgressBar: boolean) {
        this.#_showProgressBar = showProgressBar;
    }

    get showProgressBar() {
        return this.#_showProgressBar;
    }

    set template(template: string) {
        this.#_template = template;
    }

    get template() {
        return this.#_template;
    }

    set theme(theme: string) {
        this.#_theme = theme;
    }

    get theme() {
        return this.#_theme;
    }
}