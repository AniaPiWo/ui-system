import React from "react";
export interface AccordionProps {
    header: string;
    content: string;
    defaultOpen?: boolean;
}
export declare const Accordion: React.FC<AccordionProps>;
