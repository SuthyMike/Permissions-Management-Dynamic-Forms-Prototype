import { ControlTypes } from "./control-types.enum";
import { GenericFormElement } from "./generic-form-element";
import { InputOptions } from "./input-options";

export class InputElement extends GenericFormElement<string, InputOptions> {
    override controlType = ControlTypes.INPUT_CONTROL;

    constructor(options: GenericFormElement<string, InputOptions>) {
        super(options);
    }
}
