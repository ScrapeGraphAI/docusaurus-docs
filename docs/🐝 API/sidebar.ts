import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "🐝 API/smartscraper-api-endpoints",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "🐝 API/extracts-data-from-a-specified-url",
          label: "Extracts data from a specified URL.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
