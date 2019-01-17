/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from RuleList.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace LayoutRule.
 * @public
 */

goog.module('LayoutRule.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('ClayActionsDropdown.incrementaldom', 'render');

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
  /** @type {null|number|undefined} */
  var dropdownExpandedIndex = soy.asserts.assertType(opt_data.dropdownExpandedIndex == null || goog.isNumber(opt_data.dropdownExpandedIndex), 'dropdownExpandedIndex', opt_data.dropdownExpandedIndex, 'null|number|undefined');
  /** @type {!Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: ?, expression: ?, inputLabel: ?, label: (!goog.soy.data.SanitizedContent|string), outputLabel: ?, target: (!goog.soy.data.SanitizedContent|string),}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, operator: (!goog.soy.data.SanitizedContent|string),}>, logicalOperator: (!goog.soy.data.SanitizedContent|string),}>} */
  var rules = soy.asserts.assertType(goog.isArray(opt_data.rules), 'rules', opt_data.rules, '!Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: ?, expression: ?, inputLabel: ?, label: (!goog.soy.data.SanitizedContent|string), outputLabel: ?, target: (!goog.soy.data.SanitizedContent|string),}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, operator: (!goog.soy.data.SanitizedContent|string),}>, logicalOperator: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {?} */
  var rulesCardOptions = opt_data.rulesCardOptions;
  /** @type {?} */
  var strings = opt_data.strings;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*} */
  var _handleDropdownClicked = opt_data._handleDropdownClicked;
  /** @type {*} */
  var _handleRuleCardClicked = opt_data._handleRuleCardClicked;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-builder-rule-builder-container');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('h1');
      incrementalDom.attr('class', 'form-builder-section-title text-default');
  incrementalDom.elementOpenEnd();
  soyIdom.print(strings.rules);
  incrementalDom.elementClose('h1');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'liferay-ddm-form-rule-rules-list-container');
  incrementalDom.elementOpenEnd();
  $rule_list({dropdownExpandedIndex: dropdownExpandedIndex, rules: rules, rulesCardOptions: rulesCardOptions, strings: strings, spritemap: spritemap, _handleDropdownClicked: _handleDropdownClicked, _handleRuleCardClicked: _handleRuleCardClicked}, opt_ijData);
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
};
exports.render = $render;
/**
 * @typedef {{
 *  dropdownExpandedIndex: (null|number|undefined),
 *  rules: !Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: ?, expression: ?, inputLabel: ?, label: (!goog.soy.data.SanitizedContent|string), outputLabel: ?, target: (!goog.soy.data.SanitizedContent|string),}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: (!goog.soy.data.SanitizedContent|string),}>, operator: (!goog.soy.data.SanitizedContent|string),}>, logicalOperator: (!goog.soy.data.SanitizedContent|string),}>,
 *  rulesCardOptions: (?|undefined),
 *  strings: ?,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleDropdownClicked: *,
 *  _handleRuleCardClicked: *,
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'LayoutRule.render';
}


/**
 * @param {$rule_list.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $rule_list = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: ?, expression: ?, inputLabel: ?, label: (!goog.soy.data.SanitizedContent|string), outputLabel: ?, target: (!goog.soy.data.SanitizedContent|string),}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: ?,}>, operator: (!goog.soy.data.SanitizedContent|string),}>, logicalOperator: (!goog.soy.data.SanitizedContent|string),}>} */
  var rules = soy.asserts.assertType(goog.isArray(opt_data.rules), 'rules', opt_data.rules, '!Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: ?, expression: ?, inputLabel: ?, label: (!goog.soy.data.SanitizedContent|string), outputLabel: ?, target: (!goog.soy.data.SanitizedContent|string),}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: ?,}>, operator: (!goog.soy.data.SanitizedContent|string),}>, logicalOperator: (!goog.soy.data.SanitizedContent|string),}>');
  /** @type {?} */
  var strings = opt_data.strings;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*} */
  var _handleDropdownClicked = opt_data._handleDropdownClicked;
  /** @type {*} */
  var _handleRuleCardClicked = opt_data._handleRuleCardClicked;
  /** @type {null|number|undefined} */
  var dropdownExpandedIndex = soy.asserts.assertType(opt_data.dropdownExpandedIndex == null || goog.isNumber(opt_data.dropdownExpandedIndex), 'dropdownExpandedIndex', opt_data.dropdownExpandedIndex, 'null|number|undefined');
  /** @type {?} */
  var rulesCardOptions = opt_data.rulesCardOptions;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'form-builder-rule-list');
  incrementalDom.elementOpenEnd();
  if ((rules.length) > 0) {
    incrementalDom.elementOpenStart('ul');
        incrementalDom.attr('class', 'ddm-form-body-content form-builder-rule-builder-rules-list tabular-list-group');
    incrementalDom.elementOpenEnd();
    var rule6137List = rules;
    var rule6137ListLen = rule6137List.length;
    for (var rule6137Index = 0; rule6137Index < rule6137ListLen; rule6137Index++) {
      var rule6137Data = rule6137List[rule6137Index];
      incrementalDom.elementOpenStart('li');
          incrementalDom.attr('class', 'list-group-item');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'clamp-horizontal list-group-item-content');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('p');
          incrementalDom.attr('class', 'form-builder-rule-builder-rule-description text-default');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementOpen('b');
      soyIdom.print(strings.if);
      incrementalDom.text(' ');
      incrementalDom.elementClose('b');
      var condition6142List = rule6137Data.conditions;
      var condition6142ListLen = condition6142List.length;
      for (var condition6142Index = 0; condition6142Index < condition6142ListLen; condition6142Index++) {
        var condition6142Data = condition6142List[condition6142Index];
        $condition({operandType: condition6142Data.operands[0].type, operandValue: condition6142Data.operands[0].value, strings: strings}, opt_ijData);
        incrementalDom.elementOpenStart('b');
            incrementalDom.attr('class', 'text-lowercase');
        incrementalDom.elementOpenEnd();
        incrementalDom.elementOpen('em');
        incrementalDom.text(' ');
        soyIdom.print(strings[condition6142Data.operator]);
        incrementalDom.text(' ');
        incrementalDom.elementClose('em');
        incrementalDom.elementClose('b');
        if (condition6142Data.operands[1]) {
          $condition({operandLabel: condition6142Data.operands[1].label, operandType: condition6142Data.operands[1].type, operandValue: condition6142Data.operands[1].value, strings: strings}, opt_ijData);
        }
        if (!(condition6142Index == condition6142ListLen - 1)) {
          incrementalDom.elementOpen('br');
          incrementalDom.elementClose('br');
          incrementalDom.elementOpen('b');
          incrementalDom.text(' ');
          soyIdom.print(strings[rule6137Data.logicalOperator]);
          incrementalDom.text(' ');
          incrementalDom.elementClose('b');
        }
      }
      incrementalDom.elementOpen('br');
      incrementalDom.elementClose('br');
      var action6169List = rule6137Data.actions;
      var action6169ListLen = action6169List.length;
      for (var action6169Index = 0; action6169Index < action6169ListLen; action6169Index++) {
        var action6169Data = action6169List[action6169Index];
        $action({action: action6169Data.action, dataProviderName: action6169Data.dataProviderName, inputLabel: action6169Data.inputLabel, expression: action6169Data.expression, label: action6169Data.label, logicalOperator: rule6137Data.logicalOperator, outputLabel: action6169Data.outputLabel, strings: strings}, opt_ijData);
        if (!(action6169Index == action6169ListLen - 1)) {
          incrementalDom.text(', ');
          incrementalDom.elementOpen('br');
          incrementalDom.elementClose('br');
          incrementalDom.elementOpen('b');
          incrementalDom.text(' ');
          soyIdom.print(strings['and']);
          incrementalDom.text(' ');
          incrementalDom.elementClose('b');
        }
      }
      incrementalDom.elementClose('p');
      incrementalDom.elementClose('div');
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'list-group-item-field');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'card-col-field');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'dropdown dropdown-action');
      incrementalDom.elementOpenEnd();
      var ruleIndex__soy6189 = rule6137Index;
      var isExpanded__soy6191 = dropdownExpandedIndex == ruleIndex__soy6189;
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'ddm-rule-list-settings');
          incrementalDom.attr('data-card-id', ruleIndex__soy6189);
      incrementalDom.elementOpenEnd();
      $templateAlias1({items: rulesCardOptions, expanded: isExpanded__soy6191, events: {itemClicked: _handleRuleCardClicked}, spritemap: spritemap}, opt_ijData);
      incrementalDom.elementOpenStart('button');
          incrementalDom.attr('class', 'component-action cursor-pointer dropdown-toggle');
          incrementalDom.attr('data-rule-index', ruleIndex__soy6189);
          incrementalDom.attr('data-onclick', _handleDropdownClicked);
      incrementalDom.elementOpenEnd();
      $templateAlias2({spritemap: spritemap, symbol: 'ellipsis-v'}, opt_ijData);
      incrementalDom.elementClose('button');
      incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
      incrementalDom.elementClose('div');
      incrementalDom.elementClose('li');
    }
    incrementalDom.elementClose('ul');
  } else {
    $empty_list({message: strings.emptyListText}, opt_ijData);
  }
  incrementalDom.elementClose('div');
};
exports.rule_list = $rule_list;
/**
 * @typedef {{
 *  rules: !Array<{actions: !Array<{action: (!goog.soy.data.SanitizedContent|string), dataProviderName: ?, expression: ?, inputLabel: ?, label: (!goog.soy.data.SanitizedContent|string), outputLabel: ?, target: (!goog.soy.data.SanitizedContent|string),}>, conditions: !Array<{operands: !Array<{label: (!goog.soy.data.SanitizedContent|string), type: (!goog.soy.data.SanitizedContent|string), value: ?,}>, operator: (!goog.soy.data.SanitizedContent|string),}>, logicalOperator: (!goog.soy.data.SanitizedContent|string),}>,
 *  strings: ?,
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleDropdownClicked: *,
 *  _handleRuleCardClicked: *,
 *  dropdownExpandedIndex: (null|number|undefined),
 *  rulesCardOptions: (?|undefined),
 * }}
 */
