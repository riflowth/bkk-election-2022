import React, { FunctionComponent, useContext, useState } from 'react';
import { presetContext } from '../contexts/preset';
import { electionIndexes } from '../data/presets';
import { ElectionDataType } from '../models/election';

interface PresetToggleProps {
	activeIndex: number;
	onChange: (e: number) => void;
}

const PresetToggle: FunctionComponent<PresetToggleProps> = ({ activeIndex, onChange }) => {
	const preset = useContext(presetContext);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	return (
		<div className="w-full md:w-auto flex flex-col relative">
			<button
				class="flex flex-row items-center md:hidden rounded-sm border border-white py-2 px-4 mb-1 typo-u5 font-bold"
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
			>
				<span className="flex-1 text-left">{electionIndexes[activeIndex].shortname}</span>
				<svg
					width="14"
					height="9"
					viewBox="0 0 14 9"
					fill="none"
					className={`transform transition-transform duration-150 ${
						isDropdownOpen ? 'rotate-180' : ''
					}`}
				>
					<path d="M1 1L7 7L13 1" stroke="white" stroke-width="2" />
				</svg>
			</button>
			<div
				className={`absolute inset-x-0 top-full md:relative flex-col md:flex-row rounded-sm border border-white bg-black z-10 overflow-hidden ${
					isDropdownOpen ? 'flex' : 'hidden md:flex'
				}`}
			>
				{electionIndexes.map(({ shortname, electionDataUrl }, index) => (
					<button
						key={shortname}
						disabled={!electionDataUrl}
						onClick={() => electionDataUrl && onChange(index)}
						className={`typo-u5 px-3 py-2 rounded-sm h-fit m-[2px] flex flex-row ${
							index === activeIndex
								? 'bg-white text-black font-semibold'
								: electionDataUrl
								? 'hover:bg-white hover:text-black'
								: 'opacity-40'
						}`}
					>
						{preset?.electionData.type === ElectionDataType.Live && (
							<div class="bg-[#D02525] text-white mr-1 px-1 font-semibold">LIVE</div>
						)}
						{shortname}
					</button>
				))}
			</div>
		</div>
	);
};

export default PresetToggle;