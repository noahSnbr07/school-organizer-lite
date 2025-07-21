'use client';

import React from "react";

interface _props {
    id: number;
    title: string;
    children: React.ReactNode;
}

export default function QuickInsightCard({ title, children }: _props) {


    return (
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-stack min-h-0">
            <b className="text-sm">{title}</b>
            <div className="w-full h-1 rounded-full bg-stack" />
            <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
        </div>
    );
}