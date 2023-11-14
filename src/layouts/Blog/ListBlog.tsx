import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  NavLink,
  Stack,
} from '@mantine/core';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';
import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';

import image1 from '../../assets/images/blog/Rectangle 3244.png';
import image2 from '../../assets/images/blog/Blog Post Header/Image.png';
import image3 from '../../assets/images/blog/Image.png';
import image4 from '../../assets/images/blog/Image-1.png';
import image5 from '../../assets/images/blog/Image-2.png';
import image6 from '../../assets/images/blog/Image-3.png';
import { useNavigate } from 'react-router-dom';

const navLink = [
  { label: 'Xem tất cả' },
  {
    label: 'Bộ sưu tập',
  },
  { label: 'Tin tức thời trang' },
  { label: 'Túi đeo vai' },
  { label: 'Túi Crossbody' },
  { label: 'Túi mini' },
  { label: 'Hướng dẫn phối đồ ' },
];

const list1 = [
  {
    image: image3,
    tags: ['#Bộ sưu tập', '#GUCCI'],
    title: 'Bộ sưu tập mùa thu 2023',
    description:
      'Tuyển tốt đầu tư sáng tạo mới của Gucci là Sabato de Sarno. Khi thông báo chức danh này từ tháng trước thì thương hiệu đã nói rằng...',
  },
  {
    image: image4,
    tags: ['#Túi đeo vai'],
    title: 'Túi đeo vai Nữ đáng mua nhất mùa thu-đông',
    description:
      'Cùng MC Shop điểm danh những chiếc túi shoulder bags đáng mua nhất từ các thương hiệu trong mùa Thu- Đông 2023...',
  },
  {
    image: image5,
    tags: ['#Tin tức thời trang'],
    title: 'Sisley – Biểu tượng thời trang Ý đến Việt Nam.',
    description:
      'Thời trang cao cấp SISLEY đến từ Ý đã chính thức có mặt tại Việt Nam và khai trương cửa hàng đầu tiên từ ngày 01/10/2023...',
  },
  {
    image: image6,
    tags: ['#Bộ sưu tập', '#LOUIS VUITTON'],
    title: 'Chương trình triển lãm trang phục Xuân-Hè nữ 2024',
    description:
      'Với những hàng sọc đồ hoạ và các hình ảnh kiểu dáng tinh tế, những bộ trang phục đầy sáng tạo kết hợp tinh hoa thời trang thuộc Pháp...',
  },
];

const list2 = [
  {
    image: image3,
    tags: ['#Bộ sưu tập', '#GUCCI'],
    title: 'Bộ sưu tập mùa thu 2023',
    description:
      'Tuyển tốt đầu tư sáng tạo mới của Gucci là Sabato de Sarno. Khi thông báo chức danh này từ tháng trước thì thương hiệu đã nói rằng...',
  },
  {
    image: image4,
    tags: ['#Túi đeo vai'],
    title: 'Túi đeo vai Nữ đáng mua nhất',
    description:
      'Cùng MC Shop điểm danh những chiếc túi shoulder bags đáng mua nhất từ các thương hiệu trong mùa Thu- Đông 2023...',
  },
  {
    image: image4,
    tags: ['#Túi đeo vai'],
    title: 'Túi đeo vai Nữ đáng mua nhất',
    description:
      'Cùng MC Shop điểm danh những chiếc túi shoulder bags đáng mua nhất từ các thương hiệu trong mùa Thu- Đông 2023...',
  },
  {
    image: image3,
    tags: ['#Bộ sưu tập', '#GUCCI'],
    title: 'Bộ sưu tập mùa thu 2023',
    description:
      'Tuyển tốt đầu tư sáng tạo mới của Gucci là Sabato de Sarno. Khi thông báo chức danh này từ tháng trước thì thương hiệu đã nói rằng...',
  },
];

