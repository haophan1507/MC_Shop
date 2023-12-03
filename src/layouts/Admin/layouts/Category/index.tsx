import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Input,
  Modal,
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
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

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
        <Typography.HeadLine3>Các túi ví xách (63)</Typography.HeadLine3>
        <Button
          variant="filled"
          size="md"
          color={Colors.Brown}
          leftSection={<IconSquarePlus />}
          onClick={() => navigate('/admin/category/create')}
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
                  <UnstyledButton
                    onClick={() => navigate('/admin/category/create/1')}
                  >
                    <Typography.Body1>Sửa</Typography.Body1>
                  </UnstyledButton>
                  <UnstyledButton onClick={open}>
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

      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="auto"
        centered
      >
        <Box px={40} py={60} maw={500}>
          <Typography.HeadLine4 ta="center">
            Xác nhận xoá sản phẩm ?
          </Typography.HeadLine4>
          <Typography.Body1 ta="center" my={32}>
            Bạn đang xoá sản phẩm trong danh mục
            <br /> Không thể phục hồi nội dung đã xoá!
          </Typography.Body1>
          <Flex justify="center" gap={32}>
            <Button
              variant="outline"
              size="md"
              color={Colors.Black}
              radius="xs"
              onClick={close}
            >
              <Typography.Body1>Huỷ</Typography.Body1>
            </Button>
            <Button
              variant="filled"
              size="md"
              color={Colors.Brown}
              radius="xs"
              onClick={close}
            >
              <Typography.Body1 c={Colors.White}>Xác nhận</Typography.Body1>
            </Button>
          </Flex>
        </Box>
      </Modal>
    </Stack>
  );
}

export default Category;
