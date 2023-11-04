import { Container, Flex, Image } from '@mantine/core';
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
            <Link to="/product">Sản phẩm</Link>
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
