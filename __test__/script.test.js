import { obj, orderByProps } from "../src/script.js";

test("check function orderByProps", () => {
  const resultOrdered = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];
  expect(orderByProps(obj, ["name", "level"])).toStrictEqual(resultOrdered);
});
