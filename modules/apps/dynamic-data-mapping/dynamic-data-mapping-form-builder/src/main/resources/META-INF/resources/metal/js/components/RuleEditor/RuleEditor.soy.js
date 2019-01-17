/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from RuleEditor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RuleEditor.
 * @hassoydelcall {PageRenderer.RegisterFieldType.idom}
 * @public
 */

goog.module('RuleEditor.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias3 = Soy.getTemplate('Calculator.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('ClayAlert.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('ClayButton.incrementaldom', 'render');

var $templateAlias5 = Soy.getTemplate('ClayIcon.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('ClayModal.incrementaldom', 'render');


/**
 * @param {$render.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $render = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!Array<{action: (!goog.soy.data.SanitizedContent|string), calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, expression: (!goog.soy.data.SanitizedContent|string), hasRequiredInputs: boolean, inputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), outputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, target: (!goog.soy.data.SanitizedContent|string),}>} */
  var actions = soy.asserts.assertType(goog.isArray(opt_data.actions), 'actions', opt_data.actions, '!Array<{action: (!goog.soy.data.SanitizedContent|string), calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, expression: (!goog.soy.data.SanitizedContent|string), hasRequiredInputs: boolean, inputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), outputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, target: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var actionTypes = soy.asserts.assertType(goog.isArray(opt_data.actionTypes), 'actionTypes', opt_data.actionTypes, '!Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var calculatorOptions = soy.asserts.assertType(goog.isArray(opt_data.calculatorOptions), 'calculatorOptions', opt_data.calculatorOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var calculatorResultOptions = soy.asserts.assertType(goog.isArray(opt_data.calculatorResultOptions), 'calculatorResultOptions', opt_data.calculatorResultOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {!Array<{binaryOperator: boolean, firstOperandOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, operands: !Array<{dataType: (!goog.soy.data.SanitizedContent|string), label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, operator: (!goog.soy.data.SanitizedContent|string), operators: !Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,}>} */
  var conditions = soy.asserts.assertType(goog.isArray(opt_data.conditions), 'conditions', opt_data.conditions, '!Array<{binaryOperator: boolean, firstOperandOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, operands: !Array<{dataType: (!goog.soy.data.SanitizedContent|string), label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, operator: (!goog.soy.data.SanitizedContent|string), operators: !Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,}>');
  /** @type {!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var dataProvider = soy.asserts.assertType(opt_data.dataProvider == null || goog.isArray(opt_data.dataProvider), 'dataProvider', opt_data.dataProvider, '!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>|null|undefined} */
  var deletedFields = soy.asserts.assertType(opt_data.deletedFields == null || goog.isArray(opt_data.deletedFields), 'deletedFields', opt_data.deletedFields, '!Array<!goog.soy.data.SanitizedContent|string>|null|undefined');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var fieldOptions = soy.asserts.assertType(goog.isArray(opt_data.fieldOptions), 'fieldOptions', opt_data.fieldOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var fixedOptions = soy.asserts.assertType(goog.isArray(opt_data.fixedOptions), 'fixedOptions', opt_data.fixedOptions, '!Array<{name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {boolean} */
  var invalidRule = soy.asserts.assertType(goog.isBoolean(opt_data.invalidRule) || opt_data.invalidRule === 1 || opt_data.invalidRule === 0, 'invalidRule', opt_data.invalidRule, 'boolean');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var logicalOperator = soy.asserts.assertType(goog.isString(opt_data.logicalOperator) || opt_data.logicalOperator instanceof goog.soy.data.SanitizedContent, 'logicalOperator', opt_data.logicalOperator, '!goog.soy.data.SanitizedContent|string');
  /** @type {boolean} */
  var readOnly = soy.asserts.assertType(goog.isBoolean(opt_data.readOnly) || opt_data.readOnly === 1 || opt_data.readOnly === 0, 'readOnly', opt_data.readOnly, 'boolean');
  /** @type {?} */
  var strings = opt_data.strings;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleActionSelection = opt_data._handleActionSelection;
  /** @type {*|null|undefined} */
  var _handleActionAdded = opt_data._handleActionAdded;
  /** @type {*|null|undefined} */
  var _handleCancelRule = opt_data._handleCancelRule;
  /** @type {*|null|undefined} */
  var _handleConditionAdded = opt_data._handleConditionAdded;
  /** @type {*|null|undefined} */
  var _handleDataProviderInputEdited = opt_data._handleDataProviderInputEdited;
  /** @type {*|null|undefined} */
  var _handleDataProviderOutputEdited = opt_data._handleDataProviderOutputEdited;
  /** @type {*|null|undefined} */
  var _handleDeleteAction = opt_data._handleDeleteAction;
  /** @type {*|null|undefined} */
  var _handleDeleteCondition = opt_data._handleDeleteCondition;
  /** @type {*|null|undefined} */
  var _handleEditExpression = opt_data._handleEditExpression;
  /** @type {*|null|undefined} */
  var _handleFirstOperandFieldEdited = opt_data._handleFirstOperandFieldEdited;
  /** @type {*|null|undefined} */
  var _handleLogicalOperationChange = opt_data._handleLogicalOperationChange;
  /** @type {*|null|undefined} */
  var _handleOperatorEdited = opt_data._handleOperatorEdited;
  /** @type {*|null|undefined} */
  var _handleRuleAdded = opt_data._handleRuleAdded;
  /** @type {*|null|undefined} */
  var _handleSecondOperandFieldEdited = opt_data._handleSecondOperandFieldEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandTypeEdited = opt_data._handleSecondOperandTypeEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandValueEdited = opt_data._handleSecondOperandValueEdited;
  /** @type {*|null|undefined} */
  var _handleTargetSelection = opt_data._handleTargetSelection;
  /** @type {*|null|undefined} */
  var _handleModalButtonClicked = opt_data._handleModalButtonClicked;
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var roles = soy.asserts.assertType(opt_data.roles == null || goog.isArray(opt_data.roles), 'roles', opt_data.roles, '!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-builder-rule-builder liferay-ddm-form-builder-rule-builder-content');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('h2');
      incrementalDom.attr('class', 'form-builder-section-title text-default');
  incrementalDom.elementOpenEnd();
  soyIdom.print(strings.title);
  incrementalDom.elementClose('h2');
  incrementalDom.elementOpenStart('h4');
      incrementalDom.attr('class', 'text-default');
  incrementalDom.elementOpenEnd();
  soyIdom.print(strings.description);
  incrementalDom.elementClose('h4');
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'liferay-ddm-form-builder-rule-condition-list liferay-ddm-form-rule-builder-timeline timeline ' + ((conditions.length) > 1 ? 'can-remove-item' : ''));
  incrementalDom.elementOpenEnd();
  var enableLogicalOperator__soy4729 = (conditions.length) > 1 ? true : false;
  var param4738 = function() {
    $renderConditionLogicalOperatorDropdown({_handleLogicalOperationChange: _handleLogicalOperationChange, enableLogicalOperator: enableLogicalOperator__soy4729, logicalOperator: strings[logicalOperator], strings: strings}, opt_ijData);
  };
  $renderHeader({extraContent: param4738, logicalOperator: strings[logicalOperator], title: strings.condition}, opt_ijData);
  var condition4743List = conditions;
  var condition4743ListLen = condition4743List.length;
  for (var condition4743Index = 0; condition4743Index < condition4743ListLen; condition4743Index++) {
    var condition4743Data = condition4743List[condition4743Index];
    $renderCondition({_handleDeleteCondition: _handleDeleteCondition, _handleFirstOperandFieldEdited: _handleFirstOperandFieldEdited, _handleOperatorEdited: _handleOperatorEdited, _handleSecondOperandFieldEdited: _handleSecondOperandFieldEdited, _handleSecondOperandTypeEdited: _handleSecondOperandTypeEdited, _handleSecondOperandValueEdited: _handleSecondOperandValueEdited, binaryOperator: condition4743Data.binaryOperator, fieldOptions: fieldOptions, firstOperandType: condition4743Data.operands[0].type, firstOperandValueSelected: condition4743Data.operands[0].value, fixedOptions: fixedOptions, index: condition4743Index, logicalOperator: logicalOperator, operators: condition4743Data.operators, readOnly: readOnly, roles: roles, secondOperandFieldName: '', secondOperandType: (condition4743Data.operands[1] != null) ? condition4743Data.operands[1].type : '', secondOperandDataType: (condition4743Data.operands[1] != null) ? condition4743Data.operands[1].dataType : '', secondOperandValue: (condition4743Data.operands[1] != null) ? condition4743Data.operands[1].value : '', selectedOperator: condition4743Data.operator, spritemap: spritemap, strings: strings}, opt_ijData);
  }
  incrementalDom.elementClose('ul');
  $renderAddItemButton({_handleItemAdded: _handleConditionAdded, spritemap: spritemap, type: 'addConditionButton'}, opt_ijData);
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'action-list liferay-ddm-form-builder-rule-action-list liferay-ddm-form-rule-builder-timeline timeline ' + ((actions.length) > 1 ? 'can-remove-item' : ''));
  incrementalDom.elementOpenEnd();
  $renderHeader({title: strings.actions}, opt_ijData);
  var action4782List = actions;
  var action4782ListLen = action4782List.length;
  for (var action4782Index = 0; action4782Index < action4782ListLen; action4782Index++) {
    var action4782Data = action4782List[action4782Index];
    $renderAction({_handleActionSelection: _handleActionSelection, _handleDataProviderInputEdited: _handleDataProviderInputEdited, _handleDataProviderOutputEdited: _handleDataProviderOutputEdited, _handleDeleteAction: _handleDeleteAction, _handleEditExpression: _handleEditExpression, _handleTargetSelection: _handleTargetSelection, actionInputs: action4782Data.inputs, actionOutputs: action4782Data.outputs, actionSelected: action4782Data.action, actionExpression: action4782Data.expression, actionTypes: actionTypes, calculatorOptions: calculatorOptions, calculatorFields: action4782Data.calculatorFields, calculatorResultOptions: calculatorResultOptions, dataProvider: dataProvider, deletedFields: deletedFields, fieldOptions: fieldOptions, hasRequiredInputs: action4782Data.hasRequiredInputs, index: action4782Index, strings: strings, spritemap: spritemap, targetSelected: action4782Data.target}, opt_ijData);
  }
  incrementalDom.elementClose('ul');
  $renderAddItemButton({_handleItemAdded: _handleActionAdded, spritemap: spritemap, type: 'addActionButton'}, opt_ijData);
  $renderModal({_handleModalButtonClicked: _handleModalButtonClicked, question: strings.deleteConditionQuestion, spritemap: spritemap, title: strings.deleteCondition, type: 'Condition'}, opt_ijData);
  $renderModal({_handleModalButtonClicked: _handleModalButtonClicked, question: strings.deleteActionQuestion, spritemap: spritemap, title: strings.deleteAction, type: 'Action'}, opt_ijData);
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'liferay-ddm-form-rule-builder-footer');
  incrementalDom.elementOpenEnd();
  $templateAlias1({events: {click: _handleRuleAdded}, disabled: invalidRule, label: strings.save, ref: 'save', spritemap: spritemap, style: 'primary'}, opt_ijData);
  $templateAlias1({events: {click: _handleCancelRule}, label: strings.cancel, ref: 'cancel', spritemap: spritemap, style: 'secondary'}, opt_ijData);
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
};
exports.render = $render;
/**
 * @typedef {{
 *  actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, expression: (!goog.soy.data.SanitizedContent|string), hasRequiredInputs: boolean, inputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), outputs: !Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, target: (!goog.soy.data.SanitizedContent|string),}>,
 *  actionTypes: !Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  calculatorOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  calculatorResultOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  conditions: !Array<{binaryOperator: boolean, firstOperandOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, operands: !Array<{dataType: (!goog.soy.data.SanitizedContent|string), label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, operator: (!goog.soy.data.SanitizedContent|string), operators: !Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,}>,
 *  dataProvider: (!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  deletedFields: (!Array<!goog.soy.data.SanitizedContent|string>|null|undefined),
 *  fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  fixedOptions: !Array<{name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  invalidRule: boolean,
 *  logicalOperator: (!goog.soy.data.SanitizedContent|string),
 *  readOnly: boolean,
 *  strings: ?,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleActionSelection: (*|null|undefined),
 *  _handleActionAdded: (*|null|undefined),
 *  _handleCancelRule: (*|null|undefined),
 *  _handleConditionAdded: (*|null|undefined),
 *  _handleDataProviderInputEdited: (*|null|undefined),
 *  _handleDataProviderOutputEdited: (*|null|undefined),
 *  _handleDeleteAction: (*|null|undefined),
 *  _handleDeleteCondition: (*|null|undefined),
 *  _handleEditExpression: (*|null|undefined),
 *  _handleFirstOperandFieldEdited: (*|null|undefined),
 *  _handleLogicalOperationChange: (*|null|undefined),
 *  _handleOperatorEdited: (*|null|undefined),
 *  _handleRuleAdded: (*|null|undefined),
 *  _handleSecondOperandFieldEdited: (*|null|undefined),
 *  _handleSecondOperandTypeEdited: (*|null|undefined),
 *  _handleSecondOperandValueEdited: (*|null|undefined),
 *  _handleTargetSelection: (*|null|undefined),
 *  _handleModalButtonClicked: (*|null|undefined),
 *  roles: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RuleEditor.render';
}


/**
 * @param {$renderModal.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderModal = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var question = soy.asserts.assertType(goog.isString(opt_data.question) || opt_data.question instanceof goog.soy.data.SanitizedContent, 'question', opt_data.question, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var title = soy.asserts.assertType(goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent, 'title', opt_data.title, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var type = soy.asserts.assertType(goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent, 'type', opt_data.type, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleModalButtonClicked = opt_data._handleModalButtonClicked;
  var param4854 = function() {
    incrementalDom.elementOpen('h4');
    soyIdom.print(question);
    incrementalDom.elementClose('h4');
  };
  $templateAlias2({body: param4854, events: {clickButton: _handleModalButtonClicked}, footerButtons: [{alignment: 'right', label: 'dismiss', style: 'primary', type: 'close'}, {alignment: 'right', label: 'delete', style: 'primary', type: 'button'}], ref: 'confirmationModal' + type, size: 'sm', spritemap: spritemap, title: title}, opt_ijData);
};
exports.renderModal = $renderModal;
/**
 * @typedef {{
 *  question: (!goog.soy.data.SanitizedContent|string),
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  type: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleModalButtonClicked: (*|null|undefined),
 * }}
 */
$renderModal.Params;
if (goog.DEBUG) {
  $renderModal.soyTemplateName = 'RuleEditor.renderModal';
}


/**
 * @param {$renderAction.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderAction = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var actionTypes = soy.asserts.assertType(goog.isArray(opt_data.actionTypes), 'actionTypes', opt_data.actionTypes, '!Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var calculatorFields = soy.asserts.assertType(goog.isArray(opt_data.calculatorFields), 'calculatorFields', opt_data.calculatorFields, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var calculatorOptions = soy.asserts.assertType(goog.isArray(opt_data.calculatorOptions), 'calculatorOptions', opt_data.calculatorOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var calculatorResultOptions = soy.asserts.assertType(goog.isArray(opt_data.calculatorResultOptions), 'calculatorResultOptions', opt_data.calculatorResultOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var fieldOptions = soy.asserts.assertType(goog.isArray(opt_data.fieldOptions), 'fieldOptions', opt_data.fieldOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {{addField: (!goog.soy.data.SanitizedContent|string), chooseAnOption: (!goog.soy.data.SanitizedContent|string), dataProviderError: (!goog.soy.data.SanitizedContent|string), dataProviderParameterInput: (!goog.soy.data.SanitizedContent|string), dataProviderParameterInputDescription: (!goog.soy.data.SanitizedContent|string), dataProviderParameterOutput: (!goog.soy.data.SanitizedContent|string), dataProviderParameterOutputDescription: (!goog.soy.data.SanitizedContent|string), do: (!goog.soy.data.SanitizedContent|string), fromDataProvider: (!goog.soy.data.SanitizedContent|string), requiredField: (!goog.soy.data.SanitizedContent|string), showTheResult: (!goog.soy.data.SanitizedContent|string), theExpressionWillBeDisplayedHere: (!goog.soy.data.SanitizedContent|string),}} */
  var strings = soy.asserts.assertType(goog.isObject(opt_data.strings), 'strings', opt_data.strings, '{addField: (!goog.soy.data.SanitizedContent|string), chooseAnOption: (!goog.soy.data.SanitizedContent|string), dataProviderError: (!goog.soy.data.SanitizedContent|string), dataProviderParameterInput: (!goog.soy.data.SanitizedContent|string), dataProviderParameterInputDescription: (!goog.soy.data.SanitizedContent|string), dataProviderParameterOutput: (!goog.soy.data.SanitizedContent|string), dataProviderParameterOutputDescription: (!goog.soy.data.SanitizedContent|string), do: (!goog.soy.data.SanitizedContent|string), fromDataProvider: (!goog.soy.data.SanitizedContent|string), requiredField: (!goog.soy.data.SanitizedContent|string), showTheResult: (!goog.soy.data.SanitizedContent|string), theExpressionWillBeDisplayedHere: (!goog.soy.data.SanitizedContent|string),}');
  /** @type {*|null|undefined} */
  var _handleActionSelection = opt_data._handleActionSelection;
  /** @type {*|null|undefined} */
  var _handleEditExpression = opt_data._handleEditExpression;
  /** @type {*|null|undefined} */
  var _handleDataProviderInputEdited = opt_data._handleDataProviderInputEdited;
  /** @type {*|null|undefined} */
  var _handleDataProviderOutputEdited = opt_data._handleDataProviderOutputEdited;
  /** @type {*|null|undefined} */
  var _handleDeleteAction = opt_data._handleDeleteAction;
  /** @type {*|null|undefined} */
  var _handleTargetSelection = opt_data._handleTargetSelection;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var actionExpression = soy.asserts.assertType(opt_data.actionExpression == null || (goog.isString(opt_data.actionExpression) || opt_data.actionExpression instanceof goog.soy.data.SanitizedContent), 'actionExpression', opt_data.actionExpression, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var actionInputs = soy.asserts.assertType(opt_data.actionInputs == null || goog.isArray(opt_data.actionInputs), 'actionInputs', opt_data.actionInputs, '!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var actionOutputs = soy.asserts.assertType(opt_data.actionOutputs == null || goog.isArray(opt_data.actionOutputs), 'actionOutputs', opt_data.actionOutputs, '!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var actionSelected = soy.asserts.assertType(opt_data.actionSelected == null || (goog.isString(opt_data.actionSelected) || opt_data.actionSelected instanceof goog.soy.data.SanitizedContent), 'actionSelected', opt_data.actionSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var dataProvider = soy.asserts.assertType(opt_data.dataProvider == null || goog.isArray(opt_data.dataProvider), 'dataProvider', opt_data.dataProvider, '!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>|null|undefined} */
  var deletedFields = soy.asserts.assertType(opt_data.deletedFields == null || goog.isArray(opt_data.deletedFields), 'deletedFields', opt_data.deletedFields, '!Array<!goog.soy.data.SanitizedContent|string>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var targetSelected = soy.asserts.assertType(opt_data.targetSelected == null || (goog.isString(opt_data.targetSelected) || opt_data.targetSelected instanceof goog.soy.data.SanitizedContent), 'targetSelected', opt_data.targetSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var hasRequiredInputs = soy.asserts.assertType(opt_data.hasRequiredInputs == null || (goog.isBoolean(opt_data.hasRequiredInputs) || opt_data.hasRequiredInputs === 1 || opt_data.hasRequiredInputs === 0), 'hasRequiredInputs', opt_data.hasRequiredInputs, 'boolean|null|undefined');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('action-index', index);
      incrementalDom.attr('class', 'action form-builder-rule-action-container-' + index + ' timeline-item');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'panel panel-default');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'panel-body');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group-autofit');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group-item form-group-item-label form-group-item-shrink');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpen('h4');
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'text-truncate-inline');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'text-truncate');
  incrementalDom.elementOpenEnd();
  soyIdom.print(strings.do);
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('h4');
  incrementalDom.elementClose('div');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('action-type-index', index);
      incrementalDom.attr('class', 'action-type form-group-item');
  incrementalDom.elementOpenEnd();
  soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleActionSelection}, options: actionTypes, placeholder: strings.chooseAnOption, ref: 'action' + index, spritemap: spritemap, value: [actionSelected]}, opt_ijData);
  incrementalDom.elementClose('div');
  var showTargetDefault__soy4904 = actionSelected && (actionSelected == 'show' || actionSelected == 'enable' || actionSelected == 'require');
  var showTargetAutofill__soy4906 = actionSelected && actionSelected == 'auto-fill';
  var showTargetCalculator__soy4908 = actionSelected && actionSelected == 'calculate';
  var showLabel__soy4910 = showTargetAutofill__soy4906 || showTargetCalculator__soy4908;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group-item form-group-item-label form-group-item-shrink ' + (!showLabel__soy4910 ? 'hide' : '') + ' target-message-' + index);
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpen('h4');
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'text-truncate-inline');
  incrementalDom.elementOpenEnd();
  if (showTargetAutofill__soy4906) {
    incrementalDom.elementOpenStart('span');
        incrementalDom.attr('class', 'text-truncate');
    incrementalDom.elementOpenEnd();
    soyIdom.print(strings.fromDataProvider);
    incrementalDom.elementClose('span');
  } else if (showTargetCalculator__soy4908) {
    incrementalDom.elementOpenStart('span');
        incrementalDom.attr('class', 'text-truncate');
    incrementalDom.elementOpenEnd();
    soyIdom.print(strings.showTheResult);
    incrementalDom.elementClose('span');
  }
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('h4');
  incrementalDom.elementClose('div');
  if (showTargetDefault__soy4904 || showTargetAutofill__soy4906 || showTargetCalculator__soy4908) {
    var options__soy4931 = showTargetAutofill__soy4906 ? dataProvider : showTargetDefault__soy4904 ? fieldOptions : showTargetCalculator__soy4908 ? calculatorResultOptions : [];
    var ref__soy4933 = showTargetCalculator__soy4908 ? 'calculatorResult' : 'actionTarget';
    $renderActionTarget({_handleTargetSelection: _handleTargetSelection, index: index, options: options__soy4931, placeholder: strings.chooseAnOption, ref: ref__soy4933 + index, spritemap: spritemap, value: targetSelected}, opt_ijData);
  }
  incrementalDom.elementClose('div');
  if (showTargetCalculator__soy4908 && targetSelected) {
    $templateAlias3({events: {editExpression: _handleEditExpression}, expression: actionExpression, index: index, calculatorOptions: calculatorOptions, deletedFields: deletedFields, options: calculatorFields, optionsRepeatable: [], resultSelected: targetSelected, spritemap: spritemap, strings: strings}, opt_ijData);
  }
  if (showTargetAutofill__soy4906 && targetSelected) {
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'action-rule-data-provider row');
    incrementalDom.elementOpenEnd();
    $renderAutofill({_handleDataProviderInputEdited: _handleDataProviderInputEdited, _handleDataProviderOutputEdited: _handleDataProviderOutputEdited, actionIndex: index, actionInputs: actionInputs, actionOutputs: actionOutputs, chooseAnOption: strings.chooseAnOption, dataProviderError: strings.dataProviderError, dataProviderParameterInput: strings.dataProviderParameterInput, dataProviderParameterInputDescription: strings.dataProviderParameterInputDescription, dataProviderParameterOutput: strings.dataProviderParameterOutput, dataProviderParameterOutputDescription: strings.dataProviderParameterOutputDescription, hasRequiredInputs: hasRequiredInputs, requiredField: strings.requiredField, spritemap: spritemap}, opt_ijData);
    incrementalDom.elementClose('div');
  }
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'timeline-increment');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'timeline-icon');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'container-trash');
  incrementalDom.elementOpenEnd();
  $templateAlias1({events: {click: _handleDeleteAction}, data: {index: index}, icon: 'trash', monospaced: true, ref: 'trashButtonAction' + index, size: 'sm', spritemap: spritemap, style: 'secondary'}, opt_ijData);
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('li');
};
exports.renderAction = $renderAction;
/**
 * @typedef {{
 *  actionTypes: !Array<{name: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  calculatorFields: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  calculatorOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), tooltip: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  calculatorResultOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  strings: {addField: (!goog.soy.data.SanitizedContent|string), chooseAnOption: (!goog.soy.data.SanitizedContent|string), dataProviderError: (!goog.soy.data.SanitizedContent|string), dataProviderParameterInput: (!goog.soy.data.SanitizedContent|string), dataProviderParameterInputDescription: (!goog.soy.data.SanitizedContent|string), dataProviderParameterOutput: (!goog.soy.data.SanitizedContent|string), dataProviderParameterOutputDescription: (!goog.soy.data.SanitizedContent|string), do: (!goog.soy.data.SanitizedContent|string), fromDataProvider: (!goog.soy.data.SanitizedContent|string), requiredField: (!goog.soy.data.SanitizedContent|string), showTheResult: (!goog.soy.data.SanitizedContent|string), theExpressionWillBeDisplayedHere: (!goog.soy.data.SanitizedContent|string),},
 *  _handleActionSelection: (*|null|undefined),
 *  _handleEditExpression: (*|null|undefined),
 *  _handleDataProviderInputEdited: (*|null|undefined),
 *  _handleDataProviderOutputEdited: (*|null|undefined),
 *  _handleDeleteAction: (*|null|undefined),
 *  _handleTargetSelection: (*|null|undefined),
 *  actionExpression: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  actionInputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  actionOutputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  actionSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  dataProvider: (!Array<{id: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  deletedFields: (!Array<!goog.soy.data.SanitizedContent|string>|null|undefined),
 *  targetSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  hasRequiredInputs: (boolean|null|undefined),
 * }}
 */