$rule_list.Params;
if (goog.DEBUG) {
  $rule_list.soyTemplateName = 'LayoutRule.rule_list';
}


/**
 * @param {$empty_list.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $empty_list = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var message = soy.asserts.assertType(opt_data.message == null || (goog.isString(opt_data.message) || opt_data.message instanceof goog.soy.data.SanitizedContent), 'message', opt_data.message, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'main-content-body');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'sheet taglib-empty-result-message');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'taglib-empty-result-message-header');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementClose('div');
  if (message) {
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'sheet-text text-center text-muted');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('p');
        incrementalDom.attr('class', 'text-default');
    incrementalDom.elementOpenEnd();
    soyIdom.print(message);
    incrementalDom.elementClose('p');
    incrementalDom.elementClose('div');
  }
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
};
exports.empty_list = $empty_list;
/**
 * @typedef {{
 *  message: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
$empty_list.Params;
if (goog.DEBUG) {
  $empty_list.soyTemplateName = 'LayoutRule.empty_list';
}


/**
 * @param {$label.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $label = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var content = soy.asserts.assertType(opt_data.content == null || (goog.isString(opt_data.content) || opt_data.content instanceof goog.soy.data.SanitizedContent), 'content', opt_data.content, '!goog.soy.data.SanitizedContent|null|string|undefined');
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'label label-lg label-secondary');
      incrementalDom.attr('data-original-title', content);
      incrementalDom.attr('title', content);
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'text-truncate-inline');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'text-truncate');
  incrementalDom.elementOpenEnd();
  soyIdom.print(content);
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('span');
};
exports.label = $label;
/**
 * @typedef {{
 *  content: (!goog.soy.data.SanitizedContent|null|string|undefined),
 * }}
 */
