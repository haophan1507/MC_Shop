import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Flex,
  Image,
  Input,
  Stack,
  UnstyledButton,
  em,
} from '@mantine/core';
import Colors from '../common/components/Colors';
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from '../assets/images/logo_MC.png';
import { Typography } from '../common/components/Typography';
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconChevronDown,
} from '@tabler/icons-react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

const Link = styled(LinkRouter)`
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

function Footer() {
  const { pathname } = useLocation();
  const [productsOpened, { toggle: toggleProducts }] = useDisclosure(true);
  const [supportOpened, { toggle: toggleSupport }] = useDisclosure(false);

  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  if (pathname.includes('admin') && pathname !== '/admin/login') {
    return <></>;
  }

  return (
    <Container fluid py={80} bg={Colors.LightGrey}>
      <Container size="xl">
        {isMobile ? (
          <Stack gap={30}>
            <Link to="/">
              <Image src={logo} w={84} h={48} />
            </Link>
            <Box>
              <UnstyledButton onClick={toggleProducts}>
                <Flex align="center">
                  <Typography.HeadLine5 fw="bold">
                    Sản phẩm
                  </Typography.HeadLine5>
                  <IconChevronDown />
                </Flex>
              </UnstyledButton>
              <Collapse in={productsOpened}>
                <Stack ml={10} mt={16}>
                  <UnstyledButton>Các túi ví xách</UnstyledButton>
                  <UnstyledButton>Túi Crossbody</UnstyledButton>
                  <UnstyledButton>Túi mini</UnstyledButton>
                  <UnstyledButton>Túi xách tay trên </UnstyledButton>
                  <UnstyledButton>Túi đeo vai</UnstyledButton>
                </Stack>
              </Collapse>
            </Box>
            <Box>
              <UnstyledButton onClick={toggleSupport}>
                <Flex align="center">
                  <Typography.HeadLine5 fw="bold">
                    Trợ giúp
                  </Typography.HeadLine5>
                  <IconChevronDown />
                </Flex>
              </UnstyledButton>
              <Collapse in={supportOpened}>
                <Stack ml={10} mt={16}>
                  <UnstyledButton>Về chúng tôi</UnstyledButton>
                  <UnstyledButton>Liên hệ Chúng tôi</UnstyledButton>
                  <UnstyledButton>Đơn hàng của tôi</UnstyledButton>
                  <UnstyledButton>Câu hỏi thường gặp</UnstyledButton>
                </Stack>
              </Collapse>
            </Box>
            <Typography.HeadLine5 fw="bold">Đăng ký</Typography.HeadLine5>
            <Typography.Body1>
              Hãy tham gia newsletter của chúng tôi để được cập nhật về các tính
              năng và phiên bản mới nhất.
            </Typography.Body1>

            <Flex gap={16}>
              <Input
                size="md"
                style={{
                  flex: 1,
                }}
                placeholder="Nhập email của bạn"
              />
              <Button
                variant="filled"
                size="md"
                color={Colors.Brown}
                radius="xs"
              >
                <Typography.Body1 c={Colors.White}>Đăng ký</Typography.Body1>
              </Button>
            </Flex>

            <Typography.Body2 fz={12} fw={300}>
              Bằng cách đăng ký, bạn đồng ý với Chính sách Bảo mật của chúng tôi
              và đồng ý nhận cập nhật từ công ty của chúng tôi.
            </Typography.Body2>

            <Flex gap={12}>
              <IconBrandFacebook />
              <IconBrandX />
              <IconBrandYoutube />
            </Flex>
            <Typography.Body2>
              © 2023 Relume. Tất cả các quyền được bảo vệ.
            </Typography.Body2>
          </Stack>
        ) : (
          <>
            <Flex justify="space-between">
              <Link to="/">
                <Image src={logo} w={84} h={48} />
              </Link>

              <Stack>
                <Typography.HeadLine5 fw={600} mb={16}>
                  Sản phẩm
                </Typography.HeadLine5>
                <Typography.Body2>Các túi ví xách</Typography.Body2>
                <Typography.Body2>Túi Crossbody</Typography.Body2>
                <Typography.Body2>Túi mini</Typography.Body2>
                <Typography.Body2>Túi xách tay trên</Typography.Body2>
                <Typography.Body2>Túi đeo vai</Typography.Body2>
              </Stack>

              <Stack>
                <Typography.HeadLine5 fw={600} mb={16}>
                  Trợ giúp
                </Typography.HeadLine5>
                <Typography.Body2>Về chúng tôi</Typography.Body2>
                <Typography.Body2>Liên hệ Chúng tôi</Typography.Body2>
                <Typography.Body2>Đơn hàng của tôi</Typography.Body2>
                <Typography.Body2>Câu hỏi thường gặp</Typography.Body2>
              </Stack>

              <Stack maw={450}>
                <Typography.HeadLine5 fw={600} mb={16}>
                  Đăng ký
                </Typography.HeadLine5>
                <Typography.Body1>
                  Hãy tham gia newsletter của chúng tôi để được cập nhật về các
                  tính năng và phiên bản mới nhất.
                </Typography.Body1>

                <Flex gap={16} mt={16}>
                  <Input
                    size="md"
                    style={{
                      flex: 1,
                    }}
                    placeholder="Nhập email của bạn"
                  />
                  <Button
                    variant="filled"
                    size="md"
                    color={Colors.Brown}
                    radius="xs"
                  >
                    <Typography.Body1 c={Colors.White}>
                      Đăng ký
                    </Typography.Body1>
                  </Button>
                </Flex>

                <Typography.Body2 fz={12} fw={300}>
                  Bằng cách đăng ký, bạn đồng ý với Chính sách Bảo mật của chúng
                  tôi và đồng ý nhận cập nhật từ công ty của chúng tôi.
                </Typography.Body2>
              </Stack>
            </Flex>
            <Divider mt={80} color={Colors.Black} />
            <Flex justify="space-between" mt={32}>
              <Flex gap={24}>
                <Typography.Body2>
                  © 2023 Relume. Tất cả các quyền được bảo vệ.
                </Typography.Body2>
                <Typography.Body2>Chính sách bảo mật</Typography.Body2>
                <Typography.Body2>Điều khoản dịch vụ</Typography.Body2>
                <Typography.Body2>Cài đặt Cookies</Typography.Body2>
              </Flex>

              <Flex gap={12}>
                <IconBrandFacebook />
                <IconBrandX />
                <IconBrandYoutube />
              </Flex>
            </Flex>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Footer;
