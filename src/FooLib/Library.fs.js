import { printf, toConsole } from "../FooProject/fable_modules/fable-library.4.3.0/String.js";

export function Say_hello(name) {
    toConsole(printf("Hello %s"))(name);
}

export function Arithmetic_add(x, y) {
    return x + y;
}

export function Arithmetic_subtract(x, y) {
    return x - y;
}

export function Arithmetic_multiply(x, y) {
    return x * y;
}

export function Arithmetic_divide(x, y) {
    return ~~(x / y);
}

//# sourceMappingURL=Library.fs.js.map
