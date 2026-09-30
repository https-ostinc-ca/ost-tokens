declare const preset: {
    theme: {
        extend: {
            colors: {
                [k: string]: string;
            };
            fontFamily: {
                sans: ("Inter" | "system-ui" | "-apple-system" | "Segoe UI" | "Roboto" | "Helvetica Neue" | "Arial" | "sans-serif")[];
            };
            fontSize: {
                [k: string]: ("48px" | "32px" | "28px" | "20px" | "16px" | "15px" | "13px" | "12px" | "11px" | {
                    letterSpacing?: "-0.02em" | "-0.01em" | "0.08em" | "0.1em" | undefined;
                    lineHeight: "1.08" | "1.15" | "1.2" | "1.3" | "1.65" | "1.5" | "1" | "1.4";
                    fontWeight: string;
                })[];
            };
            borderRadius: {
                sm: "3px";
                md: "6px";
            };
            maxWidth: {
                page: "1280px";
            };
            spacing: {
                nav: "52px";
            };
        };
    };
};

export { preset as default };
