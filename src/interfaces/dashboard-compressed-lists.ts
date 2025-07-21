interface CompressedGrade {
    id: string;
    score: number;
    subject: { name: string; color: string; };
    passed: boolean;
}
interface CompressedSubject {
    id: string;
    name: string;
    color: string;
    advanced: boolean;
}

interface CompressedAbsence {
    id: string;
    approved: boolean;
    date: Date;
}
interface CompressedEvent {
    id: string;
    date: Date;
    subject: { name: string; color: string; };
}

export {
    type CompressedAbsence,
    type CompressedEvent,
    type CompressedGrade,
    type CompressedSubject,
}