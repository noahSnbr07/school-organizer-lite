import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function POST() {
    const cookieStore = await cookies();

    cookieStore.delete("school-organizer-lite-token");

    revalidatePath("/", "layout");

    redirect("/");
}