import {Align} from 'metal-position';
import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import dom from 'metal-dom';
import Popover from '../Popover/Popover.es';

class ShareFormPopover extends Component {
    static PROPS = {
        url: Config.string().required()
    };

    static STATE = {
        visible: Config.bool().value(false)
    };

    attached() {
        const shareFormIcon = document.querySelector('.share-form-icon');

        dom.on(shareFormIcon, 'click', this._handleShareFormIconClicked);
    }

    render() {
        const shareFormIcon = document.querySelector('.share-form-icon');
        const {visible} = this.state;

        return (
            <Popover
                alignElement={shareFormIcon}
                content={'test'}
                placement={Align.LeftCenter}
                portalElement={document.body}
                visible={visible}
            />
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