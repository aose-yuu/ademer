export function pipe<A, B>(value: A, operation1: (input: A) => B): B;

export function pipe<A, B, C>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C
): C;

export function pipe<A, B, C, D>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D
): D;

export function pipe<A, B, C, D, E>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E
): E;

export function pipe<A, B, C, D, E, F>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F
): F;

export function pipe<A, B, C, D, E, F, G>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G
): G;

export function pipe<A, B, C, D, E, F, G, H>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G,
  operation7: (input: G) => H
): H;

export function pipe<A, B, C, D, E, F, G, H, I>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G,
  operation7: (input: G) => H,
  operation8: (input: H) => I
): I;

export function pipe<A, B, C, D, E, F, G, H, I, J>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G,
  operation7: (input: G) => H,
  operation8: (input: H) => I,
  operation9: (input: I) => J
): J;

export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G,
  operation7: (input: G) => H,
  operation8: (input: H) => I,
  operation9: (input: I) => J,
  operation10: (input: J) => K
): K;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G,
  operation7: (input: G) => H,
  operation8: (input: H) => I,
  operation9: (input: I) => J,
  operation10: (input: J) => K,
  operation11: (input: K) => L
): L;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G,
  operation7: (input: G) => H,
  operation8: (input: H) => I,
  operation9: (input: I) => J,
  operation10: (input: J) => K,
  operation11: (input: K) => L,
  operation12: (input: L) => M
): M;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G,
  operation7: (input: G) => H,
  operation8: (input: H) => I,
  operation9: (input: I) => J,
  operation10: (input: J) => K,
  operation11: (input: K) => L,
  operation12: (input: L) => M,
  operation13: (input: M) => N
): N;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G,
  operation7: (input: G) => H,
  operation8: (input: H) => I,
  operation9: (input: I) => J,
  operation10: (input: J) => K,
  operation11: (input: K) => L,
  operation12: (input: L) => M,
  operation13: (input: M) => N,
  operation14: (input: N) => O
): O;

export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  value: A,
  operation1: (input: A) => B,
  operation2: (input: B) => C,
  operation3: (input: C) => D,
  operation4: (input: D) => E,
  operation5: (input: E) => F,
  operation6: (input: F) => G,
  operation7: (input: G) => H,
  operation8: (input: H) => I,
  operation9: (input: I) => J,
  operation10: (input: J) => K,
  operation11: (input: K) => L,
  operation12: (input: L) => M,
  operation13: (input: M) => N,
  operation14: (input: N) => O,
  operation15: (input: O) => P
): P;

export function pipe(value: any, ...operations: Array<(arg: any) => any>): any {
  return operations.reduce((acc, operation) => operation(acc), value);
}
