import { Container, Flex, HoverCard, Image, Stack } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { IconSearch, IconShoppingBag, IconUser } from '@tabler/icons-react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import Colors from '../common/components/Colors';
import logo from '../assets/images/logo_MC.png';

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${Colors.Grey1};
  font-family: 'SVN-SofiaProRegular';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &.active {
    color: ${Colors.Brown};
    font-weight: 600;
  }
`;

const LinkMenu = styled(NavLink)`
  text-decoration: none;
  color: ${Colors.Grey1};
  font-family: 'SVN-SofiaProRegular';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

function Headers() {
  const { pathname } = useLocation();

  return (
    <Container
      fluid
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor: ['/'].includes(pathname)
          ? Colors.LightGrey
          : Colors.White,
      }}
    >
      <Container size="xl">
        {/* Menu */}
        <Flex justify="space-between" align="center" py={36}>
          <Link to="/">
            <Image src={logo} w={84} h={48} />
          </Link>
          <Flex gap={48}>
            <Link to="/">Trang chủ</Link>
            <HoverCard width={250} shadow="md">
              <HoverCard.Target>
                <Link
                  to="/product/Tất cả các túi sách Nữ"
                  className={`${pathname.includes('/product') ? 'active' : ''}`}
                >
                  Sản phẩm
                </Link>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Stack>
                  <LinkMenu to="/product/Tất cả các túi sách Nữ">
                    Tất cả các túi sách Nữ
                  </LinkMenu>
                  <LinkMenu to="/product/Tất cả các túi sách Nam">
                    Tất cả các túi sách Nam
                  </LinkMenu>
                  <LinkMenu to="/product/Các túi ví">Các túi ví</LinkMenu>
                  <LinkMenu to="/product/Túi Crossbody">Túi Crossbody</LinkMenu>
                  <LinkMenu to="/product/Túi Mini">Túi Mini</LinkMenu>
                  <LinkMenu to="/product/Túi xách tay trên">
                    Túi xách tay trên
                  </LinkMenu>
                  <LinkMenu to="/product/Túi đeo vai">Túi đeo vai</LinkMenu>
                </Stack>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/blog">Bài viết</Link>
            <Link to="/contact">Liên hệ</Link>
          </Flex>
          <Flex gap={24}>
            <IconSearch />
            <IconShoppingBag />
            <IconUser />
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}

export default Headers;
