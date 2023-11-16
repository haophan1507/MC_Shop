import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Image,
  Stack,
} from '@mantine/core';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';

import image1 from '../../assets/images/product-woman/Rectangle 3244.png';
import image2 from '../../assets/images/homepage/image 23-1.png';
import image3 from '../../assets/images/homepage/image 21-1.png';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  return (
    <Container size="xl">
      <Image src={image1} />

      <Center
        style={{
          border: `1px dashed ${Colors.Brown}`,
          borderRadius: 4,
          paddingBlock: 20,
          marginBlock: 50,
        }}
      >
        <Typography.HeadLine2 c={Colors.Brown}>
          Đơn hàng đã đặt thành công!
        </Typography.HeadLine2>
      </Center>

      <Grid>
        <Grid.Col
          span={3}
          style={{
            borderRight: '1px solid black',
          }}
        >
          <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
            Mã đơn hàng
          </Typography.Body1>
          <Typography.Body1 ta="center">VNCART21280823</Typography.Body1>
          <Divider orientation="vertical" />
        </Grid.Col>

        <Grid.Col
          span={3}
          style={{
            borderRight: '1px solid black',
          }}
        >
          <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
            Ngày đặt
          </Typography.Body1>
          <Typography.Body1 ta="center">13/08/2023</Typography.Body1>
        </Grid.Col>
        <Grid.Col
          span={3}
          style={{
            borderRight: '1px solid black',
          }}
        >
          <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
            Tổng tiền
          </Typography.Body1>
          <Typography.Body1 ta="center">125.200.000 VNĐ</Typography.Body1>
        </Grid.Col>
        <Grid.Col span={3}>
          <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
            Phương thức thanh toán
          </Typography.Body1>
          <Typography.Body1 ta="center">
            Thanh toán khi nhận hàng
          </Typography.Body1>
        </Grid.Col>
      </Grid>

      <Container size="lg">
        <Typography.HeadLine5 fw="bold" tt="uppercase">
          Chi tiết ĐƠN HÀNG
        </Typography.HeadLine5>
        <Flex gap={12} align="center" justify="space-between" w="100%" px={32}>
          <Image src={image2} w={250} />
          <Stack gap={12} w={200}>
            <Typography.Body1>GUCCI DIANA MEDIUM SHOULDER</Typography.Body1>
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
          <Center w={150}>
            <Typography.HeadLine4>1</Typography.HeadLine4>
          </Center>
          <Typography.HeadLine4 fw="bold">62.000.000 VNĐ</Typography.HeadLine4>
        </Flex>
        <Divider />

        <Flex gap={12} align="center" justify="space-between" px={32}>
          <Image src={image3} w={250} />
          <Stack w={200} gap={12}>
            <Typography.Body1>Speedy Bandoulière 25</Typography.Body1>
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
          <Center w={150}>
            <Typography.HeadLine4>1</Typography.HeadLine4>
          </Center>
          <Typography.HeadLine4 fw="bold">92.000.000 VNĐ</Typography.HeadLine4>
        </Flex>
        <Divider mb={40} />

        <Stack gap={24}>
          <Flex justify="space-between" px={32}>
            <Typography.HeadLine5 fw="bold">Tiền hàng</Typography.HeadLine5>
            <Typography.HeadLine5 fw="bold">
              154.000.000 VNĐ
            </Typography.HeadLine5>
          </Flex>

          <Flex justify="space-between" px={32}>
            <Typography.HeadLine5 fw="bold">
              Phí vận chuyển
            </Typography.HeadLine5>
            <Typography.HeadLine5 fw="bold">0 VNĐ</Typography.HeadLine5>
          </Flex>

          <Flex justify="space-between" px={32}>
            <Typography.HeadLine5 fw="bold">Số tiền giảm</Typography.HeadLine5>
            <Typography.HeadLine5 fw="bold">
              - 28.800.000 VNĐ
            </Typography.HeadLine5>
          </Flex>

          <Divider />

          <Flex justify="space-between" px={32}>
            <Typography.HeadLine3 fw="bold">Tổng số tiền</Typography.HeadLine3>
            <Typography.HeadLine3 fw="bold">
              125.200.000 VNĐ
            </Typography.HeadLine3>
          </Flex>
        </Stack>

        <Center mt={60} mb={140}>
          <Button
            variant="filled"
            size="md"
            color={Colors.Brown}
            radius="xs"
            w={450}
            onClick={() => navigate('/')}
          >
            <Typography.Body1 c={Colors.White}>Thanh toán</Typography.Body1>
          </Button>
        </Center>
      </Container>
    </Container>
  );
}

export default Success;
