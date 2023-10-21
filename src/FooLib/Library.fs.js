import { printf, toConsole } from "../FooProject/fable_modules/fable-library.4.3.0/String.js";
import { Union, Record } from "../FooProject/fable_modules/fable-library.4.3.0/Types.js";
import { union_type, int32_type, char_type, record_type, float64_type } from "../FooProject/fable_modules/fable-library.4.3.0/Reflection.js";

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

export class Point_Point extends Record {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
}

export function Point_Point_$reflection() {
    return record_type("FooLib.Point.Point", [], Point_Point, () => [["x", float64_type], ["y", float64_type]]);
}

export function Point_make_point(x, y) {
    return new Point_Point(x, y);
}

export class Event_Event extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Click", "KeyPress", "Move"];
    }
}

export function Event_Event_$reflection() {
    return union_type("FooLib.Event.Event", [], Event_Event, () => [[], [["Item", char_type]], [["Item1", int32_type], ["Item2", int32_type]]]);
}

export const Event_move = new Event_Event(2, [5, 10]);

//# sourceMappingURL=Library.fs.js.map
