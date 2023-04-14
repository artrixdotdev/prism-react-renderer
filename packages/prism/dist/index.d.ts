import Prism, { Token as Token$1 } from 'prismjs';
export { default as Prism } from 'prismjs';
import { Key, CSSProperties, Component } from 'react';

declare const includedLangs: {
    readonly markup: true;
    readonly bash: true;
    readonly clike: true;
    readonly c: true;
    readonly cpp: true;
    readonly css: true;
    readonly "css-extras": true;
    readonly javascript: true;
    readonly jsx: true;
    readonly "js-extras": true;
    readonly "js-templates": true;
    readonly coffeescript: true;
    readonly diff: true;
    readonly git: true;
    readonly go: true;
    readonly graphql: true;
    readonly "markup-templating": true;
    readonly handlebars: true;
    readonly json: true;
    readonly less: true;
    readonly makefile: true;
    readonly markdown: true;
    readonly objectivec: true;
    readonly ocaml: true;
    readonly python: true;
    readonly reason: true;
    readonly sass: true;
    readonly scss: true;
    readonly sql: true;
    readonly stylus: true;
    readonly tsx: true;
    readonly typescript: true;
    readonly wasm: true;
    readonly yaml: true;
};

type Language = keyof typeof includedLangs;
type PrismGrammar = Record<string, unknown>;
type LanguagesDict = Record<Language, PrismGrammar>;
type PrismLib = {
    languages: LanguagesDict;
    tokenize: (code: string, grammar: PrismGrammar) => Array<Token$1 | string>;
    highlight: (code: string, grammar: PrismGrammar, language: Language) => string;
    hooks: {
        run: (name: string, env: {
            code: string;
            grammar: PrismGrammar;
            language: Language;
        }) => void;
    };
};
type Token = {
    types: string[];
    content: string;
    empty?: boolean;
};
type StyleObj = CSSProperties;
type LineInputProps = {
    style?: StyleObj;
    className?: string;
    line: Token[];
    [key: string]: unknown;
};
type LineOutputProps = {
    style?: StyleObj;
    className: string;
    [key: string]: unknown;
};
type TokenInputProps = {
    key?: Key;
    style?: StyleObj;
    className?: string;
    token: Token;
    [key: string]: unknown;
};
type TokenOutputProps = {
    key?: Key;
    style?: StyleObj;
    className: string;
    children: string;
    [key: string]: unknown;
};
type RenderProps = {
    tokens: Token[][];
    className: string;
    style: CSSProperties;
    getLineProps: (input: LineInputProps) => LineOutputProps;
    getTokenProps: (input: TokenInputProps) => TokenOutputProps;
};
type PrismThemeEntry = {
    color?: string;
    backgroundColor?: string;
    fontStyle?: "normal" | "italic";
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through";
    opacity?: number;
};
type PrismTheme = {
    plain: PrismThemeEntry;
    styles: Array<{
        types: string[];
        style: PrismThemeEntry;
        languages?: Language[];
    }>;
};

declare const defaultProps: {
    Prism: typeof Prism;
    theme: PrismTheme;
};

type ThemeDict = {
    root: StyleObj;
    plain: StyleObj;
    [type: string]: StyleObj;
};

type Props = {
    Prism: PrismLib;
    theme?: PrismTheme;
    language: Language;
    code: string;
    children: (props: RenderProps) => JSX.Element;
};
declare class Highlight extends Component<Props, unknown> {
    prevTheme?: PrismTheme;
    prevLanguage?: Language;
    themeDict?: ThemeDict;
    getThemeDict: (props: Props) => ThemeDict | void;
    getLineProps: ({ className, style, ...rest }: LineInputProps) => LineOutputProps;
    getStyleForToken: ({ types, empty }: Token) => any;
    getTokenProps: ({ key, className, style, token, ...rest }: TokenInputProps) => TokenOutputProps;
    tokenize: (Prism: PrismLib, code: string, grammar: PrismGrammar, language: Language) => Array<Token$1 | string>;
    render(): JSX.Element;
}

export { Highlight as default, defaultProps };
