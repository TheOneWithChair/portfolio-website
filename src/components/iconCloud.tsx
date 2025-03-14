import IconCloud2 from "@/components/ui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript", 
  "typescript",
  "react",
  "nextdotjs",
  "nodejs",
  "express",
  "mongodb",
  "postgresql",
  "python",
  "django",
  "pytorch",
  "tensorflow",
  "java",
  "c",
  "cplusplus",
  "tailwindcss",
  "git",
  "vercel"
];

export function IconCloud() {
  return (
    <div className="relative flex h-full w-full max-w-[38rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-10">
      <IconCloud2 iconSlugs={slugs} />
    </div>
  );
}
