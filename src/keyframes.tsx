//keyframes.txt
type Value = number | number[];

type Keyframe<T extends Value> = {
  frame: number;
  value: T;
};

function lerpNumber(a: number, b: number, p: number): number {
  return a + (b - a) * p;
}

function lerpValue(a: Value, b: Value, p: number): Value {
  if (typeof a === 'number' && typeof b === 'number') {
    return lerpNumber(a, b, p);
  }

  if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
    return a.map((ai, i) => {
      const bi = (b as number[])[i];
      return lerpNumber(ai, bi, p);
    });
  }

  throw new Error(
    `lerpValue: mismatched types or lengths: ${JSON.stringify(a)} vs ${JSON.stringify(b)}`

  );
}

export function getKeyframed<T extends Value>(
  frame: number,
  keyframes: Keyframe<T>[]
): T {
  if (keyframes.length === 0) {
    throw new Error('No keyframes provided');
  }

  const sorted = keyframes.slice().sort((k1, k2) => k1.frame - k2.frame);

  if (frame <= sorted[0].frame) {
    return sorted[0].value;
  }

  const last = sorted[sorted.length - 1];
  if (frame >= last.frame) {
    return last.value;
  }

  let prev = sorted[0];
  let next = sorted[1];
  for (let i = 1; i < sorted.length; i++) {
    if (frame <= sorted[i].frame) {
      next = sorted[i];
      prev = sorted[i - 1];
      break;
    }
  }

  const span = next.frame - prev.frame;
  const rawT = (frame - prev.frame) / span;
  const t = Math.max(0, Math.min(1, rawT));

  return lerpValue(prev.value, next.value, t) as T;
}
