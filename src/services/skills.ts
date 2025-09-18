import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/client";

export async function getSkills() {
  const q = query(collection(db, "skills"), orderBy("order", "asc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      items: data.items || [],
      order: data.order ?? 0,
    };
  });
}
