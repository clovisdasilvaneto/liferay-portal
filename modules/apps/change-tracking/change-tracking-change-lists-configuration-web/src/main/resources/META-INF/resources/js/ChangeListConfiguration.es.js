import PortletBase from 'frontend-js-web/liferay/PortletBase.es';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import {openToast} from 'frontend-js-web/liferay/toast/commands/OpenToast.es';

import templates from './ChangeListConfiguration.soy';

/**
 * Component for the Change Tracking Change Lists configuration screen
 * @review
 */
class ChangeListConfiguration extends PortletBase {

	created() {
		this._getDataRequest(
			this.urlChangeTrackingConfiguration,
			response => {
				if (response) {
					this.setState(
						{
							changeTrackingEnabled: response.changeTrackingEnabled,
							initialFetch: true,
							tooltipBody: response.supportedContentTypes
						}
					);
				}
			}
		);
	}

	/**
	 * Handles the change of the toggle
	 * @param {!Event} event
	 * @private
	 * @review
	 */
	handleCheck(event) {
		this.setState(
			{
				changeTrackingEnabled: event.target.checked
			}
		);
	}

	/**
	 * Saves the configuration
	 * @param {!Event} event
	 * @private
	 * @review
	 */
	save(event) {
		event.preventDefault();

		let data = {
			changeTrackingEnabled: this.changeTrackingEnabled
		};

		this._putDataRequest(
			this.urlChangeTrackingConfiguration,
			data,
			response => {

				// TODO display response message

				const message = 'saved!';

				openToast(
					{
						message,
						title: Liferay.Language.get('success'),
						type: 'success'
					}
				);
			}
		);
	}

	/**
	 * Saves the configuration and redirects the user to the overview screen
	 * @param {!Event} event
	 * @private
	 * @review
	 */
	saveAndGoToOverview(event) {
		let data = {
			changeTrackingEnabled: this.changeTrackingEnabled
		};

		this._putDataRequest(
			this.urlChangeListConfigApi,
			data,
			response => {
				if (response) {

					// TODO redirect to overview
					// TODO display response message

					const message = 'saved and navigate!';

					openToast(
						{
							message,
							title: Liferay.Language.get('success'),
							type: 'success'
						}
					);
				}
			}
		);
	}

	_getDataRequest(url, callback) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const request = {
			credentials: 'include',
			headers,
			method: 'GET'
		};

		fetch(url, request)
			.then(
				response => response.json()
			)
			.then(
				response => {
					callback(response);
				}
			)
			.catch(
				(error) => {
					const message = typeof error === 'string' ?
						error :
						Liferay.Language.get('error');

					openToast(
						{
							message,
							title: Liferay.Language.get('error'),
							type: 'danger'
						}
					);
				}
			);
	}

	_putDataRequest(url, bodyData, callback) {
		let body = JSON.stringify(bodyData);

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const request = {
			body,
			credentials: 'include',
			headers,
			method: 'PUT'
		};

		fetch(url, request)
			.then(
				response => response.json()
			)
			.then(
				response => {
					callback(response);
				}
			)
			.catch(
				(error) => {
					const message = typeof error === 'string' ?
						error :
						Liferay.Language.get('error');

					openToast(
						{
							message,
							title: Liferay.Language.get('error'),
							type: 'danger'
						}
					);
				}
			);
	}
}

/**
 * State definition.
 * @review
 * @static
 * @type {!Object}
 */
ChangeListConfiguration.STATE = {

	/**
	 * If true, change tracking is enabled
	 * @instance
	 * @memberOf ChangeListConfiguration
	 * @review
	 * @type {boolean}
	 */

	changeTrackingEnabled: Config.bool(),

	/**
	 * If true, an initial fetch has already happened
	 * @default false
	 * @instance
	 * @memberOf ChangeListConfiguration
	 * @review
	 * @type {boolean}
	 */

	initialFetch: Config.bool().value(false),

	/**
	 * Property that contains the url for the REST service to the change
	 * tracking configuration endpoint
	 * @default undefined
	 * @instance
	 * @memberOf ChangeListConfiguration
	 * @review
	 * @type {!string}
	 */

	urlChangeTrackingConfiguration: Config.string().required(),

	/**
	 * Path of the available icons.
	 * @default undefined
	 * @instance
	 * @memberOf ChangeListConfiguration
	 * @review
	 * @type {!string}
	 */

	spritemap: Config.string().required(),

	/**
	 * An array of content types that support change tracking
	 * @instance
	 * @memberOf ChangeListConfiguration
	 * @review
	 * @type {?array<string>}
	 */

	tooltipBody: Config.array()
};

Soy.register(ChangeListConfiguration, templates);

export default ChangeListConfiguration;