$renderAction.Params;
if (goog.DEBUG) {
  $renderAction.soyTemplateName = 'RuleEditor.renderAction';
}


/**
 * @param {$renderActionTarget.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderActionTarget = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {*} */
  var options = opt_data.options;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var ref = soy.asserts.assertType(goog.isString(opt_data.ref) || opt_data.ref instanceof goog.soy.data.SanitizedContent, 'ref', opt_data.ref, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleTargetSelection = opt_data._handleTargetSelection;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var placeholder = soy.asserts.assertType(opt_data.placeholder == null || (goog.isString(opt_data.placeholder) || opt_data.placeholder instanceof goog.soy.data.SanitizedContent), 'placeholder', opt_data.placeholder, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group-item target-action');
      incrementalDom.attr('target-action-index', index);
  incrementalDom.elementOpenEnd();
  soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleTargetSelection}, options: options, placeholder: placeholder, ref: ref, spritemap: spritemap, value: [value]}, opt_ijData);
  incrementalDom.elementClose('div');
};
exports.renderActionTarget = $renderActionTarget;
/**
 * @typedef {{
 *  index: number,
 *  options: *,
 *  ref: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleTargetSelection: (*|null|undefined),
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
$renderActionTarget.Params;
if (goog.DEBUG) {
  $renderActionTarget.soyTemplateName = 'RuleEditor.renderActionTarget';
}


/**
 * @param {$renderCondition.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderCondition = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {boolean} */
  var binaryOperator = soy.asserts.assertType(goog.isBoolean(opt_data.binaryOperator) || opt_data.binaryOperator === 1 || opt_data.binaryOperator === 0, 'binaryOperator', opt_data.binaryOperator, 'boolean');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>} */
  var fieldOptions = soy.asserts.assertType(goog.isArray(opt_data.fieldOptions), 'fieldOptions', opt_data.fieldOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {boolean} */
  var readOnly = soy.asserts.assertType(goog.isBoolean(opt_data.readOnly) || opt_data.readOnly === 1 || opt_data.readOnly === 0, 'readOnly', opt_data.readOnly, 'boolean');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {{chooseAnOption: (!goog.soy.data.SanitizedContent|string), if: (!goog.soy.data.SanitizedContent|string), otherField: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}} */
  var strings = soy.asserts.assertType(goog.isObject(opt_data.strings), 'strings', opt_data.strings, '{chooseAnOption: (!goog.soy.data.SanitizedContent|string), if: (!goog.soy.data.SanitizedContent|string), otherField: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}');
  /** @type {*|null|undefined} */
  var _handleDeleteCondition = opt_data._handleDeleteCondition;
  /** @type {*|null|undefined} */
  var _handleFirstOperandFieldEdited = opt_data._handleFirstOperandFieldEdited;
  /** @type {*|null|undefined} */
  var _handleOperatorEdited = opt_data._handleOperatorEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandFieldEdited = opt_data._handleSecondOperandFieldEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandTypeEdited = opt_data._handleSecondOperandTypeEdited;
  /** @type {*|null|undefined} */
  var _handleSecondOperandValueEdited = opt_data._handleSecondOperandValueEdited;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var firstOperandType = soy.asserts.assertType(opt_data.firstOperandType == null || (goog.isString(opt_data.firstOperandType) || opt_data.firstOperandType instanceof goog.soy.data.SanitizedContent), 'firstOperandType', opt_data.firstOperandType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var firstOperandValueSelected = soy.asserts.assertType(opt_data.firstOperandValueSelected == null || (goog.isString(opt_data.firstOperandValueSelected) || opt_data.firstOperandValueSelected instanceof goog.soy.data.SanitizedContent), 'firstOperandValueSelected', opt_data.firstOperandValueSelected, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var firstOperandOptions = soy.asserts.assertType(opt_data.firstOperandOptions == null || goog.isArray(opt_data.firstOperandOptions), 'firstOperandOptions', opt_data.firstOperandOptions, '!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {*|null|undefined} */
  var fixedOptions = opt_data.fixedOptions;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var logicalOperator = soy.asserts.assertType(opt_data.logicalOperator == null || (goog.isString(opt_data.logicalOperator) || opt_data.logicalOperator instanceof goog.soy.data.SanitizedContent), 'logicalOperator', opt_data.logicalOperator, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var operators = soy.asserts.assertType(opt_data.operators == null || goog.isArray(opt_data.operators), 'operators', opt_data.operators, '!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var roles = soy.asserts.assertType(opt_data.roles == null || goog.isArray(opt_data.roles), 'roles', opt_data.roles, '!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var secondOperandFieldName = soy.asserts.assertType(opt_data.secondOperandFieldName == null || (goog.isString(opt_data.secondOperandFieldName) || opt_data.secondOperandFieldName instanceof goog.soy.data.SanitizedContent), 'secondOperandFieldName', opt_data.secondOperandFieldName, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var secondOperandType = soy.asserts.assertType(opt_data.secondOperandType == null || (goog.isString(opt_data.secondOperandType) || opt_data.secondOperandType instanceof goog.soy.data.SanitizedContent), 'secondOperandType', opt_data.secondOperandType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var secondOperandDataType = soy.asserts.assertType(opt_data.secondOperandDataType == null || (goog.isString(opt_data.secondOperandDataType) || opt_data.secondOperandDataType instanceof goog.soy.data.SanitizedContent), 'secondOperandDataType', opt_data.secondOperandDataType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {*|null|undefined} */
  var secondOperandValue = opt_data.secondOperandValue;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var selectedOperator = soy.asserts.assertType(opt_data.selectedOperator == null || (goog.isString(opt_data.selectedOperator) || opt_data.selectedOperator instanceof goog.soy.data.SanitizedContent), 'selectedOperator', opt_data.selectedOperator, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'form-builder-rule-condition-container timeline-item');
      incrementalDom.attr('condition-index', index);
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'panel panel-default');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'flex-container panel-body');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group-autofit');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-group-item form-group-item-label form-group-item-shrink');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpen('h4');
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'text-truncate-inline');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'text-truncate');
  incrementalDom.elementOpenEnd();
  soyIdom.print(strings.if);
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('h4');
  incrementalDom.elementClose('div');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'condition-if form-group-item');
      incrementalDom.attr('condition-if-index', index);
  incrementalDom.elementOpenEnd();
  soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleFirstOperandFieldEdited}, fixedOptions: fixedOptions, options: fieldOptions, placeholder: strings.chooseAnOption, ref: 'firstOperand' + index, spritemap: spritemap, value: [firstOperandValueSelected]}, opt_ijData);
  incrementalDom.elementClose('div');
  $renderConditionOperators({_handleOperatorEdited: _handleOperatorEdited, firstOperandType: firstOperandType, index: index, operators: operators, selectedOperator: selectedOperator, spritemap: spritemap, strings: strings}, opt_ijData);
  if (firstOperandType && selectedOperator) {
    if (firstOperandType != 'user') {
      if (binaryOperator) {
        $renderConditionSecondOperandTypeSelector({_handleSecondOperandTypeEdited: _handleSecondOperandTypeEdited, index: index, secondOperandType: secondOperandType, selectedOperator: selectedOperator, spritemap: spritemap, strings: strings}, opt_ijData);
        var fieldHasOptions__soy5079 = secondOperandDataType == 'select' || secondOperandDataType == 'checkbox_multiple' || secondOperandDataType == 'radio';
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'condition-type-value form-group-item');
            incrementalDom.attr('condition-type-value-index', index);
        incrementalDom.elementOpenEnd();
        if (fieldHasOptions__soy5079) {
          soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleSecondOperandValueEdited}, name: secondOperandFieldName, options: firstOperandOptions, placeholder: strings.chooseAnOption, readOnly: readOnly, ref: 'secondOperand' + index, spritemap: spritemap, value: [secondOperandValue]}, opt_ijData);
        } else if (secondOperandType == 'field') {
          soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleSecondOperandValueEdited}, options: fieldOptions, placeholder: strings.chooseAnOption, ref: 'secondOperand' + index, spritemap: spritemap, value: [secondOperandValue]}, opt_ijData);
        } else {
          var fieldType__soy5108 = secondOperandType == 'string' ? 'text' : secondOperandType;
          soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), fieldType__soy5108, false)({events: {fieldEdited: _handleSecondOperandValueEdited}, name: secondOperandFieldName, readOnly: readOnly, ref: 'secondOperand' + index, spritemap: spritemap, value: secondOperandValue}, opt_ijData);
        }
        incrementalDom.elementClose('div');
      }
    } else {
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'condition-type-value form-group-item');
          incrementalDom.attr('condition-type-value-index', index);
      incrementalDom.elementOpenEnd();
      $renderConditionUserRolesSelector({_handleSecondOperandFieldEdited: _handleSecondOperandFieldEdited, index: index, selectedOperator: selectedOperator, roles: roles, secondOperandValue: secondOperandValue, spritemap: spritemap, strings: strings}, opt_ijData);
      incrementalDom.elementClose('div');
    }
  }
  incrementalDom.elementClose('div');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'timeline-increment');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'timeline-icon');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'operator panel panel-default panel-inline');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'panel-body text-uppercase');
  incrementalDom.elementOpenEnd();
  soyIdom.print(logicalOperator);
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'container-trash');
  incrementalDom.elementOpenEnd();
  $templateAlias1({events: {click: _handleDeleteCondition}, data: {index: index}, icon: 'trash', monospaced: true, ref: 'trashButton' + index, size: 'sm', spritemap: spritemap, style: 'secondary'}, opt_ijData);
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('li');
};
exports.renderCondition = $renderCondition;
/**
 * @typedef {{
 *  binaryOperator: boolean,
 *  fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>,
 *  index: number,
 *  readOnly: boolean,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  strings: {chooseAnOption: (!goog.soy.data.SanitizedContent|string), if: (!goog.soy.data.SanitizedContent|string), otherField: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),},
 *  _handleDeleteCondition: (*|null|undefined),
 *  _handleFirstOperandFieldEdited: (*|null|undefined),
 *  _handleOperatorEdited: (*|null|undefined),
 *  _handleSecondOperandFieldEdited: (*|null|undefined),
 *  _handleSecondOperandTypeEdited: (*|null|undefined),
 *  _handleSecondOperandValueEdited: (*|null|undefined),
 *  firstOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  firstOperandValueSelected: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  firstOperandOptions: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  fixedOptions: (*|null|undefined),
 *  logicalOperator: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operators: (!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  roles: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  secondOperandFieldName: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  secondOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  secondOperandDataType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  secondOperandValue: (*|null|undefined),
 *  selectedOperator: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
$renderCondition.Params;
if (goog.DEBUG) {
  $renderCondition.soyTemplateName = 'RuleEditor.renderCondition';
}


/**
 * @param {$renderConditionOperators.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderConditionOperators = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {{chooseAnOption: (!goog.soy.data.SanitizedContent|string),}} */
  var strings = soy.asserts.assertType(goog.isObject(opt_data.strings), 'strings', opt_data.strings, '{chooseAnOption: (!goog.soy.data.SanitizedContent|string),}');
  /** @type {*|null|undefined} */
  var _handleOperatorEdited = opt_data._handleOperatorEdited;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var firstOperandType = soy.asserts.assertType(opt_data.firstOperandType == null || (goog.isString(opt_data.firstOperandType) || opt_data.firstOperandType instanceof goog.soy.data.SanitizedContent), 'firstOperandType', opt_data.firstOperandType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var operators = soy.asserts.assertType(opt_data.operators == null || goog.isArray(opt_data.operators), 'operators', opt_data.operators, '!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var selectedOperator = soy.asserts.assertType(opt_data.selectedOperator == null || (goog.isString(opt_data.selectedOperator) || opt_data.selectedOperator instanceof goog.soy.data.SanitizedContent), 'selectedOperator', opt_data.selectedOperator, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var readOnly__soy5156 = firstOperandType ? false : true;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'condition-operator form-group-item');
      incrementalDom.attr('condition-operator-index', index);
  incrementalDom.elementOpenEnd();
  soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleOperatorEdited}, options: operators, placeholder: strings.chooseAnOption, readOnly: readOnly__soy5156, ref: 'conditionOperator' + index, spritemap: spritemap, value: [selectedOperator]}, opt_ijData);
  incrementalDom.elementClose('div');
};
exports.renderConditionOperators = $renderConditionOperators;
/**
 * @typedef {{
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  strings: {chooseAnOption: (!goog.soy.data.SanitizedContent|string),},
 *  _handleOperatorEdited: (*|null|undefined),
 *  firstOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operators: (!Array<{name: (!goog.soy.data.SanitizedContent|string), parameterTypes: !Array<!goog.soy.data.SanitizedContent|string>, returnType: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  selectedOperator: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
$renderConditionOperators.Params;
if (goog.DEBUG) {
  $renderConditionOperators.soyTemplateName = 'RuleEditor.renderConditionOperators';
}


/**
 * @param {$renderConditionSecondOperandTypeSelector.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderConditionSecondOperandTypeSelector = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {{chooseAnOption: (!goog.soy.data.SanitizedContent|string), otherField: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}} */
  var strings = soy.asserts.assertType(goog.isObject(opt_data.strings), 'strings', opt_data.strings, '{chooseAnOption: (!goog.soy.data.SanitizedContent|string), otherField: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}');
  /** @type {*|null|undefined} */
  var _handleSecondOperandTypeEdited = opt_data._handleSecondOperandTypeEdited;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var secondOperandType = soy.asserts.assertType(opt_data.secondOperandType == null || (goog.isString(opt_data.secondOperandType) || opt_data.secondOperandType instanceof goog.soy.data.SanitizedContent), 'secondOperandType', opt_data.secondOperandType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {*|null|undefined} */
  var selectedOperator = opt_data.selectedOperator;
  var options__soy5177 = [{label: strings.value, value: 'value'}, {label: strings.otherField, value: 'field'}];
  var value__soy5179 = secondOperandType == 'field' ? 'field' : secondOperandType ? 'value' : '';
  var visible__soy5181 = selectedOperator && secondOperandType != 'none' ? true : false;
  if (visible__soy5181) {
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'condition-type form-group-item');
        incrementalDom.attr('condition-type-index', index);
    incrementalDom.elementOpenEnd();
    soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleSecondOperandTypeEdited}, options: options__soy5177, placeholder: strings.chooseAnOption, ref: 'secondOperandTypeSelector' + index, spritemap: spritemap, value: [value__soy5179], visible: visible__soy5181}, opt_ijData);
    incrementalDom.elementClose('div');
  }
};
exports.renderConditionSecondOperandTypeSelector = $renderConditionSecondOperandTypeSelector;
/**
 * @typedef {{
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  strings: {chooseAnOption: (!goog.soy.data.SanitizedContent|string), otherField: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),},
 *  _handleSecondOperandTypeEdited: (*|null|undefined),
 *  secondOperandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  selectedOperator: (*|null|undefined),
 * }}
 */
