import { execSync } from "child_process";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import { join } from "path";

export async function init() {
  console.log("Initializing novue-ui...");

  try {
    // Step 1: Install Tailwind CSS v4
    console.log("Installing Tailwind CSS v4...");
    execSync("npm install @iconify/vue  tailwindcss @tailwindcss/vite", {
      stdio: "inherit",
    });

    // Step 2: Create src/styles directory if it doesn't exist
    const stylesDir = join(process.cwd(), "src", "styles");
    if (!existsSync(stylesDir)) {
      mkdirSync(stylesDir, { recursive: true });
      console.log(`Created directory: ${stylesDir}`);
    }

    // Step 3: Fetch tailwind.css from novue-ui-components
    const tailwindUrl =
      "https://raw.githubusercontent.com/AbdulghaniKM/novue-ui-components/main/styles/tailwind.css";
    const response = await fetch(tailwindUrl);
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: Failed to fetch ${tailwindUrl}`
      );
    }
    const tailwindContent = await response.text();

    // Step 4: Write tailwind.css to src/styles
    const outputPath = join(stylesDir, "tailwind.css");
    writeFileSync(outputPath, tailwindContent, "utf8");
    console.log(`Tailwind CSS v4 initialized at ${outputPath}`);

    console.log("novue-ui initialized successfully!");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Error during initialization:", error.message);
      throw error;
    }
    console.error("❌ Unknown error during initialization");
    throw new Error("An unknown error occurred");
  }
}
