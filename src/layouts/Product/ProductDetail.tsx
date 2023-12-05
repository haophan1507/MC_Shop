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
  Grid,
  Image,
  List,
  Pagination,
  Rating,
  Space,
  Stack,
  UnstyledButton,
  em,
  rem,
} from '@mantine/core';
import Colors from '../../common/components/Colors';
import { Typography } from '../../common/components/Typography';
import { Carousel, Embla } from '@mantine/carousel';
import { useState, useCallback, useEffect } from 'react';
import {
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconHeart,
  IconMinus,
  IconPlus,
  IconShare,
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
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';

const items = [
  { title: 'Sản phẩm' },
  { title: 'Tất cả các túi xách Nữ' },
  { title: 'ON THE GO PM' },
].map((item, index) => (
  <Typography.Body2 key={index}>{item.title}</Typography.Body2>
));

const listImage = [image1, image2, image3, image4, image5, image6];

const ProductDetail = () => {
  const navigate = useNavigate();

  const [embla, setEmbla] = useState<Embla | null>(null);
  const [number, setNumber] = useState(1);

  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  const [_totalProduct, setTotalProduct] = useLocalStorage({
    key: 'totalProduct',
  });

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

          {isMobile ? (
            <Stack pos="relative">
              <Flex
                gap={24}
                justify="flex-end"
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 24,
                }}
              >
                <UnstyledButton>
                  <IconShare />
                </UnstyledButton>

                <UnstyledButton>
                  <IconHeart />
                </UnstyledButton>
              </Flex>

              <AspectRatio ratio={2480 / 2388} style={{ flex: 1 }}>
                <Image src={image6} />
              </AspectRatio>

              <Flex justify="center" align="center" gap={24}>
                <Carousel
                  align="center"
                  dragFree
                  slideSize="20%"
                  slideGap="md"
                  getEmblaApi={setEmbla}
                  initialSlide={2}
                  loop
                  withControls={false}
                  w={'100%'}
                >
                  {listImage.map((item, index) => {
                    return (
                      <Carousel.Slide key={index}>
                        <Image src={item} w={98} h={98} />
                      </Carousel.Slide>
                    );
                  })}
                </Carousel>
              </Flex>
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
                    width: 40,
                    height: 40,
                    borderRadius: 40,
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
                      width: 32,
                      height: 32,
                      borderRadius: 32,
                      backgroundColor: Colors.Brown,
                    }}
                  />
                </Box>
              </Flex>
              <Flex gap={10} align="center">
                <Typography.Body1>Số lượng:</Typography.Body1>
                <Flex align="center" gap={10}>
                  <IconMinus
                    onClick={() =>
                      setNumber((prev) => (prev > 0 ? prev - 1 : 0))
                    }
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                  <Typography.HeadLine4>{number}</Typography.HeadLine4>
                  <IconPlus
                    onClick={() => setNumber((prev) => prev + 1)}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </Flex>
              </Flex>

              <Flex align="center" gap={12} mb={24}>
                <Button
                  variant="outline"
                  color={Colors.Brown}
                  radius="xs"
                  style={{ flex: 1 }}
                  onClick={() => {
                    setTotalProduct((prev) =>
                      prev ? (Number(prev) + 1).toString() : '1'.toString()
                    );
                    notifications.show({
                      icon: (
                        <IconCheck
                          style={{ width: rem(20), height: rem(20) }}
                        />
                      ),
                      color: Colors.Brown,
                      autoClose: 1000,
                      message: (
                        <Stack my={16}>
                          <Typography.HeadLine5>
                            Sản phẩm đã được thêm vào Giỏ hàng
                          </Typography.HeadLine5>
                        </Stack>
                      ),
                    });
                  }}
                >
                  <Typography.Body1 c={Colors.Brown}>
                    Thêm vào giỏ hàng
                  </Typography.Body1>
                </Button>
                <Button
                  variant="filled"
                  color={Colors.Brown}
                  radius="xs"
                  style={{ flex: 1 }}
                  onClick={() => {
                    navigate('/product/payment');
                  }}
                >
                  <Typography.Body1 c={Colors.White}>Mua ngay</Typography.Body1>
                </Button>
              </Flex>
            </Stack>
          ) : (
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

              <Stack
                maw={380}
                h="100%"
                justify="flex-start"
                style={{
                  alignSelf: 'stretch',
                }}
                gap={120}
              >
                <Flex gap={24} justify="flex-end">
                  <UnstyledButton>
                    <IconShare />
                  </UnstyledButton>

                  <UnstyledButton>
                    <IconHeart />
                  </UnstyledButton>
                </Flex>

                <Stack>
                  <Typography.HeadLine4>LV ON THE GO PM</Typography.HeadLine4>
                  <Typography.Body1>
                    Túi xách Excursion PM siêu dễ thương, được làm từ canvas
                    Monogram và làm bọc lề bằng da. Thiết kế ông lấy ý tưởng từ
                    thế giới leo núi. Ở lớp bên trong kín bằng buc trượt điều
                    chỉnh và có hai túi với dây buc. Một ống dây, vừa làm nên
                    phong cách thời trang, cũng vừa gọn gàng trong việc di
                    chuyển.
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
                      <IconMinus
                        onClick={() =>
                          setNumber((prev) => (prev > 0 ? prev - 1 : 0))
                        }
                        style={{
                          cursor: 'pointer',
                        }}
                      />
                      <Typography.HeadLine4>{number}</Typography.HeadLine4>
                      <IconPlus
                        onClick={() => setNumber((prev) => prev + 1)}
                        style={{
                          cursor: 'pointer',
                        }}
                      />
                    </Flex>
                  </Flex>

                  <Flex gap={24}>
                    <Button
                      variant="outline"
                      color={Colors.Brown}
                      radius="xs"
                      w={210}
                      onClick={() => {
                        setTotalProduct((prev) =>
                          prev ? (Number(prev) + 1).toString() : '1'.toString()
                        );
                        notifications.show({
                          icon: (
                            <IconCheck
                              style={{ width: rem(20), height: rem(20) }}
                            />
                          ),
                          color: Colors.Brown,
                          autoClose: 1000,
                          message: (
                            <Stack my={16}>
                              <Typography.HeadLine5>
                                Sản phẩm đã được thêm vào Giỏ hàng
                              </Typography.HeadLine5>
                            </Stack>
                          ),
                        });
                      }}
                    >
                      <Typography.Body1 c={Colors.Brown}>
                        Thêm vào giỏ hàng
                      </Typography.Body1>
                    </Button>
                    <Button
                      variant="filled"
                      color={Colors.Brown}
                      radius="xs"
                      w={210}
                      onClick={() => {
                        navigate('/product/payment');
                      }}
                    >
                      <Typography.Body1 c={Colors.White}>
                        Mua ngay
                      </Typography.Body1>
                    </Button>
                  </Flex>
                </Stack>
              </Stack>
            </Flex>
          )}
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
        {isMobile ? (
          <List style={{ flex: 1 }} mt={20} mb={46}>
            <List.Item>Vải canvas phủ Monogram và Monogram Reverse,</List.Item>
            <List.Item>Lòng vải thun,</List.Item>
            <List.Item>Phụ kiện màu vàng,</List.Item>
            <List.Item>Ví tiền tích cảnh có thể tháo rời,</List.Item>
            <List.Item>Túi trong bên trong có khe zip,</List.Item>
            <List.Item>2 túi trong bên trong có sẵn.</List.Item>
            <List.Item>Đai D</List.Item>
            <List.Item>4 mũi giữ cạnh cứng</List.Item>
            <List.Item>Thay đổi được</List.Item>
            <List.Item>Điều chỉnh được</List.Item>
            <List.Item>35.2, 53.0</List.Item>
            <List.Item>Đôi</List.Item>
          </List>
        ) : (
          <Flex mt={20} mb={46}>
            <List style={{ flex: 1 }}>
              <List.Item>
                Vải canvas phủ Monogram và Monogram Reverse,
              </List.Item>
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
        )}
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
          <Pagination total={4} withControls={false} color={Colors.Brown} />
        </Center>
      </Container>

      <Container size="xl">
        <Center>
          <Typography.HeadLine2>- SẢN PHẨM TƯƠNG TỰ -</Typography.HeadLine2>
        </Center>
        {isMobile ? (
          <Grid gutter={0} mt={24} mb={64}>
            <Grid.Col span={6}>
              <Space
                pos="relative"
                style={{
                  border: '1px solid #CBCBCB',
                  cursor: 'pointer',
                }}
              >
                <Image src={image1} />
                <Stack
                  p={isMobile ? 12 : 24}
                  style={{
                    border: '1px solid #CBCBCB',
                    cursor: 'pointer',
                  }}
                >
                  <Typography.HeadLine5>
                    LV ON THE GO PM PREMIUM
                  </Typography.HeadLine5>
                  <Typography.HeadLine4>62.000.000 VND</Typography.HeadLine4>
                  <Typography.Body2>còn hàng 6 sản phẩm</Typography.Body2>
                  <Flex align="center" gap={8}>
                    <Rating value={5} color={Colors.Brown} />
                    <Typography.HeadLine5>(12)</Typography.HeadLine5>
                  </Flex>
                  {isMobile ? (
                    <Stack gap={'sm'}>
                      <Button
                        variant="outline"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        p={4}
                        onClick={() => {
                          setTotalProduct((prev) =>
                            prev
                              ? (Number(prev) + 1).toString()
                              : '1'.toString()
                          );
                          notifications.show({
                            icon: (
                              <IconCheck
                                style={{ width: rem(20), height: rem(20) }}
                              />
                            ),
                            color: Colors.Brown,
                            autoClose: 1000,
                            message: (
                              <Stack my={16}>
                                <Typography.HeadLine5>
                                  Sản phẩm đã được thêm vào Giỏ hàng
                                </Typography.HeadLine5>
                              </Stack>
                            ),
                          });
                        }}
                      >
                        <Typography.Body1 c={Colors.Brown}>
                          Thêm vào giỏ
                        </Typography.Body1>
                      </Button>
                      <Button
                        variant="filled"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        p={4}
                        onClick={() => {
                          navigate('/product/payment');
                        }}
                      >
                        <Typography.Body1 c={Colors.White}>
                          Mua ngay
                        </Typography.Body1>
                      </Button>
                    </Stack>
                  ) : (
                    <Flex gap={24}>
                      <Button
                        variant="outline"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        onClick={() => {
                          setTotalProduct((prev) =>
                            prev
                              ? (Number(prev) + 1).toString()
                              : '1'.toString()
                          );
                          notifications.show({
                            icon: (
                              <IconCheck
                                style={{ width: rem(20), height: rem(20) }}
                              />
                            ),
                            color: Colors.Brown,
                            autoClose: 1000,
                            message: (
                              <Stack my={16}>
                                <Typography.HeadLine5>
                                  Sản phẩm đã được thêm vào Giỏ hàng
                                </Typography.HeadLine5>
                              </Stack>
                            ),
                          });
                        }}
                      >
                        <Typography.Body1 c={Colors.Brown}>
                          Thêm vào giỏ
                        </Typography.Body1>
                      </Button>
                      <Button
                        variant="filled"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        onClick={() => {
                          navigate('/product/payment');
                        }}
                      >
                        <Typography.Body1 c={Colors.White}>
                          Mua ngay
                        </Typography.Body1>
                      </Button>
                    </Flex>
                  )}
                </Stack>
                <IconHeart
                  stroke={1}
                  style={{
                    position: 'absolute',
                    top: 24,
                    right: isMobile ? 24 : 48,
                  }}
                />
              </Space>
            </Grid.Col>
            <Grid.Col span={6}>
              <Space
                pos="relative"
                style={{
                  border: '1px solid #CBCBCB',
                  cursor: 'pointer',
                }}
              >
                <Image src={image2} />
                <Stack
                  p={isMobile ? 12 : 24}
                  style={{
                    border: '1px solid #CBCBCB',
                    cursor: 'pointer',
                  }}
                >
                  <Typography.HeadLine5>
                    LV ON THE GO PM PREMIUM
                  </Typography.HeadLine5>
                  <Typography.HeadLine4>62.000.000 VND</Typography.HeadLine4>
                  <Typography.Body2>còn hàng 6 sản phẩm</Typography.Body2>
                  <Flex align="center" gap={8}>
                    <Rating value={5} color={Colors.Brown} />
                    <Typography.HeadLine5>(12)</Typography.HeadLine5>
                  </Flex>
                  {isMobile ? (
                    <Stack gap={'sm'}>
                      <Button
                        variant="outline"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        p={4}
                        onClick={() => {
                          setTotalProduct((prev) =>
                            prev
                              ? (Number(prev) + 1).toString()
                              : '1'.toString()
                          );
                          notifications.show({
                            icon: (
                              <IconCheck
                                style={{ width: rem(20), height: rem(20) }}
                              />
                            ),
                            color: Colors.Brown,
                            autoClose: 1000,
                            message: (
                              <Stack my={16}>
                                <Typography.HeadLine5>
                                  Sản phẩm đã được thêm vào Giỏ hàng
                                </Typography.HeadLine5>
                              </Stack>
                            ),
                          });
                        }}
                      >
                        <Typography.Body1 c={Colors.Brown}>
                          Thêm vào giỏ
                        </Typography.Body1>
                      </Button>
                      <Button
                        variant="filled"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        p={4}
                        onClick={() => {
                          navigate('/product/payment');
                        }}
                      >
                        <Typography.Body1 c={Colors.White}>
                          Mua ngay
                        </Typography.Body1>
                      </Button>
                    </Stack>
                  ) : (
                    <Flex gap={24}>
                      <Button
                        variant="outline"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        onClick={() => {
                          setTotalProduct((prev) =>
                            prev
                              ? (Number(prev) + 1).toString()
                              : '1'.toString()
                          );
                          notifications.show({
                            icon: (
                              <IconCheck
                                style={{ width: rem(20), height: rem(20) }}
                              />
                            ),
                            color: Colors.Brown,
                            autoClose: 1000,
                            message: (
                              <Stack my={16}>
                                <Typography.HeadLine5>
                                  Sản phẩm đã được thêm vào Giỏ hàng
                                </Typography.HeadLine5>
                              </Stack>
                            ),
                          });
                        }}
                      >
                        <Typography.Body1 c={Colors.Brown}>
                          Thêm vào giỏ
                        </Typography.Body1>
                      </Button>
                      <Button
                        variant="filled"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        onClick={() => {
                          navigate('/product/payment');
                        }}
                      >
                        <Typography.Body1 c={Colors.White}>
                          Mua ngay
                        </Typography.Body1>
                      </Button>
                    </Flex>
                  )}
                </Stack>
                <IconHeart
                  stroke={1}
                  style={{
                    position: 'absolute',
                    top: 24,
                    right: isMobile ? 24 : 48,
                  }}
                />
              </Space>
            </Grid.Col>
          </Grid>
        ) : (
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
                    <Typography.HeadLine5>
                      LV ON THE GO PM PREMIUM
                    </Typography.HeadLine5>
                    <Typography.HeadLine4>62.000.000 VND</Typography.HeadLine4>
                    <Typography.Body2>còn hàng 6 sản phẩm</Typography.Body2>
                    <Flex align="center" gap={8}>
                      <Rating value={5} color={Colors.Brown} />
                      <Typography.HeadLine5>(12)</Typography.HeadLine5>
                    </Flex>
                    <Flex gap={24}>
                      <Button
                        variant="outline"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        onClick={() => {
                          setTotalProduct((prev) =>
                            prev
                              ? (Number(prev) + 1).toString()
                              : '1'.toString()
                          );
                          notifications.show({
                            icon: (
                              <IconCheck
                                style={{ width: rem(20), height: rem(20) }}
                              />
                            ),
                            color: Colors.Brown,
                            autoClose: 1000,
                            message: (
                              <Stack my={16}>
                                <Typography.HeadLine5>
                                  Sản phẩm đã được thêm vào Giỏ hàng
                                </Typography.HeadLine5>
                              </Stack>
                            ),
                          });
                        }}
                      >
                        <Typography.Body1 c={Colors.Brown}>
                          Thêm vào giỏ
                        </Typography.Body1>
                      </Button>
                      <Button
                        variant="filled"
                        color={Colors.Brown}
                        radius="xs"
                        style={{ flex: 1 }}
                        onClick={() => {
                          navigate('/product/payment');
                        }}
                      >
                        <Typography.Body1 c={Colors.White}>
                          Mua ngay
                        </Typography.Body1>
                      </Button>
                    </Flex>
                  </Stack>
                </Card>
              ))}
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default ProductDetail;
