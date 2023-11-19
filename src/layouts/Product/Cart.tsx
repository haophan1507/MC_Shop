import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Image,
  Input,
  Space,
  Stack,
  em,
  rem,
} from '@mantine/core';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';
import {
  IconCheck,
  IconHeart,
  IconMinus,
  IconPlus,
  IconShoppingBagPlus,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import image1 from '../../assets/images/product-woman/Rectangle 3244.png';
import image2 from '../../assets/images/homepage/image 23-1.png';
import image3 from '../../assets/images/homepage/image 21-1.png';
import image4 from '../../assets/images/product detail/Image-1.png';
import { useMediaQuery } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

function Cart() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Container size="xl">
      <Image src={image1} />

      <Grid gutter={32} mt={50}>
        <Grid.Col span={isMobile ? 12 : 8}>
          <Typography.HeadLine5>Giỏ hàng của bạn</Typography.HeadLine5>
          <Divider my={16} />
          {isMobile ? (
            <Stack>
              <Image src={image2} />
              <Stack gap={12} align="center">
                <Typography.Body1 fw="bold">
                  GUCCI DIANA MEDIUM SHOULDER
                </Typography.Body1>
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
              </Stack>
              <Flex align="center" justify="center" gap={16}>
                <IconMinus />
                <Typography.HeadLine4>1</Typography.HeadLine4>
                <IconPlus />
              </Flex>
              <Typography.HeadLine4 fw="bold" ta="center" mb={24}>
                62.000.000 VNĐ
              </Typography.HeadLine4>
            </Stack>
          ) : (
            <Flex gap={12} align="center">
              <Image src={image2} w={180} />
              <Stack w={200} gap={12}>
                <Typography.Body1 maw={175}>
                  GUCCI DIANA MEDIUM SHOULDER
                </Typography.Body1>
                <Flex align="center" gap={10}>
                  <Typography.Body1 maw={150}>Màu sắc: </Typography.Body1>
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
              </Stack>
              <Flex align="center" gap={16} w={150}>
                <IconMinus />
                <Typography.HeadLine4>1</Typography.HeadLine4>
                <IconPlus />
              </Flex>
              <Typography.HeadLine4 fw="bold">
                62.000.000 VNĐ
              </Typography.HeadLine4>
            </Flex>
          )}

          <Divider />

          {isMobile ? (
            <Stack>
              <Image src={image3} />
              <Stack gap={12} align="center">
                <Typography.Body1 fw="bold">
                  Speedy Bandoulière 25
                </Typography.Body1>
                <Flex align="center" gap={10}>
                  <Typography.Body1>Màu sắc: </Typography.Body1>
                  <Box
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      backgroundColor: Colors.White,
                      border: '1px solid',
                      borderColor: Colors.Black,
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
                        backgroundColor: Colors.Black,
                      }}
                    />
                  </Box>
                </Flex>
              </Stack>
              <Flex align="center" justify="center" gap={16}>
                <IconMinus />
                <Typography.HeadLine4>1</Typography.HeadLine4>
                <IconPlus />
              </Flex>
              <Typography.HeadLine4 fw="bold" ta="center" mb={24}>
                92.000.000 VNĐ
              </Typography.HeadLine4>
            </Stack>
          ) : (
            <Flex gap={12} align="center">
              <Image src={image3} w={180} />
              <Stack w={200} gap={12}>
                <Typography.Body1 maw={175}>
                  Speedy Bandoulière 25
                </Typography.Body1>
                <Flex align="center" gap={10}>
                  <Typography.Body1 maw={150}>Màu sắc: </Typography.Body1>
                  <Box
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      backgroundColor: Colors.White,
                      border: '1px solid',
                      borderColor: Colors.Black,
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
                        backgroundColor: Colors.Black,
                      }}
                    />
                  </Box>
                </Flex>
              </Stack>
              <Flex align="center" gap={16} w={150}>
                <IconMinus />
                <Typography.HeadLine4>1</Typography.HeadLine4>
                <IconPlus />
              </Flex>
              <Typography.HeadLine4 fw="bold">
                92.000.000 VNĐ
              </Typography.HeadLine4>
            </Flex>
          )}

          <Divider />
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 4}>
          <Box
            py={20}
            px={16}
            w="100%"
            style={{
              border: '1px solid #CBCBCB',
            }}
          >
            <Typography.Body1>Tổng hoá đơn</Typography.Body1>
            <Typography.Body2 mt={8} mb={18}>
              Mã hoá đơn: VNCART21280823
            </Typography.Body2>
            <Divider mb={20} />
            <Flex justify="space-between">
              <Typography.Body1>Tiền hàng</Typography.Body1>
              <Typography.Body1>154.000.000 VNĐ</Typography.Body1>
            </Flex>
            <Flex justify="space-between" mt={12} mb={28}>
              <Typography.Body1>Phí vận chuyển</Typography.Body1>
              <Typography.Body1>0 VNĐ</Typography.Body1>
            </Flex>
            <Input placeholder="Mã giảm giá" size="md" mb={20} />
            <Button
              variant="filled"
              size="md"
              color={Colors.Brown}
              radius="xs"
              w="100%"
            >
              <Typography.Body1 c={Colors.White}>
                Áp dụng mã giảm giá
              </Typography.Body1>
            </Button>
            <Flex justify="space-between" mt={28}>
              <Typography.Body1>Số tiền giảm</Typography.Body1>
              <Typography.Body1>- 28.800.000 VNĐ</Typography.Body1>
            </Flex>
            <Divider my={20} />
            <Flex justify="space-between" align="center" mt={28}>
              <Typography.HeadLine5>Tổng SỐ TIỀN</Typography.HeadLine5>
              <Typography.HeadLine4>125.200.000 VNĐ</Typography.HeadLine4>
            </Flex>
            <Button
              variant="filled"
              size="md"
              color={Colors.Brown}
              radius="xs"
              w="100%"
              mt={40}
              onClick={() => navigate('/product/payment')}
            >
              <Typography.Body1 c={Colors.White}>Thanh toán</Typography.Body1>
            </Button>
          </Box>
        </Grid.Col>
      </Grid>

      <Center mt={140}>
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
              <Center>
                <Image src={image2} />
                <IconHeart
                  stroke={1}
                  style={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                  }}
                />
              </Center>
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
              <Center>
                <Image src={image3} />
                <IconHeart
                  stroke={1}
                  style={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                  }}
                />
              </Center>
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
                  <Image src={image4} height={280} alt="Norway" />
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
                    onClick={() => {
                      notifications.show({
                        icon: (
                          <IconCheck
                            style={{ width: rem(20), height: rem(20) }}
                          />
                        ),
                        color: 'teal',
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
                    <Typography.Body2 c={Colors.White}>
                      Thêm vào giỏ hàng
                    </Typography.Body2>
                  </Button>
                </Stack>
              </Card>
            ))}
        </Flex>
      )}
    </Container>
  );
}

export default Cart;
