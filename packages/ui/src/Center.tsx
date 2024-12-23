import React from "react"

export const Center = ({ children }: { children: React.ReactNode }) => {
    console.log("lol");
    return <div className="flex justify-center flex-col h-full">
        <div className="flex justify-center">
            {children}
        </div>
    </div>
}
