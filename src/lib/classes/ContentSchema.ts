export class ContentSchema {
    type: string | undefined;
    content: ContentSchema | undefined;
    valueType: string | undefined;

    constructor(type: string | undefined, content: ContentSchema | undefined, valueType: string | undefined) {
        if (type) {
            this.type = type;
        }
        if (content) {
            this.content = content;
        }
        if (valueType) {
            this.valueType = valueType;
        }
    }
}