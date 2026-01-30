import { Alert, Box, Container, LinearProgress, Stack, Tab, Tabs, Typography } from '@mui/material';
import PivotTable from './components/PivotTable.jsx';
import { useRoadmapData } from './hooks/useRoadmapData.js';
import ExperimentationRoadmap from './pages/ExperimentationRoadmap.jsx';
import React from 'react';

export default function App() {
	const { loading, data, error } = useRoadmapData();
	const { quarters, objectives, features } = data;
	const [tab, setTab] = React.useState(0);

	return (
		<Container maxWidth={false} disableGutters sx={{ py: 4, px: 3 }}>
			<Stack spacing={3}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={tab} onChange={(_, v) => setTab(v)}>
						<Tab label="Roadmap - All" />
						<Tab label="Roadmap - Core (FIT)" />
						<Tab label="Roadmap - Split (FIT + Extra)" />
						<Tab label="Roadmap - FIT Order" />
						<Tab label="Roadmap - Random (All Order)" />
					</Tabs>
				</Box>
				{tab === 0 && <ExperimentationRoadmap fitOnly={false} />}
				{tab === 1 && <ExperimentationRoadmap fitOnly={true} />}
				{tab === 2 && <ExperimentationRoadmap fitFirst={true} />}
				{tab === 3 && (
					<ExperimentationRoadmap
						fitOnly={true}
						flatObjectives={true}
						initiativeOrder={[
							'Global Holdout',
							'Experiment Reporting',
							'Platform Monitoring',
							'Enterprise Experiments',
							'AEP Adobe Profile',
							'Content Experimentation',
							'Experiments Bank',
							'Intelligent Traffic Allocation',
							'Anomaly Alerting'
						]}
					/>
				)}
				{tab === 4 && (
					<ExperimentationRoadmap
						fitOnly={false}
						fitFirst={true}
						flatObjectives={true}
						hideHeader={true}
						sectionTitle="Random Order (All)"
						initiativeOrder={[
							'Global Holdout',
							'Experiment Reporting',
							'Platform Monitoring',
							'Enterprise Experiments',
							'AEP Adobe Profile',
							'Content Experimentation',
							'Experiments Bank',
							'Intelligent Traffic Allocation',
							'Anomaly Alerting',
							'Experimentation Agent',
							'Traffic Lanes',
							'AJO Campaigns',
							'Knowledge Bot',
							'Agents Monitoring',
							'Advanced Experimentation Execution'
						]}
					/>
				)}
			</Stack>
		</Container>
	);
}


