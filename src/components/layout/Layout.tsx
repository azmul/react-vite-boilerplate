import * as React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import $ from "jquery";
import capitalize from "lodash/capitalize";
import { logout } from "@/identity/identityHelper";
import { RoutePermission } from "@/identity/ProtectedRoute";
import { UserRoles } from "@/identity/identityScopes";
import LOGO from "@/assets/images/logoipsum-239.svg";
import HEADER_AVATAR from "@/assets/images/users/avatar-1.jpg";
import styles from "./Layout.module.scss";

const rootSubmenuKeys = [
  "members",
  "rfidUsers",
  "smuLocaks",
  "setting",
  "towers",
  "bms",
  "reports",
];

export default function Header() {
  const location = useLocation();

  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  const [openKeys, setOpenKeys] = React.useState<string[]>([""]);
  const [pageTitle, setPageTitle] = React.useState<string>("Dashboard");

  const onOpenChange: MenuProps["onOpenChange"] = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  function toggleCollapsed() {
    const bodyWidth: number | undefined = window && $(window).width();
    if (bodyWidth && 992 <= bodyWidth) {
      setCollapsed(!collapsed);
      $("body").toggleClass("sidebar-enable"),
        $("body").toggleClass("vertical-collpsed");
    } else {
      setCollapsed(false);
      $("body").removeClass("vertical-collpsed");
    }
  }

  React.useEffect(() => {
    const paths: string[] = location.pathname.split("/");
    if (paths[1]) setPageTitle(capitalize(paths[1]));
    else setPageTitle("Dashboard");
  }, [location.pathname]);

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <a href="#" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={LOGO} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={LOGO} alt="" height="17" />
                </span>
              </a>

              <a href="#" className="logo logo-light">
                <span className="logo-sm">
                  <img src={LOGO} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={LOGO} alt="" height="36" />
                </span>
              </a>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={toggleCollapsed}
            >
              <i className="mdi mdi-menu"></i>
            </button>

            <div className="d-none d-sm-block ms-2">
              <h4 className="page-title">{pageTitle}</h4>
            </div>
          </div>

          <div className="search-wrap" id="search-wrap">
            <div className="search-bar">
              <input
                className="search-input form-control"
                placeholder="Search"
              />
              <a
                href="#"
                className="close-search toggle-search"
                data-target="#search-wrap"
              >
                <i className="mdi mdi-close-circle"></i>
              </a>
            </div>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={HEADER_AVATAR}
                  alt="Header Avatar"
                />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  My Wallet
                </a>
                <a className="dropdown-item d-block" href="#">
                  <span className="badge bg-success float-end">11</span>
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  Lock screen
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item text-danger"
                  onClick={() => logout()}
                >
                  Logout
                </a>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect noti-icon"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-cog"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" id="toggle-theme-btn" href="#">
                  <i className="bx bx-user font-size-16 align-middle me-1"></i>
                  Toggle Theme
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          <Menu
            inlineCollapsed={collapsed}
            className={styles.menu}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            mode="inline"
            rootClassName={cx({ [styles.width70]: collapsed })}
          >
            <Menu.Item
              key="dasboard"
              icon={<i className="mdi mdi-view-dashboard me-2" />}
            >
              <Link to="/" rel="noopener noreferrer">
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.ItemGroup title="Company Management">
              <Menu.SubMenu
                key="members"
                title="Members"
                icon={<i className="mdi mdi-account-multiple-outline me-2" />}
              >
                <Menu.Item key="member">
                  <Link to="member" rel="noopener noreferrer">
                    Member
                  </Link>
                </Menu.Item>

                {RoutePermission([UserRoles.USER]) && (
                  <Menu.Item key="roles">
                    <Link to="roles" rel="noopener noreferrer">
                      Roles
                    </Link>
                  </Menu.Item>
                )}
                <Menu.Item key="invitation">
                  <Link to="invitation" rel="noopener noreferrer">
                    Invitation
                  </Link>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item
                key="rifd-users"
                icon={
                  <i className="mdi mdi-card-account-details-outline me-2" />
                }
              >
                <Link to="rifd-users" rel="noopener noreferrer">
                  RFID Users
                </Link>
              </Menu.Item>
              <Menu.Item
                key="smu-locks"
                icon={<i className="mdi mdi-cube-outline me-2" />}
              >
                <Link to="smu-locks" rel="noopener noreferrer">
                  SMU Locks
                </Link>
              </Menu.Item>
              <Menu.SubMenu
                key="setting"
                title="Setting"
                icon={<i className="ion ion-md-settings me-2" />}
              >
                <Menu.Item key="Notifications-Settings">
                  <Link to="/" rel="noopener noreferrer">
                    Notifications Settings
                  </Link>
                </Menu.Item>
                <Menu.Item key="Alerms-Settings">
                  <Link to="/" rel="noopener noreferrer">
                    Alerms Settings
                  </Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Tower Management">
              <Menu.Item
                key="towers"
                icon={<i className="mdi mdi-transmission-tower me-2" />}
              >
                <Link to="/" rel="noopener noreferrer">
                  Towers
                </Link>
              </Menu.Item>
              <Menu.Item
                key="bms"
                icon={<i className="fas fa-car-battery  me-2" />}
              >
                <Link to="/" rel="noopener noreferrer">
                  BMS
                </Link>
              </Menu.Item>
              <Menu.SubMenu
                key="reports"
                title="Reports"
                icon={<i className="mdi mdi-chart-line" />}
              >
                <Menu.Item key="AC/DC Usages">
                  <Link to="/" rel="noopener noreferrer">
                    AC/DC Usages
                  </Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.ItemGroup>
          </Menu>
        </div>
      </div>
    </>
  );
}
