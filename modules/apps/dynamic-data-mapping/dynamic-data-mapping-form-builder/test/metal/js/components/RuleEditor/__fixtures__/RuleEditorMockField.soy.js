/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from RuleEditorMockField.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RuleEditorMockField.
 * @public
 */

goog.module('RuleEditorMockField.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {$render.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $render = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var type = soy.asserts.assertType(opt_data.type == null || (goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent), 'type', opt_data.type, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('id', 'fields-rule');
  incrementalDom.elementOpenEnd();
  var $tmp = type;
  switch (goog.isObject($tmp) ? $tmp.toString() : $tmp) {
    case 'checkbox_multiple':
      $CheckboxMultiple(null, opt_ijData);
      break;
    case 'date':
      $Date(null, opt_ijData);
      break;
    case 'numeric':
      $Numeric(null, opt_ijData);
      break;
    case 'radio':
      $Radio(null, opt_ijData);
      break;
    case 'select':
      $Select(null, opt_ijData);
      break;
    case 'text':
      $Text(null, opt_ijData);
      break;
    default:
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'ddm-template-undefined');
      incrementalDom.elementOpenEnd();
      incrementalDom.text('Undefined template.');
      incrementalDom.elementClose('div');
  }
  incrementalDom.elementClose('div');
};
exports.render = $render;
/**
 * @typedef {{
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RuleEditorMockField.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $CheckboxMultiple = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpen('p');
  incrementalDom.text('Checkbox Multiple Field');
  incrementalDom.elementClose('p');
};
exports.CheckboxMultiple = $CheckboxMultiple;
if (goog.DEBUG) {
  $CheckboxMultiple.soyTemplateName = 'RuleEditorMockField.CheckboxMultiple';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $Date = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpen('p');
  incrementalDom.text('Date Field');
  incrementalDom.elementClose('p');
};
exports.Date = $Date;
if (goog.DEBUG) {
  $Date.soyTemplateName = 'RuleEditorMockField.Date';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $Numeric = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpen('p');
  incrementalDom.text('Numeric Field');
  incrementalDom.elementClose('p');
};
exports.Numeric = $Numeric;
if (goog.DEBUG) {
  $Numeric.soyTemplateName = 'RuleEditorMockField.Numeric';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $Radio = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpen('p');
  incrementalDom.text('Radio Field');
  incrementalDom.elementClose('p');
};
exports.Radio = $Radio;
if (goog.DEBUG) {
  $Radio.soyTemplateName = 'RuleEditorMockField.Radio';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $Select = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpen('p');
  incrementalDom.text('Select Field');
  incrementalDom.elementClose('p');
};
exports.Select = $Select;
if (goog.DEBUG) {
  $Select.soyTemplateName = 'RuleEditorMockField.Select';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $Text = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpen('p');
  incrementalDom.text('Text Field');
  incrementalDom.elementClose('p');
};
exports.Text = $Text;
if (goog.DEBUG) {
  $Text.soyTemplateName = 'RuleEditorMockField.Text';
}

exports.render.params = ["type"];
exports.render.types = {"type":"string"};
exports.CheckboxMultiple.params = [];
exports.CheckboxMultiple.types = {};
exports.Date.params = [];
exports.Date.types = {};
exports.Numeric.params = [];
exports.Numeric.types = {};
exports.Radio.params = [];
exports.Radio.types = {};
exports.Select.params = [];
exports.Select.types = {};
exports.Text.params = [];
exports.Text.types = {};
templates = exports;
return exports;

});

class RuleEditorMockField extends Component {}
Soy.register(RuleEditorMockField, templates);
export { RuleEditorMockField, templates };
export default templates;
/* jshint ignore:end */
