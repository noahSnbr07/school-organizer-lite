'use server';
import Layouts from "@/layouts/layouts";
import React from "react";


interface _props {
    children: React.ReactNode;
}

export default async function layout({ children }: _props) {

    return (
        <Layouts.Global>
            <Layouts.CenteredFormLayout>
                {children}
            </Layouts.CenteredFormLayout>
        </Layouts.Global>
    );
}