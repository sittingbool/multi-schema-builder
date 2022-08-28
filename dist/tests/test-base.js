import { expect } from 'chai';
import { diffChars } from 'diff';
import chalk from 'chalk';
export function expectStringsToBeTheSame(actual, expected) {
    try {
        expect(actual).to.eql(expected);
    }
    catch (e) {
        const diff = diffChars(expected, actual);
        let log = '';
        for (const part of diff) {
            if (part.added) {
                log += chalk.green(part.value);
                continue;
            }
            if (part.removed) {
                log += chalk.red(part.value);
                continue;
            }
            log += part.value;
        }
        console.log('Difference found in strings:', '(green: additional in actual string, red: missing in actual, grey: common)', '\n');
        console.log(log);
        throw new Error(e);
    }
}
//# sourceMappingURL=test-base.js.map