$renderConditionSecondOperandTypeSelector.Params;
if (goog.DEBUG) {
  $renderConditionSecondOperandTypeSelector.soyTemplateName = 'RuleEditor.renderConditionSecondOperandTypeSelector';
}


/**
 * @param {$renderConditionUserRolesSelector.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderConditionUserRolesSelector = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var index = soy.asserts.assertType(goog.isNumber(opt_data.index), 'index', opt_data.index, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {{chooseAnOption: (!goog.soy.data.SanitizedContent|string),}} */
  var strings = soy.asserts.assertType(goog.isObject(opt_data.strings), 'strings', opt_data.strings, '{chooseAnOption: (!goog.soy.data.SanitizedContent|string),}');
  /** @type {*|null|undefined} */
  var _handleSecondOperandFieldEdited = opt_data._handleSecondOperandFieldEdited;
  /** @type {!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var roles = soy.asserts.assertType(opt_data.roles == null || goog.isArray(opt_data.roles), 'roles', opt_data.roles, '!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {*|null|undefined} */
  var selectedOperator = opt_data.selectedOperator;
  /** @type {*|null|undefined} */
  var secondOperandValue = opt_data.secondOperandValue;
  var visible__soy5207 = selectedOperator ? true : false;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'condition-user-role form-group-item ' + (!visible__soy5207 ? 'hide' : ''));
      incrementalDom.attr('condition-user-role-index', index);
  incrementalDom.elementOpenEnd();
  soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleSecondOperandFieldEdited}, options: roles, placeholder: strings.chooseAnOption, spritemap: spritemap, value: [secondOperandValue]}, opt_ijData);
  incrementalDom.elementClose('div');
};
exports.renderConditionUserRolesSelector = $renderConditionUserRolesSelector;
/**
 * @typedef {{
 *  index: number,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  strings: {chooseAnOption: (!goog.soy.data.SanitizedContent|string),},
 *  _handleSecondOperandFieldEdited: (*|null|undefined),
 *  roles: (!Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  selectedOperator: (*|null|undefined),
 *  secondOperandValue: (*|null|undefined),
 * }}
 */
