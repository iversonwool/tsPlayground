enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

Day.Friday
Day.Sunday === 0



declare enum MyDay {
  Monday = 1,
}

MyDay.Monday

function work(d: Day) {
  if (d === Day.Monday) {
    d;
  }
}