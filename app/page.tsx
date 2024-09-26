import CarFilter from "./components/CarFilter.tsx";

import { MAKERS, YEARS } from "./data.tsx";

export default async function Home() {
	return (
		<>
			<h1 className="text-4xl font-bold">Car Dealer App</h1>
			<CarFilter makers={MAKERS} years={YEARS} />
		</>
	);
}
