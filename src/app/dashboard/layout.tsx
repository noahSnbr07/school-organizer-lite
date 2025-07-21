'use server';
import { GlobalLayout } from "@/layouts/layouts";
import React from "react";


interface _props {
    children: React.ReactNode;
}

export default async function layout({ children }: _props) {


    return (
        <GlobalLayout>
            {children}
        </GlobalLayout>
    );
}