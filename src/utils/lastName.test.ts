import lastName from "./lastName";

test("長音: イノムー to ム", () => {
  expect(lastName("イノムー")).toBe("ム");
});

test("濁音: イルミーゼ to セ", () => {
  expect(lastName("イルミーゼ")).toBe("セ");
});

test("半濁音: ケララッパ to ハ", () => {
  expect(lastName("ケララッパ")).toBe("ハ");
});

test("小書き: ウインディ to イ", () => {
  expect(lastName("ウインディ")).toBe("イ");
});

test("Failed", () => {
  expect(lastName("")).toBe("");
});
