import {
  AspectRatio,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  List,
  Pagination,
  Stack,
  UnstyledButton,
} from '@mantine/core';
import Colors from '../../common/components/Colors';
import { Typography } from '../../common/components/Typography';
import { Carousel, Embla } from '@mantine/carousel';
import { useState, useCallback, useEffect } from 'react';
import {
  IconChevronDown,
  IconChevronUp,
  IconHeart,
  IconMinus,
  IconPlus,
  IconShoppingBagPlus,
  IconStarFilled,
} from '@tabler/icons-react';

import image1 from '../../assets/images/product detail/image 21.png';
import image2 from '../../assets/images/product detail/image 22.png';
import image3 from '../../assets/images/product detail/image 23.png';
import image4 from '../../assets/images/product detail/image 24.png';
import image5 from '../../assets/images/product detail/image 25.png';
import image6 from '../../assets/images/product detail/image 26.png';
import image7 from '../../assets/images/product detail/Image.png';
import image8 from '../../assets/images/product detail/Image-1.png';
import image9 from '../../assets/images/product detail/Image-2.png';

const items = [
  { title: 'Sản phẩm' },
  { title: 'Tất cả các túi xách Nữ' },
  { title: 'ON THE GO PM' },
].map((item, index) => (
  <Typography.Body2 key={index}>{item.title}</Typography.Body2>
));

const listImage = [image1, image2, image3, image4, image5, image6];

