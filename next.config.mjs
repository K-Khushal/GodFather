/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [ "robohash.org", "live.staticflickr.com", "firebasestorage.googleapis.com"]
    },
}
export default nextConfig;
