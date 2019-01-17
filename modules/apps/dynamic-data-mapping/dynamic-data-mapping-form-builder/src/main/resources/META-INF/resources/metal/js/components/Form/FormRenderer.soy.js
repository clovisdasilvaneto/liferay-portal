/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from FormRenderer.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FormRenderer.
 * @hassoydeltemplate {FormRenderer.pages.idom}
 * @hassoydeltemplate {FormRenderer.pagination.idom}
 * @hassoydeltemplate {FormRenderer.paginationContainer.idom}
 * @hassoydeltemplate {FormRenderer.wizard.idom}
 * @hassoydelcall {FormRenderer.pages.idom}
 * @hassoydelcall {FormRenderer.pagination.idom}
 * @hassoydelcall {FormRenderer.paginationContainer.idom}
 * @hassoydelcall {FormRenderer.wizard.idom}
 * @public
 */

goog.module('FormRenderer.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('ClayActionsDropdown.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('PageRenderer.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('SuccessPage.incrementaldom', 'render');


/**
 * @param {$render.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var $render = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleChangePage = opt_data._handleChangePage;
  /** @type {*|null|undefined} */
  var _handleDeleteButtonClicked = opt_data._handleDeleteButtonClicked;
  /** @type {*|null|undefined} */
  var _handleDuplicateButtonClicked = opt_data._handleDuplicateButtonClicked;
  /** @type {*|null|undefined} */
  var _handleExpandedChanged = opt_data._handleExpandedChanged;
  /** @type {*|null|undefined} */
  var _handleFieldClicked = opt_data._handleFieldClicked;
  /** @type {*|null|undefined} */
  var _handleFieldEdited = opt_data._handleFieldEdited;
  /** @type {*|null|undefined} */
  var _handlePaginationLeftClicked = opt_data._handlePaginationLeftClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationRightClicked = opt_data._handlePaginationRightClicked;
  /** @type {*|null|undefined} */
  var _handlePageSettingsClicked = opt_data._handlePageSettingsClicked;
  /** @type {*|null|undefined} */
  var _handleSuccesPageChanged = opt_data._handleSuccesPageChanged;
  /** @type {*|null|undefined} */
  var _handleUpdatePage = opt_data._handleUpdatePage;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var defaultPageTitle = soy.asserts.assertType(opt_data.defaultPageTitle == null || (goog.isString(opt_data.defaultPageTitle) || opt_data.defaultPageTitle instanceof goog.soy.data.SanitizedContent), 'defaultPageTitle', opt_data.defaultPageTitle, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var dropdownExpanded = soy.asserts.assertType(opt_data.dropdownExpanded == null || (goog.isBoolean(opt_data.dropdownExpanded) || opt_data.dropdownExpanded === 1 || opt_data.dropdownExpanded === 0), 'dropdownExpanded', opt_data.dropdownExpanded, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var modeRenderer = soy.asserts.assertType(opt_data.modeRenderer == null || (goog.isString(opt_data.modeRenderer) || opt_data.modeRenderer instanceof goog.soy.data.SanitizedContent), 'modeRenderer', opt_data.modeRenderer, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var pages = opt_data.pages;
  /** @type {?} */
  var pageSettingsItems = opt_data.pageSettingsItems;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var paginationMode = soy.asserts.assertType(opt_data.paginationMode == null || (goog.isString(opt_data.paginationMode) || opt_data.paginationMode instanceof goog.soy.data.SanitizedContent), 'paginationMode', opt_data.paginationMode, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var successPageLabel = soy.asserts.assertType(opt_data.successPageLabel == null || (goog.isString(opt_data.successPageLabel) || opt_data.successPageLabel instanceof goog.soy.data.SanitizedContent), 'successPageLabel', opt_data.successPageLabel, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var successPageSettings = opt_data.successPageSettings;
  var contentRenderer__soy3322 = modeRenderer != null ? modeRenderer : 'grid';
  var total__soy3324 = (pages.length);
  soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.pages.idom'), contentRenderer__soy3322, false)({_handleChangePage: _handleChangePage, _handleDeleteButtonClicked: _handleDeleteButtonClicked, _handleDuplicateButtonClicked: _handleDuplicateButtonClicked, _handleExpandedChanged: _handleExpandedChanged, _handleFieldClicked: _handleFieldClicked, _handleFieldEdited: _handleFieldEdited, _handlePaginationLeftClicked: _handlePaginationLeftClicked, _handlePaginationRightClicked: _handlePaginationRightClicked, _handlePageSettingsClicked: _handlePageSettingsClicked, _handleSuccesPageChanged: _handleSuccesPageChanged, _handleUpdatePage: _handleUpdatePage, activePage: activePage, contentRenderer: contentRenderer__soy3322, defaultPageTitle: defaultPageTitle, dropdownExpanded: dropdownExpanded, editable: editable, pages: pages, pageSettingsItems: pageSettingsItems, paginationMode: paginationMode, spritemap: spritemap, successPageLabel: successPageLabel, successPageSettings: successPageSettings, total: total__soy3324}, opt_ijData);
};
exports.render = $render;
/**
 * @typedef {{
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleChangePage: (*|null|undefined),
 *  _handleDeleteButtonClicked: (*|null|undefined),
 *  _handleDuplicateButtonClicked: (*|null|undefined),
 *  _handleExpandedChanged: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  _handlePageSettingsClicked: (*|null|undefined),
 *  _handleSuccesPageChanged: (*|null|undefined),
 *  _handleUpdatePage: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  defaultPageTitle: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  dropdownExpanded: (boolean|null|undefined),
 *  editable: (boolean|null|undefined),
 *  modeRenderer: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  pages: (?|undefined),
 *  pageSettingsItems: (?|undefined),
 *  paginationMode: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  successPageLabel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  successPageSettings: (?|undefined),
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'FormRenderer.render';
}


/**
 * @param {__deltemplate__FormRenderer_pages_grid.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__FormRenderer_pages_grid = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleChangePage = opt_data._handleChangePage;
  /** @type {*|null|undefined} */
  var _handleDeleteButtonClicked = opt_data._handleDeleteButtonClicked;
  /** @type {*|null|undefined} */
  var _handleDuplicateButtonClicked = opt_data._handleDuplicateButtonClicked;
  /** @type {*|null|undefined} */
  var _handleExpandedChanged = opt_data._handleExpandedChanged;
  /** @type {*|null|undefined} */
  var _handleFieldClicked = opt_data._handleFieldClicked;
  /** @type {*|null|undefined} */
  var _handleFieldEdited = opt_data._handleFieldEdited;
  /** @type {*|null|undefined} */
  var _handlePaginationLeftClicked = opt_data._handlePaginationLeftClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationRightClicked = opt_data._handlePaginationRightClicked;
  /** @type {*|null|undefined} */
  var _handlePageSettingsClicked = opt_data._handlePageSettingsClicked;
  /** @type {*|null|undefined} */
  var _handleSuccesPageChanged = opt_data._handleSuccesPageChanged;
  /** @type {*|null|undefined} */
  var _handleUpdatePage = opt_data._handleUpdatePage;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var contentRenderer = soy.asserts.assertType(opt_data.contentRenderer == null || (goog.isString(opt_data.contentRenderer) || opt_data.contentRenderer instanceof goog.soy.data.SanitizedContent), 'contentRenderer', opt_data.contentRenderer, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var defaultPageTitle = soy.asserts.assertType(opt_data.defaultPageTitle == null || (goog.isString(opt_data.defaultPageTitle) || opt_data.defaultPageTitle instanceof goog.soy.data.SanitizedContent), 'defaultPageTitle', opt_data.defaultPageTitle, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var dropdownExpanded = soy.asserts.assertType(opt_data.dropdownExpanded == null || (goog.isBoolean(opt_data.dropdownExpanded) || opt_data.dropdownExpanded === 1 || opt_data.dropdownExpanded === 0), 'dropdownExpanded', opt_data.dropdownExpanded, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {?} */
  var pages = opt_data.pages;
  /** @type {?} */
  var pageSettingsItems = opt_data.pageSettingsItems;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var paginationMode = soy.asserts.assertType(opt_data.paginationMode == null || (goog.isString(opt_data.paginationMode) || opt_data.paginationMode instanceof goog.soy.data.SanitizedContent), 'paginationMode', opt_data.paginationMode, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var successPageLabel = soy.asserts.assertType(opt_data.successPageLabel == null || (goog.isString(opt_data.successPageLabel) || opt_data.successPageLabel instanceof goog.soy.data.SanitizedContent), 'successPageLabel', opt_data.successPageLabel, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var successPageSettings = opt_data.successPageSettings;
  /** @type {null|number|undefined} */
  var total = soy.asserts.assertType(opt_data.total == null || goog.isNumber(opt_data.total), 'total', opt_data.total, 'null|number|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'position-relative');
  incrementalDom.elementOpenEnd();
  if (paginationMode == 'wizard' || (pages.length) == 1 && !successPageSettings.enabled) {
    soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.paginationContainer.idom'), '', false)({_handleChangePage: _handleChangePage, _handleExpandedChanged: _handleExpandedChanged, _handlePaginationLeftClicked: _handlePaginationLeftClicked, _handlePaginationRightClicked: _handlePaginationRightClicked, _handlePageSettingsClicked: _handlePageSettingsClicked, activePage: activePage, defaultPageTitle: defaultPageTitle, dropdownExpanded: dropdownExpanded, pages: pages, pageSettingsItems: pageSettingsItems, paginationMode: paginationMode, spritemap: spritemap, successPageLabel: successPageLabel, successPageSettings: successPageSettings}, opt_ijData);
  }
  if (activePage == -1) {
    $templateAlias2({successPageSettings: successPageSettings, events: {successPageChanged: _handleSuccesPageChanged}, ref: 'successPage'}, opt_ijData);
  } else {
    var page3407List = pages;
    var page3407ListLen = page3407List.length;
    for (var page3407Index = 0; page3407Index < page3407ListLen; page3407Index++) {
      var page3407Data = page3407List[page3407Index];
      $templateAlias3({activePage: activePage, contentRenderer: contentRenderer, editable: editable, events: {deleteFieldClicked: _handleDeleteButtonClicked, duplicateButtonClicked: _handleDuplicateButtonClicked, fieldClicked: _handleFieldClicked, fieldEdited: _handleFieldEdited, updatePage: _handleUpdatePage}, page: page3407Data, pageId: page3407Index, ref: 'pageRenderer', spritemap: spritemap, total: total}, opt_ijData);
    }
  }
  var multiple__soy3423 = (pages.length) > 1;
  if (multiple__soy3423 && paginationMode == 'pagination' || paginationMode == 'pagination' && (pages.length) == 1 && successPageSettings.enabled) {
    soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.paginationContainer.idom'), '', false)({_handleChangePage: _handleChangePage, _handleExpandedChanged: _handleExpandedChanged, _handlePaginationLeftClicked: _handlePaginationLeftClicked, _handlePaginationRightClicked: _handlePaginationRightClicked, _handlePageSettingsClicked: _handlePageSettingsClicked, activePage: activePage, defaultPageTitle: defaultPageTitle, dropdownExpanded: dropdownExpanded, pages: pages, pageSettingsItems: pageSettingsItems, paginationMode: paginationMode, spritemap: spritemap, successPageLabel: successPageLabel, successPageSettings: successPageSettings}, opt_ijData);
  }
  incrementalDom.elementClose('div');
};
exports.__deltemplate__FormRenderer_pages_grid = __deltemplate__FormRenderer_pages_grid;
/**
 * @typedef {{
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleChangePage: (*|null|undefined),
 *  _handleDeleteButtonClicked: (*|null|undefined),
 *  _handleDuplicateButtonClicked: (*|null|undefined),
 *  _handleExpandedChanged: (*|null|undefined),
 *  _handleFieldClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  _handlePageSettingsClicked: (*|null|undefined),
 *  _handleSuccesPageChanged: (*|null|undefined),
 *  _handleUpdatePage: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  contentRenderer: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  defaultPageTitle: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  dropdownExpanded: (boolean|null|undefined),
 *  editable: (boolean|null|undefined),
 *  pages: (?|undefined),
 *  pageSettingsItems: (?|undefined),
 *  paginationMode: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  successPageLabel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  successPageSettings: (?|undefined),
 *  total: (null|number|undefined),
 * }}
 */
__deltemplate__FormRenderer_pages_grid.Params;
if (goog.DEBUG) {
  __deltemplate__FormRenderer_pages_grid.soyTemplateName = 'FormRenderer.__deltemplate__FormRenderer_pages_grid';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.pages.idom'), 'grid', 0, __deltemplate__FormRenderer_pages_grid);


/**
 * @param {__deltemplate__FormRenderer_paginationContainer_.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__FormRenderer_paginationContainer_ = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleChangePage = opt_data._handleChangePage;
  /** @type {*|null|undefined} */
  var _handleExpandedChanged = opt_data._handleExpandedChanged;
  /** @type {*|null|undefined} */
  var _handlePaginationLeftClicked = opt_data._handlePaginationLeftClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationRightClicked = opt_data._handlePaginationRightClicked;
  /** @type {*|null|undefined} */
  var _handlePageSettingsClicked = opt_data._handlePageSettingsClicked;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var defaultPageTitle = soy.asserts.assertType(opt_data.defaultPageTitle == null || (goog.isString(opt_data.defaultPageTitle) || opt_data.defaultPageTitle instanceof goog.soy.data.SanitizedContent), 'defaultPageTitle', opt_data.defaultPageTitle, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var dropdownExpanded = soy.asserts.assertType(opt_data.dropdownExpanded == null || (goog.isBoolean(opt_data.dropdownExpanded) || opt_data.dropdownExpanded === 1 || opt_data.dropdownExpanded === 0), 'dropdownExpanded', opt_data.dropdownExpanded, 'boolean|null|undefined');
  /** @type {?} */
  var pages = opt_data.pages;
  /** @type {?} */
  var pageSettingsItems = opt_data.pageSettingsItems;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var paginationMode = soy.asserts.assertType(opt_data.paginationMode == null || (goog.isString(opt_data.paginationMode) || opt_data.paginationMode instanceof goog.soy.data.SanitizedContent), 'paginationMode', opt_data.paginationMode, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var successPageLabel = soy.asserts.assertType(opt_data.successPageLabel == null || (goog.isString(opt_data.successPageLabel) || opt_data.successPageLabel instanceof goog.soy.data.SanitizedContent), 'successPageLabel', opt_data.successPageLabel, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var successPageSettings = opt_data.successPageSettings;
  /** @type {null|number|undefined} */
  var total = soy.asserts.assertType(opt_data.total == null || goog.isNumber(opt_data.total), 'total', opt_data.total, 'null|number|undefined');
  var multiple__soy3462 = (pages.length) > 1 || successPageSettings.enabled;
  var classes__soy3477 = '';
  classes__soy3477 += 'ddm-form-pagination';
  classes__soy3477 += multiple__soy3462 ? ' position-relative' : ' position-absolute';
  var $tmp;
  if (multiple__soy3462 && paginationMode == 'wizard') {
    $tmp = ' wizard-mode';
  } else if (multiple__soy3462 && paginationMode == 'pagination') {
    $tmp = ' pagination-mode';
  } else {
    $tmp = '';
  }
  classes__soy3477 += $tmp;
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', classes__soy3477);
  incrementalDom.elementOpenEnd();
  if (multiple__soy3462 && paginationMode == 'wizard') {
    soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.wizard.idom'), '', false)({_handleChangePage: _handleChangePage, activePage: activePage, defaultPageTitle: defaultPageTitle, pages: pages, spritemap: spritemap, successPageLabel: successPageLabel, successPageSettings: successPageSettings}, opt_ijData);
  } else if (multiple__soy3462 && paginationMode == 'pagination') {
    soy.$$getDelegateFn(soy.$$getDelTemplateId('FormRenderer.pagination.idom'), '', false)({_handleChangePage: _handleChangePage, _handlePaginationLeftClicked: _handlePaginationLeftClicked, _handlePaginationRightClicked: _handlePaginationRightClicked, activePage: activePage, pages: pages, successPageLabel: successPageLabel, successPageSettings: successPageSettings}, opt_ijData);
  }
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'ddm-page-settings');
      incrementalDom.attr('role', 'group');
  incrementalDom.elementOpenEnd();
  $templateAlias1({items: pageSettingsItems, triggerClasses: 'component-action', events: {itemClicked: _handlePageSettingsClicked}, spritemap: spritemap}, opt_ijData);
  incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
};
exports.__deltemplate__FormRenderer_paginationContainer_ = __deltemplate__FormRenderer_paginationContainer_;
/**
 * @typedef {{
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleChangePage: (*|null|undefined),
 *  _handleExpandedChanged: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  _handlePageSettingsClicked: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  defaultPageTitle: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  dropdownExpanded: (boolean|null|undefined),
 *  pages: (?|undefined),
 *  pageSettingsItems: (?|undefined),
 *  paginationMode: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  successPageLabel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  successPageSettings: (?|undefined),
 *  total: (null|number|undefined),
 * }}
 */
__deltemplate__FormRenderer_paginationContainer_.Params;
if (goog.DEBUG) {
  __deltemplate__FormRenderer_paginationContainer_.soyTemplateName = 'FormRenderer.__deltemplate__FormRenderer_paginationContainer_';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.paginationContainer.idom'), '', 0, __deltemplate__FormRenderer_paginationContainer_);


/**
 * @param {__deltemplate__FormRenderer_wizard_.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__FormRenderer_wizard_ = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {*|null|undefined} */
  var _handleChangePage = opt_data._handleChangePage;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var defaultPageTitle = soy.asserts.assertType(opt_data.defaultPageTitle == null || (goog.isString(opt_data.defaultPageTitle) || opt_data.defaultPageTitle instanceof goog.soy.data.SanitizedContent), 'defaultPageTitle', opt_data.defaultPageTitle, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var pages = opt_data.pages;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var successPageLabel = soy.asserts.assertType(opt_data.successPageLabel == null || (goog.isString(opt_data.successPageLabel) || opt_data.successPageLabel instanceof goog.soy.data.SanitizedContent), 'successPageLabel', opt_data.successPageLabel, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var successPageSettings = opt_data.successPageSettings;
  incrementalDom.elementOpenStart('ol');
      incrementalDom.attr('class', 'dmm-wizard multi-step-indicator-label-top multi-step-nav multi-step-nav-collapse-sm');
  incrementalDom.elementOpenEnd();
  var page3520List = pages;
  var page3520ListLen = page3520List.length;
  for (var page3520Index = 0; page3520Index < page3520ListLen; page3520Index++) {
    var page3520Data = page3520List[page3520Index];
    var title__soy3523 = page3520Data.title ? page3520Data.title : defaultPageTitle;
    var pageId__soy3525 = page3520Index;
    var step__soy3527 = pageId__soy3525 + 1;
    var classes__soy3538 = '';
    classes__soy3538 += 'multi-step-item';
    classes__soy3538 += step__soy3527 != (pages.length) || successPageSettings.enabled ? ' multi-step-item-expand' : '';
    classes__soy3538 += pageId__soy3525 == activePage ? ' active' : '';
    incrementalDom.elementOpenStart('li');
        incrementalDom.attr('class', classes__soy3538);
        incrementalDom.attr('data-onclick', _handleChangePage);
        incrementalDom.attr('data-page-id', pageId__soy3525);
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'multi-step-divider');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'multi-step-indicator');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'multi-step-indicator-label');
    incrementalDom.elementOpenEnd();
    soyIdom.print(title__soy3523);
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'multi-step-icon');
        incrementalDom.attr('data-multi-step-icon', step__soy3527);
        incrementalDom.attr('href', 'javascript:;');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('a');
    incrementalDom.elementClose('div');
    incrementalDom.elementClose('li');
  }
  if (successPageSettings.enabled) {
    var classes__soy3559 = '';
    classes__soy3559 += 'multi-step-item complete';
    classes__soy3559 += activePage == -1 ? ' active' : '';
    incrementalDom.elementOpenStart('li');
        incrementalDom.attr('class', classes__soy3559);
        incrementalDom.attr('data-onclick', _handleChangePage);
        incrementalDom.attr('data-page-id', '-1');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'multi-step-divider');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'multi-step-indicator');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'multi-step-indicator-label');
    incrementalDom.elementOpenEnd();
    soyIdom.print(successPageLabel);
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'multi-step-icon');
        incrementalDom.attr('href', 'javascript:;');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('a');
    incrementalDom.elementClose('div');
    incrementalDom.elementClose('li');
  }
  incrementalDom.elementClose('ol');
};
exports.__deltemplate__FormRenderer_wizard_ = __deltemplate__FormRenderer_wizard_;
/**
 * @typedef {{
 *  _handleChangePage: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  defaultPageTitle: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  pages: (?|undefined),
 *  successPageLabel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  successPageSettings: (?|undefined),
 * }}
 */
__deltemplate__FormRenderer_wizard_.Params;
if (goog.DEBUG) {
  __deltemplate__FormRenderer_wizard_.soyTemplateName = 'FormRenderer.__deltemplate__FormRenderer_wizard_';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.wizard.idom'), '', 0, __deltemplate__FormRenderer_wizard_);


/**
 * @param {__deltemplate__FormRenderer_pagination_.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__FormRenderer_pagination_ = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {*|null|undefined} */
  var _handleChangePage = opt_data._handleChangePage;
  /** @type {*|null|undefined} */
  var _handlePaginationLeftClicked = opt_data._handlePaginationLeftClicked;
  /** @type {*|null|undefined} */
  var _handlePaginationRightClicked = opt_data._handlePaginationRightClicked;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {?} */
  var pages = opt_data.pages;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var successPageLabel = soy.asserts.assertType(opt_data.successPageLabel == null || (goog.isString(opt_data.successPageLabel) || opt_data.successPageLabel instanceof goog.soy.data.SanitizedContent), 'successPageLabel', opt_data.successPageLabel, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {?} */
  var successPageSettings = opt_data.successPageSettings;
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'ddm-pagination justify-content-center pagination');
  incrementalDom.elementOpenEnd();
  var wizardClasses__soy3583 = '';
  wizardClasses__soy3583 += 'page-item';
  wizardClasses__soy3583 += activePage == 0 ? ' visibility-hidden' : '';
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', wizardClasses__soy3583);
      incrementalDom.attr('data-onclick', _handlePaginationLeftClicked);
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('a');
      incrementalDom.attr('class', 'page-link');
      incrementalDom.attr('href', 'javascript:;');
      incrementalDom.attr('role', 'button');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('\u00AB');
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'sr-only');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('Previous');
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('a');
  incrementalDom.elementClose('li');
  var page3589List = pages;
  var page3589ListLen = page3589List.length;
  for (var page3589Index = 0; page3589Index < page3589ListLen; page3589Index++) {
    var page3589Data = page3589List[page3589Index];
    var pageId__soy3592 = page3589Index;
    var step__soy3594 = pageId__soy3592 + 1;
    var classes__soy3601 = '';
    classes__soy3601 += 'page-item';
    classes__soy3601 += pageId__soy3592 == activePage ? ' active' : '';
    incrementalDom.elementOpenStart('li');
        incrementalDom.attr('class', classes__soy3601);
        incrementalDom.attr('data-onclick', _handleChangePage);
        incrementalDom.attr('data-page-id', pageId__soy3592);
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'page-link');
        incrementalDom.attr('href', 'javascript:;');
    incrementalDom.elementOpenEnd();
    soyIdom.print(step__soy3594);
    incrementalDom.elementClose('a');
    incrementalDom.elementClose('li');
  }
  if (successPageSettings.enabled) {
    var classes__soy3620 = '';
    classes__soy3620 += 'page-item';
    classes__soy3620 += activePage == -1 ? ' active' : '';
    incrementalDom.elementOpenStart('li');
        incrementalDom.attr('class', classes__soy3620);
        incrementalDom.attr('data-onclick', _handleChangePage);
        incrementalDom.attr('data-page-id', '-1');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('a');
        incrementalDom.attr('class', 'page-link');
        incrementalDom.attr('href', 'javascript:;');
    incrementalDom.elementOpenEnd();
    soyIdom.print(successPageLabel);
    incrementalDom.elementClose('a');
    incrementalDom.elementClose('li');
  }
  var paginationClasses__soy3634 = '';
  paginationClasses__soy3634 += 'page-item';
  paginationClasses__soy3634 += activePage == (pages.length) - 1 && !successPageSettings.enabled || successPageSettings.enabled && activePage == -1 ? ' visibility-hidden' : '';
  incrementalDom.elementOpenStart('li');
      incrementalDom.attr('class', paginationClasses__soy3634);
      incrementalDom.attr('data-onclick', _handlePaginationRightClicked);
  incrementalDom.elementOpenEnd();
  incrementalDom.elementOpenStart('a');
      incrementalDom.attr('class', 'page-link');
      incrementalDom.attr('href', 'javascript:;');
      incrementalDom.attr('role', 'button');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('\u00BB');
  incrementalDom.elementOpenStart('span');
      incrementalDom.attr('class', 'sr-only');
  incrementalDom.elementOpenEnd();
  incrementalDom.text('Next');
  incrementalDom.elementClose('span');
  incrementalDom.elementClose('a');
  incrementalDom.elementClose('li');
  incrementalDom.elementClose('ul');
};
exports.__deltemplate__FormRenderer_pagination_ = __deltemplate__FormRenderer_pagination_;
/**
 * @typedef {{
 *  _handleChangePage: (*|null|undefined),
 *  _handlePaginationLeftClicked: (*|null|undefined),
 *  _handlePaginationRightClicked: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  pages: (?|undefined),
 *  successPageLabel: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  successPageSettings: (?|undefined),
 * }}
 */
__deltemplate__FormRenderer_pagination_.Params;
if (goog.DEBUG) {
  __deltemplate__FormRenderer_pagination_.soyTemplateName = 'FormRenderer.__deltemplate__FormRenderer_pagination_';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.pagination.idom'), '', 0, __deltemplate__FormRenderer_pagination_);


/**
 * @param {__deltemplate__FormRenderer_pages_list.Params} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes|uselessCode}
 */
var __deltemplate__FormRenderer_pages_list = function(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var spritemap = soy.asserts.assertType(goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleDeleteButtonClicked = opt_data._handleDeleteButtonClicked;
  /** @type {*|null|undefined} */
  var _handleDuplicateButtonClicked = opt_data._handleDuplicateButtonClicked;
  /** @type {*|null|undefined} */
  var _handleFieldEdited = opt_data._handleFieldEdited;
  /** @type {*|null|undefined} */
  var _handleUpdatePage = opt_data._handleUpdatePage;
  /** @type {null|number|undefined} */
  var activePage = soy.asserts.assertType(opt_data.activePage == null || goog.isNumber(opt_data.activePage), 'activePage', opt_data.activePage, 'null|number|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var contentRenderer = soy.asserts.assertType(opt_data.contentRenderer == null || (goog.isString(opt_data.contentRenderer) || opt_data.contentRenderer instanceof goog.soy.data.SanitizedContent), 'contentRenderer', opt_data.contentRenderer, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var editable = soy.asserts.assertType(opt_data.editable == null || (goog.isBoolean(opt_data.editable) || opt_data.editable === 1 || opt_data.editable === 0), 'editable', opt_data.editable, 'boolean|null|undefined');
  /** @type {?} */
  var pages = opt_data.pages;
  /** @type {null|number|undefined} */
  var total = soy.asserts.assertType(opt_data.total == null || goog.isNumber(opt_data.total), 'total', opt_data.total, 'null|number|undefined');
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', 'ddm-page-list-container');
  incrementalDom.elementOpenEnd();
  var page3653List = pages;
  var page3653ListLen = page3653List.length;
  for (var page3653Index = 0; page3653Index < page3653ListLen; page3653Index++) {
    var page3653Data = page3653List[page3653Index];
    $templateAlias3({activePage: activePage, contentRenderer: contentRenderer, editable: editable, events: {deleteFieldClicked: _handleDeleteButtonClicked, duplicateButtonClicked: _handleDuplicateButtonClicked, fieldEdited: _handleFieldEdited, updatePage: _handleUpdatePage}, page: page3653Data, pageId: page3653Index, spritemap: spritemap, total: total}, opt_ijData);
  }
  incrementalDom.elementClose('div');
};
exports.__deltemplate__FormRenderer_pages_list = __deltemplate__FormRenderer_pages_list;
/**
 * @typedef {{
 *  spritemap: (!goog.soy.data.SanitizedContent|string),
 *  _handleDeleteButtonClicked: (*|null|undefined),
 *  _handleDuplicateButtonClicked: (*|null|undefined),
 *  _handleFieldEdited: (*|null|undefined),
 *  _handleUpdatePage: (*|null|undefined),
 *  activePage: (null|number|undefined),
 *  contentRenderer: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  editable: (boolean|null|undefined),
 *  pages: (?|undefined),
 *  total: (null|number|undefined),
 * }}
 */
__deltemplate__FormRenderer_pages_list.Params;
if (goog.DEBUG) {
  __deltemplate__FormRenderer_pages_list.soyTemplateName = 'FormRenderer.__deltemplate__FormRenderer_pages_list';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('FormRenderer.pages.idom'), 'list', 0, __deltemplate__FormRenderer_pages_list);

exports.render.params = ["spritemap","_handleChangePage","_handleDeleteButtonClicked","_handleDuplicateButtonClicked","_handleExpandedChanged","_handleFieldClicked","_handleFieldEdited","_handlePaginationLeftClicked","_handlePaginationRightClicked","_handlePageSettingsClicked","_handleSuccesPageChanged","_handleUpdatePage","activePage","defaultPageTitle","dropdownExpanded","editable","modeRenderer","pages","pageSettingsItems","paginationMode","successPageLabel","successPageSettings"];
exports.render.types = {"spritemap":"string","_handleChangePage":"any","_handleDeleteButtonClicked":"any","_handleDuplicateButtonClicked":"any","_handleExpandedChanged":"any","_handleFieldClicked":"any","_handleFieldEdited":"any","_handlePaginationLeftClicked":"any","_handlePaginationRightClicked":"any","_handlePageSettingsClicked":"any","_handleSuccesPageChanged":"any","_handleUpdatePage":"any","activePage":"number","defaultPageTitle":"string","dropdownExpanded":"bool","editable":"bool","modeRenderer":"string","pages":"?","pageSettingsItems":"?","paginationMode":"string","successPageLabel":"string","successPageSettings":"?"};
templates = exports;
return exports;

});

class FormRenderer extends Component {}
Soy.register(FormRenderer, templates);
export { FormRenderer, templates };
export default templates;
/* jshint ignore:end */
