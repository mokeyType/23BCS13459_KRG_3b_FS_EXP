import { getUserName } from "./user"

test("checks getUserName function", () => {
expect(getUserName({name: "Alice"})).toBe("Alice");
expect(getUserName(null)).toBe("Guest");
})

