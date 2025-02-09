import { db } from "../../../../../lib/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const type = searchParams.get("type") || ""; // Allow empty type for all types
	const location = searchParams.get("location") || ""; // Allow empty location for all locations
	const searchData = [];

	const querySnapshot = await getDocs(
		query(
			collection(db, "jobs"),
			where("type", "==", type),
			where("location", "==", location),
			orderBy("postedOn", "desc")
		)
	);

	querySnapshot.forEach((doc) => {
		const data = doc.data();
		const postedOn = data.postedOn
			? data.postedOn.toDate().toISOString()
			: null;

		searchData.push({
			...data,
			postedOn,
		});
	});

	return new Response(JSON.stringify(searchData), {
		headers: { "Content-Type": "application/json" },
	});
}
