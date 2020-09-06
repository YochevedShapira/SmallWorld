import { Suggestion } from './Suggestion';
import { SelectOption } from './SelectOption';
import { ParameterType } from './ParameterType';
import { Request } from './Request';
import { NumericSelectedValue } from './NumericSelectedValue';
import { BooleanSelectedValue } from './BooleanSelectedValue';

export class ParameterSelectedValue {
    PrameterValueID: number;
    PrameterTypeID: number;
    Optional: boolean;
    SuggestionID: number;
    RequestID: number;
    BooleanSelectedValue: BooleanSelectedValue;
    NumericSelectedValue: NumericSelectedValue;
    ParameterType: ParameterType;
    Request: Request;
    Suggestion: Suggestion;
    SelectOption: SelectOption;
    public ParameterSelectedValue() {

    }
}