import '@yui/liferay-ddm-form-renderer-field';
import {DataType} from '@yui/aui-datatype';

const {Boolean} = DataType;

// eslint-disable-next-line
@moduleName('liferay-ddm-form-field-checkbox')
class CheckboxField extends Liferay.DDM.Renderer.Field {
	static ATTRS = {
		dataType: {
			value: 'boolean'
		},

		showAsSwitcher: {
			state: true,
			value: false
		},

		type: {
			value: 'checkbox'
		}
	};

	static NAME = 'liferay-ddm-form-field-checkbox';

	getTemplateContext() {
		return {
			...super.getTemplateContext(),
			showAsSwitcher: this.get('showAsSwitcher')
		};
	}

	getValue() {
		return this.getInputNode().attr('checked');
	}

	setValue(value) {
		this.getInputNode().attr('checked', Boolean.parse(value));
	}
}

Liferay.namespace('DDM.Field').Checkbox = CheckboxField;

export default CheckboxField;