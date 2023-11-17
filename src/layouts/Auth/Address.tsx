import {
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Modal,
  Select,
  Stack,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

function Address() {
  const [openedCreate, { open: openCreate, close: closeCreate }] =
    useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);

  const [deleted, setDeleted] = useState(false);

  return (
    <Container size="xl">
      <Typography.HeadLine2 mt={64} ta="center">
        ĐỊA CHỈ CỦA TÔI
      </Typography.HeadLine2>
      <Divider my={16} />

      <Container size="lg" mt={50} mb={250}>
        <Flex gap={36}>
          {!deleted && (
            <Stack
              align="center"
              w={280}
              bg={Colors.BaseColor}
              p={24}
              style={{
                border: '1px solid #CBCBCB',
              }}
            >
              <Typography.HeadLine4>JENNIE KIM</Typography.HeadLine4>
              <Typography.Body1 ta="center">
                Hà Nội
                <br />
                Hoàng Mai
                <br />
                Hoàng Liệt
                <br />
                12 Trần Thủ Độ
              </Typography.Body1>

              <Typography.Body1>+84 889629690</Typography.Body1>
              <Flex justify="space-between" w="100%" mt={24}>
                <UnstyledButton onClick={openEdit}>
                  <Typography.Body1 td="underline">Sửa</Typography.Body1>
                </UnstyledButton>
                <UnstyledButton onClick={() => setDeleted(true)}>
                  <Typography.Body1 td="underline">Xoá</Typography.Body1>
                </UnstyledButton>
              </Flex>
            </Stack>
          )}

          <Stack
            align="center"
            w={280}
            bg={Colors.White}
            p={24}
            style={{
              border: '1px solid #CBCBCB',
            }}
          >
            <Flex justify="center" align="center" h="100%">
              <UnstyledButton onClick={openCreate}>
                <Typography.Body1 td="underline">
                  Thêm địa chỉ mới
                </Typography.Body1>
              </UnstyledButton>
            </Flex>
          </Stack>
        </Flex>
      </Container>

      <Modal
        opened={openedCreate}
        onClose={closeCreate}
        title={
          <Typography.HeadLine5 fw="bold">Thêm địa chỉ</Typography.HeadLine5>
        }
        size="lg"
        centered
      >
        <Divider mb={24} />
        <Stack gap={24}>
          <Grid>
            <Grid.Col span={6}>
              <Stack gap={8}>
                <Typography.Body1>Họ *</Typography.Body1>
                <TextInput size="md" />
              </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
              <Stack gap={8}>
                <Typography.Body1>Tên *</Typography.Body1>
                <TextInput size="md" />
              </Stack>
            </Grid.Col>
          </Grid>

          <Stack gap={8}>
            <Typography.Body1>Số điện thoại</Typography.Body1>
            <TextInput size="md" placeholder="ex: 123456" />
          </Stack>

          <Stack gap={8}>
            <Typography.Body1>Tỉnh/ Thành phố *</Typography.Body1>
            <Select defaultValue="Hà Nội" data={['Hà Nội']} />
          </Stack>
          <Stack gap={8}>
            <Typography.Body1>Quận/ Huyện *</Typography.Body1>
            <Select defaultValue="Hoàng Mai" data={['Hoàng Mai']} />
          </Stack>
          <Stack gap={8}>
            <Typography.Body1>Phường/ Xã *</Typography.Body1>
            <Select defaultValue="Hoàng Liệt" data={['Hoàng Liệt']} />
          </Stack>
          <Stack gap={8}>
            <Typography.Body1>Địa chỉ cụ thể *</Typography.Body1>
            <TextInput size="md" placeholder="Hoàng Liệt" />
          </Stack>

          <Button
            variant="filled"
            size="md"
            color={Colors.Brown}
            radius="xs"
            w="100%"
            mb={12}
            onClick={closeCreate}
          >
            <Typography.Body1 c={Colors.White}>Lưu thay đổi</Typography.Body1>
          </Button>
        </Stack>
      </Modal>

      <Modal
        opened={openedEdit}
        onClose={closeEdit}
        title={
          <Typography.HeadLine5 fw="bold">Thêm địa chỉ</Typography.HeadLine5>
        }
        size="lg"
        centered
        onClick={closeEdit}
      >
        <Divider mb={24} />
        <Stack gap={24}>
          <Grid>
            <Grid.Col span={6}>
              <Stack gap={8}>
                <Typography.Body1>Họ *</Typography.Body1>
                <TextInput size="md" placeholder="JENNIE" />
              </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
              <Stack gap={8}>
                <Typography.Body1>Tên *</Typography.Body1>
                <TextInput size="md" placeholder="KIM" />
              </Stack>
            </Grid.Col>
          </Grid>

          <Stack gap={8}>
            <Typography.Body1>Số điện thoại</Typography.Body1>
            <TextInput size="md" placeholder="+84 889629690" />
          </Stack>

          <Stack gap={8}>
            <Typography.Body1>Tỉnh/ Thành phố *</Typography.Body1>
            <Select defaultValue="Hà Nội" data={['Hà Nội']} />
          </Stack>
          <Stack gap={8}>
            <Typography.Body1>Quận/ Huyện *</Typography.Body1>
            <Select defaultValue="Hoàng Mai" data={['Hoàng Mai']} />
          </Stack>
          <Stack gap={8}>
            <Typography.Body1>Phường/ Xã *</Typography.Body1>
            <Select defaultValue="Hoàng Liệt" data={['Hoàng Liệt']} />
          </Stack>
          <Stack gap={8}>
            <Typography.Body1>Địa chỉ cụ thể *</Typography.Body1>
            <TextInput size="md" placeholder="12 Trần Thủ Độ" />
          </Stack>

          <Button
            variant="filled"
            size="md"
            color={Colors.Brown}
            radius="xs"
            w="100%"
            mb={12}
          >
            <Typography.Body1 c={Colors.White}>Lưu thay đổi</Typography.Body1>
          </Button>
        </Stack>
      </Modal>
    </Container>
  );
}

export default Address;
