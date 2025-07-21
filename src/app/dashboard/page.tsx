'use server';

import { redirect } from "next/navigation";
import getData from "../server/get-data";
import QuickInsightCard from "./components/quick-insight-card";
import GradeList from "./components/grade-list";
import EventList from "./components/event-list";
import AbsenceList from "./components/absence-list";
import SubjectList from "./components/subject-list";

export default async function page() {

    const data = await getData({ take: 10 });
    if (!data) redirect("/");

    return (
        <div className="size-full p-4 grid grid-cols-2 grid-rows-2 gap-4">
            <QuickInsightCard
                id={0}
                title="Grades"
                children={<GradeList grades={data.grades} />}
            />
            <QuickInsightCard
                id={1}
                title="Absences"
                children={<AbsenceList absences={data.absences} />}
            />
            <QuickInsightCard
                id={2}
                title="Events"
                children={<EventList events={data.events} />}
            />
            <QuickInsightCard
                id={3}
                title="Subjects"
                children={<SubjectList subjects={data.subjects} />}
            />
        </div>
    );
}