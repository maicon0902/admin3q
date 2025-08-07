"use client";
import React, { useEffect, useState } from "react";
import { ConfigProvider, Layout, Menu, MenuProps, SiderProps } from "antd";
import {
  BranchesOutlined,
  UserOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import {
  ACCOUNT_MANAGEMENT,
  COLOR,
  HISTORY_DASHBOARD,
  MINI_GAME,
} from "@/shares/constant/constant";
import { Logo } from "./logo";
import { useRouter } from "next/navigation";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: MenuProps["items"] = [
  getItem("Quản lý tài khoản", "account-management", <UserOutlined />, [
    getItem("Danh sách user", ACCOUNT_MANAGEMENT.USER_LIST),
    getItem("Danh sách admin", ACCOUNT_MANAGEMENT.ADMIN_LIST),
    getItem("Quản lý vai trò", ACCOUNT_MANAGEMENT.ROLE_MANAGEMENT),
  ]),
  // getItem("Quản lý mini game", "mini-game-management", <PieChartOutlined />, [
  //   getItem("Cấu hình điều kiện", MINI_GAME.CONDITION_CONFIG),
  //   getItem("Cấu hình content", MINI_GAME.CONTENT_CONFIG),
  //   getItem("Cấu hình điểm", MINI_GAME.POINT_CONFIG),
  //   getItem("Update lượt chơi", MINI_GAME.UPDATE_PLAY),
  //   getItem("Điều chỉnh đếm ngược", MINI_GAME.COUNTDOWN_CONFIG),
  //   getItem("Cấu hình số lượng", MINI_GAME.QUANTITY_CONFIG),
  // ]),
  // getItem("Lịch sử", "history", <BranchesOutlined />, [
  //   getItem("Lịch sử chơi", HISTORY_DASHBOARD.PLAY_TURN),
  //   getItem("Lịch sử quy đổi DTC", HISTORY_DASHBOARD.DTC_TO_PLAY),
  //   getItem("Lịch sử lượt chơi hiện tại", HISTORY_DASHBOARD.CURRENT_PLAY),
  // ]),
];

const rootSubmenuKeys = ["account-management"];

type SideNavProps = SiderProps;

const SideNav = ({ ...others }: SideNavProps) => {
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState([""]);
  const [current, setCurrent] = useState("");
  const router = useRouter();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    router.push(key);
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const paths = pathname.toString().split("/");
    setOpenKeys(paths);
    setCurrent(pathname);
  }, [pathname]);

  return (
    <Sider breakpoint="lg" collapsedWidth="0" {...others}>
      <Logo
        color="#ffff"
        asLink
        href={"/"}
        justify="center"
        gap="small"
        imgSize={{ h: 28, w: 28 }}
        style={{ padding: "1rem 0" }}
      />
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: "none",
              itemSelectedBg: COLOR["100"],
              itemHoverBg: COLOR["50"],
              itemSelectedColor: COLOR["600"],
            },
          },
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={onClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[current]}
          style={{ border: "none" }}
        />
      </ConfigProvider>
    </Sider>
  );
};

export default SideNav;
