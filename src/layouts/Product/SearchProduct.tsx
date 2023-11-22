import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
  HoverCard,
  Image,
  Input,
  Space,
  Stack,
  em,
  rem,
} from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';

import image3 from '../../assets/images/product-woman/Rectangle 3245-1.png';
import image4 from '../../assets/images/product-woman/Rectangle 3245-2.png';
import image5 from '../../assets/images/product-woman/Rectangle 3245-3.png';
import image6 from '../../assets/images/product-woman/Rectangle 3245-4.png';
import image7 from '../../assets/images/product-woman/Rectangle 3245-5.png';
import image8 from '../../assets/images/product-woman/Rectangle 3245-6.png';
import image9 from '../../assets/images/product-woman/Rectangle 3245-11.png';
import image10 from '../../assets/images/product-woman/Rectangle 3245-12.png';
import image11 from '../../assets/images/product-woman/Rectangle 3245-13.png';
import image12 from '../../assets/images/product-woman/Rectangle 3245-14.png';
import image13 from '../../assets/images/product-woman/Rectangle 3245-17.png';
import image14 from '../../assets/images/product-woman/Rectangle 3245-18.png';

import image15 from '../../assets/images/product-man/Rectangle 3245-1.png';
import image16 from '../../assets/images/product-man/Rectangle 3245-2.png';
import image17 from '../../assets/images/product-man/Rectangle 3245-3.png';
import image18 from '../../assets/images/product-man/Rectangle 3245-4.png';
import image19 from '../../assets/images/product-man/Rectangle 3245-5.png';
import image20 from '../../assets/images/product-man/Rectangle 3245-7.png';
import image21 from '../../assets/images/product-man/Rectangle 3245-8.png';
import image22 from '../../assets/images/product-man/Rectangle 3245-9.png';
import image23 from '../../assets/images/product-man/Rectangle 3245-10.png';
import image24 from '../../assets/images/product-man/Rectangle 3245-11.png';
import image25 from '../../assets/images/product-man/Rectangle 3245-12.png';
import image26 from '../../assets/images/product-man/Rectangle 3245-15.png';
import image27 from '../../assets/images/product-man/Rectangle 3245-16.png';
import image28 from '../../assets/images/product-man/Rectangle 3245-17.png';
import image29 from '../../assets/images/product-man/Rectangle 3245-18.png';
import image30 from '../../assets/images/product-man/Rectangle 3245-19.png';
import image31 from '../../assets/images/product-man/Rectangle 3245.png';

import {
  IconCheck,
  IconChevronDown,
  IconHeart,
  IconSearch,
  IconShoppingBagPlus,
} from '@tabler/icons-react';
import { useHover, useMediaQuery } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

const ImageWoman = [
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image28,
  image29,
  image30,
  image31,
];

const ImageMan = [
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
];

