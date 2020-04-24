const child_process = require('child_process');
const assert = require("assert");

const dateToday = new Date();
dateToday.setHours(0, 0, 0, 0);

const dateJan1 = new Date();
dateJan1.setMonth(0);
dateJan1.setDate(1);
dateJan1.setHours(0, 0, 0, 0);

const testCases = [
    {
        input: "",
        stderr: "input required",
        status: 1
    },
    {
        input: " ",
        stderr: "input required",
        status: 1,
    },
    {
        input: "something",
        stderr: "cannot parse date",
        status: 2
    },
    {
        input: "today at midnight",
        stdout: `${dateToday.toISOString()}\n`,
    },
    {
        input: `Jan 1 ${dateJan1.getFullYear()} at midnight`,
        stdout: `${dateJan1.toISOString()}\n`,
    }
]

testCases.forEach(tc => {
    cmd = `node ./chrono.js ${tc.input}`;
    try {
        stdout = child_process.execSync(cmd).toString();
        assert.equal(stdout, tc.stdout)
    } catch (e) {
        assert.equal(e.status, tc.status);
        assert(e.stderr.toString().includes(tc.stderr));
    }
})
