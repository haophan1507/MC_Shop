import {
  Collapse,
  Container,
  Divider,
  Drawer,
  Flex,
  HoverCard,
  Image,
  Stack,
  UnstyledButton,
  em,
} from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  IconChevronDown,
  IconMenu2,
  IconSearch,
  IconShoppingBag,
  IconUser,
} from '@tabler/icons-react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import Colors from '../common/components/Colors';
import logo from '../assets/images/logo_MC.png';
import { Typography } from '../common/components/Typography';
import { useDisclosure, useLocalStorage, useMediaQuery } from '@mantine/hooks';

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
  const [opened, { open, close }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [value, setValue] = useLocalStorage({ key: 'user' });

  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  if (pathname.includes('admin') && pathname !== '/admin/login') {
    return <></>;
  }

  return (
    <Container
      fluid
      style={{
        position: 'relative',
        zIndex: 10,
        backgroundColor:
          '/'.includes(pathname) ||
          pathname.includes('product-detail') ||
          pathname.includes('auth') ||
          pathname.includes('admin/login')
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

            {!isMobile && (
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
            )}

            <Drawer size="sm" position="right" opened={opened} onClose={close}>
              <Stack>
                <UnstyledButton
                  onClick={() => {
                    navigate('/');
                    close();
                  }}
                >
                  Trang chủ
                </UnstyledButton>
                <UnstyledButton onClick={toggleLinks}>
                  <Flex align="center">
                    Sản phẩm <IconChevronDown />
                  </Flex>
                </UnstyledButton>
                <Collapse in={linksOpened}>
                  <Stack ml={24}>
                    <UnstyledButton
                      onClick={() => {
                        navigate('/product/Tất cả các túi sách Nữ');
                        close();
                      }}
                    >
                      Tất cả các túi sách Nữ
                    </UnstyledButton>
                    <UnstyledButton
                      onClick={() => {
                        navigate('/product/Tất cả các túi sách Nam');
                        close();
                      }}
                    >
                      Tất cả các túi sách Nam
                    </UnstyledButton>
                    <UnstyledButton
                      onClick={() => {
                        navigate('/product/Các túi ví');
                        close();
                      }}
                    >
                      Các túi ví
                    </UnstyledButton>
                    <UnstyledButton
                      onClick={() => {
                        navigate('/product/Túi Crossbody');
                        close();
                      }}
                    >
                      Túi Crossbody
                    </UnstyledButton>
                    <UnstyledButton
                      onClick={() => {
                        navigate('/product/Túi Mini');
                        close();
                      }}
                    >
                      Túi Mini
                    </UnstyledButton>
                    <UnstyledButton
                      onClick={() => {
                        navigate('/product/Túi xách tay trên');
                        close();
                      }}
                    >
                      Túi xách tay trên
                    </UnstyledButton>
                    <UnstyledButton
                      onClick={() => {
                        navigate('/product/Túi đeo vai');
                        close();
                      }}
                    >
                      Túi đeo vai
                    </UnstyledButton>
                  </Stack>
                </Collapse>
                <UnstyledButton
                  onClick={() => {
                    navigate('/blog');
                    close();
                  }}
                >
                  Bài viết
                </UnstyledButton>

                <UnstyledButton
                  onClick={() => {
                    navigate('/contact');
                    close();
                  }}
                >
                  Liên hệ
                </UnstyledButton>
              </Stack>
            </Drawer>

            <Flex gap={24}>
              <UnstyledButton
                onClick={() => {
                  navigate('/product/search');
                  close();
                }}
              >
                <IconSearch />
              </UnstyledButton>

              <UnstyledButton
                onClick={() => {
                  navigate('/product/cart');
                  close();
                }}
              >
                <IconShoppingBag />
              </UnstyledButton>

              {value ? (
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <UnstyledButton>
                      <IconUser />
                    </UnstyledButton>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Stack>
                      <LinkMenu to="/auth/settings">Cài đặt tài khoản</LinkMenu>
                      <LinkMenu to="/auth/my-order">Đơn hàng của tôi</LinkMenu>

                      <LinkMenu to="/auth/address">Địa chỉ</LinkMenu>
                      <LinkMenu to="/auth/change-password">
                        Đổi mật khẩu
                      </LinkMenu>
                      <LinkMenu to="/auth/favorite-product">
                        Sản phẩm yêu thích
                      </LinkMenu>
                      <LinkMenu to="/" onClick={() => setValue('')}>
                        Đăng xuất
                      </LinkMenu>
                    </Stack>
                  </HoverCard.Dropdown>
                </HoverCard>
              ) : (
                <UnstyledButton
                  onClick={() => {
                    navigate('/auth/login');
                    close();
                  }}
                >
                  <IconUser />
                </UnstyledButton>
              )}

              {isMobile && (
                <UnstyledButton onClick={open}>
                  <IconMenu2 />
                </UnstyledButton>
              )}
            </Flex>
          </Flex>
        )}
      </Container>
    </Container>
  );
}

export default Headers;
