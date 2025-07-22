'use client';
import { ClipLoader } from "react-spinners";

//default loader
//use globally
//schematic appearance
export default function Spinner() {

    return (
        <ClipLoader size={16} color="grey" />
    );
}