### Donations
If like my work you can buy me a coffee or maybe a toast :D
[donate](https://donate.stripe.com/8wMdUhbnR1LS1zy8ww)

# Full documentation

Visit the [documentation](https://toast.danidoble.com/) website for more information.

![Toast](https://raw.githubusercontent.com/danidoble/toast/main/src/img/toast.png)

# Toast Installation

```bash
npm install @danidoble/toast
```

Import as module

```javascript
import '@danidoble/toast/dist/toast.css'
import Toast from '@danidoble/toast';
```

Using node_modules folder directly

```html

<script type="module" crossorigin src="./node_modules/@danidoble/toast/dist/toast.js"></script>
<link rel="stylesheet" href="./node_modules/@danidoble/toast/dist/toast.css">
```

Or with CDN

```html
<!-- include toast -->
<script type="module" crossorigin
        src="https://cdn.jsdelivr.net/gh/danidoble/toast@master/dist/toast.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/danidoble/toast@master/dist/toast.css">
```

### Make a toast using parameters

* param 1: message
* param 2: type -> ```default``` ```success``` ```error``` ```info``` ```warning```
* param 3: duration

```javascript
new Toast('Message to print', 'success', 5000);
```

### make a toast using object

```javascript
new Toast({
    message: 'Message to print',
});
```

Full parameters of toast

```javascript
new Toast({
    message: 'Message to print',
    duration: 5000,
    type: 'default',
    position: 'top-end',
    closeOnClick: true,
    closeByTimer: true,
    showProgressBar: true,
    // icon: null, // overwrite icon with html, img, etc.
    // template: null, // overwrite template of toast -> see templates
    // onClick: null, // do something on clic in toast
    // theme: null, // overwrite theme of type
});
```

## Templates

if you want to customize your own template to show toast, just sent in object of toast
.
Of course is possible custom only the icon, but in this case we will customize both of them.

```javascript
let my_template = `
<div>
    <div>{{icon}}</div>
    <div>{{message}}</div>
    <div {{id-timer}}></div>
</div>
`
let my_icon = `<img src='https://example.com/your-image.svg' style='width:20px;height:20px;'>`;
// or
// let my_icon = `<i class='fas fa-user'></i>`;

let toast = new Toast({
    message: 'my custom message',
    closeByTimer: false,
    showProgressBar: false,
    template: my_template,
    icon: my_icon,
});

// you can close using 
// toast.close();
```
