'use server';

import { redirect } from "next/navigation";
import getData from "../server/get-data";
import QuickInsightCard from "./components/quick-insight-card";
import GradeList from "./components/grade-list";
import EventList from "./components/event-list";
import AbsenceList from "./components/absence-list";
import SubjectList from "./components/subject-list";
import HyperlinkPills from "./components/hyperlink-pills";

export default async function page() {

    const data = await getData({ take: 10 });
    if (!data) redirect("/");

    return (
        <div className="size-full flex flex-col p-4 gap-4">
            <HyperlinkPills />
            <div className="flex-1 overflow-y-hidden grid grid-cols-2 grid-rows-2 gap-4">
                <QuickInsightCard
                    id={0}
                    title="Grades"> <GradeList grades={data.grades} /> </QuickInsightCard>
                <QuickInsightCard
                    id={1}
                    title="Absences"> <AbsenceList absences={data.absences} /> </QuickInsightCard>
                <QuickInsightCard
                    id={2}
                    title="Events"> <EventList events={data.events} /> </QuickInsightCard>
                <QuickInsightCard
                    id={3}
                    title="Subjects"> <SubjectList subjects={data.subjects} /> </QuickInsightCard>
            </div>
        </div>
    );
}

