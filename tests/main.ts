import '../lib/css/style.css'
import {Toast, toast} from '../lib/Toast.ts'
// import '@danidoble/toast/dist/toast.css'
// import Toast from '@danidoble/toast'

// import {Toast, toast} from '../dist/toast';
// import '../dist/toast.css'

let time = 20e3;
for (let i = 0; i < 2; i++) {
    new Toast({message: 'hola', type: 'default', position: 'bottom-start', duration: time});
    new Toast({message: 'hola', type: 'success', position: 'bottom-start', duration: time});
    new Toast({message: 'hola', type: 'error', position: 'bottom-start', duration: time});
    new Toast({message: 'hola', type: 'info', position: 'bottom-start', duration: time});
    new Toast({message: 'hola', type: 'warning', position: 'bottom-start', duration: time});
}
// @ts-ignore
console.log(Toast.getCurrentToasts())

// @ts-ignore
window.Toast = Toast;
// @ts-ignore
window.toast = toast;