import { type Item } from "./components/Dropdown.tsx";

export const YEARS: Item[] = [
	{ value: "2015", label: "2015" },
	{ value: "2016", label: "2016" },
	{ value: "2017", label: "2017" },
	{ value: "2018", label: "2018" },
	{ value: "2019", label: "2019" },
	{ value: "2020", label: "2020" },
	{ value: "2021", label: "2021" },
	{ value: "2022", label: "2022" },
	{ value: "2023", label: "2023" },
	{ value: "2024", label: "2024" },
];

export const MAKERS: Item[] = await (async () => {
	const data = await fetch(
		"https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
	);
	const dataJson = await data.json();
	return dataJson.Results.map((v: { MakeId: number; MakeName: string }) => ({
		value: `${v.MakeId}`,
		label: v.MakeName,
	}));
})();
