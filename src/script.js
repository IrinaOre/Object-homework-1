export const obj = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export function orderByProps(obj, array) {
  const result = [];
  const copyObj = { ...obj };

  array.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
    delete copyObj[elem];
  });

  const rest = [];
  for (const key in copyObj) {
    rest.push({ key, value: copyObj[key] });
  }

  rest.sort((a, b) => (a.key > b.key ? 1 : -1));

  const arrKeys = Object.keys(copyObj).sort();
  arrKeys.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
  });

  return result;
}
console.log(orderByProps(obj, ["name", "level"]));
