
import { proxy, arrayProxy, fnProxy, fnArrayProxy, t } from "snek-query";


export type CaseStudyInfoInput = {
    title: t.String;
    client: t.String;
    industry: t.String;
    services: t.String[];
    input: t.String;
    results: ResultsInput[];
};
export type ResultsInput = {
    name: t.String;
    value: t.String;
};

export class Query {
    __typename: t.String;
    hello: t.String;
    version: t.String;
    constructor() { this.__typename = ""; this.hello = ""; this.version = ""; }
}
export class Mutation {
    __typename: t.String;
    generateCaseStudy: (args: {
        info: CaseStudyInfoInput;
    }) => CaseStudy;
    constructor() { this.__typename = ""; this.generateCaseStudy = fnProxy(CaseStudy); }
}
export class CaseStudy {
    __typename: t.String;
    title: t.String;
    description: t.String;
    content: t.String;
    constructor() { this.__typename = ""; this.title = ""; this.description = ""; this.content = ""; }
}

