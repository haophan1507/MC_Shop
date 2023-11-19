import {
  Button,
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
import {
  IconSearch,
  IconBellRinging,
  IconSquarePlus,
} from '@tabler/icons-react';
import { Typography } from '../../../../common/components/Typography';
import Colors from '../../../../common/components/Colors';

import image1 from '../../images/blog-1.png';
import image2 from '../../images/blog-2.png';
import image3 from '../../images/blog-3.png';
import image4 from '../../images/blog-4.png';

const list = [image1, image2, image3, image4];

function Blog() {
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
        <Typography.HeadLine3>Blog (23)</Typography.HeadLine3>
        <Button
          variant="filled"
          size="md"
          color={Colors.Brown}
          leftSection={<IconSquarePlus />}
        >
          Thêm bài blog
        </Button>
      </Flex>

      <Grid>
        {list.map((item, index) => (
          <Grid.Col key={index} span={6}>
            <Paper shadow="xs" p="xl">
              <Stack>
                <Image src={item} fit="contain" />

                <Typography.HeadLine5 fw="bold">
                  Chương trình triển lãm trang phục Xuân-Hè nữ 2024
                </Typography.HeadLine5>
                <Typography.Body2>
                  Với những hàng sọc đồ hoạ và các hình ảnh kiểu dáng tinh tế,
                  những bộ trang phục đầy sáng tạo kết hợp tinh hoa thời trang
                  thuộc Pháp với các mã cổ điển...
                </Typography.Body2>
                <Flex justify="center" gap={108}>
                  <UnstyledButton>
                    <Typography.Body1>Sửa</Typography.Body1>
                  </UnstyledButton>
                  <UnstyledButton>
                    <Typography.Body1>Xoá</Typography.Body1>
                  </UnstyledButton>
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

export default Blog;
