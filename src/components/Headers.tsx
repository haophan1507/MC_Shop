import {
  Container,
  Divider,
  Flex,
  HoverCard,
  Image,
  Stack,
  UnstyledButton,
} from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconSearch, IconShoppingBag, IconUser } from '@tabler/icons-react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import Colors from '../common/components/Colors';
import logo from '../assets/images/logo_MC.png';
import { Typography } from '../common/components/Typography';

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
  const navigate = useNavigate();

  return (
    <Container
      fluid
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor:
          '/'.includes(pathname) ||
          pathname.includes('product-detail') ||
          pathname.includes('auth')
            ? Colors.LightGrey
            : Colors.White,
      }}
    >
      <Container size="xl">
        {/* Menu */}
        {pathname.includes('login') || pathname.includes('register') ? (
          <Flex align="center" py={36}>
            <Link to="/">
              <Image src={logo} w={84} h={48} />
            </Link>
            <Divider orientation="vertical" mx={40} />
            <Typography.Body1>
              {pathname.includes('login') ? 'Đăng nhập' : 'Tạo tài khoản mới'}
            </Typography.Body1>
          </Flex>
        ) : (
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
                    className={`${
                      pathname.includes('/product') ? 'active' : ''
                    }`}
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
                    <LinkMenu to="/product/Túi Crossbody">
                      Túi Crossbody
                    </LinkMenu>
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
              <UnstyledButton onClick={() => navigate('/product/search')}>
                <IconSearch />
              </UnstyledButton>

              <UnstyledButton onClick={() => navigate('/product/cart')}>
                <IconShoppingBag />
              </UnstyledButton>

              <UnstyledButton onClick={() => navigate('/auth/login')}>
                <IconUser />
              </UnstyledButton>
            </Flex>
          </Flex>
        )}
      </Container>
    </Container>
  );
}

export default Headers;
