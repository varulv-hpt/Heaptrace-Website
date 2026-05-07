import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react-icons",
              message: "Use `lucide-react` for all icon imports.",
            },
            {
              name: "@heroicons/react",
              message: "Use `lucide-react` for all icon imports.",
            },
            {
              name: "@phosphor-icons/react",
              message: "Use `lucide-react` for all icon imports.",
            },
          ],
          patterns: [
            {
              group: ["react-icons/*", "@heroicons/react/*", "@phosphor-icons/*"],
              message: "Use `lucide-react` for all icon imports.",
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
