namespace FooLib

module Say =
    let hello name = printfn "Hello %s" name

module Arithmetic =
    let add x y = x + y
    let subtract x y = x - y
    let multiply x y = x * y
    let divide x y = x / y

module Point =
    type Point = { x: float; y: float }
    let make_point x y = { x = x; y = y }

module Event =
    type Event =
        | Click
        | KeyPress of char
        | Move of int * int

    let move = Event.Move(5, 10)
