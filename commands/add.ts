import { execSync } from "child_process";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import { join } from "path";

export async function add(component: string) {
  console.log(`Adding ${component}...`);

  // Install required dependencies
  console.log("Installing required dependencies...");
  try {
    execSync("npm install @iconify/vue tailwindcss@latest --save", {
      stdio: "inherit",
    });
    console.log("✅ Dependencies installed successfully");
  } catch (err) {
    console.error("❌ Failed to install dependencies");
    throw err;
  }

  const repoUrl = `https://raw.githubusercontent.com/AbdulghaniKM/novue-ui-components/main/components/${component}.vue`;
  const outputDir = join(process.cwd(), "src", "components", "ui");
  const outputPath = join(outputDir, `${component}.vue`);

  try {
    // Ensure src/components/ui exists
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
      console.log(`Created directory: ${outputDir}`);
    }

    // Fetch the component
    const response = await fetch(repoUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch ${repoUrl}`);
    }
    const content = await response.text();

    // Write the file
    writeFileSync(outputPath, content, "utf8");
    console.log(`Successfully added ${component} to ${outputPath}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`❌ Error adding ${component}:`, error.message);
      console.error(`URL attempted: ${repoUrl}`);
      throw error;
    }
    // Handle case where error is not an Error object
    console.error(`❌ Unknown error adding ${component}`);
    throw new Error("An unknown error occurred");
  }
}
