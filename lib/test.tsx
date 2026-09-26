const array0 = [
  {
    a: 1,
  },
  {
    a: 2,
  },
  {
    a: 3,
  },
  {
    a: 4,
  },
];

function Fx(a: number) {
  return a * 2;
}

const array1 = array0.map((a) => <div key={a.a}>{a.a}</div>);
console.log(array1);
