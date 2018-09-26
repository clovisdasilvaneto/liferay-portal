import {Align} from 'metal-position';
import {EventHandler} from 'metal-events';
import autobind from 'autobind-decorator';
// import Clipboard from 'metal-clipboard';
import Component, {Config} from 'metal-jsx';
import dom from 'metal-dom';
import Popover from '../Popover/Popover.es';
import { className } from 'postcss-selector-parser';

class ShareFormPopover extends Component {
	static PROPS = {
		url: Config.func().required(),
		spritemap: Config.string().required(),
	};

	static STATE = {
		success: Config.bool().value(false),
		visible: Config.bool().value(false)
	};

	attached() {
		const shareFormIcon = document.querySelector('.share-form-icon');

		// this._clipboard = new Clipboard();
		this._eventHandler = new EventHandler();

		this._eventHandler.add(
			dom.on(shareFormIcon, 'click', this._handleShareFormIconClicked),
			// this._clipboard.on('success', this._handleClipboardSuccess)
		);
	}

	disposeInternal() {
		super.disposeInternal();

		this._clipboard.dispose();
		this._eventHandler.removeAllListeners();
	}

	render() {
		const shareFormIcon = document.querySelector('.share-form-icon');
		const {url, spritemap} = this.props;
		const {success, visible} = this.state;

		const buttonClasses = getCN(
			'btn',
			{
				'default': true,
				success
			}
		);

		return (
			<Popover
				alignElement={shareFormIcon}
				placement={Align.LeftCenter}
				portalElement={document.body}
				ref={'popover'}
				title={'copy-url'}
				visible={visible}
			>
				<div class={`form-group ${success ? 'has-success' : ''}`}>
					<div class="input-group">
						<div class="input-group-item input-group-prepend">
							<input class="form-control" readonly type="text" value={url} />
						</div>
						<span class="input-group-append input-group-item input-group-item-shrink">
							<button class={buttonClasses} data-clipboard="" data-target="#_com_liferay_dynamic_data_mapping_form_web_portlet_DDMFormAdminPortlet_clipboard" type="button">
								<span class="publish-button-text">{'copy'}</span>
								<span class="publish-button-success-icon">
									<svg
										aria-hidden="true"
										class={`lexicon-icon lexicon-icon-check`}
									>
										<use
											xlink:href={`${spritemap}#check`}
										/>
									</svg>
								</span>
							</button>
						</span>
					</div>
					<div class="form-feedback-item help-block" />
				</div>
			</Popover>
		);
	}

	@autobind
	_handleClipboardSuccess() {
		this.setState(
			{
				success: true
			}
		);
	}

	@autobind
	_handleShareFormIconClicked() {
		const {visible} = this.state;

		this.setState(
			{
				shareFormIcon: document.querySelector('.share-form-icon'),
				visible: !visible
			}
		);
	}
}

export default ShareFormPopover;