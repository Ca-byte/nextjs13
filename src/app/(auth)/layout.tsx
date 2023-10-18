import { ReactNode } from "react";

export default function AuthLayout({children} : { children: ReactNode }) {
  return (
		<>
			<p className="bg-gray-800 text-white">#@#</p>
			<div>{children}</div>
		</>
  )
}