function SearchProduct() {
  const { name } = useParams();
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Container size="xl">
      <Typography.HeadLine2 ta="center" mt={isMobile ? 24 : 80}>
        KẾT QUẢ TÌM KIẾM
      </Typography.HeadLine2>
      <Center>
        <Input
          size="lg"
          radius="xs"
          value="Túi xách tay cho nữ"
          w={550}
          mt={24}
          mb={40}
          rightSection={<IconSearch style={{ color: Colors.Black }} />}
        />
      </Center>

      {isMobile && (
        <Typography.Body1 fs="italic">Có 60 kết quả tìm kiếm</Typography.Body1>
      )}

      <Flex justify="space-between" mt={24} mb={32}>
        {!isMobile && (
          <Typography.Body1 fs="italic">
            Có 60 kết quả tìm kiếm
          </Typography.Body1>
        )}

        <Flex gap={24}>
          <HoverCard shadow="md">
            <HoverCard.Target>
              <Flex align="center" gap={4}>
                <Typography.Body2>Danh mục</Typography.Body2>
                <IconChevronDown size={20} />
              </Flex>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Stack>
                <Typography.Body2>Tất cả các túi xách (150)</Typography.Body2>
                <Typography.Body2>Các túi ví (12)</Typography.Body2>
                <Typography.Body2>Túi Crossbody (28)</Typography.Body2>
                <Typography.Body2>Túi Mini (10)</Typography.Body2>
                <Typography.Body2>Túi xách tay trên (40)</Typography.Body2>
                <Typography.Body2>Túi đeo vai (60)</Typography.Body2>
              </Stack>
            </HoverCard.Dropdown>
          </HoverCard>

          <HoverCard shadow="md">
            <HoverCard.Target>
              <Flex align="center" gap={4}>
                <Typography.Body2>Thương hiệu</Typography.Body2>
                <IconChevronDown size={20} />
              </Flex>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Stack>
                <Typography.Body2>Celine</Typography.Body2>
                <Typography.Body2>Chanel</Typography.Body2>
                <Typography.Body2>Charles & Keith</Typography.Body2>
                <Typography.Body2>Christant Dior</Typography.Body2>
                <Typography.Body2>COACH</Typography.Body2>
                <Typography.Body2>JEMMA</Typography.Body2>
                <Typography.Body2>GUCCI</Typography.Body2>
                <Typography.Body2>HERMES</Typography.Body2>
                <Typography.Body2>LOUIS VUITTON</Typography.Body2>
                <Typography.Body2>Prada</Typography.Body2>
                <Typography.Body2>Các hãng khác</Typography.Body2>
              </Stack>
            </HoverCard.Dropdown>
          </HoverCard>

          <HoverCard shadow="md">
            <HoverCard.Target>
              <Flex align="center" gap={4}>
                <Typography.Body2>Màu sắc</Typography.Body2>
                <IconChevronDown size={20} />
              </Flex>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Checkbox.Group defaultValue={['Đen']}>
                <Grid mt="xs">
                  <Grid.Col span={6}>
                    <Stack>
                      <Checkbox value="Đen" label="Đen" color={Colors.Brown} />
                      <Checkbox
                        value="Trắng"
                        label="Trắng"
                        color={Colors.Brown}
                      />
                      <Checkbox value="Bạc" label="Bạc" color={Colors.Brown} />
                      <Checkbox value="Xám" label="Xám" color={Colors.Brown} />
                      <Checkbox
                        value="Beige"
                        label="Beige"
                        color={Colors.Brown}
                      />
                    </Stack>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Stack>
                      <Checkbox value="Nâu" label="Nâu" color={Colors.Brown} />
                      <Checkbox
                        value="Vàng"
                        label="Vàng"
                        color={Colors.Brown}
                      />
                      <Checkbox value="Đỏ" label="Đỏ" color={Colors.Brown} />
                      <Checkbox value="Cam" label="Cam" color={Colors.Brown} />
                      <Checkbox
                        value="Hồng"
                        label="Hồng"
                        color={Colors.Brown}
                      />
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Checkbox.Group>
            </HoverCard.Dropdown>
          </HoverCard>

          <HoverCard shadow="md">
            <HoverCard.Target>
              <Flex align="center" gap={4}>
                <Typography.Body2>Sắp xếp theo: MỚI NHẤT</Typography.Body2>
                <IconChevronDown size={20} />
              </Flex>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Stack>
                <Typography.Body2>Mới nhất</Typography.Body2>
                <Typography.Body2>Bán chạy nhất</Typography.Body2>
                <Typography.Body2>Giá: từ cao đến thấp</Typography.Body2>
                <Typography.Body2>Giá: từ thấp đến cao</Typography.Body2>
              </Stack>
            </HoverCard.Dropdown>
          </HoverCard>
        </Flex>
      </Flex>

      <Grid gutter={0}>
        {name === 'Tất cả các túi sách Nữ'
          ? ImageWoman.map((item, index) => (
              <Grid.Col span={isMobile ? 6 : 3}>
                <ProductItem key={index + Math.random()} item={item} />
              </Grid.Col>
            ))
          : ImageMan.map((item, index) => (
              <Grid.Col span={isMobile ? 6 : 3}>
                <ProductItem key={index + Math.random()} item={item} />
              </Grid.Col>
            ))}
      </Grid>

      <Center mt={40} mb={80}>
        <Button variant="filled" bg={Colors.Brown} size="lg" radius="xs">
          Tải thêm
        </Button>
      </Center>
    </Container>
  );
}

const ProductItem = ({ item }: { item: any }) => {
  const { hovered, ref } = useHover();
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <Space
      pos="relative"
      style={{
        border: '1px solid #CBCBCB',
        cursor: 'pointer',
      }}
      ref={ref}
      onClick={() => navigate(`/product/${name}/product-detail`)}
    >
      {hovered ? (
        <Center
          pos="absolute"
          style={{
            zIndex: 2,
          }}
        >
          <Stack bg={Colors.LightGrey} pb={24}>
            <Image src={item} />
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
                    <IconCheck style={{ width: rem(20), height: rem(20) }} />
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
              <Typography.Body2 c={Colors.White}>
                Thêm vào giỏ hàng
              </Typography.Body2>
            </Button>
          </Stack>
          <IconHeart
            stroke={1}
            style={{
              position: 'absolute',
              top: 24,
              right: 48,
            }}
          />
        </Center>
      ) : (
        <Center>
          <Image src={item} />
          <IconHeart
            stroke={1}
            style={{
              position: 'absolute',
              top: 24,
              right: 48,
            }}
          />
        </Center>
      )}
    </Space>
  );
};

export default SearchProduct;
