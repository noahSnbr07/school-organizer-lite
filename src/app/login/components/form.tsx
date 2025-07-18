'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z as zod } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import schema from '@/schemas/login-form-schema';
import APIResponse from '@/interfaces/api-response';
import Spinner from '@/components/spinner';

type FormData = zod.infer<typeof schema>;

export default function Form() {

    const router = useRouter();

    //track submission state
    const [pending, setPending] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    //append resolver to form
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

    //handle form submission
    async function onSubmit(formData: FormData) {

        if (pending) return
        else setPending(true);

        const formBody = new FormData();
        formBody.append("name", formData.name)
        formBody.append("password", formData.password)

        try {

            //call endpoint
            const response = await fetch("/api/auth/login", { body: formBody, method: "POST" });
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
            method='POST'
            onSubmit={handleSubmit(onSubmit)}
            className='rounded-xl w-md bg-stack p-8 flex flex-col gap-8'>
            <b className='text-lg'> Login </b>

            <div
                className='flex flex-col gap-4'>
                <input
                    className='bg-stack rounded-md px-4 py-2'
                    type='text'
                    placeholder='username'
                    {...register("name")}
                />

                <input
                    className='bg-stack rounded-md px-4 py-2'
                    type='password'
                    placeholder='password'
                    {...register("password")}
                />
            </div>

            <div className='w-full h-1 bg-stack rounded-full'></div>

            <button
                className='cursor-pointer p-2 bg-foreground text-background font-bold rounded-md'
                type="submit">
                {pending ? <Spinner /> : "Submit"}
            </button>


            <div className='flex flex-col text-sm text-red-500 text-center'>
                <i> {errors.name?.message} </i>
                <i> {errors.password?.message} </i>
                <i> {message} </i>
            </div>


        </form>
    );
}