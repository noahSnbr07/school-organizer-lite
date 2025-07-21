'use server';
import { CompressedAbsence } from "@/interfaces/dashboard-compressed-lists";
import { CheckIcon, XIcon } from "lucide-react";
import Link from "next/link";

interface _props {
    absences: CompressedAbsence[]
}

export default async function AbsenceList({ absences }: _props) {

    return (
        <div className="h-full overflow-y-auto grid grid-cols-2 gap-4 content-start">
            {absences.map((absence) => (
                <Link
                    key={absence.id}
                    className="flex gap-4 px-4 py-2 bg-stack rounded-md h-min"
                    href={`/absence/${absence.id}`}>
                    {absence.approved ? <CheckIcon color="green" /> : <XIcon color="red" />}
                    <i> {absence.date.toLocaleDateString()} </i>
                </Link>
            ))}
        </div>
    );
}