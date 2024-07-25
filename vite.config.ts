import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "192.168.100.200", // Set the local IP address
    port: 5173, // You can set the port number you prefer
  },
});