$renderConditionUserRolesSelector.Params;
if (goog.DEBUG) {
  $renderConditionUserRolesSelector.soyTemplateName = 'RuleEditor.renderConditionUserRolesSelector';
}


/**
 * @param {$renderConditionLogicalOperatorDropdown.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderConditionLogicalOperatorDropdown = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {?} */
  var strings = opt_data.strings;
  /** @type {*} */
  var _handleLogicalOperationChange = opt_data._handleLogicalOperationChange;
  /** @type {boolean|null|undefined} */
  var enableLogicalOperator = soy.asserts.assertType(opt_data.enableLogicalOperator == null || (goog.isBoolean(opt_data.enableLogicalOperator) || opt_data.enableLogicalOperator === 1 || opt_data.enableLogicalOperator === 0), 'enableLogicalOperator', opt_data.enableLogicalOperator, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var logicalOperator = soy.asserts.assertType(opt_data.logicalOperator == null || (goog.isString(opt_data.logicalOperator) || opt_data.logicalOperator instanceof goog.soy.data.SanitizedContent), 'logicalOperator', opt_data.logicalOperator, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var attributes__soy5233 = function() {
    incrementalDom.attr('class', 'btn btn-default dropdown-toggle dropdown-toggle-operator text-uppercase');
    incrementalDom.attr('data-toggle', 'dropdown');
    incrementalDom.attr('ref', 'logicalOperatorDropDownButton');
    incrementalDom.attr('type', 'button');
    if (!enableLogicalOperator) {
      incrementalDom.attr('disabled', '');
    }
  };
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'btn-group dropdown');
      incrementalDom.attr('style', 'block');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('button');
      attributes__soy5233();
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'dropdown-toggle-selected-value');
  incrementalDom.elementOpenEnd();
  soyIdom.print(logicalOperator);
  incrementalDom.elementClose('span');
  incrementalDom.text(' ');
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'caret');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('button');
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'dropdown-menu');
      incrementalDom.attr('data-onclick', _handleLogicalOperationChange);
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'logic-operator text-uppercase');
      incrementalDom.attr('data-logical-operator-value', 'or');
      incrementalDom.attr('ref', 'globalOrOperator');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpen('a');
  soyIdom.print(strings['or']);
  incrementalDom.elementClose('a');
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'divider');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementClose('li');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'logic-operator text-uppercase');
      incrementalDom.attr('data-logical-operator-value', 'and');
      incrementalDom.attr('ref', 'globalAndOperator');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpen('a');
  soyIdom.print(strings['and']);
  incrementalDom.elementClose('a');
  incrementalDom.elementClose('li');
  incrementalDom.elementClose('ul');
  incrementalDom.elementClose('div');
};
exports.renderConditionLogicalOperatorDropdown = $renderConditionLogicalOperatorDropdown;
/**
 * @typedef {{
 *  strings: ?,
 *  _handleLogicalOperationChange: *,
 *  enableLogicalOperator: (boolean|null|undefined),
 *  logicalOperator: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
$renderConditionLogicalOperatorDropdown.Params;
if (goog.DEBUG) {
  $renderConditionLogicalOperatorDropdown.soyTemplateName = 'RuleEditor.renderConditionLogicalOperatorDropdown';
}


/**
 * @param {$renderHeader.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderHeader = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var title = soy.asserts.assertType(goog.isString(opt_data.title) || opt_data.title instanceof goog.soy.data.SanitizedContent, 'title', opt_data.title, '!goog.soy.data.SanitizedContent|string');
  /** @type {function()|null|undefined} */
  var extraContent = soy.asserts.assertType(opt_data.extraContent == null || goog.isFunction(opt_data.extraContent), 'extraContent', opt_data.extraContent, 'function()|null|undefined');
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', 'timeline-item');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'panel panel-default');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'flex-container panel-body');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'h4 panel-title');
  incrementalDom.elementOpenEnd();
  soyIdom.print(title);
  incrementalDom.elementClose('div');
  if (extraContent) {
    extraContent();
  }
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'timeline-increment');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'timeline-icon');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('li');
};
exports.renderHeader = $renderHeader;
/**
 * @typedef {{
 *  title: (!goog.soy.data.SanitizedContent|string),
 *  extraContent: (function()|null|undefined),
 * }}
 */
