export function fa_to_cel(val: string): string {
  let val_num = parseInt(val, 10);
  let answer = (val_num - 32) / 1.8;
  return answer.toPrecision(2);
}
