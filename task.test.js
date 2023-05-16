//ECHO ist eingeschaltet (ON).

const task = require('./task');


test("should know 2+2", () => {
    let expected = 4;
    let actual = task.sum(2, 2)
    expect(actual).toBe(expected);
})

