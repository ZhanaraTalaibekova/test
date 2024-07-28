import { Outlet } from "react-router"
import { Header, MiniDrawer } from "../../../components            "


export const Layout = () => {
  return (
    <>
      <MiniDrawer />
      <Header />
      <Outlet />
    </>
  )
}