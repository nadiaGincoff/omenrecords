import TitleAndDescription from "./TitleWithDescription"
import Word from "./Word"
import Contact from "./Contact"

export default function Index() {
  return (
    <div className="w-full flex-col min-h-screen items-center justify-center">
      <TitleAndDescription />
      <Word />
      <hr className="dotted" />
      <Contact />
    </div>
  )
}