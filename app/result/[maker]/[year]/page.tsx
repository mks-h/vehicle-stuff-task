import { Suspense, lazy } from "react";
import { MAKERS, YEARS } from "@/app/data.tsx";

const CarList = lazy(() => import("@/app/components/CarList.tsx"));

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
		<div className="w-screen h-screen flex justify-center items-center">
			<div
				className="w-2/3 p-12 flex flex-col justify-center items-center gap-8
			bg-white border-2 border-slate-50 drop-shadow-lg"
			>
				<h1 className="text-4xl font-bold">Filtered Information</h1>
				<Suspense fallback={<h1>Loading...</h1>}>
					<CarList makeId={maker} year={year} />
				</Suspense>
			</div>
		</div>
	);
}
