'use server';
import { CompressedGrade } from "@/interfaces/dashboard-compressed-lists";
import Link from "next/link";

interface _props {
    grades: CompressedGrade[]
}

export default async function GradeList({ grades }: _props) {


    return (
        <div className="h-full overflow-y-auto grid grid-cols-4 gap-4 content-start">
            {grades.map((grade, _index: number) => (
                <Link
                    key={grade.id}
                    className="flex flex-col gap-4 p-2 bg-stack rounded-md items-center h-min"
                    href={`/grade/${grade.id}`}>
                    <div className="bg-stack grid size-min p-2 place-content-center rounded-full aspect-square font-bold">
                        {grade.score}
                    </div>
                    <i className="opacity-50">{grade.subject.name}</i>
                </Link>
            ))}
        </div>
    );
}