$label.Params;
if (goog.DEBUG) {
  $label.soyTemplateName = 'LayoutRule.label';
}


/**
 * @param {$condition.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $condition = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var operandLabel = soy.asserts.assertType(opt_data.operandLabel == null || (goog.isString(opt_data.operandLabel) || opt_data.operandLabel instanceof goog.soy.data.SanitizedContent), 'operandLabel', opt_data.operandLabel, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var operandType = soy.asserts.assertType(opt_data.operandType == null || (goog.isString(opt_data.operandType) || opt_data.operandType instanceof goog.soy.data.SanitizedContent), 'operandType', opt_data.operandType, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var operandValue = opt_data.operandValue;
  /** @type {?} */
  var strings = opt_data.strings;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'ddm-condition-container');
  incrementalDom.elementOpenEnd();
  if (operandType == 'double' || operandType == 'integer' || operandType == 'string' || operandType == 'text' || operandType == 'numeric') {
    incrementalDom.elementOpen('span');
    soyIdom.print(strings.value);
    incrementalDom.text(' ');
    incrementalDom.elementClose('span');
  } else {
    if (operandType != 'user' && operandType != 'list') {
      incrementalDom.elementOpen('span');
      soyIdom.print(strings[operandType]);
      incrementalDom.text(' ');
      incrementalDom.elementClose('span');
    }
  }
  if (operandLabel) {
    $label({content: operandLabel}, opt_ijData);
  } else {
    $label({content: operandValue}, opt_ijData);
  }
  incrementalDom.elementClose('div');
};
exports.condition = $condition;
/**
 * @typedef {{
 *  operandLabel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operandType: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  operandValue: (?|undefined),
 *  strings: ?,
 * }}
 */
