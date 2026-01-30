# Roadmap App

A lightweight React + Material UI app to visualize a product roadmap as a pivot:
- Columns: Quarters (Q1–Q4)
- Rows: Grouped by Objectives, with Initiatives under each Objective
- Cells: Feature Cards placed under the relevant quarter
- Capacity: Feature Cards display a capacity chip only if capacity is Extra

## Getting started

1) Install dependencies:
```
npm install
```

2) Run the dev server:
```
npm run dev
```

3) Build for production:
```
npm run build
```

## Data model

Edit `src/data/roadmap.json` to reflect your roadmap:
```json
{
  "quarters": ["Q1", "Q2", "Q3", "Q4"],
  "objectives": [
    {
      "id": "obj-1",
      "name": "Objective Name",
      "initiatives": [
        { "id": "init-1", "name": "Initiative Name" }
      ]
    }
  ],
  "features": [
    {
      "id": "feat-1",
      "title": "Feature title",
      "objectiveId": "obj-1",
      "initiativeId": "init-1",
      "quarter": "Q1",
      "capacity": { "type": "extra", "value": 2 }
    }
  ]
}
```

Notes:
- `capacity.type`: `"base"` or `"extra"`. Only `"extra"` shows a chip on the card.
- `quarter`: must be one of the strings listed in `quarters`.

## Mapping your PDF

This app ships with a sample JSON you can replace. If you want me to import the features from your attached PDF automatically, share a brief outline of:
- Objectives
- Initiatives under each Objective
- Features with their quarter and whether capacity is base or extra

I’ll convert that into `src/data/roadmap.json` for you.


