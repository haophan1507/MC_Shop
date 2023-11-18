import {
  Center,
  Container,
  Divider,
  Grid,
  Space,
  Image,
  em,
} from '@mantine/core';
import { Typography } from '../../common/components/Typography';

import image1 from '../../assets/images/product-woman/Rectangle 3245-1.png';
import image2 from '../../assets/images/product-woman/Rectangle 3245-2.png';
import image3 from '../../assets/images/product-woman/Rectangle 3245-3.png';
import image4 from '../../assets/images/product-woman/Rectangle 3245-4.png';
import image5 from '../../assets/images/product-woman/Rectangle 3245-5.png';
import image6 from '../../assets/images/product-woman/Rectangle 3245-6.png';
import image7 from '../../assets/images/product-woman/Rectangle 3245-11.png';
import image8 from '../../assets/images/product-woman/Rectangle 3245-12.png';
import { IconHeart } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Colors from '../../common/components/Colors';
import { useMediaQuery } from '@mantine/hooks';

const favorites = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

function FavoriteProduct() {
  const navigate = useNavigate();

  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Container size="xl">
      <Typography.HeadLine2 mt={64} ta="center">
        SẢN PHẨM YÊU THÍCH
      </Typography.HeadLine2>
      <Divider my={16} />

      <Grid gutter={0} mt={50} mb={120}>
        {favorites.map((item, index) => {
          return (
            <Grid.Col span={isMobile ? 6 : 3} key={index}>
              <Space
                pos="relative"
                style={{
                  border: '1px solid #CBCBCB',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  navigate(`/product/Túi Crossbody/product-detail`)
                }
              >
                <Center>
                  <Image src={item} />
                  <IconHeart
                    stroke={1}
                    fill={Colors.Brown}
                    style={{
                      position: 'absolute',
                      top: 24,
                      right: isMobile ? 24 : 48,
                    }}
                  />
                </Center>
              </Space>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}

export default FavoriteProduct;
