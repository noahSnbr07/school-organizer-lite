'use server';
import { CompressedSubject } from "@/interfaces/dashboard-compressed-lists";
import Link from "next/link";

interface _props {
    subjects: CompressedSubject[];
}

export default async function SubjectList({ subjects }: _props) {

    return (
        <div className="h-full overflow-y-auto grid grid-cols-2 gap-4 content-start">
            {subjects.map((subject) => (
                <Link
                    key={subject.id}
                    className="flex gap-4 px-4 py-2 bg-stack rounded-md h-min items-center"
                    href={`/subject/${subject.id}`}>
                    <b> {subject.name} </b>
                </Link>
            ))}
        </div>
    );
}