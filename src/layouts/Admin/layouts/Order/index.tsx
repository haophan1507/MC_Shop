import {
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Input,
  Pagination,
  Paper,
  Stack,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import {
  IconSearch,
  IconBellRinging,
  IconAdjustmentsHorizontal,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';
import Colors from '../../../../common/components/Colors';
import { Typography } from '../../../../common/components/Typography';

import image1 from '../../../../assets/images/homepage/image 21-1.png';
import image2 from '../../../../assets/images/homepage/image 23-1.png';
import { useState } from 'react';

const list = [
  {
    amount: 2,
    total: '12.000.000 VNĐ',
  },
  {
    amount: 1,
    total: '6.000.000 VNĐ',
  },
  {
    amount: 3,
    total: '31.000.000 VNĐ',
  },
  {
    amount: 2,
    total: '12.000.000 VNĐ',
  },
  {
    amount: 2,
    total: '12.000.000 VNĐ',
  },
  {
    amount: 2,
    total: '12.000.000 VNĐ',
  },
];

const title = {
  1: 'Đơn hàng đã được đặt',
  2: 'Đơn hàng đã được đặt',
  3: 'Đã gửi hàng đến bưu cục',
  4: 'Đơn hàng đã giao đến bạn',
  5: 'Đơn hàng đã bị huỷ',
};

function Order() {
  const [status, setStatus] = useState<keyof typeof title>(1);

  return (
    <Stack gap={32} m={32}>
      <Flex gap={24} align="center">
        <Input
          placeholder="Tìm kiếm..."
          rightSection={<IconSearch size={16} />}
          size="md"
          style={{
            flex: 1,
          }}
        />
        <IconBellRinging />
        <Typography.HeadLine5>
          <span style={{ fontWeight: 'bold' }}>Đoàn Mạnh Cường</span>
        </Typography.HeadLine5>
      </Flex>

      <Flex align="center" justify="space-between">
        <Typography.HeadLine3>Đơn hàng</Typography.HeadLine3>
        <Flex align="center" bg={Colors.White} p={10} gap={12}>
          <Center bg={Colors.Grey3} p={12}>
            <IconAdjustmentsHorizontal size={24} />
          </Center>
          <DatePickerInput
            type="range"
            label="Lọc theo tuần"
            variant="unstyled"
            defaultValue={[new Date(), new Date()]}
          />
        </Flex>
      </Flex>

      <Paper shadow="xs" p="xl">
        <Grid columns={5}>
          <Grid.Col
            span={1}
            style={{
              borderRight: '1px solid black',
              cursor: 'pointer',
            }}
            onClick={() => setStatus(1)}
          >
            <Typography.Body1
              c={Colors.Grey1}
              ta="center"
              mb={8}
              fz={status === 1 ? 22 : 16}
              fw={status === 1 ? 'bold' : 'normal'}
            >
              Chờ xác nhận
            </Typography.Body1>
            <Typography.Body1
              ta="center"
              fz={status === 1 ? 22 : 16}
              fw={status === 1 ? 'bold' : 'normal'}
            >
              (15)
            </Typography.Body1>
            <Divider orientation="vertical" />
          </Grid.Col>

          <Grid.Col
            span={1}
            style={{
              borderRight: '1px solid black',
              cursor: 'pointer',
            }}
            onClick={() => setStatus(2)}
          >
            <Typography.Body1
              c={Colors.Grey1}
              ta="center"
              mb={8}
              fz={status === 2 ? 22 : 16}
            >
              Chờ gửi hàng
            </Typography.Body1>
            <Typography.Body1 ta="center" fw={status === 2 ? 'bold' : 'normal'}>
              (34)
            </Typography.Body1>
          </Grid.Col>

          <Grid.Col
            span={1}
            style={{
              borderRight: '1px solid black',
              cursor: 'pointer',
            }}
            onClick={() => setStatus(3)}
          >
            <Typography.Body1
              c={Colors.Grey1}
              ta="center"
              mb={8}
              fz={status === 3 ? 22 : 16}
            >
              Đang giao
            </Typography.Body1>
            <Typography.Body1 ta="center" fw={status === 3 ? 'bold' : 'normal'}>
              (34)
            </Typography.Body1>
          </Grid.Col>

          <Grid.Col
            span={1}
            style={{
              borderRight: '1px solid black',
              cursor: 'pointer',
            }}
            onClick={() => setStatus(4)}
          >
            <Typography.Body1
              c={Colors.Grey1}
              ta="center"
              mb={8}
              fz={status === 4 ? 22 : 16}
            >
              Đã giao
            </Typography.Body1>
            <Typography.Body1 ta="center" fw={status === 4 ? 'bold' : 'normal'}>
              (240)
            </Typography.Body1>
          </Grid.Col>

          <Grid.Col
            span={1}
            style={{
              cursor: 'pointer',
            }}
            onClick={() => setStatus(5)}
          >
            <Typography.Body1
              c={Colors.Grey1}
              ta="center"
              mb={8}
              fz={status === 5 ? 22 : 16}
            >
              Đã huỷ
            </Typography.Body1>
            <Typography.Body1 ta="center" fw={status === 5 ? 'bold' : 'normal'}>
              (24)
            </Typography.Body1>
          </Grid.Col>
        </Grid>
      </Paper>

      <Grid>
        {list.map((item, index) => (
          <Grid.Col span={4} key={index}>
            <Paper shadow="xs" p="xl" h="100%">
              <Stack>
                <Typography.Body1>Mã đơn hàng: #VN2010001</Typography.Body1>
                <Typography.Body2 c={Colors.Grey1}>
                  05/02/2023, 08:28 PM
                </Typography.Body2>
                <Divider />
                <Typography.Body2 c={Colors.Brown}>
                  {title[status]}
                </Typography.Body2>
                <Divider />
                <Stack>
                  <Typography.Body2>Thông tin KH:</Typography.Body2>
                  <Stack px={16}>
                    <Typography.Body2>JENNIE KIM</Typography.Body2>
                    <Flex gap={10}>
                      <IconMapPin color={Colors.LightBrown} />
                      <Stack>
                        <Typography.Body2>Hà Nội</Typography.Body2>
                        <Typography.Body2>Hoàng Mai</Typography.Body2>
                        <Typography.Body2>Hoàng Liệt</Typography.Body2>
                        <Typography.Body2>12 Trần Thủ Độ</Typography.Body2>
                      </Stack>
                    </Flex>
                    <Flex gap={10} align="center">
                      <IconPhone color={Colors.LightBrown} />
                      <Typography.Body2>+84 889629690</Typography.Body2>
                    </Flex>
                  </Stack>
                </Stack>
                <Divider />
                {item.amount > 1 ? (
                  <>
                    <Grid>
                      <Grid.Col span={4}>
                        <Image src={image1} fit="contain" />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Typography.Body1>LV ON THE GO PM</Typography.Body1>
                        <Typography.Body2 c={Colors.Grey1}>
                          Cặp túi OnTheGo PM đến từ sự hỗn hợp...
                        </Typography.Body2>
                        <Flex justify="space-between">
                          <Typography.Body2>6.000.000 VNĐ</Typography.Body2>
                          <Typography.Body2>SL: 1</Typography.Body2>
                        </Flex>
                      </Grid.Col>
                    </Grid>
                    <Grid>
                      <Grid.Col span={4}>
                        <Image src={image2} fit="contain" />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Typography.Body1>LV ON THE GO PM</Typography.Body1>
                        <Typography.Body2 c={Colors.Grey1}>
                          Cặp túi OnTheGo PM đến từ sự hỗn hợp...
                        </Typography.Body2>
                        <Flex justify="space-between">
                          <Typography.Body2>6.000.000 VNĐ</Typography.Body2>
                          <Typography.Body2>SL: 1</Typography.Body2>
                        </Flex>
                      </Grid.Col>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid>
                      <Grid.Col span={4}>
                        <Image src={image1} fit="contain" />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Typography.Body1>LV ON THE GO PM</Typography.Body1>
                        <Typography.Body2 c={Colors.Grey1}>
                          Cặp túi OnTheGo PM đến từ sự hỗn hợp...
                        </Typography.Body2>
                        <Flex justify="space-between">
                          <Typography.Body2>6.000.000 VNĐ</Typography.Body2>
                          <Typography.Body2>SL: 1</Typography.Body2>
                        </Flex>
                      </Grid.Col>
                    </Grid>
                    <Grid opacity={0}>
                      <Grid.Col span={4}>
                        <Image src={image2} fit="contain" />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Typography.Body1>LV ON THE GO PM</Typography.Body1>
                        <Typography.Body2 c={Colors.Grey1}>
                          Cặp túi OnTheGo PM đến từ sự hỗn hợp...
                        </Typography.Body2>
                        <Flex justify="space-between">
                          <Typography.Body2>6.000.000 VNĐ</Typography.Body2>
                          <Typography.Body2>SL: 1</Typography.Body2>
                        </Flex>
                      </Grid.Col>
                    </Grid>
                  </>
                )}
                <Divider />
                <Flex justify="space-between">
                  <Typography.Body2>Tổng tiền</Typography.Body2>
                  <Typography.HeadLine5>{item.total}</Typography.HeadLine5>
                </Flex>
                <Divider />
                <Flex justify="center">
                  <Typography.Body1 c={Colors.Grey1}>
                    {item.amount} sản phẩm
                  </Typography.Body1>
                </Flex>
              </Stack>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>

      <Center>
        <Pagination total={5} color={Colors.Brown} />
      </Center>
    </Stack>
  );
}

export default Order;
