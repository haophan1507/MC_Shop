import {
  Button,
  Center,
  Container,
  Flex,
  HoverCard,
  Image,
  Input,
  Space,
  Stack,
} from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';

import image1 from '../../assets/images/product-man/Rectangle 3244.png';
import image2 from '../../assets/images/product-woman/Rectangle 3244.png';
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
  IconChevronDown,
  IconHeart,
  IconSearch,
  IconShoppingBagPlus,
} from '@tabler/icons-react';
import { useHover } from '@mantine/hooks';

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

  return (
    <Container size="xl">
      <Typography.HeadLine2 ta="center" mt={80}>
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

      <Flex justify="space-between" mt={24} mb={32}>
        <Typography.Body1 fs="italic">Có 60 kết quả tìm kiếm</Typography.Body1>

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
                <Typography.Body2>Danh mục</Typography.Body2>
                <Typography.Body2>Danh mục</Typography.Body2>
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
          </HoverCard>

          <HoverCard shadow="md">
            <HoverCard.Target>
              <Flex align="center" gap={4}>
                <Typography.Body2>Màu sắc</Typography.Body2>
                <IconChevronDown size={20} />
              </Flex>
            </HoverCard.Target>
          </HoverCard>

          <HoverCard shadow="md">
            <HoverCard.Target>
              <Flex align="center" gap={4}>
                <Typography.Body2>Sắp xếp theo: MỚI NHẤT</Typography.Body2>
                <IconChevronDown size={20} />
              </Flex>
            </HoverCard.Target>
          </HoverCard>
        </Flex>
      </Flex>

      <Flex wrap="wrap">
        {name === 'Tất cả các túi sách Nữ'
          ? ImageWoman.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))
          : ImageMan.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
      </Flex>

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
      w="25%"
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
