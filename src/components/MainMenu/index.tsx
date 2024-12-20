import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

export default function MainMenu() {
  type MenuItem = Required<MenuProps>['items'][number];
  const items: MenuItem[] = [
    {
      label: '栏目1',
      key: '/page1',
      icon: <PieChartOutlined />
    },
    {
      label: '栏目2',
      key: '/page2',
      icon: <DesktopOutlined />
    },
    {
      label: '栏目3',
      key: '/page3',
      icon: <UserOutlined />,
      children: [
        {
          label: '栏目301',
          key: '/page3/page301',
        },
        {
          label: '栏目302',
          key: '/page3/page302',
        },
        {
          label: '栏目303',
          key: '/page3/page303',
        }
      ]
    },
    {
      label: '栏目4',
      key: '/page4',
      icon: <TeamOutlined />,
      children: [
        {
          label: '栏目401',
          key: '/page4/page401',
        },
        {
          label: '栏目402',
          key: '/page4/page402',
        }
      ]
    },
    {
      label: '栏目5',
      key: '/page5',
      icon: <FileOutlined />
    }

  ];
  const currentRoute = useLocation()
  let firstOpenKey: string = ''
  function findKey(obj: MenuItem) {
    return obj?.key === currentRoute.pathname
  }
  items.forEach(function (item) {
    if (item && 'children' in item && item.children && item.children.find(findKey)) {
      firstOpenKey = item.key as string
    }
  })
  const [openKeys, setOpenKeys] = useState([firstOpenKey])
  const navigateto = useNavigate()
  const menuClick = (e: { key: string }) => {
    navigateto(e.key)
  }
  const handleOpenChange = (keys: string[]) => {
    console.log(keys);
    setOpenKeys([keys[keys.length - 1]])
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline" items={items}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    />
  )
}
