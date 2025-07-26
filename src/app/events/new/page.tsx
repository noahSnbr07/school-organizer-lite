'use server';
import Form from "./components/form";

export default async function page() {


    return (
        <div className="flex-1 p-4 flex flex-col gap-4">
            <Form />
        </div>
    );
}