const ProductDetail = () => {
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  const handleNext = () => embla?.scrollNext();
  const handlePrev = () => embla?.scrollPrev();

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <Box>
      <Container fluid bg={Colors.LightGrey}>
        <Container size="xl">
          <Breadcrumbs>{items}</Breadcrumbs>

          <Flex py={24} align="center">
            <Flex direction="column" justify="center" align="center" gap={24}>
              <UnstyledButton onClick={handlePrev}>
                <IconChevronUp />
              </UnstyledButton>
              <Carousel
                align="center"
                dragFree
                slideSize="20%"
                slideGap="md"
                height={650}
                getEmblaApi={setEmbla}
                initialSlide={2}
                orientation="vertical"
                loop
                withControls={false}
              >
                {listImage.map((item, index) => {
                  return (
                    <Carousel.Slide key={index}>
                      <Image src={item} w={98} h={98} />
                    </Carousel.Slide>
                  );
                })}
              </Carousel>
              <UnstyledButton onClick={handleNext}>
                <IconChevronDown />
              </UnstyledButton>
            </Flex>

            <AspectRatio ratio={2480 / 2388} style={{ flex: 1 }}>
              <Image src={image6} />
            </AspectRatio>

            <Stack maw={380}>
              <Typography.HeadLine4>LV ON THE GO PM</Typography.HeadLine4>
              <Typography.Body1>
                Cặp túi OnTheGo PM đến từ sự hỗn hợp của vải Monogram và
                Monogram Reverse với hình mẫu để làm xu hướng thời trang, cả hai
                thời trang và thực tế, là bạn đồng hành hàng ngày tuyệt vời.
              </Typography.Body1>
              <Typography.HeadLine3>62.200.000 VNĐ</Typography.HeadLine3>
              <Flex align="center" gap={10}>
                <Typography.Body1>Màu sắc: </Typography.Body1>
                <Box
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: Colors.White,
                    border: '1px solid',
                    borderColor: Colors.Brown,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                      backgroundColor: Colors.Brown,
                    }}
                  />
                </Box>
              </Flex>
              <Flex gap={10} align="center">
                <Typography.Body1>Số lượng:</Typography.Body1>
                <Flex align="center" gap={10}>
                  <IconMinus />
                  <Typography.HeadLine4>1</Typography.HeadLine4>
                  <IconPlus />
                </Flex>
              </Flex>

              <Flex align="center" gap={40} mt={40}>
                <Button
                  variant="filled"
                  bg={Colors.Black}
                  size="md"
                  radius="xs"
                  rightSection={<IconShoppingBagPlus />}
                  maw={200}
                  style={{
                    alignSelf: 'center',
                  }}
                >
                  <Typography.Body2 c={Colors.White}>
                    Thêm vào giỏ hàng
                  </Typography.Body2>
                </Button>

                <IconHeart />
              </Flex>
            </Stack>
          </Flex>
        </Container>
      </Container>

      <Container size="md" my={50}>
        <Typography.HeadLine4>Mô tả</Typography.HeadLine4>
        <Typography.Body1 mt={20} mb={46}>
          Cặp túi OnTheGo PM đến từ sự hỗn hợp của vải Monogram và Monogram
          Reverse với hình mẫu để làm xu hướng thời trang, cả hai thời trang và
          thực tế, là bạn đồng hành hàng ngày tuyệt vời. Được trang bị tấm tay
          Toron và dây cột vải jacquard định nghĩa ở màu tráng crème beige cực
          kỳ lịch lãm, cặp túi này còn được trang bị ví tiền tiện lợi để có thể
          giữ đồng tiền hoặc bạn bè nhỏ nhất của bạn.
        </Typography.Body1>
        <Typography.HeadLine4>Chất liệu</Typography.HeadLine4>
        <Flex mt={20} mb={46}>
          <List style={{ flex: 1 }}>
            <List.Item>Vải canvas phủ Monogram và Monogram Reverse,</List.Item>
            <List.Item>Lòng vải thun,</List.Item>
            <List.Item>Phụ kiện màu vàng,</List.Item>
            <List.Item>Ví tiền tích cảnh có thể tháo rời,</List.Item>
            <List.Item>Túi trong bên trong có khe zip,</List.Item>
            <List.Item>2 túi trong bên trong có sẵn.</List.Item>
          </List>
          <List style={{ flex: 1 }}>
            <List.Item>Đai D</List.Item>
            <List.Item>4 mũi giữ cạnh cứng</List.Item>
            <List.Item>Thay đổi được</List.Item>
            <List.Item>Điều chỉnh được</List.Item>
            <List.Item>35.2, 53.0</List.Item>
            <List.Item>Đôi</List.Item>
          </List>
        </Flex>
        <Typography.HeadLine4>Kích thước</Typography.HeadLine4>
        <List mt={20}>
          <List.Item>
            25 x 19 x 11.5 (Chiều dài x Chiều cao x Chiều rộng)
          </List.Item>
        </List>
      </Container>

      <Flex gap={32} mb={50} style={{ overflow: 'hidden' }} justify="center">
        <Image src={image7} w={473} h={593} />
        <Image src={image8} w={473} h={593} />
        <Image src={image9} w={473} h={593} />
      </Flex>

      <Container size="md">
        <Typography.HeadLine4 mb={24}>ĐÁNH GIÁ</Typography.HeadLine4>
        {Array(3)
          .fill(null)
          .map((_item, index) => {
            return (
              <Stack gap={24} key={`${index}-review`} p={32}>
                <Flex>
                  {Array(5)
                    .fill(null)
                    .map((_item, index) => (
                      <IconStarFilled
                        key={`${index}-star`}
                        style={{
                          color: Colors.Brown,
                        }}
                      />
                    ))}
                </Flex>
                <Typography.Body1>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare."
                </Typography.Body1>
                <Flex align="center" gap={20}>
                  <Avatar radius="xl" size="lg" />
                  <Box>
                    <Typography.Body1>Name Surname</Typography.Body1>
                    <Typography.Body1>Position, Company name</Typography.Body1>
                  </Box>
                </Flex>
                {index !== 2 && <Divider />}
              </Stack>
            );
          })}

        <Center mt={32} mb={120}>
          <Pagination total={4} withControls={false} />
        </Center>
      </Container>

      <Container size="xl">
        <Center>
          <Typography.HeadLine2>- SẢN PHẨM TƯƠNG TỰ -</Typography.HeadLine2>
        </Center>
        <Flex justify="space-between" mt={60} mb={120}>
          {Array(4)
            .fill(null)
            .map((_item, index) => (
              <Card
                key={`${index}-same-product`}
                shadow="sm"
                padding="lg"
                radius="md"
              >
                <Card.Section>
                  <Image src={image8} height={280} alt="Norway" />
                  <IconHeart
                    stroke={1}
                    style={{
                      position: 'absolute',
                      top: 24,
                      right: 24,
                    }}
                  />
                </Card.Section>

                <Stack pb={24} mt={12}>
                  <Typography.HeadLine5 ta="center">
                    LV ON THE GO PM PREMIUM
                  </Typography.HeadLine5>
                  <Typography.HeadLine4 ta="center">
                    62.000.000 VND
                  </Typography.HeadLine4>
                  <Button
                    variant="filled"
                    bg={Colors.Brown}
                    size="md"
                    radius="xs"
                    rightSection={<IconShoppingBagPlus />}
                    maw={200}
                    style={{
                      alignSelf: 'center',
                    }}
                  >
                    <Typography.Body2 c={Colors.White}>
                      Thêm vào giỏ hàng
                    </Typography.Body2>
                  </Button>
                </Stack>
              </Card>
            ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default ProductDetail;
