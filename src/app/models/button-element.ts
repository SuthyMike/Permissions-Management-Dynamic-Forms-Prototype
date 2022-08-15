import { ButtonOptions } from "./button-options";
import { ControlTypes } from "./control-types.enum";
import { GenericFormElement } from "./generic-form-element";

export class ButtonElement extends GenericFormElement<string, ButtonOptions> {
    override controlType = ControlTypes.BUTTON_CONTROL;

    constructor(options: GenericFormElement<string, ButtonOptions>) {
        super(options);
    }
}
