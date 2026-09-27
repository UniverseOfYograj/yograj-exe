const env = import.meta.env;

export const siteConfig = {
  name: "Yograj Tripathi",
  location: "Satna, Madhya Pradesh",
  role: "Software Engineer at TCS",
  github: "https://github.com/UniverseOfYograj",
  linkedin: "https://www.linkedin.com/in/yograjtripathi9/",
  email: env.VITE_CONTACT_EMAIL?.trim() ?? "",
  resume: env.VITE_RESUME_URL?.trim() ?? "",
  codingProfiles: [
    {
      name: "LeetCode",
      username: "Yograj108",
      href: "https://leetcode.com/u/Yograj108/",
      accent: "#fbbf68",
    },
    {
      name: "GeeksforGeeks",
      username: "pushpyogth1z",
      href: "https://www.geeksforgeeks.org/profile/pushpyogth1z",
      accent: "#67e8f9",
    },
    {
      name: "Code360",
      username: "UltimateYogiRaj",
      href: "https://www.naukri.com/code360/profile/UltimateYogiRaj",
      accent: "#38bdf8",
    },
  ],
};
