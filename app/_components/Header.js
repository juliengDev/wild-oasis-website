// import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import BurgerMenu from "./BurgerMenu";
import { auth } from "../_lib/auth";
// import Navigation from "./Navigation";

// function Header() {
//   return (
//     <header className="border-b border-primary-900 px-8 py-5">
//       <div className="mx-auto flex max-w-7xl items-start justify-between md:items-center">
//         <Logo />
//          <Navigation />//
//       </div>
//     </header>
//   );
// }

export default async function Header() {
  const session = await auth();
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <BurgerMenu session={session} />
      </div>
    </header>
  );
}
