"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";

export default function SignupFormDemo() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        body: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading) return;
        
        if (!formData.name || !formData.email || !formData.subject || !formData.body) {
            alert("Please fill all the fields");
            return;
        }
        
        setIsLoading(true);
        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Email sent successfully");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    body: ""
                });
            } else {
                console.error("Error sending email");
                alert("Error sending email, no problem mail me directly at charitasrig@gmail.com")
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Error sending email, no problem mail me directly at charitasrig@gmail.com")
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h1 className="text-center text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
                Send me an message!
            </h1>
            <p className="text-neutral-600 text-md md:text-lg max-w-sm mt-4 dark:text-neutral-300">
                Got a question or proposal, or just want to say hello? Go ahead.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="name"> Name</Label>
                    <Input id="name" placeholder="charitasri" type="text" value={formData.name} onChange={handleChange} className="text-black dark:text-white" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="charitasrig@gmail.com" type="email" value={formData.email} onChange={handleChange} className="text-black dark:text-white" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="let me know how can i help you opportunity" type="text" value={formData.subject} onChange={handleChange} className="text-black dark:text-white" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="body">Body</Label>
                    <textarea 
                        id="body" 
                        placeholder="leave a comment ..." 
                        value={formData.body} 
                        onChange={(e) => setFormData(prev => ({ ...prev, body: e.target.value }))}
                        className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : "Shoot"} &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
