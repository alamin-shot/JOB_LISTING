import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

export async function GET() {
	const jobData = await getDocs(collection(db, "jobs"));
	const jobs = jobData.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
		postedOn: doc.data().postedOn.toDate().toISOString(),
	}));
	return new Response(JSON.stringify(jobs || []), {
		headers: { "Content-Type": "application/json" },
	});
}

export async function POST(req) {
	const newData = await req.json();
	try {
		const docRef = await addDoc(collection(db, "jobs"), {
			...newData,
			postedOn: new Date(),
		});
		return new Response(
			JSON.stringify({ message: "Job Posted Successfully", id: docRef.id }),
			{
				status: 201,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		return (
			new Response({ message: "Something Went Wrong", error: error.message }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
