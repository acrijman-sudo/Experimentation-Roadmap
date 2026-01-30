import Papa from 'papaparse';

const ALLOWED_QUARTERS = new Set(['Q1', 'Q2,', 'Q2', 'Q3', 'Q4']);

function slugify(value) {
	return String(value || '')
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

function normalizeQuarter(q) {
	if (!q) return null;
	const s = String(q).trim().toUpperCase();
	if (s === 'Q2,' ) return 'Q2';
	return ALLOWED_QUARTERS.has(s) ? s : null;
}

function isExtraCapacity(val) {
	return String(val || '').trim().toUpperCase() === 'EXTRA';
}

export function parseCsvToRoadmap(csvText) {
	const parsed = Papa.parse(csvText, {
		header: true,
		dynamicTyping: false,
		skipEmptyLines: true
	});

	const rows = parsed.data || [];

	const objectivesMap = new Map();
	const initiativesMap = new Map(); // key: objectiveName::initiativeName -> initiativeId
	const features = [];

	for (const row of rows) {
		const objectiveName = row['Objective']?.trim();
		const initiativeName = row['Initiatives']?.trim();
		const title = row['Title']?.trim();
		const quarterRaw = row['Projected Quarter'];
		const teamCapacity = row['Team Capacity'];

		const quarter = normalizeQuarter(quarterRaw);
		// Only keep items with a valid quarter Q1..Q4
		if (!objectiveName || !initiativeName || !title || !quarter) continue;

		// Ensure objective
		if (!objectivesMap.has(objectiveName)) {
			const objId = `obj-${slugify(objectiveName)}`;
			objectivesMap.set(objectiveName, {
				id: objId,
				name: objectiveName,
				initiatives: []
			});
		}

		// Ensure initiative under objective
		const initiativeKey = `${objectiveName}::${initiativeName}`;
		if (!initiativesMap.has(initiativeKey)) {
			const initiativeId = `init-${slugify(objectiveName)}-${slugify(initiativeName)}`;
			initiativesMap.set(initiativeKey, initiativeId);
			const obj = objectivesMap.get(objectiveName);
			obj.initiatives.push({
				id: initiativeId,
				name: initiativeName
			});
		}

		// Feature
		const objective = objectivesMap.get(objectiveName);
		const initiativeId = initiativesMap.get(initiativeKey);
		const featureId = `feat-${slugify(objectiveName)}-${slugify(initiativeName)}-${slugify(title)}-${quarter}`;

		features.push({
			id: featureId,
			title,
			objectiveId: objective.id,
			initiativeId,
			quarter,
			capacity: {
				type: isExtraCapacity(teamCapacity) ? 'extra' : 'base'
			}
		});
	}

	// Final objectives array preserving insertion order
	const objectives = Array.from(objectivesMap.values());

	return {
		quarters: ['Q1', 'Q2', 'Q3', 'Q4'],
		objectives,
		features
	};
}


