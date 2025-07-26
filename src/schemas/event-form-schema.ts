import subjects from "@/assets/constants/subjects";
import { z as zod } from "zod";

const schema = zod.object({
    type: zod.enum(["Homework", "Exam", "Test", "Note"], { error: "Invalid Event Type Enum" }),
    name: zod.string()
        .min(4, { error: "Event Name min length: 4" })
        .max(24, { error: "Event Name max length: 24" }),
    date: zod.date()
        .min(new Date(), { error: "Event cannot be in the past" }),
    subject: zod.enum(subjects, { error: "Event Subject invalid Enum" })
});

type FormDataType = zod.infer<typeof schema>;

export {
    schema,
    type FormDataType,
}