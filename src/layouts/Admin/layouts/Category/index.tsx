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

import image1 from '../../../../assets/images/homepage/image 21-1.png';
import image2 from '../../../../assets/images/homepage/image 21.png';
import image3 from '../../../../assets/images/homepage/image 22-1.png';
import image4 from '../../../../assets/images/homepage/image 22.png';
import image5 from '../../../../assets/images/homepage/image 23-1.png';
import image6 from '../../../../assets/images/homepage/image 23.png';
import image7 from '../../../../assets/images/homepage/image 24-1.png';
import image8 from '../../../../assets/images/homepage/image 24.png';
import image9 from '../../../../assets/images/homepage/image 25-1.png';

const list = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

function Category() {
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
        <Typography.HeadLine3>Các túi ví xách (63)</Typography.HeadLine3>
        <Button
          variant="filled"
          size="md"
          color={Colors.Brown}
          leftSection={<IconSquarePlus />}
        >
          Thêm sản phẩm
        </Button>
      </Flex>

      <Grid>
        {list.map((item, index) => (
          <Grid.Col key={index} span={4}>
            <Paper shadow="xs" p="xl">
              <Stack>
                <Image src={item} fit="contain" />
                <Divider />
                <Typography.Body1 ta="center">
                  LV ON THE GO PM MEDIUM
                </Typography.Body1>
                <Typography.HeadLine4 ta="center">
                  62.200.000 VNĐ
                </Typography.HeadLine4>
                <Flex justify="space-between">
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

export default Category;
