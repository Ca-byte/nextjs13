import { ReactNode } from "react";

export default function AdminLayout({children} : { children: ReactNode }) {
  return (
		<>
			<div>{children}</div>
			<p className="bg-gray-800 text-white">Admin Footer</p>
		</>
  )
}