import { MAKERS, YEARS } from "@/app/data.tsx";

export async function generateStaticParams() {
	return MAKERS.map((maker) => {
		return YEARS.map((year) => ({
			maker: maker.value,
			year: year.value,
		}));
	}).flat();
}

export default function ResultPage({
	params,
}: {
	params: {
		maker: string;
		year: string;
	};
}) {
	const { maker, year } = params;
	return (
		<>
			<h1>Hi</h1>
			<h1>Maker {maker}</h1>
			<h1>Year {year}</h1>
		</>
	);
}
