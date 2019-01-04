import './__fixtures__/RuleEditorMockField.es';
import mockPages from 'mock/mockPages.es';
import RuleEditor from 'source/components/RuleEditor/RuleEditor.es';
import {PagesVisitor} from 'source/util/visitors.es';

let component;

const dataProviderInstancesURL = '/o/dynamic-data-mapping-form-builder-data-provider-instances/';

const dataProviderInstanceParameterSettingsURL = '/o/dynamic-data-mapping-form-builder-provider-instance-parameter-settings/';

const functionsMetadata = {
	radio: [
		{name: 'contains',
			parameterTypes: ['text', 'text'],
			returnType: 'boolean',
			value: 'Contains'},
		{name: 'equals-to',
			parameterTypes: ['text', 'text'],
			returnType: 'boolean',
			value: 'Is equal to'},
		{name: 'is-empty',
			parameterTypes: ['text'],
			returnType: 'boolean',
			value: 'Is empty'},
		{name: 'not-contains',
			parameterTypes: ['text', 'text'],
			returnType: 'boolean',
			value: 'Does not contain'},
		{name: 'not-equals-to',
			parameterTypes: ['text', 'text'],
			returnType: 'boolean',
			value: 'Is not equal to'},
		{name: 'not-is-empty',
			parameterTypes: ['text'],
			returnType: 'boolean',
			value: 'Is not empty'}
	],
	text: [
		{name: 'contains',
			parameterTypes: ['text', 'text'],
			returnType: 'boolean',
			value: 'Contains'},
		{name: 'equals-to',
			parameterTypes: ['text', 'text'],
			returnType: 'boolean',
			value: 'Is equal to'},
		{name: 'is-empty',
			parameterTypes: ['text'],
			returnType: 'boolean',
			value: 'Is empty'},
		{name: 'not-contains',
			parameterTypes: ['text', 'text'],
			returnType: 'boolean',
			value: 'Does not contain'},
		{name: 'not-equals-to',
			parameterTypes: ['text', 'text'],
			returnType: 'boolean',
			value: 'Is not equal to'},
		{name: 'not-is-empty',
			parameterTypes: ['text'],
			returnType: 'boolean',
			value: 'Is not empty'}
	],
	user: [
		{name: 'belongs-to',
			parameterTypes: ['text'],
			returnType: 'boolean',
			value: 'Belongs to'}
	]
};

const functionsURL = '/o/dynamic-data-mapping-form-builder-functions/';

const pages = [...mockPages];

const spritemap = 'icons.svg';

const rolesURL = '/o/dynamic-data-mapping-form-builder-roles/';

const getBaseConfig = () => ({
	conditions: [],
	dataProviderInstanceParameterSettingsURL,
	dataProviderInstancesURL,
	functionsMetadata,
	functionsURL,
	pages,
	rolesURL,
	spritemap
});

