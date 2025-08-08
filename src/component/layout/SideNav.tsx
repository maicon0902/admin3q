"use client";
import React, { useEffect, useState } from "react";
import { ConfigProvider, Layout, Menu, MenuProps, SiderProps } from "antd";
import {
  BranchesOutlined,
  UserOutlined,
  PieChartOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import {
  ACCOUNT_MANAGEMENT,
  COLOR,
  GAME_MANAGEMENT,
  HISTORY_DASHBOARD,
  MINI_GAME,
  MONEY_MANAGEMENT,
  OPERATOR_MANAGEMENT,
  STATISTICAL_MANAGEMENT,
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
  getItem("Quản lý người dùng", "account-management", <UserOutlined />, [
    getItem("Danh sách user", ACCOUNT_MANAGEMENT.USER_LIST),
    getItem("Danh sách admin", ACCOUNT_MANAGEMENT.ADMIN_LIST),
    getItem("Quản lý vai trò", ACCOUNT_MANAGEMENT.ROLE_MANAGEMENT),
  ]),
  getItem("Quản lý game", "game-management", <BuildOutlined />, [
    getItem("Cài đặt vòng quay", GAME_MANAGEMENT.WHEEL_OF_FORTUNE),
    getItem("Cài đặt mức cược", GAME_MANAGEMENT.DEAL_CONFIG),
    getItem("Cài đặt hệ thống", GAME_MANAGEMENT.SYS_CONFIG),
    getItem("Cài đặt banner", GAME_MANAGEMENT.BANNER_CONFIG),
  ]),
  getItem("Quản lý nhà điều hành", OPERATOR_MANAGEMENT),
  getItem("Thống kê", "statistical", <PieChartOutlined />, [
    getItem("Nhà điều hành", STATISTICAL_MANAGEMENT.OPERATOR),
    getItem("Trò chơi", STATISTICAL_MANAGEMENT.GAMES),
    getItem("Người chơi", STATISTICAL_MANAGEMENT.PLAYER),
    getItem("Đơn cược", STATISTICAL_MANAGEMENT.ORDER),
  ]),
  getItem("Quản lý dòng tiền", "money-management", <BranchesOutlined />, [
    getItem("Lịch sử dòng tiền", MONEY_MANAGEMENT.MONEY_HISTORY),
  ]),
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