$condition.Params;
if (goog.DEBUG) {
  $condition.soyTemplateName = 'LayoutRule.condition';
}


/**
 * @param {$action.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $action = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var action = soy.asserts.assertType(goog.isString(opt_data.action) || opt_data.action instanceof goog.soy.data.SanitizedContent, 'action', opt_data.action, '!goog.soy.data.SanitizedContent|string');
  /** @type {?} */
  var dataProviderName = opt_data.dataProviderName;
  /** @type {?} */
  var expression = opt_data.expression;
  /** @type {?} */
  var label = opt_data.label;
  /** @type {?} */
  var outputLabel = opt_data.outputLabel;
  /** @type {?} */
  var strings = opt_data.strings;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'ddm-action-container');
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpen('span');
  incrementalDom.elementOpen('b');
  soyIdom.print(action);
  incrementalDom.text(' ');
  incrementalDom.elementClose('b');
  incrementalDom.elementClose('span');
  if (action == 'auto-fill') {
    var out6283List = outputLabel;
    var out6283ListLen = out6283List.length;
    for (var out6283Index = 0; out6283Index < out6283ListLen; out6283Index++) {
      var out6283Data = out6283List[out6283Index];
      $label({content: out6283Data}, opt_ijData);
      if (!(out6283Index == out6283ListLen - 1)) {
        incrementalDom.text(', ');
      }
    }
    incrementalDom.elementOpen('span');
    incrementalDom.elementOpen('b');
    soyIdom.print(strings['fromDataProvider']);
    incrementalDom.text(' ');
    soyIdom.print(dataProviderName);
    incrementalDom.elementClose('b');
    incrementalDom.elementClose('span');
  } else if (action == 'calculate') {
    $label({content: expression}, opt_ijData);
    incrementalDom.elementOpen('b');
    incrementalDom.text(' into ');
    incrementalDom.elementClose('b');
    $label({content: label}, opt_ijData);
  } else if (action == 'enable') {
    $label({content: label}, opt_ijData);
  } else if (action == 'jump-to-page') {
    $label({content: label}, opt_ijData);
  } else if (action == 'require') {
    $label({content: label}, opt_ijData);
  } else if (action == 'show') {
    $label({content: label}, opt_ijData);
  }
  incrementalDom.elementClose('div');
};
exports.action = $action;
/**
 * @typedef {{
 *  action: (!goog.soy.data.SanitizedContent|string),
 *  dataProviderName: ?,
 *  expression: ?,
 *  label: ?,
 *  outputLabel: ?,
 *  strings: ?,
 * }}
 */