$renderHeader.Params;
if (goog.DEBUG) {
  $renderHeader.soyTemplateName = 'RuleEditor.renderHeader';
}


/**
 * @param {$renderAddItemButton.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderAddItemButton = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {*|null|undefined} */
  var _handleItemAdded = opt_data._handleItemAdded;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var type = soy.asserts.assertType(opt_data.type == null || (goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent), 'type', opt_data.type, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'addbutton-timeline-item');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'add-item timeline-increment-icon');
  incrementalDom.elementOpenEnd();
  $templateAlias1({events: {click: _handleItemAdded}, elementClasses: 'rounded-circle', icon: 'plus', monospaced: true, ref: type, size: 'sm', spritemap: spritemap}, opt_ijData);
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
};
exports.renderAddItemButton = $renderAddItemButton;
/**
 * @typedef {{
 *  _handleItemAdded: (*|null|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
$renderAddItemButton.Params;
if (goog.DEBUG) {
  $renderAddItemButton.soyTemplateName = 'RuleEditor.renderAddItemButton';
}


/**
 * @param {$renderAutofill.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $renderAutofill = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var actionIndex = soy.asserts.assertType(goog.isNumber(opt_data.actionIndex), 'actionIndex', opt_data.actionIndex, 'number');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var chooseAnOption = soy.asserts.assertType(goog.isString(opt_data.chooseAnOption) || opt_data.chooseAnOption instanceof goog.soy.data.SanitizedContent, 'chooseAnOption', opt_data.chooseAnOption, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var dataProviderError = soy.asserts.assertType(goog.isString(opt_data.dataProviderError) || opt_data.dataProviderError instanceof goog.soy.data.SanitizedContent, 'dataProviderError', opt_data.dataProviderError, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var dataProviderParameterInput = soy.asserts.assertType(goog.isString(opt_data.dataProviderParameterInput) || opt_data.dataProviderParameterInput instanceof goog.soy.data.SanitizedContent, 'dataProviderParameterInput', opt_data.dataProviderParameterInput, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var dataProviderParameterInputDescription = soy.asserts.assertType(goog.isString(opt_data.dataProviderParameterInputDescription) || opt_data.dataProviderParameterInputDescription instanceof goog.soy.data.SanitizedContent, 'dataProviderParameterInputDescription', opt_data.dataProviderParameterInputDescription, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var dataProviderParameterOutput = soy.asserts.assertType(goog.isString(opt_data.dataProviderParameterOutput) || opt_data.dataProviderParameterOutput instanceof goog.soy.data.SanitizedContent, 'dataProviderParameterOutput', opt_data.dataProviderParameterOutput, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var dataProviderParameterOutputDescription = soy.asserts.assertType(goog.isString(opt_data.dataProviderParameterOutputDescription) || opt_data.dataProviderParameterOutputDescription instanceof goog.soy.data.SanitizedContent, 'dataProviderParameterOutputDescription', opt_data.dataProviderParameterOutputDescription, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var requiredField = soy.asserts.assertType(goog.isString(opt_data.requiredField) || opt_data.requiredField instanceof goog.soy.data.SanitizedContent, 'requiredField', opt_data.requiredField, '!goog.soy.data.SanitizedContent|string');
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleDataProviderInputEdited = opt_data._handleDataProviderInputEdited;
  /** @type {*|null|undefined} */
  var _handleDataProviderOutputEdited = opt_data._handleDataProviderOutputEdited;
  /** @type {!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var actionInputs = soy.asserts.assertType(opt_data.actionInputs == null || goog.isArray(opt_data.actionInputs), 'actionInputs', opt_data.actionInputs, '!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined} */
  var actionOutputs = soy.asserts.assertType(opt_data.actionOutputs == null || goog.isArray(opt_data.actionOutputs), 'actionOutputs', opt_data.actionOutputs, '!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined');
  /** @type {boolean|null|undefined} */
  var hasRequiredInputs = soy.asserts.assertType(opt_data.hasRequiredInputs == null || (goog.isBoolean(opt_data.hasRequiredInputs) || opt_data.hasRequiredInputs === 1 || opt_data.hasRequiredInputs === 0), 'hasRequiredInputs', opt_data.hasRequiredInputs, 'boolean|null|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'col-md-12 ddm-data-provider-container no-padding');
  incrementalDom.elementOpenEnd();
  if (!actionOutputs || (actionOutputs.length) == 0) {
    $templateAlias4({message: dataProviderError, spritemap: spritemap, style: 'danger', title: 'Error:'}, opt_ijData);
  }
  if (actionInputs && (actionInputs.length) > 0 && actionOutputs && (actionOutputs.length) > 0) {
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'data-provider-parameter-input-container');
    incrementalDom.elementOpenEnd();
    if (hasRequiredInputs) {
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'data-provider-label-container');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementOpen('label');
      incrementalDom.elementOpenStart('p');
          incrementalDom.attr('class', 'data-provider-parameter-input-required-field');
      incrementalDom.elementOpenEnd();
      soyIdom.print(requiredField);
      incrementalDom.elementClose('p');
      incrementalDom.text(' ');
      incrementalDom.elementOpenStart('span');
          incrementalDom.attr('class', 'reference-mark');
      incrementalDom.elementOpenEnd();
      $templateAlias5({spritemap: spritemap, symbol: 'asterisk'}, opt_ijData);
      incrementalDom.elementClose('span');
      incrementalDom.elementClose('label');
      incrementalDom.elementClose('div');
    }
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'data-provider-label-container');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('p');
        incrementalDom.attr('class', 'data-provider-parameter-input');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('b');
    soyIdom.print(dataProviderParameterInput);
    incrementalDom.elementClose('b');
    incrementalDom.elementClose('p');
    incrementalDom.elementOpenStart('p');
        incrementalDom.attr('class', 'data-provider-parameter-input-description');
    incrementalDom.elementOpenEnd();
    soyIdom.print(dataProviderParameterInputDescription);
    incrementalDom.elementClose('p');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'data-provider-parameter-input-list row');
    incrementalDom.elementOpenEnd();
    var input5317List = actionInputs;
    var input5317ListLen = input5317List.length;
    for (var input5317Index = 0; input5317Index < input5317ListLen; input5317Index++) {
      var input5317Data = input5317List[input5317Index];
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-md-3 container-input-label');
      incrementalDom.elementOpenEnd();
      soyIdom.print(input5317Data.label);
      incrementalDom.elementOpen('label');
      if (input5317Data.required) {
        incrementalDom.elementOpenStart('span');
            incrementalDom.attr('class', 'input-required reference-mark');
        incrementalDom.elementOpenEnd();
        $templateAlias5({spritemap: spritemap, symbol: 'asterisk'}, opt_ijData);
        incrementalDom.elementClose('span');
      }
      incrementalDom.elementClose('label');
      incrementalDom.elementClose('div');
      var index__soy5330 = input5317Index;
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-md-9 container-input-field container-input-field-' + index__soy5330);
          incrementalDom.attr('container-input-field-index', index__soy5330);
      incrementalDom.elementOpenEnd();
      soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleDataProviderInputEdited}, options: input5317Data.fieldOptions, placeholder: chooseAnOption, ref: 'action' + actionIndex + 'dataProviderInput' + index__soy5330, spritemap: spritemap, value: [input5317Data.value]}, opt_ijData);
      incrementalDom.elementClose('div');
    }
    incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  }
  if (actionOutputs && (actionOutputs.length) > 0) {
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'data-provider-parameter-output-container');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'data-provider-label-container');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('p');
        incrementalDom.attr('class', 'data-provider-parameter-output');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpen('b');
    soyIdom.print(dataProviderParameterOutput);
    incrementalDom.elementClose('b');
    incrementalDom.elementClose('p');
    incrementalDom.elementOpenStart('p');
        incrementalDom.attr('class', 'data-provider-parameter-output-description');
    incrementalDom.elementOpenEnd();
    soyIdom.print(dataProviderParameterOutputDescription);
    incrementalDom.elementClose('p');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'data-provider-parameter-output-list row');
    incrementalDom.elementOpenEnd();
    var output5353List = actionOutputs;
    var output5353ListLen = output5353List.length;
    for (var output5353Index = 0; output5353Index < output5353ListLen; output5353Index++) {
      var output5353Data = output5353List[output5353Index];
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-md-3 container-output-label');
      incrementalDom.elementOpenEnd();
      soyIdom.print(output5353Data.name);
      incrementalDom.elementClose('div');
      var index__soy5358 = output5353Index;
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'col-md-9 container-output-field container-output-field-' + index__soy5358);
          incrementalDom.attr('container-output-field-index', index__soy5358);
      incrementalDom.elementOpenEnd();
      soy.$$getDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'select', false)({events: {fieldEdited: _handleDataProviderOutputEdited}, options: output5353Data.fieldOptions, placeholder: chooseAnOption, ref: 'action' + actionIndex + 'dataProviderOutput' + index__soy5358, spritemap: spritemap, value: [output5353Data.value]}, opt_ijData);
      incrementalDom.elementClose('div');
    }
    incrementalDom.elementClose('div');
    incrementalDom.elementClose('div');
  }
  incrementalDom.elementClose('div');
};
exports.renderAutofill = $renderAutofill;
/**
 * @typedef {{
 *  actionIndex: number,
 *  chooseAnOption: (!goog.soy.data.SanitizedContent|string),
 *  dataProviderError: (!goog.soy.data.SanitizedContent|string),
 *  dataProviderParameterInput: (!goog.soy.data.SanitizedContent|string),
 *  dataProviderParameterInputDescription: (!goog.soy.data.SanitizedContent|string),
 *  dataProviderParameterOutput: (!goog.soy.data.SanitizedContent|string),
 *  dataProviderParameterOutputDescription: (!goog.soy.data.SanitizedContent|string),
 *  requiredField: (!goog.soy.data.SanitizedContent|string),
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleDataProviderInputEdited: (*|null|undefined),
 *  _handleDataProviderOutputEdited: (*|null|undefined),
 *  actionInputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), required: boolean, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  actionOutputs: (!Array<{fieldOptions: !Array<{label: (!goog.soy.data.SanitizedContent|string), name: (!goog.soy.data.SanitizedContent|string), options: !Array<{label: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, name: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>|null|undefined),
 *  hasRequiredInputs: (boolean|null|undefined),
 * }}
 */
