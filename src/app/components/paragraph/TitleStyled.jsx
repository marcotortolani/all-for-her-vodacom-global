const TitleStyled = ({ children }) => (
  <h1
    className={
      ' w-full uppercase font-abrilFatface pointer-events-none cursor-default text-[1.8rem] leading-[2rem] md:text-3xl lg:text-4xl text-Black text-left  '
    }
  >
    {children}
  </h1>
)

export default TitleStyled
