import fs from "node:fs";
import path from "node:path";

const loadEnv = () => {
  const defaultLocation = path.join(path.dirname(process.argv[1]), ".env");
  const contents = fs.readFileSync(defaultLocation, "utf8");

  contents.split("\n").forEach((line) => {
    const [key, value] = line;
    process[key] = value;
  });
};

loadEnv();
