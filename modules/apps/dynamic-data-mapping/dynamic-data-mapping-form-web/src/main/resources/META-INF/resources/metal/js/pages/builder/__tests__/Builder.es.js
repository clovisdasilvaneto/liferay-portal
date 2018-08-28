import Builder from '../Builder.es';

let component;
const spritemap = 'icons.svg';

describe(
	'Builder',
	() => {
		beforeEach(
			() => {
				jest.useFakeTimers();

				component = new Builder(
					{
						spritemap
					}
				);
			}
		);

		afterEach(
			() => {
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
			'should continue to propagate the deleteField event',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {FormRenderer} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('deleteButtonClicked', mockEvent);

				expect(spy).toHaveBeenCalled();
				expect(spy).toHaveBeenCalledWith('deleteField', expect.anything());
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
			'should continue to propagate addPage event',
			() => {
				const spy = jest.spyOn(component, 'emit');
				const {FormRenderer} = component.refs;
				const mockEvent = jest.fn();

				FormRenderer.emit('addPage', mockEvent);

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
	}
);