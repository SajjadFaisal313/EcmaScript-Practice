const RectArea = (b,h) => b*h;

const TriArea = (b,x) => b * x * (1/2)

const HalfCircleArea = (r1) => (22/7) *r1*r1*(1/2);

const CircleArea = (r2) => (22/7) *r2*r2;

const b = 20
const h = 14
const x = 12
const r1 = 7
const r2 = 5

console.log(`Arera of this diagram is ${RectArea(b,h)+TriArea(b,x)+HalfCircleArea(r1)-CircleArea(r2)} sq units`);