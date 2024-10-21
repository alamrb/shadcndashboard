import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"

const AppsidebarsubMenu = () => {
  return (
    <Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>   
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              Select Workspace
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem>
              <span>Acme Inc</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Acme Corp.</span>
                              </DropdownMenuItem>
                              
                                          <DropdownMenuItem>
              <span>Acme Corp.</span>
            </DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>
        
                      
                      
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
</Sidebar>

  )
}

export default AppsidebarsubMenu