describe(
	'Rule Editor',
	() => {
		describe(
			'Acceptance Criteria',
			() => {
				afterEach(
					() => {
						fetch.resetMocks();

						component.dispose();
						component = null;
					}
				);

				beforeEach(
					() => {
						jest.useFakeTimers();

						fetch.mockResponse(
							JSON.stringify(
								[
									{
										id: 'roleA',
										name: 'Role A'
									}
								]
							)
						);
					}
				);

				describe(
					'When a condition is added and there\'s more than one condition, there must be an option the delete the condition',
					() => {
						it(
							'should display a confirmation modal when trying to delete a condition',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['date']);
								component.refs.conditionOperator0.emitFieldEdited(['not-equals-to']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);
								component.refs.addConditionButton.emit('click');

								jest.runAllTimers();

								component.refs.trashButton0.emit(
									'click',
									{
										currentTarget: component.refs.trashButton0.element
									}
								);

								jest.runAllTimers();

								expect(component).toMatchSnapshot();
							}
						);

						it(
							'should delete a condition of user accepts confirmation modal',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['date']);
								component.refs.conditionOperator0.emitFieldEdited(['not-equals-to']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);
								component.refs.addConditionButton.emit('click');

								jest.runAllTimers();

								component.refs.trashButton0.emit(
									'click',
									{
										currentTarget: component.refs.trashButton0.element
									}
								);

								jest.runAllTimers();

								component.refs.confirmationModalCondition.element.querySelector('.btn-primary').click();

								jest.runAllTimers();

								expect(component.conditions.length).toBe(1);
							}
						);
					}
				);

				describe(
					'The OR select must be disabled by default',
					() => {
						it(
							'should disable the "AND" or "OR" selector when there\'s only one condtion',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								jest.runAllTimers();

								expect(component.refs.logicalOperatorDropDownButton.hasAttribute('disabled')).toBe(true);
							}
						);
					}
				);

				describe(
					'The OR select must be activated if the are more than one condition',
					() => {
						it(
							'should enable the "AND" or "OR" selector when there\'s more than one condtion',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['date']);
								component.refs.conditionOperator0.emitFieldEdited(['not-equals-to']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

								component.refs.addConditionButton.emit('click');

								jest.runAllTimers();

								expect(component.refs.logicalOperatorDropDownButton.hasAttribute('disabled')).toBe(false);
							}
						);
					}
				);

				describe(
					'Clear all fields when first operand is not selected',
					() => {
						it(
							'should make operators field "read only" when first operand is not selected',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['']);

								jest.runAllTimers();

								expect(component.refs.conditionOperator0.readOnly).toBeTruthy();
							}
						);

						it(
							'should hide the second operand type selector when first operand is not selected',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['']);

								jest.runAllTimers();

								expect(component.refs.secondOperandTypeSelector0).toBeFalsy();
							}
						);

						it(
							'should hide the second operand when first operand is not selected',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['']);

								jest.runAllTimers();

								expect(component.refs.secondOperand0).toBeFalsy();
							}
						);

						it(
							'should reset the operator, and hide the second operand type selector and second operand',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);
								component.refs.conditionOperator0.emitFieldEdited(['not-contains']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

								jest.runAllTimers();

								component.refs.secondOperand0.emitFieldEdited(['123']);

								jest.runAllTimers();

								component.refs.firstOperand0.emitFieldEdited(['']);

								jest.runAllTimers();

								expect(component.refs.conditionOperator0.value).toEqual(['']);
								expect(component.refs.secondOperandTypeSelector0).toBeFalsy();
								expect(component.refs.secondOperand0).toBeFalsy();
							}
						);

						it(
							'should reset the operator, and hide the second operand type selector and second operand',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);
								component.refs.conditionOperator0.emitFieldEdited(['not-contains']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

								jest.runAllTimers();

								component.refs.secondOperand0.emitFieldEdited(['123']);

								jest.runAllTimers();

								component.refs.firstOperand0.emitFieldEdited(['text1']);

								jest.runAllTimers();

								expect(component.refs.conditionOperator0.value).toEqual(['']);
								expect(component.refs.secondOperandTypeSelector0).toBeFalsy();
								expect(component.refs.secondOperand0).toBeFalsy();
							}
						);

						it(
							'should not reset second operand type selector nor second operand when operator changes from a binary type to another binary type',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);
								component.refs.conditionOperator0.emitFieldEdited(['not-contains']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

								jest.runAllTimers();

								component.refs.secondOperand0.emitFieldEdited(['123']);

								jest.runAllTimers();

								component.refs.conditionOperator0.emitFieldEdited(['contains']);

								jest.runAllTimers();

								expect(component.refs.conditionOperator0.value).toEqual(['contains']);
								expect(component.refs.secondOperandTypeSelector0.value).toEqual(['value']);
								expect(component.refs.secondOperand0.value).toEqual('123');
							}
						);

						it(
							'should hide second operand type selector and hide second operand when operator changes from a binary type to an unary type',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);
								component.refs.conditionOperator0.emitFieldEdited(['not-contains']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

								jest.runAllTimers();

								component.refs.secondOperand0.emitFieldEdited(['123']);

								jest.runAllTimers();

								component.refs.conditionOperator0.emitFieldEdited(['is-empty']);

								jest.runAllTimers();

								expect(component.refs.secondOperandTypeSelector0).toBeFalsy();
								expect(component.refs.secondOperand0).toBeFalsy();
							}
						);

						it(
							'should not make operators field "read only" when first operand is selected',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);

								jest.runAllTimers();

								expect(component.refs.conditionOperator0.readOnly).toBeFalsy();
							}
						);
					}
				);

				describe(
					'should configure the conditions according to the first operand type',
					() => {
						it(
							'should populate operators when the first selected operand is a field',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);

								jest.runAllTimers();

								expect(component.refs.conditionOperator0.options).toMatchSnapshot();
							}
						);

						it(
							'should populate operators when the first selected operand is an user',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['user']);

								jest.runAllTimers();

								expect(component.refs.conditionOperator0.options).toMatchSnapshot();
							}
						);

						it(
							'should fetch roles when rendered',
							() => {
								const spy = jest.spyOn(window, 'fetch');

								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								expect(spy).toHaveBeenCalledWith(component.rolesURL, expect.anything());
							}
						);

						// it(
						// 	'should fetch data providers when rendered',
						// 	() => {
						// 		const spy = jest.spyOn(window, 'fetch');

						// 		component = new RuleEditor(
						// 			{
						// 				...getBaseConfig()
						// 			}
						// 		);

						// 		expect(spy).toHaveBeenCalledWith(component.dataProviderInstancesURL, expect.anything());
						// 	}
						// );

						it(
							'should keep operator values the same when first operand changes to another value of the same type',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['text1']);

								jest.runAllTimers();

								const previousOperators = component.refs.conditionOperator0.options;

								component.refs.firstOperand0.emitFieldEdited(['text2']);

								jest.runAllTimers();

								expect(component.refs.conditionOperator0.options).toEqual(previousOperators);
							}
						);

						it(
							'should clear first operand when field is removed from pages',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);

								jest.runAllTimers();

								component.pages = [];

								jest.runAllTimers();

								expect(component.refs.firstOperand0.value).toEqual(['']);
							}
						);

						it(
							'should not clear first operand when pages are changed and first operand is User',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['user']);

								jest.runAllTimers();

								component.pages = [];

								jest.runAllTimers();

								expect(component.refs.firstOperand0.value).toEqual(['user']);
							}
						);

						it(
							'should not clear first operand when pages were changed but selected field was not removed',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);

								jest.runAllTimers();

								component.pages = [
									...component.pages,
									{
										rows: [
											{
												columns: [
													{
														fields: [
															{
																fieldName: 'newField',
																label: 'New Field',
																type: 'text'
															}
														]
													}
												]
											}
										]
									}
								];

								jest.runAllTimers();

								expect(component.refs.firstOperand0.value).toEqual(['radio']);
							}
						);

						it(
							'should not clear second operand value when pages were changed but selected field was not removed',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);

								component.refs.conditionOperator0.emitFieldEdited(['not-contains']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

								jest.runAllTimers();

								component.refs.secondOperand0.emitFieldEdited('123');

								jest.runAllTimers();

								component.pages = [
									...component.pages,
									{
										rows: [
											{
												columns: [
													{
														fields: [
															{
																fieldName: 'newField',
																label: 'New Field',
																type: 'text'
															}
														]
													}
												]
											}
										]
									}
								];

								jest.runAllTimers();

								expect(component.refs.firstOperand0.value).toEqual(['radio']);

								expect(component.refs.secondOperandTypeSelector0.value).toEqual(['value']);

								expect(component.refs.secondOperand0.value).toEqual('123');
							}
						);

						it(
							'should not display second operand type selector ("Other Field" or "Value") when operator is empty',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);
								component.refs.conditionOperator0.emitFieldEdited(['not-equals-to']);

								jest.runAllTimers();

								expect(component.refs.secondOperandTypeSelector0).toBeTruthy();

								component.refs.conditionOperator0.emitFieldEdited(['']);

								jest.runAllTimers();

								expect(component.refs.secondOperandTypeSelector0).toBeFalsy();
							}
						);

						// it(
						// 	'should mirror options of a field that has options in second operand when condition compares values',
						// 	() => {
						// 		component = new RuleEditor(
						// 			{
						// 				...getBaseConfig()
						// 			}
						// 		);

						// 		const visitor = new PagesVisitor(component.pages);

						// 		let radioField;

						// 		visitor.mapFields(
						// 			field => {
						// 				if (field.fieldName === 'radio') {
						// 					radioField = field;
						// 				}
						// 			}
						// 		);

						// 		component.refs.firstOperand0.emitFieldEdited(['radio']);
						// 		component.refs.conditionOperator0.emitFieldEdited(['not-equals-to']);

						// 		jest.runAllTimers();

						// 		component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

						// 		jest.runAllTimers();

						// 		expect(component.refs.secondOperand0.options).toEqual(radioField.options);
						// 	}
						// );

						it(
							'should reset second operand type selector ("Other Field" or "Value") and hide second operand when selected field is removed',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);
								component.refs.conditionOperator0.emitFieldEdited(['not-equals-to']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['field']);

								jest.runAllTimers();

								component.refs.secondOperand0.emitFieldEdited(['date']);

								component.pages = [
									{
										rows: [
											{
												columns: [
													{
														fields: [
															{
																fieldName: 'radio',
																label: 'Field A'
															}
														]
													}
												]
											}
										]
									}
								];

								jest.runAllTimers();

								expect(component.refs.secondOperandTypeSelector0.value).toEqual(['']);
								expect(component.refs.secondOperand0).toBeFalsy();
							}
						);

						it(
							'should reset second operand type selector ("Other Field" or "Value") and hide second operand when first operand field is changed',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);
								component.refs.conditionOperator0.emitFieldEdited(['not-equals-to']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['field']);

								jest.runAllTimers();

								component.refs.secondOperand0.emitFieldEdited(['date']);

								jest.runAllTimers();

								component.refs.firstOperand0.emitFieldEdited(['date']);

								jest.runAllTimers();

								component.refs.conditionOperator0.emitFieldEdited(['equals-to']);

								jest.runAllTimers();

								expect(component.refs.secondOperandTypeSelector0.value).toEqual(['']);
								expect(component.refs.secondOperand0).toBeFalsy();
							}
						);

						it(
							'should add a new condition to the conditions array',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['date']);
								component.refs.conditionOperator0.emitFieldEdited(['not-equals-to']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

								component.refs.addConditionButton.emit('click');

								jest.runAllTimers();

								expect(component.conditions.length).toBe(2);

								expect(component).toMatchSnapshot();
							}
						);

						it(
							'should change all logical operators when changing it via the global logical operator selector',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['date']);
								component.refs.conditionOperator0.emitFieldEdited(['not-equals-to']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

								component.refs.addConditionButton.emit('click');

								jest.runAllTimers();

								component.element.querySelector('[data-logical-operator-value="and"]').click();

								jest.runAllTimers();

								expect(component).toMatchSnapshot();
							}
						);
					}
				);

				describe(
					'When the user choose any of the options of the action a select target should be displayed',
					() => {
						it(
							'should display the action target according to action type (Show, Enable or Required)',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.action0.emitFieldEdited(['show']);

								jest.runAllTimers();

								expect(component.refs.actionTarget0).toBeTruthy();
							}
						);

						it(
							'should add to the deletedField all the fields removed from the FormBuilder',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);

								jest.runAllTimers();

								const formBuilderFields = component.fieldOptions.map(a => a.fieldName);

								component.pages = [];

								jest.runAllTimers();

								const notEquals = formBuilderFields.some(
									item => component.deletedFields.indexOf(item) == -1
								);

								expect(notEquals).toEqual(false);
							}
						);

						it(
							'should not reset the target after setting a target to an action and click in the action selected without changing it',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.action0.emitFieldEdited(['show']);

								jest.runAllTimers();

								component.refs.actionTarget0.emitFieldEdited(['date']);

								jest.runAllTimers();

								component.refs.action0.emitFieldEdited(['show']);

								expect(component.refs.actionTarget0.value).toEqual(['date']);
							}
						);

						it(
							'should show Result field when the action Calculate is selected',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.action0.emitFieldEdited(['calculate']);

								jest.runAllTimers();

								const resultField = !!component.refs.calculatorResult0;

								expect(resultField).toBe(true);

							}
						);

						it(
							'should show Result field when the action Calculate is selected',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.action0.emitFieldEdited(['calculate']);

								jest.runAllTimers();

								let resultField = !!component.refs.calculatorResult0;

								expect(resultField).toBe(true);

								component.refs.action0.emitFieldEdited(['show']);

								jest.runAllTimers();

								jest.runAllTimers();

								resultField = !!component.refs.calculatorResult0;

								expect(resultField).toBe(false);
							}
						);

						it(
							'should refresh the target when the user changes any of the options of the first action select between (Show, Enable or Required)',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.action0.emitFieldEdited(['show']);

								jest.runAllTimers();

								component.refs.actionTarget0.emitFieldEdited(['date']);

								jest.runAllTimers();
								component.refs.action0.emitFieldEdited(['enable']);

								jest.runAllTimers();

								expect(component.refs.actionTarget0.value).toEqual(['']);
							}
						);

						it(
							'should refresh the target when the user changes de Action from autofill to Show, Enable or Required',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.action0.emitFieldEdited(['auto-fill']);

								jest.runAllTimers();

								component.refs.actionTarget0.emitFieldEdited(['36582']);

								jest.runAllTimers();

								component.refs.action0.emitFieldEdited(['enable']);

								jest.runAllTimers();

								expect(component.refs.actionTarget0.value).toEqual(['']);
							}
						);

						it(
							'should display the action target according to action type (Autofill)',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.action0.emitFieldEdited(['auto-fill']);

								jest.runAllTimers();

								expect(component.refs.actionTarget0).toBeTruthy();

								const labelVisible = !document.querySelector('.form-group-item-label').classList.contains('hide');

								expect(labelVisible).toBeTruthy();
							}
						);

						it(
							'should display only one data-provider label everytime an autofill target is selected',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.action0.emitFieldEdited(['auto-fill']);

								jest.runAllTimers();

								component.refs.actionTarget0.emitFieldEdited(['36808']);

								jest.runAllTimers();

								component.refs.actionTarget0.emitFieldEdited(['36777']);

								const labelQuantityAfter = document.querySelectorAll('.form-group-item-label.target-message-0').length;

								jest.runAllTimers();

								expect(labelQuantityAfter).toBe(1);
							}
						);

						it(
							'should duplicate an action when duplicate field is clicked',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.action0.emitFieldEdited(['show']);

								jest.runAllTimers();

								component.refs.addActionButton.emit('click');

								jest.runAllTimers();

								component.refs.trashButtonAction0.emit(
									'click',
									{
										currentTarget: component.refs.trashButtonAction0.element
									}
								);

								jest.runAllTimers();

								component.refs.confirmationModalAction.element.querySelector('.btn-primary').click();

								jest.runAllTimers();

								expect(component.actions.length).toBe(1);
							}
						);
					}
				);

				describe(
					'When a rule is not fully filled with actions and conditions',
					() => {
						it(
							'the save rule button must be disabled',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								expect(component.refs.save.disabled).toBe(true);
								expect(component.refs.cancel.disabled).toBe(false);
							}
						);
					}
				);

				describe(
					'When a rule is fully filled with actions and conditions',
					() => {
						it(
							'the save rule button must be enabled',
							() => {
								component = new RuleEditor(
									{
										...getBaseConfig()
									}
								);

								component.refs.firstOperand0.emitFieldEdited(['radio']);

								jest.runAllTimers();

								component.refs.conditionOperator0.emitFieldEdited(['not-contains']);

								jest.runAllTimers();

								component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

								jest.runAllTimers();

								component.refs.secondOperand0.emitFieldEdited(['123']);

								component.refs.action0.emitFieldEdited(['show']);

								jest.runAllTimers();

								component.refs.actionTarget0.emitFieldEdited(['date']);

								jest.runAllTimers();

								expect(component.refs.save.disabled).toBe(false);
								expect(component.refs.cancel.disabled).toBe(false);
							}
						);
					}
				);

				describe(
					'When the user choose a data provider as a target',
					() => {
						it(
							'should show the inputs and outputs fields if Input and Outputs were not empty',
							done => {

								const spy = jest.spyOn(window, 'fetch');

								component = new RuleEditor(
									{
										...getBaseConfig(),
										dataProvider: [
											{
												id: '36808', 
												uuid: 'asdihgurevdnc36808', 
												name: 'Liferay'
											}
										]
									}
								);

								component.refs.action0.emitFieldEdited(['auto-fill']);

								jest.runAllTimers();

								fetch.mockResponse(
									JSON.stringify(
										{
											inputs: [
												{
													label: 'Nome',
													name: 'Name',
													required: false,
													type: 'text'
												},
												{
													label: 'Outro Nome',
													name: 'Name',
													required: true,
													type: 'text'
												}
											],
											outputs: [
												{
													name: 'Name',
													type: 'text'
												}
											]
										}
									)
								);

								component.refs.actionTarget0.emitFieldEdited(['36808']);

								jest.runAllTimers();

								component.once(
									'rendered',
									() => {
										if (component.actions[0].inputs) {
											expect(component.refs.action0dataProviderInput0).toBeTruthy();
										}
										if (component.actions[0].outputs) {
											expect(component.refs.action0dataProviderOutput0).toBeTruthy();
										}
										done();
									}
								);

								jest.runAllTimers();

								const url = component.dataProviderInstanceParameterSettingsURL.slice(0, dataProviderInstanceParameterSettingsURL.length - 1);

								expect(spy).toHaveBeenCalledWith(
									`${url}?ddmDataProviderInstanceId=36808`,
									expect.anything()
								);

								jest.runAllTimers();
							}
						);
					}
				);

				it(
					'should not show Inputs and Outputs if the dataprovider\'s inputs and outputs were empty',
					done => {

						component = new RuleEditor(
							{
								...getBaseConfig(),
								dataProvider: [
									{
										id: '36777', 
										uuid: 'asdihgurevdnc36808', 
										name: 'Liferay'
									}
								],
								actions: []
							}
						);

						component.refs.action0.emitFieldEdited(['auto-fill']);

						jest.runAllTimers();

						fetch.mockResponse(
							JSON.stringify(
								{
									inputs: [],
									outputs: []
								}
							)
						);

						jest.runAllTimers();

						component.refs.actionTarget0.emitFieldEdited(['36777']);

						component.once(
							'rendered',
							() => {
								const divHasChildren = document.querySelector('.action-rule-data-provider > .col-md-12').hasChildNodes();

								expect(divHasChildren).toBeFalsy();
								done();
							}
						);

						jest.runAllTimers();
					}
				);

				it(
					'should not reset inputs and output if the same data provider were selected',
					done => {
						component = new RuleEditor(
							{
								...getBaseConfig(),
								dataProvider: [
									{
										id: '36808', 
										uuid: 'asdihgurevdnc36808', 
										name: 'Liferay'
									}
								]
							}
						);

						component.refs.action0.emitFieldEdited(['auto-fill']);

						jest.runAllTimers();

						fetch.mockResponse(
							JSON.stringify(
								{
									inputs: [
										{
											label: 'Nome',
											name: 'Name',
											required: false,
											type: 'text'
										},
										{
											label: 'Outro Nome',
											name: 'Name',
											required: true,
											type: 'text'
										}
									],
									outputs: [
										{
											name: 'Name',
											type: 'list'
										}
									]
								}
							)
						);

						component.refs.actionTarget0.emitFieldEdited(['36808']);

						jest.runAllTimers();

						component.once(
							'rendered',
							() => {
								component.refs.action0dataProviderOutput0.emitFieldEdited(['Name']);

								jest.runAllTimers();

								component.refs.actionTarget0.emitFieldEdited(['36808']);

								jest.runAllTimers();

								expect(component.refs.action0dataProviderOutput0.value).toEqual(['Name']);
								done();
							}
						);
					}
				);

				it(
					'should display only select field types option in the output sections according to the List Type configured in the Data Provider ',
					done => {
						component = new RuleEditor(
							{
								...getBaseConfig(),
								dataProvider: [
									{
										id: '36808', 
										uuid: 'asdihgurevdnc36808', 
										name: 'Liferay'
									}
								]
							}
						);

						component.refs.action0.emitFieldEdited(['auto-fill']);

						jest.runAllTimers();

						fetch.mockResponse(
							JSON.stringify(
								{
									inputs: [
										{
											label: 'Nome',
											name: 'Name',
											required: false,
											type: 'text'
										},
										{
											label: 'Outro Nome',
											name: 'Name',
											required: true,
											type: 'text'
										}
									],
									outputs: [
										{
											name: 'Name',
											type: 'list'
										}
									]
								}
							)
						);

						component.refs.actionTarget0.emitFieldEdited(['36808']);

						jest.runAllTimers();

						component.once(
							'rendered',
							() => {
								const fieldOptions = component.actions[0].outputs[0].fieldOptions;

								jest.runAllTimers();

								expect(fieldOptions.some(({type}) => type === 'text')).toBeFalsy();
								done();
							}
						);
					}
				);

				it(
					'should display any field types option in the output sections according to the List Text configured in the Data Provider ',
					done => {
						component = new RuleEditor(
							{
								...getBaseConfig(),
								dataProvider: [
									{
										id: '36808', 
										uuid: 'asdihgurevdnc36808', 
										name: 'Liferay'
									}
								]
							}
						);

						component.refs.action0.emitFieldEdited(['auto-fill']);

						jest.runAllTimers();

						fetch.mockResponse(
							JSON.stringify(
								{
									inputs: [
										{
											label: 'Nome',
											name: 'Name',
											required: false,
											type: 'text'
										},
										{
											label: 'Outro Nome',
											name: 'Name',
											required: true,
											type: 'text'
										}
									],
									outputs: [
										{
											name: 'Name',
											type: 'list'
										}
									]
								}
							)
						);

						component.refs.actionTarget0.emitFieldEdited(['36808']);

						jest.runAllTimers();

						component.once(
							'rendered',
							() => {
								const fieldOptions = component.actions[0].inputs[0].fieldOptions;

								jest.runAllTimers();

								expect(fieldOptions.some(({type}) => type === 'text')).toBeTruthy();
								done();
							}
						);
					}
				);
			}
		);
	}
);

describe(
	'Regression',
	() => {
		afterEach(
			() => {
				fetch.resetMocks();

				component.dispose();
			}
		);

		beforeEach(
			() => {
				jest.useFakeTimers();

				fetch.mockResponse(
					JSON.stringify(
						[
							{
								id: 'roleA',
								name: 'Role A'
							}
						]
					)
				);
			}
		);

		describe(
			'LPS-86162 The filled value is being lost when re-selecting Value in the rule builder',
			() => {
				it(
					'should not clear second operand value when there were no changes on second oprand type',
					() => {
						component = new RuleEditor(
							{
								...getBaseConfig()
							}
						);

						component.refs.firstOperand0.emitFieldEdited(['radio']);
						component.refs.conditionOperator0.emitFieldEdited(['not-contains']);

						jest.runAllTimers();

						component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

						jest.runAllTimers();

						component.refs.secondOperand0.emitFieldEdited(['123']);

						jest.runAllTimers();

						component.refs.secondOperandTypeSelector0.emitFieldEdited(['value']);

						jest.runAllTimers();

						expect(component.refs.secondOperand0.value).toEqual('123');
					}
				);
			}
		);
	}
);