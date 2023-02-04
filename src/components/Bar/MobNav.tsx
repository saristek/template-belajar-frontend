import Link from "next/link"
import { usePathname } from "next/navigation"

const MobNav = () => {
  const path = usePathname()
  const Menu = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Pengaturan',
      link: '/setting',
    }
  ]

  return (
    <div
      className="flex flex-row minimum-width-rem fixed inset-x-0 bottom-0 z-40 grid h-14 w-full grid-cols-5 items-center justify-items-center border-t bg-white"
    // style="box-shadow: 0px -4px 10px rgba(50, 50, 50, 0.2);"
    >
      {Menu.map((menu, index) => (
        <Link
          key={index}
          className="col-span-1 flex flex-col items-center justify-center overflow-hidden focus:outline-none
          {path === menu.link ? 'text-primary-500' : 'text-gray-700'}"
          href={menu.link}>
          <span className="text-gray-900 text-rem font-semibold tracking-wide">
            {menu.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default MobNav