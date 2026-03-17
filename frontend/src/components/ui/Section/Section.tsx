import type { SectionProps } from "./Section.type";

const STYLE = {
  root: 'w-full  min-h-[280px] max-h-[420px] flex flex-col justify-center items-center p-6 border-1 bg-white border-black/10 rounded-3xl',
  container: 'w-full h-full flex flex-col gap-4',
  title: 'font-semibold text-[18px] text-[#404040]'
}

const Section = ({children, title, style}: SectionProps) => {
  return (
    <article className={STYLE.root} style={style}>
        <div className={STYLE.container}>
          <div className="w-fit">
              <h1 className={STYLE.title}>{title}</h1>
          </div>

          {children}
        </div>
    </article>
  )
}

export default Section;
