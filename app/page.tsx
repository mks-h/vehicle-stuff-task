import CarFilter from "./components/CarFilter.tsx";

import { MAKERS, YEARS } from "./data.tsx";

export default async function Home() {
	return (
		<div
			className="w-screen h-screen
		flex justify-center items-center
		bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
		>
			<div
				className="w-2/3 h-1/3 flex flex-col justify-center items-center gap-8
			bg-white border-2 border-slate-50 drop-shadow-lg"
			>
				<h1 className="text-4xl font-bold">Car Dealer App</h1>
				<CarFilter makers={MAKERS} years={YEARS} />
			</div>
		</div>
	);
}
