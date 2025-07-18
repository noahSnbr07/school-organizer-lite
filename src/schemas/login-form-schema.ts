import { z as zod } from "zod";

const schema = zod.object({
    name: zod.string()
        .min(4, 'Minimum Characters: 4')
        .max(24, 'Maximum Characters: 24'),
    password: zod.string()
        .min(4, 'Minimum Characters: 4')
        .max(24, 'Maximum Characters: 24')
});

export default schema;