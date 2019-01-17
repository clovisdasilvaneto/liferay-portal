/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Calculator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Calculator.
 * @hassoydeltemplate {ClayDropdownBase.Content.idom}
 * @hassoydeltemplate {ClayDropdownItem.Item.idom}
 * @hassoydelcall {PageRenderer.RegisterFieldType.idom}
 * @public
 */

goog.module('Calculator.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias3 = Soy.getTemplate('ClayActionsDropdown.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('ClayDropdownBase.incrementaldom', 'items');
var $templateAlias1 = Soy.getTemplate('ClayDropdownBase.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('ClayIcon.incrementaldom', 'render');


/**
 * @param {$render.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $render = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!Array<?>} */
  var options = soy.asserts.assertType(goog.isArray(opt_data.options), 'options', opt_data.options, '!Array<?>');
  /** @type {!Array<?>} */
  var optionsRepeatable = soy.asserts.assertType(goog.isArray(opt_data.optionsRepeatable), 'optionsRepeatable', opt_data.optionsRepeatable, '!Array<?>');
  /** @type {!Array<?>} */
  var calculatorOptions = soy.asserts.assertType(goog.isArray(opt_data.calculatorOptions), 'calculatorOptions', opt_data.calculatorOptions, '!Array<?>');
  /** @type {boolean|null|undefined} */
  var disableCalculatorField = soy.asserts.assertType(opt_data.disableCalculatorField == null || (goog.isBoolean(opt_data.disableCalculatorField) || opt_data.disableCalculatorField === 1 || opt_data.disableCalculatorField === 0), 'disableCalculatorField', opt_data.disableCalculatorField, 'boolean|null|undefined');
  /** @type {{addField: (!goog.soy.data.SanitizedContent|string), theExpressionWillBeDisplayedHere: (!goog.soy.data.SanitizedContent|string),}} */
  var strings = soy.asserts.assertType(goog.isObject(opt_data.strings), 'strings', opt_data.strings, '{addField: (!goog.soy.data.SanitizedContent|string), theExpressionWillBeDisplayedHere: (!goog.soy.data.SanitizedContent|string),}');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var expression = soy.asserts.assertType(opt_data.expression == null || (goog.isString(opt_data.expression) || opt_data.expression instanceof goog.soy.data.SanitizedContent), 'expression', opt_data.expression, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {*|null|undefined} */
  var _handleItemSelection = opt_data._handleItemSelection;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('action-rule-calculate-index', index);
      incrementalDom.attr('class', 'action-rule-calculate row');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'col-md-12 no-padding');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'calculate-container');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'calculate-container-calculator-component col-md-3');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'liferay-ddm-form-builder-calculator');
  incrementalDom.elementOpenEnd();
  var optionsList__soy2781 = disableCalculatorField ? optionsRepeatable : options;
  var disableAddField__soy2783 = (options.length) > 0 ? false : true;
  $templateAlias1({events: {itemClicked: _handleItemSelection}, contentRenderer: 'dropdownFormContent', disabled: disableAddField__soy2783, elementClasses: 'calculator-add-field-button-container', items: optionsList__soy2781, label: strings.addField, ref: 'calculatorAddField' + index, spritemap: spritemap, style: 'primary', triggerClasses: 'btn-lg calculator-add-field-button ddm-button'}, opt_ijData);
  var disableField__soy2797 = disableCalculatorField ? 'disabled' : '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'calculator-button-area');
      incrementalDom.attr('data-onclick', _handleItemSelection);
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'calculator-buttons calculator-buttons-numbers');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'border-top-left btn btn-secondary button-padding-icons calculator-button');
      incrementalDom.attr('data-calculator-key', 'backspace');
  incrementalDom.elementOpenEnd();
  $templateAlias2({spritemap: spritemap, symbol: 'angle-left'}, opt_ijData);
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '(');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('(');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'border-top-right btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', ')');
  incrementalDom.elementOpenEnd();
  incrementalDom.text(')');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '1');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('1');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '2');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('2');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '3');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('3');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '4');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('4');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '5');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('5');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '6');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('6');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '7');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('7');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '8');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('8');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '9');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('9');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'border-bottom-left btn btn-secondary button-two-columns calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '0');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('0');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'border-bottom-right btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '.');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('.');
  incrementalDom.elementClose('li');
  incrementalDom.elementClose('ul');
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'calculator-buttons calculator-buttons-operators');
  incrementalDom.elementOpenEnd();
  var disableCalculatorOptions__soy2831 = disableCalculatorField ? true : false;
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('data-calculator-key', '...');
  incrementalDom.elementOpenEnd();
  $templateAlias3({events: {itemClicked: _handleItemSelection}, elementClasses: 'dropdown-action', disabled: disableCalculatorOptions__soy2831 || disableAddField__soy2783, items: calculatorOptions, ref: 'calculatorOptions' + index, spritemap: spritemap, style: 'secondary', triggerClasses: 'dropdown-toggle calculator-add-operator-button-area'}, opt_ijData);
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '+');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('+');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '-');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('-');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '*');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('*');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'border-bottom-left border-bottom-right btn btn-secondary calculator-button ' + disableField__soy2797);
      incrementalDom.attr('data-calculator-key', '/');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('/');
  incrementalDom.elementClose('li');
  incrementalDom.elementClose('ul');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'calculate-container-fields col-md-9');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group');
  incrementalDom.elementOpenEnd();
  soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'text', false)({name: 'calculator-expression', readOnly: true, displayStyle: 'multipleline', placeholder: strings.theExpressionWillBeDisplayedHere, showLabel: false, spritemap: spritemap, value: expression}, opt_ijData);
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
};
exports.render = $render;
/**
 * @typedef {{
 *  index: number,
 *  options: !Array<?>,
 *  optionsRepeatable: !Array<?>,
 *  calculatorOptions: !Array<?>,
 *  disableCalculatorField: (boolean|null|undefined),
 *  strings: {addField: (!goog.soy.data.SanitizedContent|string), theExpressionWillBeDisplayedHere: (!goog.soy.data.SanitizedContent|string),},
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  expression: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  _handleItemSelection: (*|null|undefined),
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Calculator.render';
}


/**
 * @param {__deltemplate__ClayDropdownItem_Item_dropdownCalculator.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__ClayDropdownItem_Item_dropdownCalculator = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var label = soy.asserts.assertType(goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent, 'label', opt_data.label, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleItemClick = opt_data._handleItemClick;
  /** @type {boolean|null|undefined} */
  var active = soy.asserts.assertType(opt_data.active == null || (goog.isBoolean(opt_data.active) || opt_data.active === 1 || opt_data.active === 0), 'active', opt_data.active, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var checked = soy.asserts.assertType(opt_data.checked == null || (goog.isBoolean(opt_data.checked) || opt_data.checked === 1 || opt_data.checked === 0), 'checked', opt_data.checked, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var disabled = soy.asserts.assertType(opt_data.disabled == null || (goog.isBoolean(opt_data.disabled) || opt_data.disabled === 1 || opt_data.disabled === 0), 'disabled', opt_data.disabled, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var href = soy.asserts.assertType(opt_data.href == null || (goog.isString(opt_data.href) || opt_data.href instanceof goog.soy.data.SanitizedContent), 'href', opt_data.href, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var icon = soy.asserts.assertType(opt_data.icon == null || (goog.isString(opt_data.icon) || opt_data.icon instanceof goog.soy.data.SanitizedContent), 'icon', opt_data.icon, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var inputName = soy.asserts.assertType(opt_data.inputName == null || (goog.isString(opt_data.inputName) || opt_data.inputName instanceof goog.soy.data.SanitizedContent), 'inputName', opt_data.inputName, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var inputValue = soy.asserts.assertType(opt_data.inputValue == null || (goog.isString(opt_data.inputValue) || opt_data.inputValue instanceof goog.soy.data.SanitizedContent), 'inputValue', opt_data.inputValue, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>|null|undefined} */
  var items = soy.asserts.assertType(opt_data.items == null || goog.isArray(opt_data.items), 'items', opt_data.items, '!Array<?>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var itemsIconAlignment = soy.asserts.assertType(opt_data.itemsIconAlignment == null || (goog.isString(opt_data.itemsIconAlignment) || opt_data.itemsIconAlignment instanceof goog.soy.data.SanitizedContent), 'itemsIconAlignment', opt_data.itemsIconAlignment, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {null|number|undefined} */
  var maxItems = soy.asserts.assertType(opt_data.maxItems == null || goog.isNumber(opt_data.maxItems), 'maxItems', opt_data.maxItems, 'null|number|undefined');
  /** @type {boolean|null|undefined} */
  var separator = soy.asserts.assertType(opt_data.separator == null || (goog.isBoolean(opt_data.separator) || opt_data.separator === 1 || opt_data.separator === 0), 'separator', opt_data.separator, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var spritemap = soy.asserts.assertType(opt_data.spritemap == null || (goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent), 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var title = soy.asserts.assertType(opt_data.title == null || (goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent), 'title', opt_data.title, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var item__soy2882 = function() {
    soyIdom.print(label);
    incrementalDom.elementOpenStart('span');
        incrementalDom.attr('class', 'calculate-fieldname');
    incrementalDom.elementOpenEnd();
    incrementalDom.text('Fieldname: ');
    soyIdom.print(title);
    incrementalDom.elementClose('span');
  };
  var itemAttributes__soy2891 = function() {
    incrementalDom.attr('class', 'dropdown-item' + (active || checked ? ' active' : ''));
    incrementalDom.attr('data-onclick', _handleItemClick);
  };
  incrementalDom.elementOpenStart('li');
      itemAttributes__soy2891();
      incrementalDom.attr('data-option-value', title);
  incrementalDom.elementOpenEnd();
  item__soy2882();
  incrementalDom.elementClose('li');
  if (separator) {
    incrementalDom.elementOpenStart('li');
        incrementalDom.attr('aria-hidden', 'true');
        incrementalDom.attr('class', 'dropdown-divider');
        incrementalDom.attr('role', 'presentation');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('li');
  }
};
exports.__deltemplate__ClayDropdownItem_Item_dropdownCalculator = __deltemplate__ClayDropdownItem_Item_dropdownCalculator;
/**
 * @typedef {{
 *  label: (!goog.soy.data.SanitizedContent|string),
 *  _handleItemClick: (*|null|undefined),
 *  active: (boolean|null|undefined),
 *  checked: (boolean|null|undefined),
 *  disabled: (boolean|null|undefined),
 *  href: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  icon: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  inputName: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  inputValue: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  items: (!Array<?>|null|undefined),
 *  itemsIconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  maxItems: (null|number|undefined),
 *  separator: (boolean|null|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  title: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
__deltemplate__ClayDropdownItem_Item_dropdownCalculator.Params;
if (goog.DEBUG) {
  __deltemplate__ClayDropdownItem_Item_dropdownCalculator.soyTemplateName = 'Calculator.__deltemplate__ClayDropdownItem_Item_dropdownCalculator';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ClayDropdownItem.Item.idom'), 'dropdownCalculator', 0, __deltemplate__ClayDropdownItem_Item_dropdownCalculator);


/**
 * @param {__deltemplate__ClayDropdownBase_Content_dropdownFormContent.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__ClayDropdownBase_Content_dropdownFormContent = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {*|null|undefined} */
  var _handleItemClick = opt_data._handleItemClick;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var contentRenderer = soy.asserts.assertType(opt_data.contentRenderer == null || (goog.isString(opt_data.contentRenderer) || opt_data.contentRenderer instanceof goog.soy.data.SanitizedContent), 'contentRenderer', opt_data.contentRenderer, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>|null|undefined} */
  var items = soy.asserts.assertType(opt_data.items == null || goog.isArray(opt_data.items), 'items', opt_data.items, '!Array<?>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var itemsIconAlignment = soy.asserts.assertType(opt_data.itemsIconAlignment == null || (goog.isString(opt_data.itemsIconAlignment) || opt_data.itemsIconAlignment instanceof goog.soy.data.SanitizedContent), 'itemsIconAlignment', opt_data.itemsIconAlignment, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var spritemap = soy.asserts.assertType(opt_data.spritemap == null || (goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent), 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|null|string|undefined');
  if (items) {
    incrementalDom.elementOpenStart('ul');
        incrementalDom.attr('class', 'list-unstyled');
    incrementalDom.elementOpenEnd();
    $templateAlias4({_handleItemClick: _handleItemClick, items: items, itemsIconAlignment: itemsIconAlignment, contentRenderer: 'dropdownCalculator', spritemap: spritemap}, opt_ijData);
    incrementalDom.elementClose('ul');
  }
};
exports.__deltemplate__ClayDropdownBase_Content_dropdownFormContent = __deltemplate__ClayDropdownBase_Content_dropdownFormContent;
/**
 * @typedef {{
 *  _handleItemClick: (*|null|undefined),
 *  contentRenderer: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  items: (!Array<?>|null|undefined),
 *  itemsIconAlignment: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
__deltemplate__ClayDropdownBase_Content_dropdownFormContent.Params;
if (goog.DEBUG) {
  __deltemplate__ClayDropdownBase_Content_dropdownFormContent.soyTemplateName = 'Calculator.__deltemplate__ClayDropdownBase_Content_dropdownFormContent';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ClayDropdownBase.Content.idom'), 'dropdownFormContent', 0, __deltemplate__ClayDropdownBase_Content_dropdownFormContent);

exports.render.params = ["index","options","optionsRepeatable","calculatorOptions","disableCalculatorField","strings","spritemap","expression","_handleItemSelection"];
exports.render.types = {"index":"int","options":"list<?>","optionsRepeatable":"list<?>","calculatorOptions":"list<?>","disableCalculatorField":"bool","strings":"[\n\t\t\taddField: string,\n\t\t\ttheExpressionWillBeDisplayedHere: string\n\t\t]\n\t","spritemap":"string","expression":"string","_handleItemSelection":"any"};
templates = exports;
return exports;

});

class Calculator extends Component {}
Soy.register(Calculator, templates);
export { Calculator, templates };
export default templates;
/* jshint ignore:end */
