import Link from "next/link"

const AdminLink = ({ link, Icon, text }) => {
  return (
    <Link href={link} className="w-full flex items-center gap-x-1.5 group select-none">
      <div className="w-1  h-10 bg-transparent transition-colors duration-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[102%] group-hover:bg-white group-hover:translate-y-0 translate-y-0    transition-all duration-300" />
      </div>
      <div className="bg-white/10  text-lg text-white group-hover:bg-white/5 w-[85%] group-active:scale-95 self-stretch px-4 rounded-lg   shadow flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white " href="#">
        <Icon className="text-lg" />
        <span className="font-QuicksandMedium">{text}</span>
      </div>
    </Link>
  )
}

export default AdminLink
