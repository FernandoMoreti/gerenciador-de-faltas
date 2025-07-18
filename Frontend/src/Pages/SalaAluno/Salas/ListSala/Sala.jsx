import React from "react";
import { Button } from "./style.jsx";

export default function Sala({ className, sala_id, handleToggleClass, handleActive, ativo }) {
    return (
        <Button ativo={ativo} onClick={() => {
            handleToggleClass(sala_id)
            handleActive()
        }}>{className}</Button>
    )
}