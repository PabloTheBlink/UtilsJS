# UtilsJS

Pequeña libreria de utilidades

## animateNumber

`animateNumber` es una función que anima un número desde un valor inicial (`currentValue`) hasta un valor final (`newValue`) durante un período de tiempo especificado. La función ejecuta un callback con el valor animado en cada frame de la animación.

### Uso

```javascript
import { Component } from "https://cdn.devetty.es/ScopeJS/js";
import { animateNumber } from "https://cdn.devetty.es/UtilsJS/js";

Component({
    controller: function() {
        this.counter = 1;
        setTimeout(() => animateNumber(180, 200, number => {
            this.counter = number;
            this.apply();
        }))
    },
    render: function() {
        return `<h1>Contador: ${this.counter}</h1>`
    }
}).render(document.body);
```

