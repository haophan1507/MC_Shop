import {
  Center,
  Flex,
  Grid,
  Image,
  Input,
  Paper,
  Rating,
  ScrollArea,
  Stack,
} from '@mantine/core';
import {
  IconAdjustmentsHorizontal,
  IconBellRinging,
  IconCircleArrowUpFilled,
  IconSearch,
} from '@tabler/icons-react';
import { Typography } from '../../../../common/components/Typography';
import Colors from '../../../../common/components/Colors';
import { DatePickerInput } from '@mantine/dates';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
  Pie,
  PieChart,
  Cell,
} from 'recharts';

import image1 from '../../images/Icon_Order.png';
import image2 from '../../images/icon-Delivered.png';
import image3 from '../../images/Icon_Order1.png';
import image4 from '../../images/Icon_Order2.png';
import image5 from '../../../../assets/images/homepage/image 21-1.png';
import image6 from '../../../../assets/images/homepage/image 23-1.png';

const listStatus = [
  {
    image: image1,
    title: '75',
    description: 'Đơn hàng',
    subDescription: '4% (30 ngày)',
  },
  {
    image: image2,
    title: '357',
    description: 'Vận chuyển',
    subDescription: '4% (30 ngày)',
  },
  {
    image: image3,
    title: '15',
    description: 'Đơn huỷ',
    subDescription: '20% (30 ngày)',
  },
  {
    image: image4,
    title: '3.8B VNĐ',
    description: 'Doanh thu',
    subDescription: '12% (30 ngày)',
  },
];

const data1 = [
  {
    name: 'Th1',
    '2022': 4000,
    '2023': 2400,
  },
  {
    name: 'Th2',
    '2022': 3000,
    '2023': 1398,
  },
  {
    name: 'Th3',
    '2022': 2000,
    '2023': 9800,
  },
  {
    name: 'Th4',
    '2022': 2780,
    '2023': 3908,
  },
  {
    name: 'Th5',
    '2022': 1890,
    '2023': 4800,
  },
  {
    name: 'Th6',
    '2022': 2390,
    '2023': 3800,
  },
  {
    name: 'Th7',
    '2022': 3490,
    '2023': 4300,
  },
  {
    name: 'Th8',
    '2022': 3490,
    '2023': 4300,
  },
  {
    name: 'Th9',
    '2022': 3490,
    '2023': 4300,
  },
  {
    name: 'Th10',
    '2022': 3490,
    '2023': 4300,
  },
  {
    name: 'Th11',
    '2022': 3490,
    '2023': 4300,
  },
  {
    name: 'Th12',
    '2022': 3490,
    '2023': 4300,
  },
];

const data2 = [
  {
    name: 'Thứ 2',
    'Đơn hàng': 4000,
    'Lượt truy cập': 2400,
    amt: 2400,
  },
  {
    name: 'Thứ 3',
    'Đơn hàng': 3000,
    'Lượt truy cập': 1398,
    amt: 2210,
  },
  {
    name: 'Thứ 4',
    'Đơn hàng': 2000,
    'Lượt truy cập': 9800,
    amt: 2290,
  },
  {
    name: 'Thứ 5',
    'Đơn hàng': 2780,
    'Lượt truy cập': 3908,
    amt: 2000,
  },
  {
    name: 'Thứ 6',
    'Đơn hàng': 1890,
    'Lượt truy cập': 4800,
    amt: 2181,
  },
  {
    name: 'Thứ 7',
    'Đơn hàng': 2390,
    'Lượt truy cập': 3800,
    amt: 2500,
  },
  {
    name: 'CN',
    'Đơn hàng': 3490,
    'Lượt truy cập': 4300,
    amt: 2100,
  },
];

const data3 = [
  { name: 'Nam', value: 20 },
  { name: 'Nữ', value: 46 },
  { name: 'Khác', value: 34 },
];

const COLORS = [Colors.Brown, Colors.Mono3, Colors.LightBrown];

