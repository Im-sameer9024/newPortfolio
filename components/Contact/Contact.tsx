"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";

// Define validation schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const toastId = toast.loading("Sending message...");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await axios.post("/api/contact", data);
      if (response.status === 200) {
        toast.success("Message sent successfully");
      }
    } catch (error) {
      console.log("error occur", error);
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
      reset();
    }
    // Simulate API call with 2 second delay
  };

  return (
    <div className="w-11/12 md:w-11/12 flex flex-col mt-8 md:mt-16 mx-auto h-auto">
      {/*--------- heading section ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="font-la-belleAurore text-sm md:text-lg">{"<h1>"}</p>
        <div className="w-fit space-y-1">
          <h3 className="font-righteous text-3xl md:text-5xl whitespace-nowrap">
            Let&#39;s Connect
          </h3>
          <hr className="w-full border-[#EEA66B] border-2 md:border-4" />
        </div>
        <p className="font-la-belleAurore mt-2 md:mt-3 text-sm md:text-lg">
          {"</h1>"}
        </p>
      </motion.div>

      {/*------------ contact form ------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full mt-6 md:mt-8"
      >
        <p className="font-la-belleAurore text-sm md:text-lg">{"<form>"}</p>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-3/5 w-full my-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/*---------------- name ------------------ */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="border border-gray-300 rounded-lg mt-2 md:mt-3 mb-1 flex items-center">
              <div className="bg-gray-300 rounded-l-md px-4 py-2 text-sm md:text-lg border-r-2">
                Name
              </div>
              <div className="w-full">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 text-sm md:text-lg border-none focus:outline-none"
                  disabled={loading}
                />
              </div>
            </div>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.name.message}
              </motion.p>
            )}
          </motion.div>

          {/*---------------- email ------------------ */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="border border-gray-300 rounded-lg mt-2 md:mt-3 mb-1 flex items-center">
              <div className="bg-gray-300 rounded-l-md px-4 py-2 text-sm md:text-lg border-r-2">
                Email
              </div>
              <div className="w-full">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-sm md:text-lg border-none focus:outline-none"
                  disabled={loading}
                />
              </div>
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.email.message}
              </motion.p>
            )}
          </motion.div>

          {/*---------------- message ------------------ */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="border border-gray-300 rounded-lg mt-2 md:mt-3 mb-1 flex flex-col h-full">
              <div className="bg-gray-300 rounded-t-md px-4 py-3 text-sm md:text-lg">
                Message
              </div>
              <div className="w-full">
                <textarea
                  {...register("message")}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 text-sm md:text-lg border-none focus:outline-none min-h-[100px] resize-none"
                  disabled={loading}
                  rows={5}
                />
              </div>
            </div>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.message.message}
              </motion.p>
            )}
          </motion.div>

          {/*---------------- submit button ------------------ */}
          <motion.div
            className="mt-6 md:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center px-6 py-3 hover:cursor-pointer rounded-lg text-white font-semibold transition-colors ${
                loading ? "bg-[#EEA66B]/80" : "bg-[#EEA66B] hover:bg-[#e69550]"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.div>
        </motion.form>

        <p className="font-la-belleAurore text-sm md:text-lg mt-4">
          {"</form>"}
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
