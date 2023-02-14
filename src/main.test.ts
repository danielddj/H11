import { is_boolean, set_head, is_pair, list_ref, apply_in_underlying_javascript, pair, stringify, is_null, error, math_abs, math_PI, math_E, display, map, accumulate, length, parse, append, head, list, tail, List, Pair} from 'sicp';
import { evaluate, the_global_environment, execute } from "./main";

test("Factorial function", () => {
    const function_declaration = "function factorial(n) { return n < 2 ? n : n * factorial(n - 1); }";
    const function_use = "factorial(5);";

    const res = execute(the_global_environment, function_declaration + function_use);
    expect(res).toBe(120);
});

test("constant declaration and usage", () => {
    const constant_declaration = "const x = 512; x;"

    const res = execute(the_global_environment, constant_declaration);
    expect(res).toBe(512);
});

test("conditional statement", () => {
    const constant_declaration_a = "const x = 512;";
    const constant_declaration_b = "const x = 200;";
    const conditional_statement = "x > 300 ? 1 : 2;"; 

    const res_a = execute(the_global_environment, constant_declaration_a + 
        conditional_statement);
    const res_b = execute(the_global_environment, constant_declaration_b + 
        conditional_statement);
    expect(res_a).toBe(1);
    expect(res_b).toBe(2);
});

test("function declaration and call", () => {
    const func = "function foo() { return 32; } "
    const func_call = "foo();";

    const result = execute(the_global_environment, func + func_call);
    expect(result).toBe(32);
});

test("Lambda expression", () => {
    const lambda = "const afun = (x) => x * x; "
    const lambda_call = "afun(3);";

    const result = execute(the_global_environment, lambda + lambda_call);
    expect(result).toBe(9);
})

test("Add function", () => {
    const func = "function add_two(a, b) { return a + b; }";
    const usage = "add_two(2, 6);"

    const result = execute(the_global_environment, func + usage);
    expect(result).toBe(8);
})

test("Assignment", () => {
    const declaration = "let a = 3; ";
    const assignment = "a = 60; ";
    const disp = "a; ";

    const result = execute(the_global_environment, declaration + assignment + disp);
    expect(result).toBe(60);
})