/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteCardOverridesProps = {
    NoteCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame4191652?: PrimitiveOverrideProps<FlexProps>;
    MyIcon4191660?: MyIconProps;
    Frame413560?: PrimitiveOverrideProps<FlexProps>;
    MyIcon413549?: MyIconProps;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "site name"?: PrimitiveOverrideProps<TextProps>;
    author?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NoteCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: any;
} & {
    overrides?: NoteCardOverridesProps | undefined | null;
}>;
export default function NoteCard(props: NoteCardProps): React.ReactElement;
