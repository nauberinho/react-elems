import { FC } from "react";
interface DropDownOption {
    title: string;
    key: string;
}
interface DropDownProps {
    isOpen: boolean;
    options: Array<DropDownOption>;
    value: DropDownOption;
    optional?: any;
    placeholder?: string;
    onToggle(): any;
    onChange: (option: Object) => void;
}
declare const DropDown: FC<DropDownProps>;
export default DropDown;
