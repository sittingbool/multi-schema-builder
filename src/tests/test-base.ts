import prettier from 'prettier';
import { expect } from 'chai';
import { diffChars } from 'diff';
import chalk from 'chalk';

export function expectStringsToBeTheSame(actual: string, expected: string): void {
    try {
        expect(actual).to.eql(expected);
    } catch (e) {
        const diff = diffChars(expected, actual);
        let log = '';
        for (const part of diff) {
            // green for additions, red for deletions
            // grey for common parts
            //const color = part.added ? 'green' : part.removed ? 'red' : 'grey';
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
        console.log(
            'Difference found in strings:',
            '(green: additional in actual string, red: missing in actual, grey: common)',
            '\n',
        );
        console.log(log);
        throw new Error(e);
    }
}
