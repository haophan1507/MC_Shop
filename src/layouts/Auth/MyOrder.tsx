import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Stack,
  Image,
  Modal,
  UnstyledButton,
} from '@mantine/core';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';

import image2 from '../../assets/images/homepage/image 23-1.png';
import image3 from '../../assets/images/homepage/image 21-1.png';
import { useDisclosure } from '@mantine/hooks';

function MyOrder() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container size="xl">
      <Typography.HeadLine2 mt={64} ta="center">
        ĐƠN HÀNG CỦA TÔI
      </Typography.HeadLine2>
      <Divider my={16} />

      <Grid>
        <Grid.Col
          span={3}
          style={{
            borderRight: '1px solid black',
          }}
        >
          <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
            Chờ vận chuyển
          </Typography.Body1>
          <Typography.Body1 ta="center">(1)</Typography.Body1>
          <Divider orientation="vertical" />
        </Grid.Col>

        <Grid.Col
          span={3}
          style={{
            borderRight: '1px solid black',
          }}
        >
          <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
            Đang giao
          </Typography.Body1>
          <Typography.Body1 ta="center">(1)</Typography.Body1>
        </Grid.Col>
        <Grid.Col
          span={3}
          style={{
            borderRight: '1px solid black',
          }}
        >
          <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
            Đã giao
          </Typography.Body1>
          <Typography.Body1 ta="center">(0)</Typography.Body1>
        </Grid.Col>
        <Grid.Col span={3}>
          <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
            Đã huỷ
          </Typography.Body1>
          <Typography.Body1 ta="center">(1)</Typography.Body1>
        </Grid.Col>
      </Grid>

      <Container size="lg">
        <Divider mt={40} />
        <UnstyledButton onClick={open}>
          <Flex
            gap={12}
            align="center"
            justify="space-between"
            w="100%"
            px={32}
          >
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
            <Typography.HeadLine4 fw="bold">
              62.000.000 VNĐ
            </Typography.HeadLine4>
          </Flex>
        </UnstyledButton>
        <Divider />

        <UnstyledButton onClick={open}>
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
            <Typography.HeadLine4 fw="bold">
              92.000.000 VNĐ
            </Typography.HeadLine4>
          </Flex>
        </UnstyledButton>
        <Divider mb={40} />
      </Container>

      <Modal
        opened={opened}
        onClose={close}
        title={
          <Typography.HeadLine5 fw="bold">
            Thông tin đơn hàng
          </Typography.HeadLine5>
        }
        size="xl"
        centered
      >
        <Typography.Body1>Mã hoá đơn: VNCART21280823</Typography.Body1>
        <Typography.Body1 my={8}>Trạng thái: Chờ vận chuyển</Typography.Body1>
        <Divider />
        <Flex gap={12} align="center" justify="space-between" w="100%" px={32}>
          <Image src={image2} w={180} />
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
          <Image src={image3} w={180} />
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
          <Typography.HeadLine4>92.000.000 VNĐ</Typography.HeadLine4>
        </Flex>
        <Divider mb={40} />

        <Stack gap={24}>
          <Flex justify="space-between" px={32}>
            <Typography.HeadLine5>Tiền hàng</Typography.HeadLine5>
            <Typography.HeadLine5>154.000.000 VNĐ</Typography.HeadLine5>
          </Flex>

          <Flex justify="space-between" px={32}>
            <Typography.HeadLine5>Phí vận chuyển</Typography.HeadLine5>
            <Typography.HeadLine5>0 VNĐ</Typography.HeadLine5>
          </Flex>

          <Flex justify="space-between" px={32}>
            <Typography.HeadLine5>Số tiền giảm</Typography.HeadLine5>
            <Typography.HeadLine5>- 28.800.000 VNĐ</Typography.HeadLine5>
          </Flex>

          <Divider />

          <Flex justify="space-between" px={32} mb={32}>
            <Typography.HeadLine3 fw="bold">Tổng số tiền</Typography.HeadLine3>
            <Typography.HeadLine3 fw="bold">
              125.200.000 VNĐ
            </Typography.HeadLine3>
          </Flex>
        </Stack>
      </Modal>
    </Container>
  );
}

export default MyOrder;
