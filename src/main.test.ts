import { is_boolean, set_head, is_pair, list_ref, apply_in_underlying_javascript, pair, stringify, is_null, error, math_abs, math_PI, math_E, display, map, accumulate, length, parse, append, head, list, tail, List, Pair} from 'sicp';
import { evaluate, the_global_environment, execute } from "./main";

test("Square function", () => {
    const function_declaration = "function factorial(n) { return n < 2 ? n : n * factorial(n - 1); }";
    const function_use = "factorial(5);";

    const res = execute(the_global_environment, function_declaration + function_use);
    expect(res).toBe(120);
});