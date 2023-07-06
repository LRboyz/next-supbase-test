interface ContentLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ContentLayoutProps) {
  return <div className="px-4">{children}</div>;
}
