import {
  Center,
  Flex,
  Input,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
} from '@mantine/core';
import {
  IconSearch,
  IconBellRinging,
  IconChevronDown,
} from '@tabler/icons-react';
import { Typography } from '../../../../common/components/Typography';
import Colors from '../../../../common/components/Colors';

const data = [
  {
    'Loại tài khoản': 'Admin',
    'Số điện thoại': '(684) 555-0102',
    Email: 'C@gmail.com',
    'Họ tên': 'Carbon',
    'Trạng thái': 'Đang hoạt động',
  },
  {
    'Loại tài khoản': 'User',
    'Số điện thoại': '(225) 555-0118',
    Email: 'N@gmail.com',
    'Họ tên': 'Nitrogen',
    'Trạng thái': 'Đang hoạt động',
  },
  {
    'Loại tài khoản': 'Admin',
    'Số điện thoại': '(308) 555-0121',
    Email: 'Y@gmail.com',
    'Họ tên': 'Yttrium',
    'Trạng thái': 'Đang hoạt động',
  },
  {
    'Loại tài khoản': 'User',
    'Số điện thoại': '(505) 555-0125',
    Email: 'Ba@gmail.com',
    'Họ tên': 'Barium',
    'Trạng thái': 'Đã khoá',
  },
  {
    'Loại tài khoản': 'User',
    'Số điện thoại': '(229) 555-0109',
    Email: 'Ce@gmail.com',
    'Họ tên': 'Cerium',
    'Trạng thái': 'Đang hoạt động',
  },
  {
    'Loại tài khoản': 'Admin',
    'Số điện thoại': '(684) 555-0102',
    Email: 'C@gmail.com',
    'Họ tên': 'Carbon',
    'Trạng thái': 'Đang hoạt động',
  },
  {
    'Loại tài khoản': 'User',
    'Số điện thoại': '(225) 555-0118',
    Email: 'N@gmail.com',
    'Họ tên': 'Nitrogen',
    'Trạng thái': 'Đang hoạt động',
  },
  {
    'Loại tài khoản': 'Admin',
    'Số điện thoại': '(308) 555-0121',
    Email: 'Y@gmail.com',
    'Họ tên': 'Yttrium',
    'Trạng thái': 'Đang hoạt động',
  },
  {
    'Loại tài khoản': 'User',
    'Số điện thoại': '(505) 555-0125',
    Email: 'Ba@gmail.com',
    'Họ tên': 'Barium',
    'Trạng thái': 'Đã khoá',
  },
  {
    'Loại tài khoản': 'User',
    'Số điện thoại': '(229) 555-0109',
    Email: 'Ce@gmail.com',
    'Họ tên': 'Cerium',
    'Trạng thái': 'Đang hoạt động',
  },
];

function User() {
  const rows = data.map((element, index) => (
    <Table.Tr key={element['Họ tên'] + index}>
      <Table.Td>
        <Typography.Body1>{element['Họ tên']}</Typography.Body1>{' '}
      </Table.Td>
      <Table.Td>
        <Typography.Body1>{element.Email}</Typography.Body1>
      </Table.Td>
      <Table.Td>
        <Typography.Body1>{element['Số điện thoại']}</Typography.Body1>
      </Table.Td>
      <Table.Td>
        <Typography.Body1>{element['Loại tài khoản']}</Typography.Body1>
      </Table.Td>
      <Table.Td w={200}>
        <Typography.Body1>
          <Select
            variant="unstyled"
            defaultValue={element['Trạng thái']}
            data={['Đang hoạt động', 'Đã khoá']}
          />
        </Typography.Body1>
      </Table.Td>
    </Table.Tr>
  ));

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

      <Typography.HeadLine3>Tài khoản </Typography.HeadLine3>

      <Paper shadow="xs" p="xl">
        <Stack bg={Colors.White} gap={32}>
          <Flex gap={32}>
            <Input
              placeholder="Tìm kiếm..."
              rightSection={<IconSearch size={16} />}
              size="md"
              style={{
                flex: 1,
              }}
            />
            <Select
              placeholder="Loại tài khoản"
              rightSection={<IconChevronDown size={16} />}
              size="md"
              data={['Admin', 'User']}
              style={{
                flex: 1,
              }}
            />
            <Select
              placeholder="Trạng thái"
              rightSection={<IconChevronDown size={16} />}
              size="md"
              data={['Đang hoạt động', 'Đã khoá']}
              style={{
                flex: 1,
              }}
            />
          </Flex>

          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>
                  <Typography.Body2 c={Colors.Grey2}>Họ tên</Typography.Body2>
                </Table.Th>
                <Table.Th>
                  <Typography.Body2 c={Colors.Grey2}> Email </Typography.Body2>
                </Table.Th>
                <Table.Th>
                  <Typography.Body2 c={Colors.Grey2}>
                    Số điện thoại
                  </Typography.Body2>
                </Table.Th>
                <Table.Th>
                  <Typography.Body2 c={Colors.Grey2}>
                    Loại tài khoản
                  </Typography.Body2>
                </Table.Th>
                <Table.Th>
                  <Typography.Body2 c={Colors.Grey2}>
                    Trạng thái
                  </Typography.Body2>
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>

          <Center>
            <Pagination total={5} color={Colors.Brown} />
          </Center>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default User;
