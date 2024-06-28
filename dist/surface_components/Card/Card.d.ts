import { PropsWithChildren } from "react";
interface CardProps {
  fullWidth?: boolean;
}
interface CardImageProps {
  url: string;
  alt?: string;
}
interface CardContentProps {
  title: string;
  description: string;
}
export declare const CardImage: ({ url, alt }: CardImageProps) => JSX.Element;
export declare const CardContent: ({
  title,
  description,
  children,
}: PropsWithChildren<CardContentProps>) => JSX.Element;
export declare const Card: ({
  children,
  fullWidth,
}: PropsWithChildren<CardProps>) => JSX.Element;
export {};
