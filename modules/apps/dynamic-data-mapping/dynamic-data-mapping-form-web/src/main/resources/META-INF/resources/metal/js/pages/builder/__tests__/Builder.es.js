import Builder from '../Builder.es';
import {dom as MetalTestUtil} from 'metal-dom';

let component;
const spritemap = 'icons.svg';
let addButton;

describe(
	'Builder',
	() => {
		beforeEach(
			() => {
				jest.useFakeTimers();

				MetalTestUtil.enterDocument('<button id="addFieldButton"></button>');

				MetalTestUtil.enterDocument('<div class="ddm-translation-manager"></div>');

				MetalTestUtil.enterDocument('<div class="ddm-form-basic-info"></div>');

				addButton = document.querySelector('#addFieldButton');

				component = new Builder(
					{
						spritemap
					}
				);
			}
		);

		afterEach(
			() => {
				MetalTestUtil.exitDocument(addButton);
				if (component) {
					component.dispose();
				}
			}
		);

		it(
			'should render the default markup',
			() => {
				expect(component).toMatchSnapshot();
			}
		);

		it(
			'should continue to propagate the fieldAdded event',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {sidebar} = component.refs;
				const mockEvent = jest.fn();

				sidebar.emit('fieldAdded', mockEvent);

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith('fieldAdded', expect.anything());
			}
		);

		it(
			'should continue to propagate the fieldEdited event',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {sidebar} = component.refs;
				const mockEvent = jest.fn();

				sidebar.emit('fieldEdited', mockEvent);

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith('fieldEdited', expect.anything());
			}
		);

		it(
			'should continue to propagate the fieldMoved event',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {FormRenderer} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('fieldMoved', mockEvent);

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith('fieldMoved', expect.anything());
			}
		);

		it(
			'should continue to propagate pagesUpdated event',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {FormRenderer} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('pagesUpdated', mockEvent);

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith('pagesUpdated', expect.anything());
			}
		);

		it(
			'should continue to propagate pageAdded event',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {FormRenderer} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('pageAdded', mockEvent);

				jest.runAllTimers();

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith('pagesUpdated', expect.anything());
			}
		);

		it(
			'should continue to propagate the fieldClicked event and open the sidebar',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {FormRenderer, sidebar} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('fieldClicked', mockEvent);

				jest.runAllTimers();

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith('fieldClicked', expect.anything());
				expect(sidebar.state.show).toBeTruthy();
			}
		);

		it(
			'should continue to propagate the duplicateField event',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {FormRenderer} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('duplicateButtonClicked', mockEvent);

				jest.runAllTimers();

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith('duplicateField', expect.anything());
			}
		);

		it(
			'should open sidebar when active page is changed and mode is "add"',
			() => {
				const {FormRenderer} = component.refs;
				const mode = 'add';

				FormRenderer.emit('activePageUpdated', {mode});

				jest.runAllTimers();

				expect(component).toMatchSnapshot();
			}
		);

		it(
			'should not open sidebar when the active page is changed and mode is not "add"',
			() => {
				const {FormRenderer} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('activePageUpdated', mockEvent);

				jest.runAllTimers();

				expect(component).toMatchSnapshot();
			}
		);

		it(
			'should show modal when trash button gets clicked',
			() => {
				const {FormRenderer} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('deleteFieldClicked', mockEvent);

				const modal = document.querySelector('.modal');

				jest.runAllTimers();

				expect(modal.classList.contains('show')).toEqual(true);

				expect(component).toMatchSnapshot();
			}
		);

		it(
			'should emit deleteField event when yes is clicked in the modal',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {FormRenderer} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('deleteFieldClicked', mockEvent);

				component.element.querySelectorAll('.modal-content .btn-group .btn-group-item button')[1].click();

				jest.runAllTimers();

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith('deleteField', expect.anything());
			}
		);
	}
);