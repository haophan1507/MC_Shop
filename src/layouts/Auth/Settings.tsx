import {
  Button,
  Container,
  Divider,
  Grid,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';

function Settings() {
  return (
    <Container size="xl">
      <Typography.HeadLine2 mt={64} ta="center">
        CÀI ĐẶT TÀI KHOẢN
      </Typography.HeadLine2>
      <Divider my={16} />

      <Container size="md" mt={50}>
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
            <Typography.Body1>Gmail *</Typography.Body1>
            <TextInput size="md" placeholder="tendn@gmail.com" />
          </Stack>

          <Stack gap={8}>
            <Typography.Body1>Số điện thoại</Typography.Body1>
            <TextInput size="md" placeholder="ex: 123456" />
          </Stack>

          <Grid>
            <Grid.Col span={6}>
              <Stack gap={8}>
                <Typography.Body1>Giới tính</Typography.Body1>
                <Select placeholder="Nam" data={['Nam', 'Nữ']} />
              </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
              <Stack gap={8}>
                <Typography.Body1>Ngày sinh</Typography.Body1>
                <DatePickerInput />
              </Stack>
            </Grid.Col>
          </Grid>

          <Button
            variant="filled"
            size="md"
            color={Colors.Grey3}
            radius="xs"
            w="100%"
            mb={120}
          >
            <Typography.Body1>Lưu thay đổi</Typography.Body1>
          </Button>
        </Stack>
      </Container>
    </Container>
  );
}

export default Settings;
