import type { Timestamp } from "firebase-admin/firestore";

export interface ProjectsInterface {
    id: string;
    featured?: boolean;
    createdAt: Timestamp;
    name: string;
    description: string;
    video?: string;
    image?: string;
    link: string;
}