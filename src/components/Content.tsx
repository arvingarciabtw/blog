interface Content {
  children: React.ReactNode
}

function Content({ children }: Content) {
  return <main>{children}</main>;
}

export default Content;
