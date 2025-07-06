import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

export default nextConfig;