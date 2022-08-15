import { CheckboxOptions } from "./checkbox-options";
import { ControlTypes } from "./control-types.enum";
import { GenericFormElement } from "./generic-form-element";

export class CheckboxElement extends GenericFormElement<string, CheckboxOptions> {
    override controlType = ControlTypes.CHECKBOX_CONTROL;

    constructor(options: GenericFormElement<string, CheckboxOptions>) {
        super(options);
    }
}
