import { Box, Divider, Stack, Typography } from '@mui/material';
import FeatureCard from './FeatureCard.jsx';

function buildIndexByInitiativeAndQuarter(features) {
	const index = new Map();
	for (const f of features) {
		const key = `${f.initiativeId}::${f.quarter}`;
		if (!index.has(key)) index.set(key, []);
		index.get(key).push(f);
	}
	return index;
}

export default function PivotTable({ quarters, objectives, features }) {
	const featureIndex = buildIndexByInitiativeAndQuarter(features);
	const LEFT_COL_WIDTH = 320;

	return (
		<Stack spacing={3}>
			{/* Header row */}
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: `${LEFT_COL_WIDTH}px repeat(${quarters.length}, 1fr)`,
					alignItems: 'center',
					px: 1,
					gap: 0
				}}
			>
				<Box
					sx={{
						px: 1,
						py: 1,
						border: '1px solid',
						borderColor: 'divider',
						bgcolor: 'background.default'
					}}
				/>
				{quarters.map((q, idx) => (
					<Box
						key={q}
						sx={{
							px: 1,
							py: 1,
							border: '1px solid',
							borderColor: 'divider',
							bgcolor: 'background.default'
						}}
					>
						<Typography variant="overline" color="text.secondary">
							{q}
						</Typography>
					</Box>
				))}
			</Box>
			<Divider />

			{/* Body grouped by Objective -> Initiatives */}
			<Stack spacing={4}>
				{objectives.map((objective) => (
					<Stack key={objective.id} spacing={2}>
						<Stack spacing={1}>
							{objective.initiatives.map((initiative) => (
								<Box
									key={initiative.id}
									sx={{
										display: 'grid',
										gridTemplateColumns: `${LEFT_COL_WIDTH}px repeat(${quarters.length}, 1fr)`,
										gap: 0,
										alignItems: 'start'
									}}
								>
									<Box
										sx={{
											px: 1,
											py: 1,
											border: '1px solid',
											borderColor: 'divider'
										}}
									>
										<Stack spacing={0.5}>
											<Typography variant="overline" color="text.secondary">
												{objective.name}
											</Typography>
											<Typography variant="subtitle2" fontWeight={700}>
												{initiative.name}
											</Typography>
										</Stack>
									</Box>
									{quarters.map((q) => {
										const cellKey = `${initiative.id}::${q}`;
										const cellFeatures = featureIndex.get(cellKey) || [];
										return (
											<Box
												key={cellKey}
												sx={{
													px: 1,
													py: 1,
													minHeight: 64,
													border: '1px solid',
													borderColor: 'divider'
												}}
											>
												<Stack direction="column" spacing={1}>
													{cellFeatures.map((f) => (
														<FeatureCard key={f.id} feature={f} />
													))}
												</Stack>
											</Box>
										);
									})}
								</Box>
							))}
						</Stack>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
}


