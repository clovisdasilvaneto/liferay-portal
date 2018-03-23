/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from checkbox-multiple.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DDMCheckboxMultiple.
 * @hassoydeltemplate {ddm.field.idom}
 * @public
 */

goog.module('DDMCheckboxMultiple.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('soy.asserts');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s2_2ea1799c(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  $render(opt_data, null, opt_ijData);
}
exports.__deltemplate_s2_2ea1799c = __deltemplate_s2_2ea1799c;
if (goog.DEBUG) {
  __deltemplate_s2_2ea1799c.soyTemplateName = 'DDMCheckboxMultiple.__deltemplate_s2_2ea1799c';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ddm.field.idom'), 'checkbox_multiple', 0, __deltemplate_s2_2ea1799c);


/**
 * @param {{
 *    inline: boolean,
 *    label: string,
 *    name: string,
 *    options: !Array<{label: string, value: (?)}>,
 *    pathThemeImages: string,
 *    readOnly: boolean,
 *    showAsSwitcher: boolean,
 *    showLabel: boolean,
 *    value: (?),
 *    dir: (null|string|undefined),
 *    predefinedValue: (?),
 *    required: (boolean|null|undefined),
 *    tip: (null|string|undefined)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  soy.asserts.assertType(goog.isBoolean(opt_data.inline) || opt_data.inline === 1 || opt_data.inline === 0, 'inline', opt_data.inline, 'boolean');
  var inline = /** @type {boolean} */ (!!opt_data.inline);
  soy.asserts.assertType(goog.isString(opt_data.label) || (opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, 'string|goog.soy.data.SanitizedContent');
  var label = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.label);
  soy.asserts.assertType(goog.isString(opt_data.name) || (opt_data.name instanceof goog.soy.data.SanitizedContent), 'name', opt_data.name, 'string|goog.soy.data.SanitizedContent');
  var name = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.name);
  var options = goog.asserts.assertArray(opt_data.options, "expected parameter 'options' of type list<[label: string, value: ?]>.");
  soy.asserts.assertType(goog.isString(opt_data.pathThemeImages) || (opt_data.pathThemeImages instanceof goog.soy.data.SanitizedContent), 'pathThemeImages', opt_data.pathThemeImages, 'string|goog.soy.data.SanitizedContent');
  var pathThemeImages = /** @type {string|goog.soy.data.SanitizedContent} */ (opt_data.pathThemeImages);
  soy.asserts.assertType(goog.isBoolean(opt_data.readOnly) || opt_data.readOnly === 1 || opt_data.readOnly === 0, 'readOnly', opt_data.readOnly, 'boolean');
  var readOnly = /** @type {boolean} */ (!!opt_data.readOnly);
  soy.asserts.assertType(goog.isBoolean(opt_data.showAsSwitcher) || opt_data.showAsSwitcher === 1 || opt_data.showAsSwitcher === 0, 'showAsSwitcher', opt_data.showAsSwitcher, 'boolean');
  var showAsSwitcher = /** @type {boolean} */ (!!opt_data.showAsSwitcher);
  soy.asserts.assertType(goog.isBoolean(opt_data.showLabel) || opt_data.showLabel === 1 || opt_data.showLabel === 0, 'showLabel', opt_data.showLabel, 'boolean');
  var showLabel = /** @type {boolean} */ (!!opt_data.showLabel);
  soy.asserts.assertType(opt_data.dir == null || (opt_data.dir instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.dir), 'dir', opt_data.dir, 'null|string|undefined');
  var dir = /** @type {null|string|undefined} */ (opt_data.dir);
  soy.asserts.assertType(opt_data.required == null || goog.isBoolean(opt_data.required) || opt_data.required === 1 || opt_data.required === 0, 'required', opt_data.required, 'boolean|null|undefined');
  var required = /** @type {boolean|null|undefined} */ (opt_data.required);
  soy.asserts.assertType(opt_data.tip == null || (opt_data.tip instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.tip), 'tip', opt_data.tip, 'null|string|undefined');
  var tip = /** @type {null|string|undefined} */ (opt_data.tip);
  var displayValue__soy5 = opt_data.value ? opt_data.value : opt_data.predefinedValue;
  ie_open('div', null, null,
      'class', 'form-group liferay-ddm-form-field-checkbox-multiple',
      'data-fieldname', name);
    if (showLabel) {
      ie_open('div');
        ie_open('label', null, null,
            'for', name);
          var dyn0 = label;
          if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
          itext(' ');
          if (required && options.length > 1) {
            ie_open('svg', null, null,
                'aria-hidden', 'true',
                'class', 'lexicon-icon lexicon-icon-asterisk reference-mark');
              ie_void('use', null, null,
                  'xlink:href', pathThemeImages + '/lexicon/icons.svg#asterisk');
            ie_close('svg');
          }
        ie_close('label');
        if (tip) {
          ie_open('span', null, null,
              'class', 'form-text');
            var dyn1 = tip;
            if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
          ie_close('span');
        }
      ie_close('div');
    }
    var optionList104 = options;
    var optionListLen104 = optionList104.length;
    for (var optionIndex104 = 0; optionIndex104 < optionListLen104; optionIndex104++) {
      var optionData104 = optionList104[optionIndex104];
      var checked__soy28 = function() {
        if (displayValue__soy5) {
          var currentValueList34 = displayValue__soy5;
          var currentValueListLen34 = currentValueList34.length;
          for (var currentValueIndex34 = 0; currentValueIndex34 < currentValueListLen34; currentValueIndex34++) {
            var currentValueData34 = currentValueList34[currentValueIndex34];
            if (currentValueData34 == optionData104.value) {
              iattr('checked', '');
            }
          }
        }
      };
      if (showAsSwitcher) {
        ie_open('div', null, null,
            'class', 'lfr-ddm-form-field-checkbox-switch ' + (inline ? 'lfr-ddm-form-field-checkbox-switch-inline' : ''));
          ie_open('label', null, null,
              'class', 'toggle-switch toggle-switch-option-' + optionData104.value,
              'for', name + '_' + optionData104.value);
            ie_open_start('input');
                checked__soy28();
                if (readOnly) {
                  iattr('disabled', '');
                }
                iattr('class', 'toggle-switch-check');
                iattr('id', name + '_' + optionData104.value);
                iattr('name', name);
                iattr('type', 'checkbox');
                iattr('value', optionData104.value);
            ie_open_end();
            ie_close('input');
            ie_open('span', null, null,
                'aria-hidden', 'true',
                'class', 'toggle-switch-bar');
              ie_void('span', null, null,
                  'class', 'toggle-switch-handle');
            ie_close('span');
            ie_open('span', null, null,
                'class', 'toggle-switch-text toggle-switch-text-right');
              var dyn2 = optionData104.label;
              if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
              itext(' ');
              if (required && options.length == 1) {
                ie_open('svg', null, null,
                    'aria-hidden', 'true',
                    'class', 'lexicon-icon lexicon-icon-asterisk reference-mark');
                  ie_void('use', null, null,
                      'xlink:href', pathThemeImages + '/lexicon/icons.svg#asterisk');
                ie_close('svg');
              }
            ie_close('span');
          ie_close('label');
        ie_close('div');
      } else {
        ie_open('div', null, null,
            'class', 'form-check custom-checkbox ' + (inline ? 'form-check-inline' : 'custom-control'));
          ie_open('label', null, null,
              'class', 'form-check-label-option-' + optionData104.value,
              'for', name + '_' + optionData104.value);
            ie_open_start('input');
                checked__soy28();
                if (dir) {
                  iattr('dir', dir);
                }
                if (readOnly) {
                  iattr('disabled', '');
                }
                iattr('class', 'custom-control-input');
                iattr('id', name + '_' + optionData104.value);
                iattr('name', name);
                iattr('type', 'checkbox');
                iattr('value', optionData104.value);
            ie_open_end();
            ie_close('input');
            ie_open('span', null, null,
                'class', 'form-check-description custom-control-label');
              ie_open('span', null, null,
                  'class', 'custom-control-label-text');
                var dyn3 = optionData104.label;
                if (typeof dyn3 == 'function') dyn3(); else if (dyn3 != null) itext(dyn3);
                itext(' ');
                if (required && options.length == 1) {
                  ie_open('svg', null, null,
                      'aria-hidden', 'true',
                      'class', 'lexicon-icon lexicon-icon-asterisk reference-mark');
                    ie_void('use', null, null,
                        'xlink:href', pathThemeImages + '/lexicon/icons.svg#asterisk');
                  ie_close('svg');
                }
              ie_close('span');
            ie_close('span');
          ie_close('label');
        ie_close('div');
      }
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DDMCheckboxMultiple.render';
}

exports.render.params = ["inline","label","name","pathThemeImages","readOnly","showAsSwitcher","showLabel","value","dir","predefinedValue","required","tip"];
exports.render.types = {"inline":"bool","label":"string","name":"string","pathThemeImages":"string","readOnly":"bool","showAsSwitcher":"bool","showLabel":"bool","value":"?","dir":"string","predefinedValue":"?","required":"bool","tip":"string"};
templates = exports;
return exports;

});

class DDMCheckboxMultiple extends Component {}
Soy.register(DDMCheckboxMultiple, templates);
export { DDMCheckboxMultiple, templates };
export default templates;
/* jshint ignore:end */