function ListBlog() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

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

  return (
    <Container size="xl">
      <Image src={image1} />

      <Flex mt={36} gap={64}>
        <Box w={300}>{items}</Box>

        <Stack w="100%">
          <Stack w="100%">
            <Image src={image2} w="100%" />

            <Flex mt={24} gap={8}>
              <Badge color={Colors.BaseColor} radius="xs">
                <Typography.Body2>#Bộ sưu tập</Typography.Body2>
              </Badge>
              <Badge color={Colors.BaseColor} radius="xs">
                <Typography.Body2>#LOUIS VUITTON </Typography.Body2>
              </Badge>
            </Flex>

            <Typography.HeadLine4>
              Chương trình triển lãm trang phục
              <br />
              Xuân-Hè nữ 2024
            </Typography.HeadLine4>
            <Typography.HeadLine5>
              Với những hàng sọc đồ hoạ và các hình ảnh kiểu dáng tinh tế, những
              bộ trang phục đầy sáng tạo kết hợp tinh hoa thời trang thuộc Pháp
              với các mã cổ điển. Nicolas Ghesquière sử dụng khối lượng phủ để
              tạo nên những cơ thể hòa hợp nhẹ nhàng và hỗn hợp các kiểu vest
              mỗi cái có nghĩa phức tạp về phụ nữ.
            </Typography.HeadLine5>

            <Flex
              onClick={() => navigate('/blog/blog-detail')}
              style={{
                cursor: 'pointer',
              }}
            >
              <Typography.Body1>Đọc thêm</Typography.Body1>
              <IconChevronRight />
            </Flex>
          </Stack>

          <Flex mt={64} w="100%" wrap="wrap" justify="space-between">
            {list1.map((item) => {
              return (
                <Stack key={item.title} w="45%" mb={64}>
                  <Image src={item.image} />

                  <Flex gap={8}>
                    {item.tags.map((tag, index) => (
                      <Badge
                        key={`badge-${index}`}
                        color={Colors.BaseColor}
                        radius="xs"
                      >
                        <Typography.Body2>{tag}</Typography.Body2>
                      </Badge>
                    ))}
                  </Flex>

                  <Typography.HeadLine4>{item.title}</Typography.HeadLine4>
                  <Typography.Body1>{item.description}</Typography.Body1>

                  <Flex
                    onClick={() => navigate('/blog/blog-detail')}
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <Typography.Body1>Đọc thêm</Typography.Body1>
                    <IconChevronRight />
                  </Flex>
                </Stack>
              );
            })}
          </Flex>
        </Stack>
      </Flex>

      <Flex justify="space-between" my={60}>
        <Stack maw={400}>
          <Typography.HeadLine3>
            Đăng ký cho bản tin của chúng tôi
          </Typography.HeadLine3>
          <Typography.Body1>
            Hãy tham gia bản tin điện tử của chúng tôi để nhận thông tin về các
            thông tin mới nhất.
          </Typography.Body1>
        </Stack>

        <Stack maw={480}>
          <Flex gap={16}>
            <Input
              size="md"
              style={{
                flex: 1,
              }}
              placeholder="Nhập email của bạn"
            />
            <Button variant="filled" size="md" color={Colors.Brown} radius="xs">
              <Typography.Body1 c={Colors.White}>Đăng ký</Typography.Body1>
            </Button>
          </Flex>
          <Typography.Body1>
            Bằng cách nhấp vào Đăng ký, bạn đang xác nhận rằng bạn đồng ý với
            Điều khoản và Điều kiện của chúng tôi.
          </Typography.Body1>
        </Stack>
      </Flex>

      <Stack mb={64}>
        <Typography.HeadLine2>Bài đăng mới nhất</Typography.HeadLine2>
        <Typography.Body1>
          Cùng xem lại các blog mà MC đã cho ra mắt gần đây.
        </Typography.Body1>

        <Flex mt={50} w="100%" wrap="wrap" justify="space-between">
          {list2.map((item, index) => {
            return (
              <Flex key={item.title + index} w="45%" mb={64} gap={32}>
                <Box style={{ flex: 1 }}>
                  <Image src={item.image} w="100%" />
                </Box>

                <Stack style={{ flex: 1 }}>
                  <Flex>
                    {item.tags.map((tag, index) => (
                      <Badge
                        key={`badge-${index}`}
                        color={Colors.BaseColor}
                        radius="xs"
                      >
                        <Typography.Body2>{tag}</Typography.Body2>
                      </Badge>
                    ))}
                  </Flex>
                  <Typography.HeadLine4>{item.title}</Typography.HeadLine4>
                  <Typography.Body1>{item.description}</Typography.Body1>

                  <Flex
                    onClick={() => navigate('/blog/blog-detail')}
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <Typography.Body1>Đọc thêm</Typography.Body1>
                    <IconChevronRight />
                  </Flex>
                </Stack>
              </Flex>
            );
          })}
        </Flex>
      </Stack>
    </Container>
  );
}

export default ListBlog;
