export interface BaseGenerator {
    generate(schema: any, name: string): string;
}
