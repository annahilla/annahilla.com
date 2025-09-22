import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/client";
import type { ProjectsInterface } from "../types/ProjectInterface";

export async function getProjects() {
  const q = query(
    collection(db, "projects"),
    orderBy("createdAt", "desc")
  );

  const querySnapshot = await getDocs(q);

  const projects: ProjectsInterface[] = querySnapshot.docs.map((doc) => {
  const data = doc.data();

  return {
    id: doc.id,
    featured: data.featured ?? false,
    createdAt: data.createdAt,
    name: data.name,
    description: data.description,
    video: data.video,
    image: data.image,
    link: data.link,
  };
});


  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.createdAt.seconds - a.createdAt.seconds;
  });
}