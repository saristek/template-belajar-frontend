const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}

export default PageTitle