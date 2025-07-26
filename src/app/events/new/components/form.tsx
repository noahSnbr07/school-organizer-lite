'use client';

import eventTypes from "@/assets/constants/event-types";
import subjects from "@/assets/constants/subjects";
import Spinner from "@/components/spinner";
import APIResponse from "@/interfaces/api-response";
import { FormDataType, schema } from "@/schemas/event-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {

    const router = useRouter();

    //track submission state
    const [pending, setPending] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    //append resolver to form
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>({ resolver: zodResolver(schema) });

    //handle form submission
    async function handleFormSubmission(formData: FormDataType) {

        if (pending) return
        else setPending(true);

        const formBody = new FormData();
        formBody.append("subject", formData.subject)
        formBody.append("date", String(formData.date))
        formBody.append("type", formData.type)
        formBody.append("name", formData.name)

        try {

            //call endpoint
            const response = await fetch("/api/event/create", { body: formBody, method: "POST" });
            const data: APIResponse<null> = await response.json();

            //revalidate new session
            if (data.success) router.push("/");

            //display error
            else setMessage(data.message);

            //catch errors
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "error occurred");
        } finally {
            setPending(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmission)}
            className="flex-1 size-full flex flex-col gap-8">
            <div className="flex justify-between w-full">
                <b className="text-xl"> New Event </b>
                <button
                    disabled={pending}
                    style={{ opacity: pending ? .5 : 1 }}
                    className="bg-foreground text-background font-bold px-4 py-1 w-20 rounded-full"
                    type="submit">
                    {pending ? <Spinner /> : "Save"}
                </button>
            </div>

            <div className="flex flex-col gap-2">
                <i className="opacity-50"> Choose Name </i>
                <input
                    placeholder="Event description"
                    {...register("name")}
                    className="p-4 border-stack rounded-md border-2"
                    name="name"
                    id="name" />
            </div>

            <div className="flex flex-col gap-2">
                <i className="opacity-50"> Choose subject </i>
                <select
                    {...register("subject")}
                    className="p-4 border-stack rounded-md border-2"
                    name="subject"
                    id="subject">
                    {subjects.map((subject: string, _index: number) =>
                        <option key={_index} value={subject}> {subject} </option>)}
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <i className="opacity-50"> Choose Date </i>
                <input
                    type="date"
                    {...register("date", {
                        setValueAs: (v) => new Date(v),
                    })}

                    className="p-4 border-stack rounded-md border-2"
                    name="date"
                    id="date"
                >
                </input>

            </div>

            <div className="flex flex-col gap-2">
                <i className="opacity-50"> Choose Type </i>
                <select
                    {...register("type")}
                    className="p-4 border-stack rounded-md border-2"
                    name="type"
                    id="type">
                    {eventTypes.map((type: string, _index: number) =>
                        <option key={_index} value={type}> {type} </option>)}
                </select>
            </div>

            <div className="flex flex-col items-center text-red-500">
                {errors.name && <i> [NAME]: {errors.name.message} </i>}
                {errors.subject && <i> [SUBJECT]: {errors.subject.message} </i>}
                {errors.date && <i> [DATE]: {errors.date.message} </i>}
                {errors.type && <i> [TYPE]: {errors.type.message} </i>}
                {message && message.length > 0 && <i> [API]: {message} </i>}
            </div>
        </form>
    );
}