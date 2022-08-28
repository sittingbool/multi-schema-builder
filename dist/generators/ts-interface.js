import prettier from 'prettier';
export class TsInterfaceGenerator {
    constructor() { }
    generate(schema, name) {
        const { properties } = schema;
        let propsString = '';
        for (const k in properties) {
            const { type } = properties[k];
            switch (type) {
                case 'string':
                case 'number':
                case 'boolean':
                    propsString += `${k}: ${type};\n`;
            }
        }
        return prettier.format(`export interface ${name} {\n${propsString}}`, { parser: 'typescript' });
    }
}
//# sourceMappingURL=ts-interface.js.map