function DashBoard() {
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
        <Typography.HeadLine3>Dashboard</Typography.HeadLine3>
        <Flex align="center" bg={Colors.White} p={10} gap={12}>
          <Center bg={Colors.Grey3} p={12}>
            <IconAdjustmentsHorizontal size={24} />
          </Center>
          <DatePickerInput
            type="range"
            label="Lọc theo năm"
            variant="unstyled"
            defaultValue={[new Date(), new Date()]}
          />
        </Flex>
      </Flex>

      <Grid gutter={16}>
        {listStatus.map((item) => (
          <Grid.Col span={3} key={item.title}>
            <Paper shadow="xs">
              <Flex align="center" bg={Colors.White} p={25} gap={20}>
                <Image src={item.image} w={60} h={60} />
                <Stack>
                  <Typography.HeadLine4>{item.title}</Typography.HeadLine4>
                  <Typography.Body1>{item.description}</Typography.Body1>
                  <Flex align="center" gap={8}>
                    <IconCircleArrowUpFilled
                      style={{
                        color: Colors.LightBrown,
                      }}
                    />
                    <Typography.Body2 c={Colors.Grey2}>
                      {item.subDescription}
                    </Typography.Body2>
                  </Flex>
                </Stack>
              </Flex>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>

      <Paper shadow="xs" p="xl">
        <Typography.HeadLine4 pt={36} pl={36}>
          Tổng doanh thu
        </Typography.HeadLine4>
        <ResponsiveContainer width="100%" height={430}>
          <LineChart
            width={500}
            height={300}
            data={data1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend align="right" verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="2023"
              stroke={Colors.Brown}
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="2022"
              stroke={Colors.LightBrown}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      <Grid gutter={32}>
        <Grid.Col span={8}>
          <Paper shadow="xs" p="xl">
            <Typography.HeadLine4 pt={36} pl={36}>
              Hoạt động
            </Typography.HeadLine4>
            <ResponsiveContainer width="100%" height={430}>
              <BarChart
                width={500}
                height={300}
                data={data2}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend align="right" verticalAlign="top" height={36} />
                <Bar
                  dataKey="Lượt truy cập"
                  fill={Colors.LightBrown}
                  activeBar={<Rectangle fill="pink" stroke="brown" />}
                />
                <Bar
                  dataKey="Đơn hàng"
                  fill={Colors.Brown}
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Paper shadow="xs" p="xl">
            <Typography.HeadLine4 pt={36} pl={36}>
              Thông tin KH
            </Typography.HeadLine4>
            <ResponsiveContainer width="100%" height={430}>
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data3}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label={(props) => `${props.value}%`}
                >
                  {data3.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid.Col>
      </Grid>

      <Stack>
        <Typography.HeadLine3>Đánh giá của khách hàng</Typography.HeadLine3>

        <ScrollArea w="100%" mt={26}>
          <Flex gap={32}>
            <Paper shadow="xs" p="xl" w={650}>
              <Flex gap={20}>
                <Stack>
                  <Typography.HeadLine5 fw="bold">
                    Jennie Kim
                  </Typography.HeadLine5>
                  <Typography.Body2>1 ngày trước</Typography.Body2>
                  <Typography.Body2 my={20}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ea eaque cumque, atque obcaecati natus eligendi,
                    necessitatibus autem asperiores id nulla harum ullam quas
                    tenetur assumenda cum explicabo a voluptatum!
                  </Typography.Body2>
                  <Flex align="center" gap={8}>
                    <Rating value={5} color={Colors.Brown} />
                    <Typography.HeadLine5>5.0</Typography.HeadLine5>
                  </Flex>
                </Stack>
                <Image src={image5} w={196} fit="contain" />
              </Flex>
            </Paper>

            <Paper shadow="xs" p="xl" w={650}>
              <Flex gap={20}>
                <Stack>
                  <Typography.HeadLine5 fw="bold">
                    Roseanne
                  </Typography.HeadLine5>
                  <Typography.Body2>2 ngày trước</Typography.Body2>
                  <Typography.Body2 my={20}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ea eaque cumque, atque obcaecati natus eligendi,
                    necessitatibus autem asperiores id nulla harum ullam quas
                    tenetur assumenda cum explicabo a voluptatum!
                  </Typography.Body2>
                  <Flex align="center" gap={8}>
                    <Rating value={5} color={Colors.Brown} />
                    <Typography.HeadLine5>5.0</Typography.HeadLine5>
                  </Flex>
                </Stack>
                <Image src={image6} w={196} fit="contain" />
              </Flex>
            </Paper>

            <Paper shadow="xs" p="xl" w={650}>
              <Flex gap={20}>
                <Stack>
                  <Typography.HeadLine5 fw="bold">
                    Jennie Kim
                  </Typography.HeadLine5>
                  <Typography.Body2>1 ngày trước</Typography.Body2>
                  <Typography.Body2 my={20}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ea eaque cumque, atque obcaecati natus eligendi,
                    necessitatibus autem asperiores id nulla harum ullam quas
                    tenetur assumenda cum explicabo a voluptatum!
                  </Typography.Body2>
                  <Flex align="center" gap={8}>
                    <Rating value={5} color={Colors.Brown} />
                    <Typography.HeadLine5>5.0</Typography.HeadLine5>
                  </Flex>
                </Stack>
                <Image src={image5} w={196} fit="contain" />
              </Flex>
            </Paper>
          </Flex>
        </ScrollArea>
      </Stack>
    </Stack>
  );
}

export default DashBoard;
