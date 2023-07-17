import type { ContentSchema } from "./ContentSchema";

export class FieldSchema {
    name: string;
    type: string;
    content: ContentSchema | undefined;

    constructor(name: string, type: string, content: ContentSchema | undefined) {
        this.name = name;
        this.type = type;
        if (content) {
            this.content = content;
        }
    }
}