import {Config} from 'metal-state';
import Component from 'metal-component';
import FieldBase from 'dynamic-data-mapping-form-field-type/metal/FieldBase/index.es';
import Soy from 'metal-soy';

import templates from './KeyValue.soy.js';
import KeyValueRegister from './KeyValueRegister.soy.js';

/**
 * KeyValue.
 * @extends Component
 */
class KeyValue extends Component {
    static STATE = {
        /**
         * @default false
         * @instance
         * @memberof KeyValue
         * @type {?bool}
         */
        editable: Config.bool().value(false),

        /**
         * @default false
         * @instance
         * @memberof KeyValue
         * @type {?bool}
         */
        generateName: Config.bool().internal(),

        /**
         * @default undefined
         * @instance
         * @memberof FieldBase
         * @type {?(string|undefined)}
         */
        helpText: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof KeyValue
         * @type {?(string|undefined)}
         */
        id: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof KeyValue
         * @type {?(string|undefined)}
         */
        label: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof Select
         * @type {?string}
         */
        predefinedValue: Config.string().value('Option 1'),

        /**
         * @default false
         * @instance
         * @memberof KeyValue
         * @type {?bool}
         */
        required: Config.bool().value(false),

         /**
         * @default true
         * @instance
         * @memberof KeyValue
         * @type {?bool}
         */
        showLabel: Config.bool().value(true),

        /**
         * @default undefined
         * @instance
         * @memberof KeyValue
         * @type {?(string|undefined)}
         */
        spritemap: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof KeyValue
         * @type {?(bool)}
         */
        value: Config.string(),

         /**
         * @default undefined
         * @instance
         * @memberof KeyValue
         * @type {?(string|undefined)}
         */
        key: Config.string(),

        /**
         * @default undefined
         * @instance
         * @memberof KeyValue
         * @type {?(string|undefined)}
         */
        keyValue: Config.string().internal()
    }

    _formatInput(str) {
        let key = '';
        /** 
         * Remove spaces and apply camelCase
         */
        key = str.replace(/\s(.)/g, function (x) {
            return x.toUpperCase();
        });

        /** 
         * Remove underscores and non characters 
        */
        key = key.replace(/_|\W/g, '');

        return key;
    }

    _handleValueChange(event) {
        const { key } = this;

        if (typeof this.generateName === 'undefined') {
            this._handleKeyChange({
                target: {
                    value: event.target.value,
                    originalEvent: event
                }
            });
        }

        this.emit('fieldEdit', {
            key,
            value: event.target.value,
            originalEvent: event
        });
    }

    _handleKeyChange(event) {
        const { key } = this;
        const { target } = event;
        const originalEvent = event.target.originalEvent;

        if (event.target.className == 'key-value-input') {
            this.generateName = false;
        }

        this.keyValue = this._formatInput(event.target.value);

        this.emit('fieldEdit', {    
            key: 'keyValue',
            value: this.keyValue,
            originalEvent: originalEvent
        });
    }
}

Soy.register(KeyValue, templates);

export default KeyValue;