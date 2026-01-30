import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

export default function ExperimentationRoadmap({ fitOnly = false, extraOnly = false, hideHeader = false, sectionTitle, fitFirst = false, initiativeOrder, flatObjectives = false }) {
  const exportRef = useRef(null);
  const tableRef = useRef(null);
  // Group data by objectives
  const sourceData = [
    {
      objective: "N/A - Injection",
      color: "bg-blue-100 border-blue-500",
      themeColor: "bg-blue-500",
      textColor: "text-blue-900",
      initiatives: [
        {
          initiative: "Global Holdout",
          theme: "Co. Table Stakes",
          q1: [
            { name: "Global Holdout Group for PFRs and Experiments", capacity: "FIT" },
          ],
          q2: [
            { name: "Feature Impact Monitoring", capacity: "N/A", tag: "?" },
            { name: "Global Holdout, Observability monitoring", capacity: "FIT" }
          ],
          q3: [
            { name: "Global Holdout, include Enterprises with Org-Based Randomization", capacity: "FIT" }
          ],
          q4: []
        },
        // (Moved AJO items to Raise experiments bar)
      ]
    },
    {
      objective: "Reduce Experimentation Lifecycle time",
      color: "bg-green-100 border-green-500",
      themeColor: "bg-green-500",
      textColor: "text-green-900",
      initiatives: [
        {
          initiative: "Experiment Reporting",
          theme: "Platform Foundations",
          q1: [
            { name: "Experiment Reporting, KPIs Lifts dashboard", capacity: "FIT" },
            { name: "Experiment Reporting, KPIs Evolution and overview stats dashboard", capacity: "FIT" }
          ],
          q2: [
            { name: "Allow multiple properties for exposure event", capacity: "FIT" }
          ],
          q3: [
            { name: "Experiment Reporting, Custom KPIs", capacity: "FIT" }
          ],
          q4: [
            { name: "Experiment Reporting, Generative Summary", capacity: "FIT" }
          ]
        },
        {
          initiative: "Content Experimentation",
          theme: "Co. Table Stakes",
          q1: [],
          q2: [],
          q3: [
            { name: "Experimentation on Settings", capacity: "FIT" }
          ],
          q4: [
            { name: "Content Experimentation - MVP", capacity: "FIT" }
          ]
        },
        {
          initiative: "Advanced Experimentation Execution",
          theme: "Agentic Foundations",
          q1: [],
          q2: [],
          q3: [],
          q4: [
            { name: "Intelligent Traffic Allocation", capacity: "EXTRA" }
          ]
        },
        {
          initiative: "Intelligent Traffic Allocation",
          theme: "Agentic Foundations",
          q1: [],
          q2: [],
          q3: [
            { name: "Traffic Calculator", capacity: "FIT" }
          ],
          q4: [
            { name: "Intelligent Traffic Calculator", capacity: "FIT" }
          ]
        }
      ]
    },
    {
      objective: "Reduce leakage and interference between variants",
      color: "bg-orange-100 border-orange-500",
      themeColor: "bg-orange-500",
      textColor: "text-orange-900",
      initiatives: [
        {
          initiative: "Enterprise Experiments",
          theme: "Co. Table Stakes",
          q1: [
            { name: "Enterprise - Exclude Enterprise", capacity: "FIT" }
          ],
          q2: [
            { name: "Enterprise, Big UI Features allocation", capacity: "FIT" },
            { name: "Connected Enterprises impact on Experiments and PFRs", capacity: "FIT" }
          ],
          q3: [
            { name: "Enterprise - Org Based Randomisation", capacity: "FIT" }
          ],
          q4: []
        },
        {
          initiative: "Anomaly Alerting",
          theme: "Platform Foundations",
          q1: [],
          q2: [
            { name: "Anomaly Alerting - Health Analysis", capacity: "FIT" }
          ],
          q3: [
            { name: "Anomaly Alerting - Health Dashboard", capacity: "FIT" }
          ],
          q4: []
        },
        {
          initiative: "Traffic Lanes",
          theme: "Platform Foundations",
          q1: [],
          q2: [],
          q3: [
            { name: "Traffic Lanes - Phase 1 - Foundations & Conflict Management - MVP", capacity: "EXTRA" }
          ],
          q4: [
            { name: "Traffic Lanes - Phase 1 - Foundations & Conflict Management", capacity: "EXTRA" }
          ]
        }
      ]
    },
    {
      objective: "Reduce experiment resolution time",
      color: "bg-indigo-100 border-indigo-500",
      themeColor: "bg-indigo-500",
      textColor: "text-indigo-900",
      initiatives: [
        {
          initiative: "AEP Adobe Profile",
          theme: "Adobe on Adobe",
          q1: [
            { name: "AEP - AJO Campaigns", capacity: "FIT" }
          ],
          q2: [
            { name: "AEP Integration - Unified User Profile, Experiment Resolution Improvement", capacity: "FIT" }
          ],
          q3: [],
          q4: [
            { name: "AEP - Adobe User Profile Segmentation", capacity: "EXTRA" }
          ]
        }
      ]
    },
    {
      objective: "Raise total experiments value",
      color: "bg-purple-100 border-purple-500",
      themeColor: "bg-purple-500",
      textColor: "text-purple-900",
      initiatives: [
        {
          initiative: "Experiments Bank",
          theme: "Platform Foundations",
          q1: [],
          q2: [],
          q3: [
            { name: "Experiments Bank - MVP", capacity: "FIT" }
          ],
          q4: [
            { name: "Experiments Bank - Phase 1", capacity: "FIT" }
          ]
        },
        {
          initiative: "Experimentation Agent",
          theme: "Agentic Foundations",
          q1: [],
          q2: [
            { name: "Experimentation Agent - MVP", capacity: "EXTRA" }
          ],
          q3: [],
          q4: []
        },
        {
          initiative: "Knowledge Bot",
          theme: "Agentic Foundations",
          q1: [],
          q2: [],
          q3: [
            { name: "Knowledge Bot", capacity: "EXTRA" }
          ],
          q4: []
        },
        {
          initiative: "AJO Campaigns",
          theme: "Adobe on Adobe",
          q1: [],
          q2: [],
          q3: [
            { name: "Campaign Experimentations with AJO & Exp Platform - MVP", capacity: "EXTRA" }
          ],
          q4: [
            { name: "Campaign Experimentations with AJO & Exp Platform", capacity: "EXTRA" }
          ]
        }
      ]
    },
    {
      objective: "N/A",
      color: "bg-slate-100 border-slate-500",
      themeColor: "bg-slate-500",
      textColor: "text-slate-900",
      initiatives: [
        {
          initiative: "Platform Monitoring",
          theme: "Platform Foundations",
          q1: [
            { name: "Platform Dashboard, aligned with monitored KPIs", capacity: "FIT" },
            { name: "Experiment KPI Monitoring", capacity: "FIT" }
          ],
          q2: [],
          q3: [
            /* moved to Agents Monitoring */
          ],
          q4: [
            { name: "Experiment Platform Dashboard v2.1", capacity: "EXTRA" }
          ]
        },
        {
          initiative: "Agents Monitoring",
          theme: "Agentic Foundations",
          q1: [],
          q2: [],
          q3: [
            { name: "Singularity Exp Bot Dashboard", capacity: "EXTRA" }
          ],
          q4: []
        }
      ]
    }
  ];
  // Build view data based on filters
  let groupedData = sourceData;
  if (fitOnly) {
    groupedData = sourceData
      .map(obj => {
        const initiatives = (obj.initiatives || [])
          .map(init => {
            const q1 = (init.q1 || []).filter(f => f.capacity !== 'EXTRA');
            const q2 = (init.q2 || []).filter(f => f.capacity !== 'EXTRA');
            const q3 = (init.q3 || []).filter(f => f.capacity !== 'EXTRA');
            const q4 = (init.q4 || []).filter(f => f.capacity !== 'EXTRA');
            const hasAny = (q1.length + q2.length + q3.length + q4.length) > 0;
            return hasAny ? { ...init, q1, q2, q3, q4 } : null;
          })
          .filter(Boolean);
        return initiatives.length > 0 ? { ...obj, initiatives } : null;
      })
      .filter(Boolean);
  } else if (extraOnly) {
    groupedData = sourceData
      .map(obj => {
        const initiatives = (obj.initiatives || [])
          .map(init => {
            const q1 = (init.q1 || []).filter(f => f.capacity === 'EXTRA');
            const q2 = (init.q2 || []).filter(f => f.capacity === 'EXTRA');
            const q3 = (init.q3 || []).filter(f => f.capacity === 'EXTRA');
            const q4 = (init.q4 || []).filter(f => f.capacity === 'EXTRA');
            const hasAny = (q1.length + q2.length + q3.length + q4.length) > 0;
            return hasAny ? { ...init, q1, q2, q3, q4 } : null;
          })
          .filter(Boolean);
        return initiatives.length > 0 ? { ...obj, initiatives } : null;
      })
      .filter(Boolean);
  }

  // Optionally order items so FIT first, then EXTRA
  const viewData = fitFirst
    ? groupedData.map(obj => ({
        ...obj,
        initiatives: obj.initiatives.map(init => {
          const sortFn = (a, b) => {
            const av = a?.capacity === 'EXTRA' ? 1 : 0;
            const bv = b?.capacity === 'EXTRA' ? 1 : 0;
            return av - bv;
          };
          const q1 = (init.q1 || []).slice().sort(sortFn);
          const q2 = (init.q2 || []).slice().sort(sortFn);
          const q3 = (init.q3 || []).slice().sort(sortFn);
          const q4 = (init.q4 || []).slice().sort(sortFn);
          return { ...init, q1, q2, q3, q4 };
        })
      }))
    : groupedData;

  // Optional: flatten initiatives across objectives and order by a custom list.
  let displayData = viewData;
  const orderArray = Array.isArray(initiativeOrder) ? initiativeOrder.map(s => String(s || '').toLowerCase().trim()) : null;
  const isFlat = flatObjectives || (orderArray && orderArray.length > 0);
  if (isFlat) {
    const rows = [];
    viewData.forEach(obj => {
      (obj.initiatives || []).forEach(init => {
        const total =
          (init.q1 ? init.q1.length : 0) +
          (init.q2 ? init.q2.length : 0) +
          (init.q3 ? init.q3.length : 0) +
          (init.q4 ? init.q4.length : 0);
        if (total === 0) return;
        rows.push({
          ...init,
          _objName: obj.objective,
          _objColor: obj.color,
          _objThemeColor: obj.themeColor,
          _objTextColor: obj.textColor
        });
      });
    });
    if (orderArray) {
      const normalize = (s) => {
        const t = String(s || '').toLowerCase();
        return t.replace('experiments', 'experimentation'); // map minor naming variants
      };
      const orderIndex = new Map();
      orderArray.forEach((name, idx) => orderIndex.set(normalize(name), idx));
      rows.sort((a, b) => {
        const ia = orderIndex.has(normalize(a.initiative)) ? orderIndex.get(normalize(a.initiative)) : 9999;
        const ib = orderIndex.has(normalize(b.initiative)) ? orderIndex.get(normalize(b.initiative)) : 9999;
        if (ia !== ib) return ia - ib;
        return a.initiative.localeCompare(b.initiative);
      });
    }
    displayData = [{
      objective: '',
      color: 'bg-white border-gray-200',
      themeColor: 'bg-gray-400',
      textColor: 'text-gray-800',
      initiatives: rows
    }];
  }

  const quarterStats = {
    q1: { count: 8, focus: "TBD" },
    q2: { count: 9, focus: "TBD" },
    q3: { count: 9, focus: "TBD" },
    q4: { count: 7, focus: "TBD" }
  };

  // Compute FIT/EXTRA breakdown per quarter from data above
  const quarterBreakdown = (() => {
    const init = { fit: 0, extra: 0 };
    const acc = { q1: { ...init }, q2: { ...init }, q3: { ...init }, q4: { ...init } };
    viewData.forEach(group => {
      group.initiatives.forEach(initObj => {
        ['q1', 'q2', 'q3', 'q4'].forEach(q => {
          const list = initObj[q] || [];
          list.forEach(item => {
            if (item.capacity === 'EXTRA') acc[q].extra += 1;
            else if (item.capacity === 'FIT') acc[q].fit += 1;
          });
        });
      });
    });
    return acc;
  })();

  function computeQuarterFocusWords() {
    const quarters = ['q1', 'q2', 'q3', 'q4'];
    const result = {};
    quarters.forEach(q => {
      let hasAgentic = false;
      let hasAdobe = false;
      let hasPlatform = false;
      let hasCompany = false;
      let hasMvp = false;
      let keywords = new Set();
      let total = 0;
      let extra = 0;

      viewData.forEach(group => {
        group.initiatives.forEach(initObj => {
          const list = initObj[q] || [];
          if (list.length === 0) return;
          // Themes
          if (initObj.theme === 'Agentic Foundations') hasAgentic = true;
          if (initObj.theme === 'Adobe on Adobe') hasAdobe = true;
          if (initObj.theme === 'Platform Foundations') hasPlatform = true;
          if (initObj.theme === 'Co. Table Stakes') hasCompany = true;
          // Keywords from initiative name
          const name = (initObj.initiative || '').toLowerCase();
          if (name.includes('report')) keywords.add('Reporting');
          if (name.includes('dashboard') || name.includes('monitor')) keywords.add('Monitoring');
          if (name.includes('traffic')) keywords.add('Traffic');
          if (name.includes('calculator')) keywords.add('Calculator');
          if (name.includes('anomaly')) keywords.add('Anomaly');
          if (name.includes('enterprise')) keywords.add('Enterprise');
          if (name.includes('holdout')) keywords.add('Holdout');
          if (name.includes('campaign')) keywords.add('Campaigns');
          if (name.includes('aep')) keywords.add('AEP');
          if (name.includes('bank')) keywords.add('Bank');

          list.forEach(f => {
            total += 1;
            if (f.capacity === 'EXTRA') extra += 1;
            if (typeof f.name === 'string' && /mvp/i.test(f.name)) hasMvp = true;
          });
        });
      });

      const extraHeavy = total > 0 && extra / total >= 0.4;
      const ordered = [];
      if (hasAgentic) ordered.push('Agentic');
      if (hasAdobe) ordered.push('Adobe');
      if (hasPlatform) ordered.push('Foundations');
      if (hasCompany) ordered.push('Table‑Stakes');

      // Add keyword priorities
      const priority = ['Enterprise', 'Reporting', 'Monitoring', 'Traffic', 'Campaigns', 'AEP', 'Holdout', 'Anomaly', 'Calculator', 'Bank'];
      priority.forEach(k => {
        if (keywords.has(k)) ordered.push(k);
      });

      // Deduplicate and cap to 3
      const unique = [];
      for (const w of ordered) {
        if (!unique.includes(w)) unique.push(w);
        if (unique.length === 3) break;
      }
      if (unique.length < 3 && hasMvp) unique.push('MVP');
      if (unique.length < 3 && extraHeavy) unique.push('Extra');
      while (unique.length < 3) unique.push('Roadmap');

      result[q] = unique.slice(0, 3).join(' ');
    });
    return result;
  }
  const quarterFocus = computeQuarterFocusWords();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Export button */}
        <div className="mb-4 flex justify-end gap-2">
          <button
            onClick={async () => {
              try {
                if (!exportRef.current) return;
                const dataUrl = await toPng(exportRef.current, {
                  cacheBust: true,
                  pixelRatio: 2,
                  backgroundColor: '#ffffff'
                });
                const link = document.createElement('a');
                link.download = 'roadmap.png';
                link.href = dataUrl;
                link.click();
              } catch (e) {
                console.error('Export failed', e);
              }
            }}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-md text-sm font-semibold shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v10m0 0l-4-4m4 4l4-4M4 19h16" />
            </svg>
            Export PNG
          </button>
          <button
            onClick={async () => {
              try {
                if (!tableRef.current) return;
                const dataUrl = await toPng(tableRef.current, {
                  cacheBust: true,
                  pixelRatio: 2,
                  backgroundColor: '#ffffff'
                });
                const link = document.createElement('a');
                link.download = 'roadmap-table.png';
                link.href = dataUrl;
                link.click();
              } catch (e) {
                console.error('Export table failed', e);
              }
            }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-semibold shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
            </svg>
            Export Table
          </button>
        </div>

        <div ref={exportRef}>
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            ADOBE
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Experimentation Platform Roadmap 2026
          </h1>
          <p className="text-gray-600 text-lg">Internal Product Growth Tools</p>
          <p className="text-sm text-gray-500 mt-2">Owner: Alexandru Mihai Crijman | Engineering Manager: Vladimir Moraru</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10" />
            </svg>
            <span className="text-sm text-blue-800 font-medium">Objectives merged in left column | Initiatives in center | Features by quarter</span>
          </div>
        </div>

        {/* Roadmap Table */}
        <div ref={tableRef} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Table Header */}
          <div className="grid bg-gradient-to-r from-gray-800 to-gray-700 text-white" style={{ gridTemplateColumns: 'minmax(150px, 1fr) minmax(160px, 0.96fr) repeat(4, 1.2fr)' }}>
            {!isFlat ? (
              <>
                <div className="p-3 font-bold border-r border-gray-600">
                  <div className="text-lg">Objective</div>
                  <div className="text-xs font-normal text-gray-300 mt-1">Strategic Focus</div>
                </div>
                <div className="p-3 font-bold border-r border-gray-600">
                  <div className="text-lg">Initiative</div>
                  <div className="text-xs font-normal text-gray-300 mt-1">Workstream</div>
                </div>
              </>
            ) : (
              <>
                <div className="p-3 font-bold border-r border-gray-600">
                  <div className="text-lg">Initiative</div>
                  <div className="text-xs font-normal text-gray-300 mt-1">Workstream</div>
                </div>
                <div className="p-3 font-bold border-r border-gray-600">
                  <div className="text-lg">Objective</div>
                  <div className="text-xs font-normal text-gray-300 mt-1">Strategic Focus</div>
                </div>
              </>
            )}
            <div className="p-3 text-center border-r border-gray-600">
              <div className="text-xl font-bold">Q1 2026</div>
            <div className="text-xs mt-1 text-gray-300">
              {quarterBreakdown.q1.fit + quarterBreakdown.q1.extra} features
            </div>
              {!fitOnly ? (
                <div className="text-[11px] mt-1">
                  <span className="text-gray-200 font-medium">FIT {quarterBreakdown.q1.fit}</span>
                  <span className="mx-1 text-gray-500">|</span>
                  <span className="text-amber-300 font-semibold">EXTRA {quarterBreakdown.q1.extra}</span>
                </div>
              ) : null}
              <div className="text-xs text-gray-400 mt-1">Accurate Data &amp; Measurement</div>
            </div>
            <div className="p-3 text-center border-r border-gray-600">
              <div className="text-xl font-bold">Q2 2026</div>
            <div className="text-xs mt-1 text-gray-300">
              {quarterBreakdown.q2.fit + quarterBreakdown.q2.extra} features
            </div>
              {!fitOnly ? (
                <div className="text-[11px] mt-1">
                  <span className="text-gray-200 font-medium">FIT {quarterBreakdown.q2.fit}</span>
                  <span className="mx-1 text-gray-500">|</span>
                  <span className="text-amber-300 font-semibold">EXTRA {quarterBreakdown.q2.extra}</span>
                </div>
              ) : null}
              <div className="text-xs text-gray-400 mt-1">Enterprise &amp; Platform Foundations</div>
            </div>
            <div className="p-3 text-center border-r border-gray-600">
              <div className="text-xl font-bold">Q3 2026</div>
            <div className="text-xs mt-1 text-gray-300">
              {quarterBreakdown.q3.fit + quarterBreakdown.q3.extra} features
            </div>
              {!fitOnly ? (
                <div className="text-[11px] mt-1">
                  <span className="text-gray-200 font-medium">FIT {quarterBreakdown.q3.fit}</span>
                  <span className="mx-1 text-gray-500">|</span>
                  <span className="text-amber-300 font-semibold">EXTRA {quarterBreakdown.q3.extra}</span>
                </div>
              ) : null}
              <div className="text-xs text-gray-400 mt-1">Org Randomisation &amp; Platform Foundations</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-xl font-bold">Q4 2026</div>
            <div className="text-xs mt-1 text-gray-300">
              {quarterBreakdown.q4.fit + quarterBreakdown.q4.extra} features
            </div>
              {!fitOnly ? (
                <div className="text-[11px] mt-1">
                  <span className="text-gray-200 font-medium">FIT {quarterBreakdown.q4.fit}</span>
                  <span className="mx-1 text-gray-500">|</span>
                  <span className="text-amber-300 font-semibold">EXTRA {quarterBreakdown.q4.extra}</span>
                </div>
              ) : null}
              <div className="text-xs text-gray-400 mt-1">Content Experimentation &amp; Agentic</div>
            </div>
          </div>

          {/* Table Body - Single grid container with explicit positioning */}
          <div className="grid" style={{ gridTemplateColumns: 'minmax(150px, 1fr) minmax(160px, 0.96fr) repeat(4, 1.2fr)' }}>
            {displayData.map((objectiveGroup, objIndex) => {
              // Calculate the starting row for this objective group
              const prevRows = displayData.slice(0, objIndex).reduce((sum, group) => sum + group.initiatives.length, 0);
              
              return (
                <React.Fragment key={objIndex}>
                  {/* Objective Column - Merged cell spanning all initiatives */}
                  {!isFlat && (
                    <div 
                      className={`p-3 border-r border-b border-gray-200 ${objectiveGroup.color} border-l-4 ${objectiveGroup.color.split(' ')[1]} flex items-center`}
                      style={{ 
                        gridRow: `${prevRows + 1} / span ${objectiveGroup.initiatives.length}`,
                        gridColumn: '1'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${objectiveGroup.themeColor} flex-shrink-0`}></div>
                        <div className={`text-xs font-bold ${objectiveGroup.textColor} tracking-wide leading-tight`}>
                          {(() => {
                            const raw = objectiveGroup.objective || '';
                            if (!raw) return '';
                            const cased = raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
                            return cased.replace(/n\/a/gi, 'N/A');
                          })()}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Initiative rows */}
                  {objectiveGroup.initiatives.map((initiative, initIndex) => {
                    const currentRow = prevRows + initIndex + 1;
                    return (
                      <React.Fragment key={initIndex}>
                        {/* Initiative Column */}
                        {isFlat && (
                          <div 
                            className="p-3 border-r border-b border-gray-200 flex items-center"
                            style={{ gridRow: currentRow, gridColumn: '2' }}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${initiative._objThemeColor || 'bg-gray-400'} flex-shrink-0`}></div>
                              <div className={`text-xs font-normal ${initiative._objTextColor || 'text-gray-800'} tracking-wide leading-tight`}>
                                {(() => {
                                  const raw = (initiative._objName || '');
                                  if (!raw) return '';
                                  const cased = raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
                                  return cased.replace(/n\/a/gi, 'N/A');
                                })()}
                              </div>
                            </div>
                          </div>
                        )}
                        <div 
                          className="px-3 py-2 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors"
                          style={{ gridRow: currentRow, gridColumn: isFlat ? '1' : '2' }}
                        >
                          <div className="flex flex-col">
                            {initiative.theme ? (
                              <div className="mb-0.5">
                                <span
                                  className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold
                                  ${
                                    initiative.theme === 'Adobe on Adobe'
                                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                                      : initiative.theme === 'Agentic Foundations'
                                      ? 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200'
                                      : initiative.theme === 'Platform Foundations'
                                      ? 'bg-teal-50 text-teal-700 border-teal-200'
                                      : initiative.theme === 'Co. Table Stakes'
                                      ? 'bg-lime-50 text-lime-700 border-lime-200'
                                      : 'bg-gray-50 text-gray-700 border-gray-200'
                                  }`}
                                >
                                  {initiative.theme}
                                </span>
                              </div>
                            ) : null}
                            <div className="font-semibold text-gray-800 text-sm">{initiative.initiative}</div>
                          </div>
                        </div>

                        {/* Q1 */}
                        <div 
                          className="px-2 py-1 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors"
                          style={{ gridRow: currentRow, gridColumn: '3' }}
                        >
                          {initiative.q1.length > 0 ? (
                            <div className="space-y-1">
                              {initiative.q1.map((feature, i) => (
                                <div
                                  key={i}
                                  className={`text-xs p-1 rounded ${(initiative._objColor || objectiveGroup.color)} border-l ${(initiative._objColor || objectiveGroup.color).split(' ')[1]}`}
                                >
                                  <div className="text-[11px] font-medium">{feature.name}</div>
                                  {(/MVP/i.test(feature.name) || feature.capacity === "EXTRA" || feature.tag === "?") ? (
                                    <div className="mt-0.5 flex items-center justify-end gap-1">
                                      {/MVP/i.test(feature.name) && (
                                        <span className="bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          MVP
                                        </span>
                                      )}
                                      {feature.capacity === "EXTRA" && (
                                        <span className="bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          EXTRA
                                        </span>
                                      )}
                                      {feature.tag === "?" && (
                                        <span className="bg-yellow-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          ?
                                        </span>
                                      )}
                                    </div>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-gray-300 text-center text-xs">—</div>
                          )}
                        </div>

                        {/* Q2 */}
                        <div 
                          className="px-2 py-1 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors"
                          style={{ gridRow: currentRow, gridColumn: '4' }}
                        >
                          {initiative.q2.length > 0 ? (
                            <div className="space-y-1">
                              {initiative.q2.map((feature, i) => (
                                <div
                                  key={i}
                                  className={`text-xs p-1 rounded ${(initiative._objColor || objectiveGroup.color)} border-l ${(initiative._objColor || objectiveGroup.color).split(' ')[1]}`}
                                >
                                  <div className="text-[11px] font-medium">{feature.name}</div>
                                  {(/MVP/i.test(feature.name) || feature.capacity === "EXTRA" || feature.tag === "?") ? (
                                    <div className="mt-0.5 flex items-center justify-end gap-1">
                                      {/MVP/i.test(feature.name) && (
                                        <span className="bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          MVP
                                        </span>
                                      )}
                                      {feature.capacity === "EXTRA" && (
                                        <span className="bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          EXTRA
                                        </span>
                                      )}
                                      {feature.tag === "?" && (
                                        <span className="bg-yellow-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          ?
                                        </span>
                                      )}
                                    </div>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-gray-300 text-center text-xs">—</div>
                          )}
                        </div>

                        {/* Q3 */}
                        <div 
                          className="px-2 py-1 border-r border-b border-gray-200 hover:bg-gray-50 transition-colors"
                          style={{ gridRow: currentRow, gridColumn: '5' }}
                        >
                          {initiative.q3.length > 0 ? (
                            <div className="space-y-1">
                              {initiative.q3.map((feature, i) => (
                                <div
                                  key={i}
                                  className={`text-xs p-1 rounded ${(initiative._objColor || objectiveGroup.color)} border-l ${(initiative._objColor || objectiveGroup.color).split(' ')[1]}`}
                                >
                                  <div className="text-[11px] font-medium">{feature.name}</div>
                                  {(/MVP/i.test(feature.name) || feature.capacity === "EXTRA" || feature.tag === "?") ? (
                                    <div className="mt-0.5 flex items-center justify-end gap-1">
                                      {/MVP/i.test(feature.name) && (
                                        <span className="bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          MVP
                                        </span>
                                      )}
                                      {feature.capacity === "EXTRA" && (
                                        <span className="bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          EXTRA
                                        </span>
                                      )}
                                      {feature.tag === "?" && (
                                        <span className="bg-yellow-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          ?
                                        </span>
                                      )}
                                    </div>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-gray-300 text-center text-xs">—</div>
                          )}
                        </div>

                        {/* Q4 */}
                        <div 
                          className="px-2 py-1 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                          style={{ gridRow: currentRow, gridColumn: '6' }}
                        >
                          {initiative.q4.length > 0 ? (
                            <div className="space-y-1">
                              {initiative.q4.map((feature, i) => (
                                <div
                                  key={i}
                                  className={`text-xs p-1 rounded ${(initiative._objColor || objectiveGroup.color)} border-l ${(initiative._objColor || objectiveGroup.color).split(' ')[1]}`}
                                >
                                  <div className="text-[11px] font-medium">{feature.name}</div>
                                  {(/MVP/i.test(feature.name) || feature.capacity === "EXTRA" || feature.tag === "?") ? (
                                    <div className="mt-0.5 flex items-center justify-end gap-1">
                                      {/MVP/i.test(feature.name) && (
                                        <span className="bg-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          MVP
                                        </span>
                                      )}
                                      {feature.capacity === "EXTRA" && (
                                        <span className="bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          EXTRA
                                        </span>
                                      )}
                                      {feature.tag === "?" && (
                                        <span className="bg-yellow-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded">
                                          ?
                                        </span>
                                      )}
                                    </div>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-gray-300 text-center text-xs">—</div>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Objective Distribution Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayData.map((objGroup, index) => {
            const totalFeatures = objGroup.initiatives.reduce((sum, init) => {
              return sum + init.q1.length + init.q2.length + init.q3.length + init.q4.length;
            }, 0);
            
            const extraFeatures = objGroup.initiatives.reduce((sum, init) => {
              const q1Extra = init.q1.filter(f => f.capacity === "EXTRA").length;
              const q2Extra = init.q2.filter(f => f.capacity === "EXTRA").length;
              const q3Extra = init.q3.filter(f => f.capacity === "EXTRA").length;
              const q4Extra = init.q4.filter(f => f.capacity === "EXTRA").length;
              return sum + q1Extra + q2Extra + q3Extra + q4Extra;
            }, 0);

            const initiativeCount = objGroup.initiatives.length;

            return (
              <div key={index} className={`${objGroup.color.replace('border-', 'bg-').replace('500', '50')} rounded-lg shadow p-4 border-2 ${objGroup.color.split(' ')[1]}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${objGroup.themeColor}`}></div>
                  <div className={`text-xs font-bold ${objGroup.textColor} leading-tight`}>
                    {(() => {
                      const s0 = objGroup.objective.length > 30 ? objGroup.objective.substring(0, 27) + '...' : objGroup.objective;
                      if (!s0) return '';
                      const cased = s0.charAt(0).toUpperCase() + s0.slice(1).toLowerCase();
                      return cased.replace(/n\/a/gi, 'N/A');
                    })()}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800">{totalFeatures}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {totalFeatures} {totalFeatures === 1 ? 'feature' : 'features'} · {initiativeCount} {initiativeCount === 1 ? 'initiative' : 'initiatives'}
                </div>
                {extraFeatures > 0 && (
                  <div className="mt-2 flex items-center gap-1">
                    <span className="bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      EXTRA
                    </span>
                    <span className="text-xs text-gray-600">{extraFeatures} extra capacity</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Objectives & Capacity Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Strategic Objectives</h4>
              <div className="space-y-2">
                {groupedData.map((obj, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${obj.themeColor}`}></div>
                    <span className="text-xs text-gray-700">{obj.objective}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Team Capacity Tags</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500 text-white text-[9px] font-bold px-2 py-1 rounded">
                    EXTRA
                  </span>
                  <span className="text-xs text-gray-700">Features requiring extra team capacity beyond core commitments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-gray-200 text-gray-700 text-[9px] font-bold px-2 py-1 rounded">
                    FIT
                  </span>
                  <span className="text-xs text-gray-700">Features within planned team capacity</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                <p className="text-xs text-blue-800">
                  <strong>Note:</strong> Each objective spans multiple rows (initiatives) in the left column for a clean, grouped view.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-5 gap-4">
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-purple-600">33</div>
            <div className="text-sm text-gray-600 mt-1">Total Features</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600">11</div>
            <div className="text-sm text-gray-600 mt-1">Initiatives</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-indigo-600">6</div>
            <div className="text-sm text-gray-600 mt-1">Objectives</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-amber-600">9</div>
            <div className="text-sm text-gray-600 mt-1">Extra Capacity</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600">24</div>
            <div className="text-sm text-gray-600 mt-1">Core Features</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}


