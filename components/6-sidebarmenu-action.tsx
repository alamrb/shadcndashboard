import { SidebarMenu, SidebarMenuItem, SidebarMenuSkeleton } from "./ui/sidebar"

const AppSidebarMenuAction = () => {
    return (
    function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}




  )
}

export default AppSidebarMenuAction