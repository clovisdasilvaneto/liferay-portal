import './OptionsRegister.soy.js';
import 'dynamic-data-mapping-form-field-type/metal/FieldBase/index.es';
import 'dynamic-data-mapping-form-field-type/metal/Text/index.es';
import {Config} from 'metal-state';
import dom from 'metal-dom';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Options.soy.js';
import {Drag, DragDrop} from 'metal-drag-drop';

/**
 * Options.
 * @extends Component
 */

class Options extends Component {
	static STATE = {
		fieldName: Config.string(),
		/**
		 * @default false
		 * @instance
		 * @memberof Options
		 * @type {?bool}
		 */

		readOnly: Config.bool().value(false),

		/**
		 * @default undefined
		 * @instance
		 * @memberof Options
		 * @type {?(string|undefined)}
		 */

		tip: Config.string(),

		/**
		 * @default undefined
		 * @instance
		 * @memberof Options
		 * @type {?(string|undefined)}
		 */

		items: Config.arrayOf(
			Config.shapeOf(
				{
					disabled: Config.bool().value(false),
					label: Config.string(),
					name: Config.string(),
					value: Config.string()
				}
			)
		).internal(),
		id: Config.string(),

		/**
		 * @default undefined
		 * @instance
		 * @memberof Options
		 * @type {?(string|undefined)}
		 */

		label: Config.string(),

		/**
		 * @default undefined
		 * @instance
		 * @memberof FieldBase
		 * @type {?(bool|undefined)}
		 */

		repeatable: Config.bool(),

		/**
		 * @default false
		 * @instance
		 * @memberof Options
		 * @type {?bool}
		 */

		required: Config.bool().value(false),

		/**
		 * @default true
		 * @instance
		 * @memberof Options
		 * @type {?bool}
		 */

		showLabel: Config.bool().value(true),

		/**
		 * @default undefined
		 * @instance
		 * @memberof Options
		 * @type {?(string|undefined)}
		 */

		spritemap: Config.string(),

		key: Config.string(),

		placeholder: Config.string(),

		/**
		 * @default undefined
		 * @instance
		 * @memberof Text
		 * @type {?(string|undefined)}
		 */

		type: Config.string().value('options'),

		value: Config.object(),

		visible: Config.bool().value(true)
	};

	created() {
		const currentLanguage = this.getCurrentLanguage();
		const options = [...this.value[currentLanguage]];

		this.setState({
			items: this.getItems(options)
		});

		this._startDrag();
	}

	/**
	 * @inheritDoc
	 */
	disposeInternal() {
		super.disposeInternal();
		this.disposeDragAndDrop();
	}

	disposeDragAndDrop() {
		if (this._dragAndDrop) {
			this._dragAndDrop.dispose();
		}
	}

	_startDrag() {
		this._dragAndDrop = new DragDrop(
			{
				dragPlaceholder: Drag.Placeholder.CLONE,
				sources: '.ddm-field-options',
				targets: '.ddm-options-target',
				useShim: false,
				handles: '.ddm-options-drag'
			}
		);

		// this._dragAndDrop.on(
		// 	DragDrop.Events.END,
		// 	this._handleDragAndDropEnd.bind(this)
		// );

		// this._dragAndDrop.on(DragDrop.Events.DRAG, this._handleDragStarted.bind(this));
	}

	_handleDeleteOption(event) {
		const {delegateTarget} = event;

		const deletedIndex = this.getFieldIndex(delegateTarget);

		const currentLanguage = this.getCurrentLanguage();

		let options = [...this.value[currentLanguage]];

		options = options.filter((option, currentIndex) => currentIndex !== deletedIndex);

		this.emit(
			'fieldEdited',
			{
				fieldInstance: this,
				value: options
			}
		);

		this.setState({
			items: this.getItems(options)
		})
	}

	/**
	 * TODO: get the current language dynamically
	 */
	getCurrentLanguage() {
		return 'en_US';
	}

	/**
	 * TODO: generate the field name dynamically
	 */
	getFieldName(value) {
		return  value + Date.now();
	}

	getFieldIndex(element) {
		return parseInt(dom.closest(element, '.ddm-field-options').dataset.index);
	}

	_handleTextChanged(event) {
		const {value, originalEvent} = event;
		const {target: {parentNode}} = originalEvent;
		const itemIndex = this.getFieldIndex(parentNode);
		const currentLanguage = this.getCurrentLanguage();

		let options = [...this.value[currentLanguage]];

		if(options[itemIndex]) {
			options = options.map(
				(option, index) => itemIndex === index ? (
					{
						label: value,
						value
					}
				) : option
			);
		}else {
			options = [
				...options,
				{
					label: value,
					value
				}
			]
		}

		this.emit(
			'fieldEdited',
			{
				fieldInstance: this,
				originalEvent,
				value: options
			}
		);

		this.setState({
			items: this.getItems(options)
		})
	}

	getItems(options) {
		let items = options.map(item => ({
			...item,
			disabled: false,
			name:  this.getFieldName(item.value)
		}));

		items = [
			...items,
			{
				disabled: false,
				name: '',
				label: '',
				value: ''
			}
		];

		return items;
	}
}

Soy.register(Options, templates);

export default Options;