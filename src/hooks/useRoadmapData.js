import { useEffect, useMemo, useState } from 'react';
import { parseCsvToRoadmap } from '../utils/csvToRoadmap.js';
import fallbackData from '../data/roadmap.json';

export function useRoadmapData() {
	const [state, setState] = useState({
		loading: true,
		data: fallbackData,
		error: null
	});

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const res = await fetch('/Roadmap(Roadmap Items).csv', { cache: 'no-store' });
				if (!res.ok) throw new Error(`Failed to fetch CSV (${res.status})`);
				const text = await res.text();
				const parsed = parseCsvToRoadmap(text);
				if (isMounted) {
					setState({ loading: false, data: parsed, error: null });
				}
			} catch (err) {
				if (isMounted) {
					setState({ loading: false, data: fallbackData, error: err.message || String(err) });
				}
			}
		})();
		return () => {
			isMounted = false;
		};
	}, []);

	return state;
}


