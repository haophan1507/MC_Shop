import {
  Container,
  Divider,
  Stack,
  Button,
  PasswordInput,
} from '@mantine/core';
import Colors from '../../common/components/Colors';
import { Typography } from '../../common/components/Typography';

function ChangePassword() {
  return (
    <Container size="xl">
      <Typography.HeadLine2 mt={64} ta="center">
        THAY ĐỔI MẬT KHẨU
      </Typography.HeadLine2>
      <Divider my={16} />

      <Container size="md" mt={50}>
        <Stack gap={24}>
          <Stack gap={8}>
            <Typography.Body1>Mật khẩu cũ *</Typography.Body1>
            <PasswordInput
              size="md"
              placeholder="*************"
              type="password"
            />
          </Stack>
          <Stack gap={8}>
            <Typography.Body1>Mật khẩu mới *</Typography.Body1>
            <PasswordInput
              size="md"
              placeholder="*************"
              type="password"
            />
          </Stack>

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

export default ChangePassword;
