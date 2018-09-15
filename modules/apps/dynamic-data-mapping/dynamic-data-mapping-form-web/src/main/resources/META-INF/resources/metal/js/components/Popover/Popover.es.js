import {Align} from 'metal-position';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';
import PopoverBase from 'shared/components/PopoverBase';

const POSITIONS = ['top', 'left', 'right', 'bottom'];

const getAlignPosition = (source, target, suggestedPosition) => {
	if (!suggestedPosition) {
		suggestedPosition = Align.TopCenter;
	}

	const position = Align.align(source, target, suggestedPosition);
	return POSITIONS[position];
};

const CLASSNAME = 'analytics-popover';

class Popover extends Component {
	static PROPS = {
		alignElement: Config.object(),
		content: Config.string(),
		isDescription: Config.bool(),
		title: Config.string()
	};

	static STATE = {
		position: Config.string(),
		width: Config.number().value(240)
	};

	attached() {
		return this.setPopoverWidth();
	}

	setPopoverWidth() {
		const {element} = this;
		element.style.visibility = 'hidden';
		element.style.display = 'block';

		const width = element.offsetHeight;

		element.style.visibility = 'visible';
		element.style.display = 'none';

		this.state.width = width;
	}

	render() {
		const {
			alignElement,
			content,
			title,
			visible,
			isDescription
		} = this.props;
		const {position, width} = this.state;
		const withoutContent = !content || content === title;
		const classes = getCN(CLASSNAME, {
			'no-content': withoutContent,
			'popover-large': width > 600
		});

		return (
			<PopoverBase
				elementClasses={classes}
				events={{
					stateSynced: () => {
						if (!visible) return;
						this.state.position = getAlignPosition(
							this.refs.popover.element,
							alignElement
						);
					}
				}}
				placement={position}
				ref="popover"
				visible={visible}
			>
				{isDescription && withoutContent ? (
					<PopoverBase.Body>
						<span class="text-secondary">{title}</span>
					</PopoverBase.Body>
				) : (
					<PopoverBase.Header>{title}</PopoverBase.Header>
				)}

				{content &&
					content !== title && (
						<PopoverBase.Body>
							<span class="text-secondary">{content}</span>
						</PopoverBase.Body>
					)}
			</PopoverBase>
		);
	}
}

export default Popover;