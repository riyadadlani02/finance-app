export type SideMenu = {
  title: string;
  path: string;
  Component: ({ active }: { active: boolean }) => JSX.Element;
};
