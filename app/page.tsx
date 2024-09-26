import Dropdown from "./components/Dropdown.tsx";

const YEARS = [
	{ value: 2015, label: 2015 },
	{ value: 2016, label: 2016 },
	{ value: 2017, label: 2017 },
	{ value: 2018, label: 2018 },
	{ value: 2019, label: 2019 },
	{ value: 2020, label: 2020 },
	{ value: 2021, label: 2021 },
	{ value: 2022, label: 2022 },
	{ value: 2023, label: 2023 },
	{ value: 2024, label: 2024 },
];

export default function Home() {
	return (
		<div
			className="w-screen h-screen
		flex justify-center items-center
		bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
		>
			<div
				className="w-2/3 h-1/3 flex flex-col justify-center items-center gap-4
			bg-white border-2 border-slate-50 drop-shadow-lg"
			>
				<h1 className="text-4xl font-bold">Car Dealer App</h1>
				<Dropdown name="makeYear" items={YEARS} label="Year" />
			</div>
		</div>
	);
}
