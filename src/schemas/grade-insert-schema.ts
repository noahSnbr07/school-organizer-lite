import subjects from "@/assets/constants/subjects";
import { z as zod } from "zod";

const schema = zod.object({
    subject: zod.enum(subjects),
    score: zod.int()
        .min(0, { error: "Min Score Invalid" })
        .max(15, { error: "Max Score Invalid" }),
    type: zod.enum(["Exam", "Test"], { error: "Type Invalid" }),
});

type FormDataType = zod.infer<typeof schema>;

export {
    schema,
    type FormDataType,
}