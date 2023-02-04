export type ISocial = {
  target: string;
  icon: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  link: string;
};
