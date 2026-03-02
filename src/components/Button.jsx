const Button = ({ title, id, righIcon, leftIcon, containerClass }) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black0 ${containerClass}`}>
        {leftIcon}
        <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
            <div>{title}</div>
        </span>
        {righIcon}
    </button>
  )
}

export default Button