import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';

export default function FeatureCard({ feature }) {
	const isExtra =
		feature?.capacity && feature.capacity.type?.toLowerCase() === 'extra';
	const extraValue =
		isExtra && typeof feature.capacity.value === 'number'
			? feature.capacity.value
			: undefined;
	const isMvp = typeof feature?.title === 'string' && /mvp/i.test(feature.title);

	return (
		<Card
			variant="outlined"
			sx={{
				width: '100%',
				minWidth: 0,
				boxShadow: 0,
				borderColor: 'divider'
			}}
		>
			<CardContent sx={{ p: 1.25 }}>
				<Stack direction="row" spacing={1} alignItems="center">
					<Typography variant="subtitle2" fontWeight={700} sx={{ wordBreak: 'break-word' }}>
						{feature.title}
					</Typography>
				</Stack>
				{(isMvp || isExtra) ? (
					<Box sx={{ mt: 0.5, display: 'flex', justifyContent: 'flex-end', gap: 0.5 }}>
						{isMvp ? (
							<Chip size="small" color="primary" variant="filled" label="MVP" sx={{ height: 20 }} />
						) : null}
						{isExtra ? (
							<Chip size="small" color="secondary" label={extraValue ? `Extra ${extraValue}` : 'Extra'} sx={{ height: 22 }} />
						) : null}
					</Box>
				) : null}
			</CardContent>
		</Card>
	);
}


