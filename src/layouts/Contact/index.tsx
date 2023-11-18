import {
  Accordion,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Input,
  NavLink,
  Stack,
  Tabs,
  Textarea,
  em,
} from '@mantine/core';
import { Typography } from '../../common/components/Typography';
import { useState } from 'react';
import Colors from '../../common/components/Colors';
import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

const navLink = [
  { label: 'Tài khoản' },
  {
    label: 'Đơn hàng & Thanh toán',
  },
  { label: 'Trả hàng & Hoàn tiền' },
  { label: 'Các chính sách khác' },
];

const list = [
  {
    value: 'Tại sao tôi không thể đăng nhập được vào tài khoản của mình ?',
    description: `Lỗi hệ thống Nếu không gặp phải các trường hợp trên, bạn hãy gửi yêu cầu liên hệ với MC để giải quyết vấn đề.`,
  },
  {
    value: 'Tại sao tài khoản của tôi bị khóa ?',
    description: `Lỗi hệ thống Nếu không gặp phải các trường hợp trên, bạn hãy gửi yêu cầu liên hệ với MC để giải quyết vấn đề.`,
  },
  {
    value: 'Hướng dẫn thiết lập mật khẩu mới cho tài khoản',
    description: `Lỗi hệ thống Nếu không gặp phải các trường hợp trên, bạn hãy gửi yêu cầu liên hệ với MC để giải quyết vấn đề.`,
  },
  {
    value: 'Hướng dẫn thay đổi/ xóa địa chỉ giao hàng ',
    description: `Lỗi hệ thống Nếu không gặp phải các trường hợp trên, bạn hãy gửi yêu cầu liên hệ với MC để giải quyết vấn đề.`,
  },
  {
    value: 'Tôi có thể đổi tên đăng nhập tài khoản được không ?',
    description: `Lỗi hệ thống Nếu không gặp phải các trường hợp trên, bạn hãy gửi yêu cầu liên hệ với MC để giải quyết vấn đề.`,
  },
  {
    value: 'Cách thay đổi email liên kết với tài khoản',
    description: `Lỗi hệ thống Nếu không gặp phải các trường hợp trên, bạn hãy gửi yêu cầu liên hệ với MC để giải quyết vấn đề.`,
  },
  {
    value: 'Tôi có thể đặt hàng trên nhiều thiết bị được không ?',
    description: `Lỗi hệ thống Nếu không gặp phải các trường hợp trên, bạn hãy gửi yêu cầu liên hệ với MC để giải quyết vấn đề.`,
  },
];

function index() {
  const [active, setActive] = useState(0);
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  const items = navLink.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      onClick={() => setActive(index)}
      color="gray"
      variant="filled"
    />
  ));

  const itemList = list.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control py={8}>
        <Typography.HeadLine5 fw="bold">{item.value}</Typography.HeadLine5>
      </Accordion.Control>
      <Accordion.Panel>
        <Typography.Body1 p={24}>{item.description}</Typography.Body1>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container size="xl">
      <Typography.HeadLine2 ta="center" mt={isMobile ? 24 : 60}>
        - FAQs -
      </Typography.HeadLine2>
      <Typography.HeadLine5 ta="center" mb={isMobile ? 24 : 50}>
        Giải đáp các câu hỏi thắc mắc thường gặp của khách hàng
      </Typography.HeadLine5>

      {isMobile && (
        <Tabs defaultValue="1" mb={24}>
          <Tabs.List>
            <Tabs.Tab value="1">Tài khoản</Tabs.Tab>
            <Tabs.Tab value="2">Đơn hàng & Thanh toán</Tabs.Tab>
            <Tabs.Tab value="3">Trả hàng & Hoàn tiền</Tabs.Tab>
            <Tabs.Tab value="4">Các chính sách khác</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      )}

      <Flex gap={64}>
        {!isMobile && (
          <Stack>
            <Typography.HeadLine4 mb={24}>
              Danh mục câu hỏi
            </Typography.HeadLine4>
            <Box w={250}>{items}</Box>
          </Stack>
        )}

        <Stack w="100%">
          <Accordion defaultValue="Tại sao tôi không thể đăng nhập được vào tài khoản của mình ?">
            {itemList}
          </Accordion>
        </Stack>
      </Flex>

      <Typography.HeadLine2 ta="center" mt={isMobile ? 60 : 140}>
        - LIÊN HỆ -
      </Typography.HeadLine2>
      <Center>
        <Typography.HeadLine5 ta="center" maw={750}>
          Bạn gặp vấn đề không nằm trong các câu hỏi FAQ, có thể liên hệ với MC
          qua các kênh thông tin, hoặc điền form muộn nhất 24h sau MC sẽ trả lời
          bạn.
        </Typography.HeadLine5>
      </Center>

      <Grid mt={48} mb={120} gutter={isMobile ? 40 : 80}>
        <Grid.Col span={isMobile ? 12 : 7}>
          <Stack gap={24}>
            <Box>
              <Typography.Body1 mb={8}>Tên</Typography.Body1>
              <Input />
            </Box>
            <Box>
              <Typography.Body1 mb={8}>Email</Typography.Body1>
              <Input />
            </Box>
            <Box>
              <Typography.Body1 mb={8}>Tin nhắn</Typography.Body1>
              <Textarea rows={8} />
            </Box>
            <Button
              variant="filled"
              size="md"
              color={Colors.Brown}
              radius="xs"
              w={120}
            >
              <Typography.Body1 c={Colors.White}>Gửi</Typography.Body1>
            </Button>
          </Stack>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 5}>
          <Stack gap={isMobile ? 12 : 40}>
            <Box>
              <IconMail />
              <Typography.HeadLine5 fw="bold" mt={16} mb={8}>
                Email
              </Typography.HeadLine5>
              <Typography.Body1>tuixachcaocapmc@gmail.com</Typography.Body1>
            </Box>
            <Box>
              <IconPhone />
              <Typography.HeadLine5 fw="bold" mt={16} mb={8}>
                Phone
              </Typography.HeadLine5>
              <Typography.Body1>+(84) 02488668888</Typography.Body1>
            </Box>
            <Box>
              <IconMapPin />
              <Typography.HeadLine5 fw="bold" mt={16} mb={8}>
                Office
              </Typography.HeadLine5>
              <Typography.Body1>
                Số 6-C4, Lô 2, KĐT mới Nam Trung Yên, Hà Nội
              </Typography.Body1>
            </Box>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default index;