$action.Params;
if (goog.DEBUG) {
  $action.soyTemplateName = 'LayoutRule.action';
}

exports.render.params = ["dropdownExpandedIndex","rules","rulesCardOptions","strings","spritemap","_handleDropdownClicked","_handleRuleCardClicked"];
exports.render.types = {"dropdownExpandedIndex":"number","rules":"list<[\n\t\t\tconditions: list<[\n\t\t\t\toperator: string,\n\t\t\t\toperands: list<[\n\t\t\t\t\ttype: string,\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tvalue: string\n\t\t\t\t]>\n\t\t\t]>,\n\t\t\tactions: list<[\n\t\t\t\taction: string,\n\t\t\t\tdataProviderName: ?,\n\t\t\t\texpression: ?,\n\t\t\t\tinputLabel: ?,\n\t\t\t\ttarget: string,\n\t\t\t\tlabel: string,\n\t\t\t\toutputLabel: ?\n\t\t\t]>,\n\t\t\tlogicalOperator: string\n\t\t]>\n\t","rulesCardOptions":"?","strings":"?","spritemap":"string","_handleDropdownClicked":"any","_handleRuleCardClicked":"any"};
exports.rule_list.params = ["rules","strings","spritemap","_handleDropdownClicked","_handleRuleCardClicked","dropdownExpandedIndex","rulesCardOptions"];
exports.rule_list.types = {"rules":"list<[\n\t\t\tconditions: list<[\n\t\t\t\toperator: string,\n\t\t\t\toperands: list<[\n\t\t\t\t\ttype: string,\n\t\t\t\t\tlabel: string,\n\t\t\t\t\tvalue: ?\n\t\t\t\t]>\n\t\t\t]>,\n\t\t\tactions: list<[\n\t\t\t\taction: string,\n\t\t\t\tdataProviderName: ?,\n\t\t\t\texpression: ?,\n\t\t\t\tinputLabel: ?,\n\t\t\t\ttarget: string,\n\t\t\t\tlabel: string,\n\t\t\t\toutputLabel: ?\n\t\t\t]>,\n\t\t\tlogicalOperator: string\n\t\t]>\n\t","strings":"?","spritemap":"string","_handleDropdownClicked":"any","_handleRuleCardClicked":"any","dropdownExpandedIndex":"number","rulesCardOptions":"?"};
exports.empty_list.params = ["message"];
exports.empty_list.types = {"message":"string"};
exports.label.params = ["content"];
exports.label.types = {"content":"string"};
exports.condition.params = ["operandLabel","operandType","operandValue","strings"];
exports.condition.types = {"operandLabel":"string","operandType":"string","operandValue":"?","strings":"?"};
exports.action.params = ["action","dataProviderName","expression","label","outputLabel","strings"];
exports.action.types = {"action":"string","dataProviderName":"?","expression":"?","label":"?","outputLabel":"?","strings":"?"};
templates = exports;
return exports;

});

class LayoutRule extends Component {}
Soy.register(LayoutRule, templates);
export { LayoutRule, templates };
export default templates;
/* jshint ignore:end */
