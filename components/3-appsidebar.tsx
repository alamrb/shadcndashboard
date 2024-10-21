import { Sidebar, useSidebar } from "./ui/sidebar"

const AppSidebarthree = () => {

  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar()



  return <Sidebar  side="left" variant="sidebar" collapsible="icon"/>
}

export default AppSidebarthree