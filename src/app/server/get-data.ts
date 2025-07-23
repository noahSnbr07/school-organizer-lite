'use server';

import database from "@/config/database";
import getAuth from "./get-auth";
import { CompressedAbsence, CompressedEvent, CompressedGrade, CompressedSubject } from "@/interfaces/dashboard-compressed-lists";

interface _props {
    take: number;
}

//compressed data
export interface GetData {
    grades: CompressedGrade[];
    absences: CompressedAbsence[];
    events: CompressedEvent[];
    subjects: CompressedSubject[];
}

export default async function getData({ take }: _props): Promise<GetData | null> {
    const auth = await getAuth();
    if (!auth) return null;

    //fetch sequentially for performance
    const [grades, absences, events, subjects] = await Promise.all([
        database.grade.findMany({ take, where: { userId: auth.id }, include: { subject: { select: { name: true, color: true } } } }),
        database.absence.findMany({ take, where: { userId: auth.id }, include: { subjects: { select: { name: true, } } } }),
        database.event.findMany({ take, where: { userId: auth.id }, include: { subject: { select: { name: true, color: true }, }, } }),
        database.subject.findMany({ take, where: { userId: auth.id } }),
    ]);

    //reduce payloads as much as possible
    const compressedGrades: CompressedGrade[] = grades.map(g => ({
        id: g.id,
        score: g.score,
        subject: { name: g.subject.name, color: g.subject.color, },
    }));

    const compressedAbsences: CompressedAbsence[] = absences.map(a => ({
        id: a.id,
        approved: a.approved,
        date: a.created,
    }));

    const compressedEvents: CompressedEvent[] = events.map(e => ({
        id: e.id,
        date: e.date,
        subject: { name: e.subject.name, color: e.subject.color, },
    }));

    return {
        grades: compressedGrades,
        absences: compressedAbsences,
        events: compressedEvents,
        subjects
    }
}
