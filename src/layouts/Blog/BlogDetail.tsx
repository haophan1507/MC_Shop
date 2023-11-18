import {
  Badge,
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Stack,
  em,
} from '@mantine/core';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';
import {
  IconLink,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandFacebook,
  IconChevronRight,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import image from '../../assets/images/blog/Blog Post Header/Image.png';
import image1 from '../../assets/images/blog/Content/Image.png';
import image2 from '../../assets/images/blog/Content/Image-1.png';
import image3 from '../../assets/images/blog/Content/Image-2.png';
import image4 from '../../assets/images/blog/Content/Image-3.png';
import image5 from '../../assets/images/blog/Content/Image-4.png';
import image6 from '../../assets/images/blog/Content/Image-5.png';
import image7 from '../../assets/images/blog/Content/Image-6.png';
import image8 from '../../assets/images/blog/Content/Image-7.png';
import image9 from '../../assets/images/blog/Content/Image-8.png';
import image10 from '../../assets/images/blog/Content/Image-9.png';
import image11 from '../../assets/images/blog/Image.png';
import image12 from '../../assets/images/blog/Image-1.png';
import { useMediaQuery } from '@mantine/hooks';

const listImage = [image1, image2, image3, image4, image5, image6];

const list1 = [
  {
    image: image11,
    tags: ['#Bộ sưu tập', '#GUCCI'],
    title: 'Bộ sưu tập mùa thu 2023',
    description:
      'Tuyển tốt đầu tư sáng tạo mới của Gucci là Sabato de Sarno. Khi thông báo chức danh này từ tháng trước thì thương hiệu đã nói rằng...',
  },
  {
    image: image12,
    tags: ['#Túi đeo vai'],
    title: 'Túi đeo vai Nữ đáng mua nhất mùa thu-đông',
    description:
      'Cùng MC Shop điểm danh những chiếc túi shoulder bags đáng mua nhất từ các thương hiệu trong mùa Thu- Đông 2023...',
  },
  {
    image: image11,
    tags: ['#Tin tức thời trang'],
    title: 'Sisley – Biểu tượng thời trang Ý đến Việt Nam.',
    description:
      'Thời trang cao cấp SISLEY đến từ Ý đã chính thức có mặt tại Việt Nam và khai trương cửa hàng đầu tiên từ ngày 01/10/2023...',
  },
];

function BlogDetail() {
  const navigate = useNavigate();

  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Container size="xl">
      <Typography.Body2 mt={32}>
        Blog / LV triển lãm Xuân-Hè 2024
      </Typography.Body2>

      <Flex mt={40} mb={16} gap={8}>
        <Badge color={Colors.BaseColor} radius="xs">
          <Typography.Body2>#Bộ sưu tập</Typography.Body2>
        </Badge>
        <Badge color={Colors.BaseColor} radius="xs">
          <Typography.Body2>#LOUIS VUITTON </Typography.Body2>
        </Badge>
      </Flex>

      <Typography.HeadLine2>
        Chương trình triển lãm trang phục
        <br />
        Xuân-Hè nữ 2024
      </Typography.HeadLine2>

      <Image src={image} mt={50} mb={80} />

      <Typography.HeadLine2 ta="center">
        Chương trình diễn Xuân-Hè 2024
      </Typography.HeadLine2>
      <Center mt={40} mb={32}>
        <Typography.HeadLine5 ta="center" maw={620}>
          Nicolas Ghesquière đã trình diễn chương trình Louis Vuitton Women's
          Spring-Summer 2024 Live từ 103 đường phố Avenue des Champs Elysées ở
          Paris vào thứ hai, ngày 2 tháng 10 năm 2023.
        </Typography.HeadLine5>
      </Center>
      <Center>
        <Typography.Body1 ta="center" maw={680}>
          Các bộ cổ truyền với những vải khắc nét và những họa tiết tinh tế, các
          món đồ sử dụng tinh thần thời trang Pháp cổ điển và điểm mốc phong
          cách vintage. Nicolas Ghesquière sử dụng các lớp áo lót để tạo ra
          những bộ cánh cổ hơi thở; mỗi bộ đều tạo nên khía cạnh đàn bà khác
          nhau, được tô điểm khắc nét bởi cổ liền đeo hoặc phụ kiện rhinestone
          để nâng cao vẻ thanh lịch của người phụ nữ.
        </Typography.Body1>
      </Center>

      <Grid my={64}>
        {listImage.map((item, index) => (
          <Grid.Col key={index} span={isMobile ? 6 : 4}>
            <Image src={item} />
          </Grid.Col>
        ))}
      </Grid>

      <Typography.HeadLine4 mb={32} ta="center">
        NỔI BẬT
      </Typography.HeadLine4>
      <Center>
        <Typography.Body1 ta="center" maw={680}>
          Cảm nhận tính chất của bộ đồ đi du lịch hiện đại, các chi tiết thu hút
          sự chú ý đến luôn từ sự kết hợp giữa các chất liệu đối lập, giữa vải
          bóng bẩy và dệt nhuyễn nhẹ. Các phụ kiện linh động và túi sách được
          tái tạo lại khiến những huy hiệu nổi bật hơn, trong khi da xốp chiều
          trọng lượng chiếu phụ đàn bà và đôi giày mở đầu hài hòa tái hiện một
          thiết kế vĩnh cửu.
        </Typography.Body1>
      </Center>

      <Grid my={64}>
        <Grid.Col span={8}>
          <Image src={image7} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Image src={image8} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Image src={image9} />
        </Grid.Col>
        <Grid.Col span={8}>
          <Image src={image10} />
        </Grid.Col>
      </Grid>

      <Box my={64}>
        <Center>
          <Typography.HeadLine5>Chia sẻ bài viết này:</Typography.HeadLine5>
        </Center>
        <Center>
          <Flex gap={12} mt={16}>
            <IconLink />
            <IconBrandLinkedin />
            <IconBrandX />
            <IconBrandFacebook />
          </Flex>
        </Center>
      </Box>

      <Box my={64}>
        <Typography.HeadLine2>Bài đăng mới nhất</Typography.HeadLine2>
        <Typography.Body1>
          Cùng xem lại các blog mà MC đã cho ra mắt gần đây
        </Typography.Body1>

        <Grid my={64} w="100%">
          {list1.map((item) => {
            return (
              <Grid.Col key={item.title} span={isMobile ? 12 : 4}>
                <Stack>
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
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default BlogDetail;
