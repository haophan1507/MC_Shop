import {
  Flex,
  Stack,
  Space,
  Container,
  Center,
  Button,
  Image,
  em,
} from '@mantine/core';
import Colors from '../common/components/Colors';
import { Typography } from '../common/components/Typography';
import { IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';
import mainImage1 from '../assets/images/homepage/Gucci girl .png';
import mainImage2 from '../assets/images/homepage/LV girl.png';
import image1 from '../assets/images/homepage/image 25.png';
import image2 from '../assets/images/homepage/image 24.png';
import image3 from '../assets/images/homepage/image 22.png';
import image4 from '../assets/images/homepage/image 23.png';
import image5 from '../assets/images/homepage/image 21.png';
import image6 from '../assets/images/homepage/image 25-1.png';
import image7 from '../assets/images/homepage/image 24-1.png';
import image8 from '../assets/images/homepage/image 22-1.png';
import image9 from '../assets/images/homepage/image 23-1.png';
import image10 from '../assets/images/homepage/image 21-1.png';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

const MODE_BANNER = [
  {
    title: `Bộ sưu tập Gucci
    Mùa Thu 2023`,
    description: `Giám đốc sáng tạo mới của Gucci là Sabato De Sarno. Khi thông báo
    thêm về việc này vào tháng trước, thương hiệu này nói rằng bộ sưu
    tập đầu tiên sẽ là mùa xuân 2024. Điều này đưa nhà thiết kế Gucci
    vào việc thiết kế mùa ở giữa, bao gồm một cộng điểm danh dự của
    Alessandro Michele và sự bắt đầu mới của De Sarno.`,
    mainImage: mainImage1,
    listImage: [image1, image2, image3, image4, image5],
  },
  {
    title: `Louis Vuitton
    Thu Đông 2023 `,
    description: `Các bộ cổ truyền với những vải khắc nét và những họa tiết tinh tế, các món đồ sử dụng tinh thần thời trang Pháp cổ điển và điểm mốc phong cách vintage. Nicolas Ghesquière sử dụng các lớp áo lót để tạo ra những bộ cánh cổ hơi thở; mỗi bộ đều tạo nên khía cạnh đàn bà khác nhau, được tô điểm khắc nét bởi cổ liền đeo hoặc phụ kiện rhinestone để nâng cao vẻ thanh lịch của người phụ nữ.`,
    mainImage: mainImage2,
    listImage: [image6, image7, image8, image9, image10],
  },
];

function BannerHeader() {
  const [modeBanner, setModeBanner] = useState(0);
  const navigate = useNavigate();

  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Container
      fluid
      style={{
        backgroundColor: Colors.LightGrey,
      }}
    >
      {isMobile ? (
        <Container size="xl">
          <Stack w="100%" pos="relative">
            <Space
              pos="relative"
              style={{
                backgroundColor: Colors.LightBrown,
              }}
            >
              <Space
                w="100%"
                h="100%"
                style={{
                  position: 'absolute',
                  left: '-50%',
                  backgroundColor: Colors.LightBrown,
                  zIndex: 1,
                }}
              />
              <Space
                pos="relative"
                style={{
                  zIndex: 2,
                }}
              >
                <Typography.HeadLine1 c={Colors.White} py={14} maw={550}>
                  {MODE_BANNER[modeBanner].title}
                </Typography.HeadLine1>
              </Space>
            </Space>

            <Flex>
              <Image
                src={MODE_BANNER[modeBanner].mainImage}
                w="80%"
                top={-80}
                left={-50}
                style={{
                  position: 'relative',
                  zIndex: 2,
                }}
              />
              <Stack w={98}>
                {MODE_BANNER[modeBanner].listImage?.map((item, index) => (
                  <Image key={index} src={item} w="100%" />
                ))}
              </Stack>
            </Flex>

            <Typography.TextDescription lineClamp={4}>
              {MODE_BANNER[modeBanner].description}
            </Typography.TextDescription>

            <Button
              variant="filled"
              color={Colors.Brown}
              radius="xs"
              w={220}
              mb={24}
              rightSection={<IconChevronRight size={20} />}
              onClick={() => navigate('/blog/blog-detail')}
            >
              <Typography.Body1 c={Colors.White}>
                Khám phá bộ sưu tập
              </Typography.Body1>
            </Button>
          </Stack>
        </Container>
      ) : (
        <Container size="xl" pt={48}>
          <Flex justify="space-between" gap={86}>
            <Stack w="100%" pos="relative">
              <Space
                pos="relative"
                style={{
                  backgroundColor: Colors.LightBrown,
                }}
              >
                <Space
                  w="100%"
                  h="100%"
                  style={{
                    position: 'absolute',
                    left: '-50%',
                    backgroundColor: Colors.LightBrown,
                    zIndex: 1,
                  }}
                />
                <Space
                  pos="relative"
                  style={{
                    zIndex: 2,
                  }}
                >
                  <Typography.HeadLine1 c={Colors.White} py={14} maw={550}>
                    {MODE_BANNER[modeBanner].title}
                  </Typography.HeadLine1>
                </Space>

                <Center
                  pos="absolute"
                  bottom={0}
                  right={0}
                  w={82}
                  h={82}
                  bg={Colors.White}
                  style={{
                    zIndex: 3,
                    cursor: 'pointer',
                  }}
                  onClick={() => setModeBanner((prev) => (prev === 0 ? 1 : 0))}
                >
                  <IconChevronRight size={36} color={Colors.Black} />
                </Center>
              </Space>

              <Typography.TextDescription w={376} my={36}>
                {MODE_BANNER[modeBanner].description}
              </Typography.TextDescription>

              <Button
                variant="filled"
                color={Colors.Brown}
                radius="xs"
                w={220}
                rightSection={<IconChevronRight size={20} />}
                onClick={() => navigate('/blog/blog-detail')}
              >
                <Typography.Body1 c={Colors.White}>
                  Khám phá bộ sưu tập
                </Typography.Body1>
              </Button>

              <Image
                src={MODE_BANNER[modeBanner].mainImage}
                w="55%"
                bottom={0}
                right={0}
                style={{
                  position: 'absolute',
                  zIndex: 2,
                }}
              />
            </Stack>

            <Stack w={98} gap={32} my={32}>
              {MODE_BANNER[modeBanner].listImage?.map((item, index) => (
                <Image key={index} src={item} w={98} h={98} />
              ))}
            </Stack>
          </Flex>
        </Container>
      )}
    </Container>
  );
}

export default BannerHeader;
