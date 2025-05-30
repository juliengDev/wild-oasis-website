import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};
export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return (
    <div>
      <h2 className="my-7 text-2xl font-semibold text-accent-400">
        Welcome, {firstName}
      </h2>
    </div>
  );
}
