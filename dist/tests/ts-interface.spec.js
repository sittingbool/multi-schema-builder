import { TsInterfaceGenerator } from '../generators/index.js';
import prettier from 'prettier';
import { expectStringsToBeTheSame } from './test-base.js';
describe('Typescript Interface Generator', () => {
    it('should generate a valid typescript interface', () => {
        const schema = {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
                age: {
                    type: 'number',
                },
            },
        };
        const generator = new TsInterfaceGenerator();
        const result = generator.generate(schema, 'Test');
        const expected = prettier.format(`export interface Test { name: string; age: number }`, {
            parser: 'typescript',
        });
        expectStringsToBeTheSame(result, expected);
    });
});
//# sourceMappingURL=ts-interface.spec.js.map