/// <reference types="react" />
import * as RMWC from "@rmwc/types";
import { FormattedOption } from "@rmwc/select/dist/index.d";
/**
 * Selector properties.
 */
export interface ISelectProps {
    /** The value for a controlled select. */
    value?: string;
    /** Options accepts value => label maps */
    options?: FormattedOption[];
    /** A label for the form control. */
    label?: string;
    /** Makes the select outlined. */
    outlined?: boolean;
    /** Makes the Select visually invalid. This is sometimes automatically my material-components-web.  */
    invalid?: boolean;
    /** Makes the Select disabled.  */
    disabled?: boolean;
    /** Makes the Select required.  */
    required?: boolean;
    /** Add a leading icon. */
    icon?: RMWC.IconPropT;
    /** When the input changes */
    onChange?: any;
}
/**
 * Selector
 */
export declare const Select: (props: ISelectProps) => JSX.Element;
export default Select;
