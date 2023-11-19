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
  UnstyledButton,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import {
  IconSearch,
  IconBellRinging,
  IconAdjustmentsHorizontal,
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import Colors from '../../../../common/components/Colors';
import { Typography } from '../../../../common/components/Typography';

import image1 from '../../../../assets/images/homepage/image 21-1.png';
import image2 from '../../../../assets/images/homepage/image 23-1.png';

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

function Order() {
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
          Good moring, <span style={{ fontWeight: 'bold' }}>Admin</span>
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
            }}
          >
            <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
              Chờ xác nhận
            </Typography.Body1>
            <Typography.Body1 ta="center">(15)</Typography.Body1>
            <Divider orientation="vertical" />
          </Grid.Col>

          <Grid.Col
            span={1}
            style={{
              borderRight: '1px solid black',
            }}
          >
            <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
              Chờ gửi hàng
            </Typography.Body1>
            <Typography.Body1 ta="center">(34)</Typography.Body1>
          </Grid.Col>
          <Grid.Col
            span={1}
            style={{
              borderRight: '1px solid black',
            }}
          >
            <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
              Đang giao
            </Typography.Body1>
            <Typography.Body1 ta="center">(34)</Typography.Body1>
          </Grid.Col>
          <Grid.Col
            span={1}
            style={{
              borderRight: '1px solid black',
            }}
          >
            <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
              Đã giao
            </Typography.Body1>
            <Typography.Body1 ta="center">(240)</Typography.Body1>
          </Grid.Col>
          <Grid.Col span={1}>
            <Typography.Body1 c={Colors.Grey1} ta="center" mb={8}>
              Đã huỷ
            </Typography.Body1>
            <Typography.Body1 ta="center">(24)</Typography.Body1>
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
                  Đơn hàng đã được đặt
                </Typography.Body2>
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
                <Flex justify="space-between">
                  <Typography.Body2 c={Colors.Grey1}>
                    {item.amount} sản phẩm
                  </Typography.Body2>
                  <Flex gap={16}>
                    <UnstyledButton
                      style={{
                        border: `1px solid ${Colors.LightBrown}`,
                        padding: 8,
                      }}
                    >
                      <IconCheck color={Colors.LightBrown} />
                    </UnstyledButton>

                    <UnstyledButton
                      style={{
                        border: `1px solid ${Colors.Brown}`,
                        padding: 8,
                      }}
                    >
                      <IconX color={Colors.Brown} />
                    </UnstyledButton>
                  </Flex>
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
