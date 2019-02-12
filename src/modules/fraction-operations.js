import fraction from './fraction'

function nod(x, y) {
  let t;
  while (y != 0) {
    t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function nok(x,y){
  return (x / nod(x, y) | 0) * y;
}

export function add(x, y){
  let n = nok(x.divider, y.divider);
  let dividend = +x.dividend * (n / x.divider) + +y.dividend * (n / y.divider);
  let divider = n;
  return fraction(dividend, divider);
}

export function sub(x, y){
  let n = nok(x.divider, y.divider);
  let dividend = +x.dividend * (n / x.divider) - +y.dividend * (n / y.divider);
  let divider = n;
  return fraction(dividend, divider);
}

export function mul(x, y) {
  return fraction(+x.dividend * +y.dividend, +x.divider * +y.divider);
}

export function div(x, y) {
  return fraction(+x.dividend * +y.divider, +x.divider * +y.dividend);
}
