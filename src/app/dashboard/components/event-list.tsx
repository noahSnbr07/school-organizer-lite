'use server';
import { CompressedEvent } from "@/interfaces/dashboard-compressed-lists";
import Link from "next/link";

interface _props {
    events: CompressedEvent[]
}

export default async function EventList({ events }: _props) {

    return (
        <div className="h-full overflow-y-auto grid grid-cols-2 gap-4 content-start">
            {events.map((event, _index: number) => (
                <Link
                    style={{ borderLeft: `8px solid ${event.subject.color}` }}
                    key={event.id}
                    className="flex gap-4 px-4 py-2 bg-stack rounded-md h-min"
                    href={`/event/${event.id}`}>
                    <i className="opacity-50"> {event.date.toLocaleDateString()} </i>
                    <b> {event.subject.name} </b>
                </Link>
            ))}
        </div>
    );
}