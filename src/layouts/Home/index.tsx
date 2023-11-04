import {
  AspectRatio,
  Badge,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Space,
  Stack,
} from '@mantine/core';
import BannerHeader from '../../components/BannerHeader';
import Colors from '../../common/components/Colors';
import { Typography } from '../../common/components/Typography';
import {
  IconChevronLeft,
  IconChevronRight,
  IconShoppingBagPlus,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/homepage/Image.png';
import image2 from '../../assets/images/homepage/Image-1.png';
import image3 from '../../assets/images/homepage/Image-2.png';
import image4 from '../../assets/images/homepage/blog/Image.png';
import image5 from '../../assets/images/homepage/blog/Image-1.png';
import image6 from '../../assets/images/homepage/blog/Image-2.png';
import image7 from '../../assets/images/homepage/Image5.png';
import image8 from '../../assets/images/homepage/Image6.png';
import image9 from '../../assets/images/homepage/Image7.png';

const DATA_BLOG = [
  {
    tags: ['#Bộ sưu tập', '#GUCCI'],
    title: 'Bộ sưu tập GUCCI mùa thu-đông 2023',
    description:
      'Khi giới thiệu công chức sáng tạo mới của Gucci tháng trước, nhãn hiệu nói rằng Sabato De Sarno là người được chứng nhận.',
    image: image4,
  },
  {
    tags: ['#Bộ sưu tập', '#GUCCI'],
    title: 'Gucci Valigeria',
    description:
      'Chiến dịch Valigeria Gucci đầu tiên của Giám đốc Sáng tạo Sabato De Sarno ghi lại cả Bad Bunny và Kendall Jenner vừa mang...',
    image: image5,
  },
  {
    tags: ['#Bộ sưu tập', '#Louis Vuitton'],
    title: 'Chương trình trình diễn Mùa Thu-Đông 2023',
    description:
      'Đến với bộ sưu tập thời trang Nữ mùa Thu-Đông 2023, tìm hiểu bí ẩn của phong cách Pháp, thương hiệu đã tái hiện lại ý niệm...',
    image: image6,
  },
];

function index() {
  return (
    <>
      <BannerHeader />
      <Container size="xl" bg={Colors.White}>
        <Stack gap={50} mt={120}>
          <Typography.HeadLine2 ta="center">
            - BÁN CHẠY NHẤT -
          </Typography.HeadLine2>
          <Flex gap={36}>
            <Space style={{ flex: 1 }}>
              <Image src={image1} w="100%" />
            </Space>

            <Stack style={{ flex: 1 }}>
              <Typography.HeadLine4>LV ON THE GO PM</Typography.HeadLine4>
              <Typography.TextDescription>
                Cặp túi OnTheGo PM đến từ sự hỗn hợp của vải Monogram và
                Monogram Reverse với hình mẫu để làm xu hướng thời trang, cả hai
                thời trang và thực tế, là bạn đồng hành hàng ngày tuyệt vời.
              </Typography.TextDescription>
              <Typography.HeadLine3 fz={36} fw={600} my={36}>
                62.000.000 VNĐ
              </Typography.HeadLine3>
              <Button
                variant="filled"
                color={Colors.Brown}
                radius="xs"
                w={210}
                rightSection={<IconShoppingBagPlus size={20} />}
              >
                <Typography.Body1 c={Colors.White}>
                  Thêm vào giỏ hàng
                </Typography.Body1>
              </Button>

              <Flex align="center" mt={16}>
                <IconChevronLeft size={40} />
                <Flex gap={36}>
                  <Space>
                    <Image src={image2} w="100%" />
                  </Space>
                  <Space>
                    <Image src={image3} w="100%" />
                  </Space>
                </Flex>
                <IconChevronRight size={40} />
              </Flex>
            </Stack>
          </Flex>
        </Stack>

        <Stack gap={50} mt={120}>
          <Typography.HeadLine2 ta="center">- BÀI VIẾT -</Typography.HeadLine2>
          <Flex gap={32}>
            {DATA_BLOG.map((item, index) => {
              return (
                <Stack key={index} style={{ flex: 1 }}>
                  <AspectRatio ratio={325 / 360}>
                    <Image src={item.image} w="100%" h="100%" />
                  </AspectRatio>

                  <Flex gap={16} mt={24} mb={16}>
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
                  <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <Flex align="center">
                      <Typography.Body1>Đọc thêm </Typography.Body1>
                      <IconChevronRight size={20} />
                    </Flex>
                  </Link>
                </Stack>
              );
            })}
          </Flex>
        </Stack>

        <Stack gap={50} mt={120}>
          <Typography.HeadLine2 ta="center">
            - VỀ CỬA HÀNG MC -
          </Typography.HeadLine2>
          <Flex gap={50}>
            <Stack style={{ flex: 6 }}>
              <Image src={image7} w="100%" />
              <Typography.TextDescription mt={50}>
                Các thương hiệu quốc tế được phân phối bởi MC shop bao gồm:
                Gucci, Efora, Louis Vuitton, Coco Chanel, Jemma và nhiều thương
                hiệu khác.
              </Typography.TextDescription>
            </Stack>
            <Stack style={{ flex: 4 }}>
              <Typography.TextDescription my={20}>
                MC shop được định hướng như một mạng lưới hàng đồ da cao cấp của
                Euro-Asia Trade Jsc., với nhiều phòng trưng bày ở các trung tâm
                mua sắm lớn như Diamond, Vincom, Lotte, Takashimaia trên toàn
                quốc.
              </Typography.TextDescription>
              <Typography.TextDescription mb={50}>
                Sau nhiều năm phát triển và xác định vị trí của mình tại Việt
                Nam, MC luôn nỗ lực mang đến cho khách hàng các sản phẩm hết sức
                thanh lịch và dẫn đầu các xu hướng thời trang.
              </Typography.TextDescription>
              <Image src={image8} w="100%" />
            </Stack>
          </Flex>
        </Stack>

        <Space
          my={120}
          style={{
            border: `32px solid ${Colors.Brown}`,
          }}
        >
          <Flex px={100} py={115} gap={86}>
            <Image
              src={image9}
              w="100%"
              h="100%"
              style={{
                flex: 3,
              }}
            />

            <Stack
              justify="center"
              gap={30}
              style={{
                flex: 5,
              }}
            >
              <Typography.HeadLine3>
                “Đổi mới trò chơi mang với phong cách và đa dạng cho cách bạn
                sống”.
              </Typography.HeadLine3>
              <Typography.TextDescription>
                Chúng tôi đề ra nhiệm vụ cung cấp các sản phẩm da thật với tiêu
                chuẩn chất lượng Châu Âu, các bộ sưu tập theo đúng xu hướng thời
                trang thế giới cho các người tiêu dùng toàn cầu.
              </Typography.TextDescription>
            </Stack>
          </Flex>
        </Space>
      </Container>
    </>
  );
}

export default index;
