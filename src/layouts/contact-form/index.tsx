/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Icon } from "@iconify/react";
import Input from "@/components/input";
import Select from "@/components/select";

const ContactForm = () => {
    const [name, setName] = useState({ value: "" });
    const [email, setEmail] = useState({ value: "" });
    const [phone, setPhone] = useState({ value: "" });
    const [subject, setSubject] = useState({ value: "" });
    const [message, setMessage] = useState({ value: "" });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleClearForm = () => {
        setName({ value: "" });
        setEmail({ value: "" });
        setPhone({ value: "" });
        setSubject({ value: "" });
        setMessage({ value: "" });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // In a real app, you would send this to your backend
            // For demo purposes, we'll simulate an API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // enqueueSnackbar(
            //     "Message sent successfully! We'll get back to you soon.",
            //     {
            //         variant: "success",
            //     },
            // );

            // Reset form
            handleClearForm();
        } catch (error: any) {
            // enqueueSnackbar("Failed to send message. Please try again.", {
            //     variant: "error",
            // });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="shadow space-y-6 bg-light max-w-3xl px-6 py-14 md:py-16 md:px-24 rounded-2xl mx-auto"
        >
            <div className="flex flex-col md:grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="text-sm flex flex-col gap-1.5">
                    <label htmlFor="name">Full Name</label>
                    <Input
                        name="name"
                        setState={setName}
                        state={name}
                        type="text"
                        icon={<></>}
                    />
                </div>

                <div className="text-sm flex flex-col gap-1.5">
                    <label htmlFor="email">Email *</label>
                    <Input
                        name="email"
                        setState={setEmail}
                        state={email}
                        type="email"
                        icon={<></>}
                    />
                </div>

                <div className="text-sm flex flex-col gap-1.5">
                    <label htmlFor="phone">Phone Number</label>
                    <Input
                        name="phone"
                        setState={setPhone}
                        state={phone}
                        type="tel"
                        icon={<></>}
                    />
                </div>

                <div className="text-sm flex flex-col gap-1.5">
                    <label htmlFor="subject">Service Type</label>
                    <Select
                        name="subject"
                        setState={setSubject}
                        state={subject}
                        placeholder="Select a subject"
                        options={[
                            { value: "Room Cleaning", label: "Room Cleaning" },
                            {
                                value: "Bathroom Cleaning",
                                label: "Bathroom Cleaning",
                            },
                            {
                                value: "Full House Cleaning",
                                label: "Full House Cleaning",
                            },
                        ]}
                    />
                </div>

                <div className="text-sm flex flex-col gap-1.5 col-span-2">
                    <label htmlFor="message">Message *</label>
                    <Input
                        name="message"
                        setState={setMessage}
                        state={message}
                        type="text-area"
                        icon={<></>}
                    />
                </div>
            </div>

            <div className="flex items-center md:flex-nowrap flex-wrap gap-4 justify-center">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                >
                    {isSubmitting ? (
                        <>
                            <Icon
                                icon="mdi:loading"
                                className="h-5 w-5 animate-spin"
                            />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Icon icon="mdi:send" className="h-5 w-5" />
                            <span>Send Message</span>
                        </>
                    )}
                </button>

                <button
                    type="button"
                    onClick={handleClearForm}
                    className="btn-ghost"
                >
                    Clear Form
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
