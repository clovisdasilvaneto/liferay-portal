/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from RuleEditorMockFieldRegister.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RuleEditorMockFieldRegister.
 * @hassoydeltemplate {PageRenderer.RegisterFieldType.idom}
 * @public
 */

goog.module('RuleEditorMockFieldRegister.incrementaldom');

goog.require('soy');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('RuleEditorMockField.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__PageRenderer_RegisterFieldType_checkbox_multiple = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  $templateAlias1(soy.$$assignDefaults({type: 'checkbox_multiple'}, opt_data), opt_ijData);
};
exports.__deltemplate__PageRenderer_RegisterFieldType_checkbox_multiple = __deltemplate__PageRenderer_RegisterFieldType_checkbox_multiple;
if (goog.DEBUG) {
  __deltemplate__PageRenderer_RegisterFieldType_checkbox_multiple.soyTemplateName = 'RuleEditorMockFieldRegister.__deltemplate__PageRenderer_RegisterFieldType_checkbox_multiple';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'checkbox_multiple', 0, __deltemplate__PageRenderer_RegisterFieldType_checkbox_multiple);


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__PageRenderer_RegisterFieldType_date = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  $templateAlias1(soy.$$assignDefaults({type: 'date'}, opt_data), opt_ijData);
};
exports.__deltemplate__PageRenderer_RegisterFieldType_date = __deltemplate__PageRenderer_RegisterFieldType_date;
if (goog.DEBUG) {
  __deltemplate__PageRenderer_RegisterFieldType_date.soyTemplateName = 'RuleEditorMockFieldRegister.__deltemplate__PageRenderer_RegisterFieldType_date';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'date', 0, __deltemplate__PageRenderer_RegisterFieldType_date);


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__PageRenderer_RegisterFieldType_numeric = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  $templateAlias1(soy.$$assignDefaults({type: 'numeric'}, opt_data), opt_ijData);
};
exports.__deltemplate__PageRenderer_RegisterFieldType_numeric = __deltemplate__PageRenderer_RegisterFieldType_numeric;
if (goog.DEBUG) {
  __deltemplate__PageRenderer_RegisterFieldType_numeric.soyTemplateName = 'RuleEditorMockFieldRegister.__deltemplate__PageRenderer_RegisterFieldType_numeric';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'numeric', 0, __deltemplate__PageRenderer_RegisterFieldType_numeric);


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__PageRenderer_RegisterFieldType_radio = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  $templateAlias1(soy.$$assignDefaults({type: 'radio'}, opt_data), opt_ijData);
};
exports.__deltemplate__PageRenderer_RegisterFieldType_radio = __deltemplate__PageRenderer_RegisterFieldType_radio;
if (goog.DEBUG) {
  __deltemplate__PageRenderer_RegisterFieldType_radio.soyTemplateName = 'RuleEditorMockFieldRegister.__deltemplate__PageRenderer_RegisterFieldType_radio';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'radio', 0, __deltemplate__PageRenderer_RegisterFieldType_radio);


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__PageRenderer_RegisterFieldType_select = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  $templateAlias1(soy.$$assignDefaults({type: 'select'}, opt_data), opt_ijData);
};
exports.__deltemplate__PageRenderer_RegisterFieldType_select = __deltemplate__PageRenderer_RegisterFieldType_select;
if (goog.DEBUG) {
  __deltemplate__PageRenderer_RegisterFieldType_select.soyTemplateName = 'RuleEditorMockFieldRegister.__deltemplate__PageRenderer_RegisterFieldType_select';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', 0, __deltemplate__PageRenderer_RegisterFieldType_select);


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__PageRenderer_RegisterFieldType_text = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  $templateAlias1(soy.$$assignDefaults({type: 'text'}, opt_data), opt_ijData);
};
exports.__deltemplate__PageRenderer_RegisterFieldType_text = __deltemplate__PageRenderer_RegisterFieldType_text;
if (goog.DEBUG) {
  __deltemplate__PageRenderer_RegisterFieldType_text.soyTemplateName = 'RuleEditorMockFieldRegister.__deltemplate__PageRenderer_RegisterFieldType_text';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'text', 0, __deltemplate__PageRenderer_RegisterFieldType_text);

templates = exports;
return exports;

});

export { templates };
export default templates;
/* jshint ignore:end */
