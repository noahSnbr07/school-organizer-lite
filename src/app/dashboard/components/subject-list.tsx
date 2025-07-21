'use server';
import { CompressedSubject } from "@/interfaces/dashboard-compressed-lists";
import Link from "next/link";

interface _props {
    subjects: CompressedSubject[];
}

export default async function SubjectList({ subjects }: _props) {

    return (
        <div className="h-full overflow-y-auto grid grid-cols-2 gap-4 content-start">
            {subjects.map((subject, _index: number) => (
                <Link
                    key={subject.id}
                    className="flex gap-4 px-4 py-2 bg-stack rounded-md h-min items-center"
                    href={`/subject/${subject.id}`}>
                    {subject.advanced ?
                        <span
                            title="Advanced Course Tag"
                            className="bg-foreground font-bold text-background text-sm rounded-full px-2 py-0.5"> AC </span> :
                        <span
                            title="Basic Course Tag"
                            className="bg-stack font-bold text-sm rounded-full px-2 py-0.5"> BC </span>
                    }
                    <b> {subject.name} </b>
                </Link>
            ))}
        </div>
    );
}