$renderAutofill.Params;
if (goog.DEBUG) {
  $renderAutofill.soyTemplateName = 'RuleEditor.renderAutofill';
}

exports.render.params = ["actions","actionTypes","calculatorOptions","calculatorResultOptions","conditions","dataProvider","deletedFields","fieldOptions","fixedOptions","invalidRule","logicalOperator","readOnly","strings","spritemap","_handleActionSelection","_handleActionAdded","_handleCancelRule","_handleConditionAdded","_handleDataProviderInputEdited","_handleDataProviderOutputEdited","_handleDeleteAction","_handleDeleteCondition","_handleEditExpression","_handleFirstOperandFieldEdited","_handleLogicalOperationChange","_handleOperatorEdited","_handleRuleAdded","_handleSecondOperandFieldEdited","_handleSecondOperandTypeEdited","_handleSecondOperandValueEdited","_handleTargetSelection","_handleModalButtonClicked","roles"];
exports.render.types = {"actions":"list<[\n\t\t\taction: string,\n\t\t\tcalculatorFields: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tname: string,\n\t\t\t\toptions: list<[\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tvalue: string\n\t\t\t\t]>,\n\t\t\t\ttype: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\texpression: string,\n\t\t\thasRequiredInputs: bool,\n\t\t\tinputs: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tname: string,\n\t\t\t\trequired: bool,\n\t\t\t\ttype: string,\n\t\t\t\tvalue: string,\n\t\t\t\tfieldOptions: list<[\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tname: string,\n\t\t\t\t\toptions: list<[\n\t\t\t\t\t\tlabel: string,\n\t\t\t\t\t\tvalue: string\n\t\t\t\t\t]>,\n\t\t\t\t\ttype: string,\n\t\t\t\t\tvalue: string\n\t\t\t\t]>\n\t\t\t]>,\n\t\t\tlabel: string,\n\t\t\toutputs: list<[\n\t\t\t\tname: string,\n\t\t\t\ttype: string,\n\t\t\t\tvalue: string,\n\t\t\t\tfieldOptions: list<[\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tname: string,\n\t\t\t\t\toptions: list<[\n\t\t\t\t\t\tlabel: string,\n\t\t\t\t\t\tvalue: string\n\t\t\t\t\t]>,\n\t\t\t\t\ttype: string,\n\t\t\t\t\tvalue: string\n\t\t\t\t]>\n\t\t\t]>,\n\t\t\ttarget: string\n\t\t]>\n\t","actionTypes":"list<[\n\t\t\tvalue: string,\n\t\t\tname: string\n\t\t]>\n\t","calculatorOptions":"list<[\n\t\t\tlabel: string,\n\t\t\ttooltip: string,\n\t\t\tvalue: string\n\t\t]>\n\t","calculatorResultOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","conditions":"list<[\n\t\t\tbinaryOperator: bool,\n\t\t\tfirstOperandOptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\toperands: list<[\n\t\t\t\tdataType: string,\n\t\t\t\ttype: string,\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\toperator: string,\n\t\t\toperators: list<[\n\t\t\t\tname: string,\n\t\t\t\tparameterTypes: list<string>,\n\t\t\t\treturnType: string,\n\t\t\t\tvalue: string\n\t\t\t]>\n\t\t]>\n\t","dataProvider":"list<[\n\t\t\tid: string,\n\t\t\tname: string\n\t\t]>\n\t","deletedFields":"list<string>","fieldOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","fixedOptions":"list<[\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","invalidRule":"bool","logicalOperator":"string","readOnly":"bool","strings":"?","spritemap":"string","_handleActionSelection":"any","_handleActionAdded":"any","_handleCancelRule":"any","_handleConditionAdded":"any","_handleDataProviderInputEdited":"any","_handleDataProviderOutputEdited":"any","_handleDeleteAction":"any","_handleDeleteCondition":"any","_handleEditExpression":"any","_handleFirstOperandFieldEdited":"any","_handleLogicalOperationChange":"any","_handleOperatorEdited":"any","_handleRuleAdded":"any","_handleSecondOperandFieldEdited":"any","_handleSecondOperandTypeEdited":"any","_handleSecondOperandValueEdited":"any","_handleTargetSelection":"any","_handleModalButtonClicked":"any","roles":"list<[\n\t\t\tlabel: string,\n\t\t\tvalue: string\n\t\t]>\n\t"};
exports.renderModal.params = ["question","title","type","spritemap","_handleModalButtonClicked"];
exports.renderModal.types = {"question":"string","title":"string","type":"string","spritemap":"string","_handleModalButtonClicked":"any"};
exports.renderAction.params = ["actionTypes","calculatorFields","calculatorOptions","calculatorResultOptions","fieldOptions","index","spritemap","strings","_handleActionSelection","_handleEditExpression","_handleDataProviderInputEdited","_handleDataProviderOutputEdited","_handleDeleteAction","_handleTargetSelection","actionExpression","actionInputs","actionOutputs","actionSelected","dataProvider","deletedFields","targetSelected","hasRequiredInputs"];
exports.renderAction.types = {"actionTypes":"list<[\n\t\t\tvalue: string,\n\t\t\tname: string\n\t\t]>\n\t","calculatorFields":"list<[\n\t\tlabel: string,\n\t\tname: string,\n\t\toptions: list<[\n\t\t\tlabel: string,\n\t\t\tvalue: string\n\t\t]>,\n\t\ttype: string,\n\t\tvalue: string\n\t]>","calculatorOptions":"list<[\n\t\t\tlabel: string,\n\t\t\ttooltip: string,\n\t\t\tvalue: string\n\t\t]>\n\t","calculatorResultOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","fieldOptions":"list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t","index":"int","spritemap":"string","strings":"[\n\t\taddField: string,\n\t\tchooseAnOption: string,\n\t\tdataProviderError: string,\n\t\tdataProviderParameterInput: string,\n\t\tdataProviderParameterInputDescription: string,\n\t\tdataProviderParameterOutput: string,\n\t\tdataProviderParameterOutputDescription: string,\n\t\tdo: string,\n\t\tfromDataProvider: string,\n\t\trequiredField: string,\n\t\tshowTheResult: string,\n\t\ttheExpressionWillBeDisplayedHere: string\n\t]","_handleActionSelection":"any","_handleEditExpression":"any","_handleDataProviderInputEdited":"any","_handleDataProviderOutputEdited":"any","_handleDeleteAction":"any","_handleTargetSelection":"any","actionExpression":"string","actionInputs":"list<[\n\t\tlabel: string,\n\t\tname: string,\n\t\trequired: bool,\n\t\ttype: string,\n\t\tvalue: string,\n\t\tfieldOptions: list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t]>\n\t","actionOutputs":"list<[\n\t\tname: string,\n\t\ttype: string,\n\t\tvalue: string,\n\t\tfieldOptions: list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t]>\n\t","actionSelected":"string","dataProvider":"list<[\n\t\t\tid: string,\n\t\t\tname: string\n\t\t]>\n\t","deletedFields":"list<string>","targetSelected":"string","hasRequiredInputs":"bool"};
exports.renderActionTarget.params = ["index","options","ref","spritemap","_handleTargetSelection","placeholder","value"];
exports.renderActionTarget.types = {"index":"int","options":"any","ref":"string","spritemap":"string","_handleTargetSelection":"any","placeholder":"string","value":"string"};
exports.renderCondition.params = ["binaryOperator","fieldOptions","index","readOnly","spritemap","strings","_handleDeleteCondition","_handleFirstOperandFieldEdited","_handleOperatorEdited","_handleSecondOperandFieldEdited","_handleSecondOperandTypeEdited","_handleSecondOperandValueEdited","firstOperandType","firstOperandValueSelected","firstOperandOptions","fixedOptions","logicalOperator","operators","roles","secondOperandFieldName","secondOperandType","secondOperandDataType","secondOperandValue","selectedOperator"];
exports.renderCondition.types = {"binaryOperator":"bool","fieldOptions":"list<[\n\t\tlabel: string,\n\t\tname: string,\n\t\toptions: list<[\n\t\t\tlabel: string,\n\t\t\tvalue: string\n\t\t]>,\n\t\ttype: string,\n\t\tvalue: string\n\t]>","index":"int","readOnly":"bool","spritemap":"string","strings":"[\n\t\tchooseAnOption: string,\n\t\tif: string,\n\t\totherField: string,\n\t\tvalue: string\n\t]","_handleDeleteCondition":"any","_handleFirstOperandFieldEdited":"any","_handleOperatorEdited":"any","_handleSecondOperandFieldEdited":"any","_handleSecondOperandTypeEdited":"any","_handleSecondOperandValueEdited":"any","firstOperandType":"string","firstOperandValueSelected":"string","firstOperandOptions":"list<[\n\t\tlabel: string,\n\t\tvalue: string\n\t]>","fixedOptions":"any","logicalOperator":"string","operators":"list<[\n\t\tname: string,\n\t\tparameterTypes: list<string>,\n\t\treturnType: string,\n\t\tvalue: string\n\t]>","roles":"list<[\n\t\tlabel: string,\n\t\tvalue: string\n\t]>","secondOperandFieldName":"string","secondOperandType":"string","secondOperandDataType":"string","secondOperandValue":"any","selectedOperator":"string"};
exports.renderConditionOperators.params = ["index","spritemap","strings","_handleOperatorEdited","firstOperandType","operators","selectedOperator"];
exports.renderConditionOperators.types = {"index":"int","spritemap":"string","strings":"[\n\t\tchooseAnOption: string\n\t]","_handleOperatorEdited":"any","firstOperandType":"string","operators":"list<[\n\t\t\tvalue: string,\n\t\t\tname: string,\n\t\t\tparameterTypes: list<string>,\n\t\t\treturnType: string\n\t\t]>\n\t","selectedOperator":"string"};
exports.renderConditionSecondOperandTypeSelector.params = ["index","spritemap","strings","_handleSecondOperandTypeEdited","secondOperandType","selectedOperator"];
exports.renderConditionSecondOperandTypeSelector.types = {"index":"int","spritemap":"string","strings":"[\n\t\tchooseAnOption: string,\n\t\totherField: string,\n\t\tvalue: string\n\t]","_handleSecondOperandTypeEdited":"any","secondOperandType":"string","selectedOperator":"any"};
exports.renderConditionUserRolesSelector.params = ["index","spritemap","strings","_handleSecondOperandFieldEdited","roles","selectedOperator","secondOperandValue"];
exports.renderConditionUserRolesSelector.types = {"index":"int","spritemap":"string","strings":"[\n\t\tchooseAnOption: string\n\t]","_handleSecondOperandFieldEdited":"any","roles":"list<[\n\t\t\tlabel: string,\n\t\t\tvalue: string\n\t\t]>\n\t","selectedOperator":"any","secondOperandValue":"any "};
exports.renderConditionLogicalOperatorDropdown.params = ["strings","_handleLogicalOperationChange","enableLogicalOperator","logicalOperator"];
exports.renderConditionLogicalOperatorDropdown.types = {"strings":"?","_handleLogicalOperationChange":"any","enableLogicalOperator":"bool","logicalOperator":"string"};
exports.renderHeader.params = ["title","extraContent"];
exports.renderHeader.types = {"title":"string","extraContent":"html"};
exports.renderAddItemButton.params = ["_handleItemAdded","spritemap","type"];
exports.renderAddItemButton.types = {"_handleItemAdded":"any","spritemap":"string","type":"string"};
exports.renderAutofill.params = ["actionIndex","chooseAnOption","dataProviderError","dataProviderParameterInput","dataProviderParameterInputDescription","dataProviderParameterOutput","dataProviderParameterOutputDescription","requiredField","spritemap","_handleDataProviderInputEdited","_handleDataProviderOutputEdited","actionInputs","actionOutputs","hasRequiredInputs"];
exports.renderAutofill.types = {"actionIndex":"int","chooseAnOption":"string","dataProviderError":"string","dataProviderParameterInput":"string","dataProviderParameterInputDescription":"string","dataProviderParameterOutput":"string","dataProviderParameterOutputDescription":"string","requiredField":"string","spritemap":"string","_handleDataProviderInputEdited":"any","_handleDataProviderOutputEdited":"any","actionInputs":"list<[\n\t\tlabel: string,\n\t\tname: string,\n\t\trequired: bool,\n\t\ttype: string,\n\t\tvalue: string,\n\t\tfieldOptions: list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t]>\n\t","actionOutputs":"list<[\n\t\tname: string,\n\t\ttype: string,\n\t\tvalue: string,\n\t\tfieldOptions: list<[\n\t\t\tlabel: string,\n\t\t\tname: string,\n\t\t\toptions: list<[\n\t\t\t\tlabel: string,\n\t\t\t\tvalue: string\n\t\t\t]>,\n\t\t\ttype: string,\n\t\t\tvalue: string\n\t\t]>\n\t]>\n\t","hasRequiredInputs":"bool"};
templates = exports;
return exports;

});

class RuleEditor extends Component {}
Soy.register(RuleEditor, templates);
export { RuleEditor, templates };
export default templates;
/* jshint ignore:end */
