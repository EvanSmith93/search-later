import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Link,
  NavigationMenu,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <>
      <header className="w-full border-b">
        <NavigationMenu className="p-3 flex justify-end">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/settings">Settings</Link>
          </NavigationMenuLink>
          {/* <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/setup">Setup</Link>
          </NavigationMenuLink> */}
        </NavigationMenu>
      </header>
      <Outlet />
    </>
  );
};

export default PageLayout;
