import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup, PanelBody, ToolbarGroup, FormToggle
} from '@wordpress/components';
import namespace from './namespace';
import setClassName from './setClassName';

export default function Edit ({ attributes, setAttributes }) {
	const { andText, intrinsic, size } = attributes;
	let className = setClassName(attributes);

	return (
		<div
			{...useBlockProps({ className })}
		>
			<BlockControls>
				<ToolbarGroup>

				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody>
					<h2>Inline Padding</h2>
					<RadioGroup
						id="size-radiogroup"
						label={__('Inline padding', namespace)}
						checked={size}
						onChange={(value) => setAttributes({ size: value })}
					>
						<Radio value="small">Small</Radio>
						<Radio value="medium">Medium</Radio>
						<Radio value="large">Large</Radio>
					</RadioGroup>
				</PanelBody>
				<PanelBody>
					<h2>Intrinsic Centering</h2>
					<FormToggle
						checked={ intrinsic }
						onChange={(value) => setAttributes({ intrinsic: value.target.checked })}
					/>
				</PanelBody>
				<PanelBody>
					<h2>Center Text</h2>
					<FormToggle
						checked={ andText }
						onChange={(value) => setAttributes({ andText: value.target.checked })}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks/>
		</div>
	);
}
