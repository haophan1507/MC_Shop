import { Link, Outlet } from 'react-router-dom';
import { Center, Grid, Image, ScrollArea } from '@mantine/core';
import {
  IconNotes,
  IconLayoutDashboard,
  IconUserPentagon,
  IconStarsFilled,
  IconLogout,
  IconNote,
  IconBrandGoogleAnalytics,
} from '@tabler/icons-react';
import classes from './Dashboard.module.css';
import { LinksGroup } from './NavbarLinksGroup';

import logo from '../../../../assets/images/logo_MC.png';
import { Typography } from '../../../../common/components/Typography';
import Colors from '../../../../common/components/Colors';
import { useLocalStorage } from '@mantine/hooks';

function index() {
  const [_value, setValue] = useLocalStorage({ key: 'admin' });

  const mockdata = [
    {
      label: 'Đơn hàng',
      icon: IconNotes,
      to: '/admin/order',
    },
    {
      label: 'Dashboard',
      icon: IconBrandGoogleAnalytics,
      to: '/admin/dashboard',
    },
    {
      label: 'Danh mục',
      icon: IconLayoutDashboard,
      initiallyOpened: true,
      links: [
        { label: 'Các túi ví xách', link: '/', to: '/admin/category' },
        { label: 'Túi Crossbody', link: '/', to: '/admin/category' },
        { label: 'Túi mini', link: '/', to: '/admin/category' },
        { label: 'Túi xách tay trên ', link: '/', to: '/admin/category' },
        { label: 'Túi đeo vai', link: '/', to: '/admin/category' },
      ],
      to: '/admin',
    },
    { label: 'Blog', icon: IconNote, to: '/admin/blog' },
    { label: 'Tài khoản', icon: IconUserPentagon, to: '/admin/user' },
    { label: 'Đánh giá', icon: IconStarsFilled, to: '/admin/review' },
    {
      label: 'Đăng xuất',
      icon: IconLogout,
      to: '/admin',
      onClick: () => setValue(''),
    },
  ];

  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Grid gutter={32}>
      <Grid.Col span={2}>
        <nav className={classes.navbar}>
          <Center>
            <Link to="/admin">
              <Image src={logo} w={126} h={72} />
            </Link>
          </Center>
          <ScrollArea className={classes.links}>
            <div className={classes.linksInner}>{links}</div>
          </ScrollArea>
          <Typography.Body2>MC shop Admin Dashboard</Typography.Body2>
          <Typography.Body2 c={Colors.Grey2}>
            © 2023 All Rights Reserved
          </Typography.Body2>
        </nav>
      </Grid.Col>
      <Grid.Col span={10} bg={Colors.Grey3}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
}

export default index;
