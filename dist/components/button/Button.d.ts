import * as React from "react";
import * as RMWC from "@rmwc/types";
/**
 * Button properties.
 */
export interface IButtonProps {
    /** Make the button unelevated. */
    unelevated?: boolean;
    /** Make the button outlined. */
    outlined?: boolean;
    /** Make the button disabled */
    disabled?: boolean;
    /** Content specified as a label prop. */
    label?: React.ReactNode | any;
    /** Content specified as children. */
    children?: React.ReactNode;
    /** An Icon for the Button */
    icon?: RMWC.IconPropT;
    /** A trailing icon for the Button */
    trailingIcon?: RMWC.IconPropT;
}
/**
 * button
 */
export declare const Button: (props: IButtonProps) => JSX.Element;
export default Button;