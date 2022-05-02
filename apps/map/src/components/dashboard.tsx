import React from 'react';
import { useContext } from 'react';
import { FunctionComponent } from 'react';
import { presetContext } from '../contexts/preset';
import { Candidate } from '../models/candidate';
import { Result } from '../models/election';
import CandidateLegend from './CandidateLegend';
import CandidateOverviewList from './candidateOverviewList/CandidateOverviewList';
import PresetToggle from './PresetToggle';
import RatioList from './ratioListByDistrict/RatioList';
import TabsView from './TabsView';

interface DashboardProps {
	activePresetIndex: number;
	onPresetChange: (i: number) => void;
}

const Dashboard: FunctionComponent<DashboardProps> = ({ activePresetIndex, onPresetChange }) => {
	const preset = useContext(presetContext);

	if (!preset) return <></>;

	const candidates: Candidate[] = preset.electionData.total.result
		.sort((a, b) => b.count - a.count)
		.map((v: Result) => preset.candidateMap[v.candidateId]);

	return (
		<div className="flex-1 flex flex-col bg-black text-white p-6 lg:p-12 space-y-4 lg:space-y-12 overflow-y-hidden">
			<div className="flex flex-col lg:flex-row gap-4 lg:border-b lg:pb-6 border-gray items-center">
				<h1 className="flex-1 typo-h2">{preset.fullname}</h1>
				<PresetToggle activeIndex={activePresetIndex} onChange={onPresetChange} />
			</div>

			<div class="flex-1 hidden lg:flex flex-row space-x-12 overflow-y-auto">
				<div className="flex-1 space-y-6 h-full">
					<h2 className="typo-h4">คะแนนรวมทั้ง กทม.</h2>
					<CandidateOverviewList />
				</div>
				<div className="w-2/3 space-y-6">
					<h2 className="typo-h4">คะแนนรายเขต</h2>
					<RatioList />
					<CandidateLegend candidates={candidates}>
						ขนาดกล่อง ตามจำนวนผู้มีสิทธิ์เลือกตั้งในเขตนั้น <br />
						สัดส่วนสี ในแต่ละกล่องตามสัดส่วนคะแนนของผู้สมัคร
					</CandidateLegend>
				</div>
			</div>

			<TabsView
				className="lg:hidden"
				tabs={[
					{ name: 'คะแนนรวมทั้ง กทม.', component: <CandidateOverviewList /> },
					{ name: 'คะแนนรายเขต', component: <RatioList /> }
				]}
			/>
		</div>
	);
};

export default Dashboard;