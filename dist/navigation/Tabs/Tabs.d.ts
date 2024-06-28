import React, { PropsWithChildren } from "react";
interface TabProps {
    label: string;
    index: number;
}
export declare const Tab: ({ label, index }: PropsWithChildren<TabProps>) => JSX.Element;
interface TabContentProps {
    index: number;
}
export declare const TabContent: ({ index, children, }: PropsWithChildren<TabContentProps>) => JSX.Element | null;
interface TabData {
    label: string;
    content: React.ReactNode;
}
interface TabsProps {
    tabs: TabData[];
    initialActiveTab?: number;
}
export declare const Tabs: ({ tabs, initialActiveTab, }: PropsWithChildren<TabsProps>) => JSX.Element;
export {};
