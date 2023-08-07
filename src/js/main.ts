import './../css/style.css'
import Toast from './Toast.ts'

let time = 2e3;
for (let i = 0; i < 2; i++) {
    new Toast({message: 'hola', type: 'default', position: 'bottom-start', duration: time});
    new Toast({message: 'hola', type: 'success', position: 'bottom-start', duration: time});
    new Toast({message: 'hola', type: 'error', position: 'bottom-start', duration: time});
    new Toast({message: 'hola', type: 'info', position: 'bottom-start', duration: time});
    new Toast({message: 'hola', type: 'warning', position: 'bottom-start', duration: time});
}
console.log(Toast.getCurrentToasts())

// @ts-ignore
window.Toast = Toast;